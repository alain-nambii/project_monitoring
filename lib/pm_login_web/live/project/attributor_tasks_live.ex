defmodule PmLoginWeb.Project.AttributorTasksLive do
  use Phoenix.LiveView

  import Phoenix.HTML.Link

  # Importer le LiveComponent de PlusModalLive, ModifModalMenu, CommentsModalMenu
  alias PmLoginWeb.LiveComponent.{
    PlusModalLive,
    ModifModalMenu,
    CommentsModalMenu,
  }

  alias PmLogin.Monitoring
  alias PmLogin.Kanban
  alias PmLogin.Monitoring.{Task, Priority, Planified}
  alias PmLogin.Login
  alias PmLogin.Login.User
  alias PmLogin.Services
  alias PmLogin.Monitoring.Comment
  alias PmLoginWeb.Router.Helpers, as: Routes

  def mount(_params, %{"curr_user_id" => curr_user_id, "tasks" => tasks}, socket) do
    Monitoring.subscribe()
    Services.subscribe()

    statuses = Monitoring.list_statuses()

    task_changeset = Monitoring.change_task(%Task{})
    modif_changeset = Monitoring.change_task(%Task{})

    priorities = Monitoring.list_priorities()
    list_priorities = Enum.map(priorities, fn %Priority{} = p -> {p.title, p.id} end)

    attributors = Login.list_attributors()
    list_attributors = Enum.map(attributors, fn %User{} = a -> {a.username, a.id} end)

    contributors = Login.list_contributors()
    list_contributors = Enum.map(contributors, fn %User{} = p -> {p.username, p.id} end)

    secondary_changeset = Monitoring.change_task(%Task{})

    # IO.inspect board.stages

    planified_changeset = Monitoring.change_planified(%Planified{})

    {:ok,
     socket
     |> assign(
       tasks: tasks,
       tasks_not_achieved: Monitoring.list_tasks_not_achieved(curr_user_id),
       is_attributor: Monitoring.is_attributor?(curr_user_id),
       is_admin: Monitoring.is_admin?(curr_user_id),
       contributors: list_contributors,
       attributors: list_attributors,
       priorities: list_priorities,
       planified_changeset: planified_changeset,
       is_contributor: Monitoring.is_contributor?(curr_user_id),
       task_changeset: task_changeset,
       modif_changeset: modif_changeset,
       statuses: statuses,
       curr_user_id: curr_user_id,
       show_notif: false,
       secondary_changeset: secondary_changeset,
       comment_changeset: Monitoring.change_comment(%Comment{}),

       # Par d??fault, on n'affiche pas show_plus_modal
       show_modif_menu: false,
       show_comments_menu: false,
       show_plus_modal: false,
       card_with_comments: nil,
       card: nil,
       notifs: Services.list_my_notifications_with_limit(curr_user_id, 4)
     )
     |> allow_upload(:file,
       accept:
         ~w(.png .jpeg .jpg .pdf .txt .odt .ods .odp .csv .xml .xls .xlsx .ppt .pptx .doc .docx),
       max_entries: 5
     ), layout: {PmLoginWeb.LayoutView, "attributor_layout_live.html"}}
  end

  # Appliquer les changements du statut et de la progression
  def handle_event("status_and_progression_changed", params, socket) do

    progression = params["progression_change"] |> Float.parse() |> elem(0) |> trunc
    if progression < 0 or progression > 100 do
      {:noreply, socket
                 |> clear_flash()
                 |> put_flash(:error, "La progression doit ??tre comprise entre 0 ?? 100")
                 |> push_event("AnimateAlert", %{})
      }
    else
      task = Monitoring.get_task_with_card!(params["task_id"])



      # R??cup??rer l'id de la derni??re stage
      stage_end_id = Monitoring.get_achieved_stage_id_from_project_id!(task.project_id)

      curr_user_id = socket.assigns.curr_user_id

      status_id = params["status_id"]

      IO.inspect(status_id)

      project = Monitoring.get_project_with_tasks!(task.project_id)

      Kanban.put_card_to_achieve(
        task.card,
        %{
          "stage_id" =>
            case status_id do
              "1" -> stage_end_id - 4
              "2" -> stage_end_id - 3
              "3" -> stage_end_id - 2
              "4" -> stage_end_id - 1
              "5" -> stage_end_id
              _ -> nil
            end
        }
      )

      Monitoring.update_task(task, %{"status_id" => status_id})
      Monitoring.update_task_progression(task, %{"progression" => params["progression_change"]})

      Monitoring.broadcast_progression_change({:ok, task})

      if Monitoring.is_a_child?(task) do
        Monitoring.update_mother_task_progression(task, curr_user_id)
      end

      if Monitoring.is_task_primary?(task) do
        Monitoring.add_progression_to_project(project)
      end

      if Monitoring.is_task_mother?(task) do
        Monitoring.achieve_children_tasks(task, curr_user_id)
      end

      {:noreply,
        socket
        |> clear_flash()
        |> put_flash(:info, "#{task.card.name} mise ?? jour.")
        |> push_event("AnimateAlert", %{})
      }
    end
  end

  def handle_event("switch-notif", %{}, socket) do
    notifs_length = socket.assigns.notifs |> length
    curr_user_id = socket.assigns.curr_user_id

    switch =
      if socket.assigns.show_notif do
        ids =
          socket.assigns.notifs
          |> Enum.filter(fn x -> !x.seen end)
          |> Enum.map(fn x -> x.id end)

        Services.put_seen_some_notifs(ids)
        false
      else
        true
      end

    {:noreply,
     socket
     |> assign(
       show_notif: switch,
       notifs: Services.list_my_notifications_with_limit(curr_user_id, notifs_length)
     )}
  end

  def handle_event("load-notifs", %{}, socket) do
    curr_user_id = socket.assigns.curr_user_id
    notifs_length = socket.assigns.notifs |> length

    {:noreply,
     socket
     |> assign(notifs: Services.list_my_notifications_with_limit(curr_user_id, notifs_length + 4))
     |> push_event("SpinTest", %{})}
  end

  def handle_event("cancel-notif", %{}, socket) do
    cancel = if socket.assigns.show_notif, do: false
    {:noreply, socket |> assign(show_notif: cancel)}
  end

  # Appliquer les changements lorsqu'une t??che est mise ?? jour
  def handle_info({Monitoring, [_, _], _}, socket) do
    curr_user_id = socket.assigns.curr_user_id
    tasks = Monitoring.list_tasks_by_attributor_project(curr_user_id)

    tasks_not_achieved = Monitoring.list_tasks_not_achieved(curr_user_id)

    {:noreply, socket |> assign(tasks: tasks, tasks_not_achieved: tasks_not_achieved)}
  end

  def handle_info({Services, [:notifs, :sent], _}, socket) do
    curr_user_id = socket.assigns.curr_user_id
    length = socket.assigns.notifs |> length

    {:noreply,
     socket |> assign(notifs: Services.list_my_notifications_with_limit(curr_user_id, length))}
  end

  # Afficher le modal d??tails du t??che
  def handle_event("show_plus_modal", %{"id" => id}, socket) do
    card = Kanban.get_card_from_modal!(id)

    {:noreply,
     socket
     # Effacer le flash info apr??s la modification du t??che
     |> clear_flash()
     |> assign(show_plus_modal: true, card: card)
     |> assign(show_modif_menu: false, card: card)
     |> assign(show_comments_menu: false, card: card)}
  end

  # Afficher le modal des commmentaires
  def handle_event("show_comments_menu", %{"id" => id}, socket) do
    card_menu = Kanban.get_card_from_modal!(id)
    com_nb = 5
    card = Kanban.get_card_for_comment_limit!(id, com_nb)

    {:noreply,
     socket
     |> assign(show_comments_menu: true, card_with_comments: card, com_nb: com_nb)
     |> push_event("updateScroll", %{})
     |> assign(show_plus_modal: false, card: card_menu)
     |> assign(show_modif_menu: false, card: card_menu)}
  end

  # Quand, on tape quelque chose dans le label du commentaire
  def handle_event("change-comment", params, socket) do
    {:noreply, socket}
  end

  # Envoyer les commentaires
  def handle_event("send-comment", %{"comment" => params}, socket) do
    {entries, []} = uploaded_entries(socket, :file)

    case Monitoring.post_comment(params) do
      {:ok, result} ->
        consume_uploaded_entries(socket, :file, fn meta, entry ->
          ext = Path.extname(entry.client_name)
          file_name = Path.basename(entry.client_name, ext)
          dest = Path.join("priv/static/uploads", "#{file_name}#{entry.uuid}#{ext}")
          File.cp!(meta.path, dest)
        end)

        {entries, []} = uploaded_entries(socket, :file)

        urls =
          for entry <- entries do
            ext = Path.extname(entry.client_name)
            file_name = Path.basename(entry.client_name, ext)
            Routes.static_path(socket, "/uploads/#{file_name}#{entry.uuid}#{ext}")
          end

        Monitoring.update_comment_files(result, %{"file_urls" => urls})

        card_id = socket.assigns.card_with_comments.id
        nb_com = socket.assigns.com_nb
        {:ok, result} |> Monitoring.broadcast_com()

        {:noreply,
         socket
         |> assign(
           comment_changeset: Monitoring.change_comment(%Comment{}),
           card_with_comments: Kanban.get_card_for_comment_limit!(card_id, nb_com),
           com_nb: nb_com
         )
         |> push_event("updateScroll", %{})}

      {:error, %Ecto.Changeset{} = changeset} ->
        card_id = socket.assigns.card_with_comments.id
        nb_com = socket.assigns.com_nb

        {:noreply,
         socket |> assign(comment_changeset: changeset) |> push_event("updateScroll", %{})}
    end
  end

  # Afficher le modal de la modification des t??ches
  def handle_event("show_modif_menu", %{"id" => id}, socket) do
    card = Kanban.get_card_from_modal!(id)

    {:noreply,
     socket
     |> assign(show_modif_menu: true, card: card)
     |> assign(show_plus_modal: false, card: card)
     |> assign(show_comments_menu: false, card: card)}
  end

  # Mettre ?? jour les champs du t??che
  def handle_event("update_task", %{"task" => params}, socket) do
    int_progression = params["progression"] |> Float.parse() |> elem(0) |> trunc
    attrs = %{params | "progression" => int_progression}

    task = Monitoring.get_task!(params["task_id"])

    case Monitoring.update_task(task, attrs) do
      {:ok, updated_task} ->
        current_card = Monitoring.get_task_with_card!(updated_task.id).card
        Kanban.update_card(current_card, %{name: updated_task.title})

        {:ok, updated_task} |> Monitoring.broadcast_updated_task()

        if is_nil(task.contributor_id) and not is_nil(updated_task.contributor_id) do
          Services.send_notif_to_one(
            updated_task.attributor_id,
            updated_task.contributor_id,
            "#{Login.get_user!(updated_task.attributor_id).username} vous a assign?? ?? la t??che #{updated_task.title}."
          )
        end

        {:noreply,
         socket
         |> put_flash(:info, "T??che #{updated_task.title} mise ?? jour")
         |> assign(show_modif_modal: false)
         |> assign(show_modif_menu: false)
         |> push_event("AnimateAlert", %{})
        }

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, socket |> assign(modif_changeset: changeset)}
    end
  end

  # Recharger la liste des commentaires
  def handle_event("load_comments", %{}, socket) do
    IO.puts("load")
    card_id = socket.assigns.card_with_comments.id
    nb_com = socket.assigns.com_nb + 5
    card = Kanban.get_card_for_comment_limit!(card_id, nb_com)

    {:noreply,
     socket |> assign(com_nb: nb_com, card_with_comments: card) |> push_event("SpinComment", %{})}
  end

  # Scroller la liste des commentaires
  def handle_event("scroll-bot", %{}, socket) do
    # IO.puts "niditra scroll"
    {:noreply, socket |> push_event("updateScroll", %{})}
  end

  # Appliquer les changements lorsqu'une t??che a ??t?? mise ?? jour
  def handle_info({Monitoring, [:task, :updated], _}, socket) do
    curr_user_id = socket.assigns.curr_user_id

    my_primary_tasks = Monitoring.list_primary_tasks(socket.assigns.board.project.id)
    list_primaries = my_primary_tasks |> Enum.map(fn %Task{} = p -> {p.title, p.id} end)

    {:noreply, assign(socket, primaries: list_primaries)}
  end

  # Quitter le modal de la modification des t??ches
  def handle_info({ModifModalMenu, :button_clicked, %{action: "cancel-modif"}}, socket) do
    # task_changeset = Monitoring.change_task(%Task{})
    modif_changeset = Monitoring.change_task(%Task{})
    {:noreply, assign(socket, show_modif_menu: false, modif_changeset: modif_changeset)}
  end

  # Quitter le modal de l'affichage des d??tails
  def handle_info({PlusModalLive, :button_clicked, %{action: "cancel-plus"}}, socket) do
    # task_changeset = Monitoring.change_task(%Task{})
    {:noreply, assign(socket, show_plus_modal: false)}
  end

  # Quitter le modal des commentaires
  def handle_info({CommentsModalMenu, :button_clicked, %{action: "cancel-comments"}}, socket) do
    {:noreply, assign(socket, show_comments_menu: false)}
  end

  def render(assigns) do
    ~H"""
    <div>
    <!-- Appel du composant PlusModalLive -->
    <%= live_component(PlusModalLive,
                       id: "confirm-arch" ,
                       title: "T??che" ,
                       body: nil,
                       right_button: nil,
                       right_button_action: nil,
                       right_button_param: nil,
                       left_button: "Retour" ,
                       left_button_action: "cancel-plus" ,
                       show_plus_modal: @show_plus_modal,
                       card: @card)
    %>

    <%= live_component(ModifModalMenu,
                       id: "confirm-arch" ,
                       title: "Modifier t??che" ,
                       body: nil,
                       right_button: nil,
                       right_button_action: nil,
                       right_button_param: nil,
                       left_button: "Retour" ,
                       left_button_action: "cancel-modif" ,
                       task_changeset: @task_changeset,
                       curr_user_id: @curr_user_id,
                       modif_changeset: @modif_changeset,
                       priorities: @priorities,
                       contributors: @contributors,
                       attributors: @attributors,
                       is_admin: @is_admin,
                       is_contributor: @is_contributor,
                       is_attributor: @is_attributor,
                       show_modif_menu: @show_modif_menu,
                       card: @card)
    %>

    <%= live_component(CommentsModalMenu,
                       id: "confirm-arch" ,
                       title: "Commentaires" ,
                       body: nil,
                       right_button: "Oui" ,
                       right_button_action: "arch" ,
                       right_button_param: "" ,
                       left_button: "Annuler" ,
                       left_button_action: "cancel-comments" ,
                       curr_user_id: @curr_user_id,
                       changeset: @comment_changeset,
                       show_comments_menu: @show_comments_menu,
                       uploads: @uploads,
                       card: @card_with_comments)
    %>
      <!-- <h3>
        <i class="bi bi-list-task"></i>
        Les t??ches qui m'ont ??t?? assign??
      </h3> -->
      <%= if @tasks_not_achieved == [] do %>
        <div class="alert-primary" role="alert">
          <i class="bi bi-info-circle" style="font-size: 20px"></i>
          <div class="alert-text"> Aucune t??che n'a ??t?? assign??e pour le moment... </div>
        </div>
      <% else %>
        <table class="table-tasks" id="" style="font-size: 12px;">
          <thead>
            <tr>
              <th>Projet</th>
              <th>Nom</th>
              <!-- <th>Description</th> -->
              <th>Statut</th>
              <th>Priorit??</th>
              <th>Date de d??but</th>
              <th>Date d'??ch??ance</th>
              <th>Progression</th>
            </tr>
          </thead>
          <tbody>
            <%= for task <- @tasks do %>
              <!-- Afficher les t??ches si son statut est diff??rent de Achev??e(s) et que c'est pas archiv?? -->
              <%= if task.status_id != 5 and task.hidden == false do %>
                <tr>
                  <td data-label="Projet">
                    <%= link "#{task.project.title}", to: Routes.project_path(@socket, :board, task.project_id) %>
                  </td>
                  <td data-label="Nom" style="word-wrap: anywhere; min-width: 150px;">
                    <%= task.title %>
                  </td>
                  <!-- <td data-label="Description" style="word-wrap: anywhere"><%= task.description %></td> -->
                  <form phx-submit="status_and_progression_changed" style="margin-top: 23px;">
                    <td data-label="Status">
                      <input type="hidden" value={task.id} name="task_id"/>
                      <input type="hidden" value={task.card} name="card_id" />
                      <select name="status_id" id="status_change_id" style="color: #fff; min-width: 115px">
                          <%= for status <- @statuses do %>
                            <%= if status.id == task.status.id do %>
                              <option value={status.id} style="background: #1F2937; color: #fff;" selected>
                                <%= status.title %>
                              </option>
                            <% else %>
                              <option value={status.id} style="background: #1F2937; color: #fff;">
                                <%= status.title %>
                              </option>
                            <% end %>
                          <% end %>
                      </select>
                    </td>
                    <td data-label="Priorit??" style="min-width: 150px;">
                      <%= case task.priority_id do %>
                        <% 1 -> %>
                          <div class="low__priority__point__bg">
                            <span class="low__priority__point__t"></span>
                            Faible
                          </div>
                        <% 2 -> %>
                          <div class="avg__priority__point__bg">
                            <span class="avg__priority__point__t"></span>
                            Moyenne
                          </div>
                        <% 3 -> %>
                          <div class="high__priority__point__bg">
                            <span class="high__priority__point__t"></span>
                            Importante
                          </div>
                        <% 4 -> %>
                          <div class="urg__priority__point__bg">
                            <span class="urg__priority__point__t"></span>
                            Urgente
                          </div>
                        <% _ -> %>
                          <div class="priority__point__bg">
                            <span class="priority__point__t"></span>
                          </div>
                      <% end %>
                    </td>
                    <td data-label="Date de d??but" style="min-width: 125px"> <%= Calendar.strftime(task.date_start, "%d-%m-%Y") %> </td>
                    <td data-label="Date d'??ch??ance"> <%= Calendar.strftime(task.deadline, "%d-%m-%Y") %> </td>
                    <td data-label="Progression">
                      <input
                        name="progression_change"
                        type="number"
                        value={task.progression}
                        style="width: 75px; color: #fff;"
                      />
                    </td>
                    <td>
                      <button
                        title="Mettre ?? jour"
                        type="submit"
                        class="bi bi-arrow-repeat plus__icon table-button"
                      />
                    </td>
                  </form>
                    <td>
                      <button
                        title="Afficher"
                        class="bi bi-plus-circle plus__icon table-button"
                        phx-click="show_plus_modal"
                        phx-value-id={task.card}
                      />
                    </td>
                </tr>
              <% end %>
            <% end %>
          </tbody>
        </table>
      <% end %>
    </div>
    """
  end
end
