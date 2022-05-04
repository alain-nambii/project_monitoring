(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/@shopify/draggable/lib/draggable.bundle.js
  var require_draggable_bundle = __commonJS({
    "node_modules/@shopify/draggable/lib/draggable.bundle.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define("Draggable", [], factory);
        else if (typeof exports === "object")
          exports["Draggable"] = factory();
        else
          root["Draggable"] = factory();
      })(window, function() {
        return function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              i: moduleId,
              l: false,
              exports: {}
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1)
              value = __webpack_require__(value);
            if (mode & 8)
              return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule)
              return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string")
              for (var key in value)
                __webpack_require__.d(ns, key, function(key2) {
                  return value[key2];
                }.bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? function getDefault() {
              return module2["default"];
            } : function getModuleExports() {
              return module2;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 66);
        }([
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _AbstractEvent = __webpack_require__(64);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _AbstractEvent2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _AbstractPlugin = __webpack_require__(60);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _AbstractPlugin2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _closest = __webpack_require__(51);
            Object.defineProperty(exports2, "closest", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_closest).default;
              }
            });
            var _requestNextAnimationFrame = __webpack_require__(49);
            Object.defineProperty(exports2, "requestNextAnimationFrame", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_requestNextAnimationFrame).default;
              }
            });
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SensorEvent = __webpack_require__(44);
            Object.keys(_SensorEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SensorEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Sensor = __webpack_require__(47);
            var _Sensor2 = _interopRequireDefault(_Sensor);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Sensor2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _DragEvent = __webpack_require__(14);
            Object.keys(_DragEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _DragEvent[key];
                }
              });
            });
            var _DraggableEvent = __webpack_require__(13);
            Object.keys(_DraggableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _DraggableEvent[key];
                }
              });
            });
            var _Plugins = __webpack_require__(12);
            Object.keys(_Plugins).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _Plugins[key];
                }
              });
            });
            var _Sensors = __webpack_require__(6);
            Object.keys(_Sensors).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _Sensors[key];
                }
              });
            });
            var _Draggable = __webpack_require__(37);
            var _Draggable2 = _interopRequireDefault(_Draggable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Draggable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Sensor = __webpack_require__(4);
            Object.defineProperty(exports2, "Sensor", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Sensor).default;
              }
            });
            var _MouseSensor = __webpack_require__(46);
            Object.defineProperty(exports2, "MouseSensor", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_MouseSensor).default;
              }
            });
            var _TouchSensor = __webpack_require__(43);
            Object.defineProperty(exports2, "TouchSensor", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_TouchSensor).default;
              }
            });
            var _DragSensor = __webpack_require__(41);
            Object.defineProperty(exports2, "DragSensor", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_DragSensor).default;
              }
            });
            var _ForceTouchSensor = __webpack_require__(39);
            Object.defineProperty(exports2, "ForceTouchSensor", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_ForceTouchSensor).default;
              }
            });
            var _SensorEvent = __webpack_require__(3);
            Object.keys(_SensorEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SensorEvent[key];
                }
              });
            });
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SnappableEvent = __webpack_require__(18);
            Object.keys(_SnappableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SnappableEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _CollidableEvent = __webpack_require__(23);
            Object.keys(_CollidableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _CollidableEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SortableEvent = __webpack_require__(27);
            Object.keys(_SortableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SortableEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SwappableEvent = __webpack_require__(30);
            Object.keys(_SwappableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SwappableEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _DroppableEvent = __webpack_require__(33);
            Object.keys(_DroppableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _DroppableEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Announcement = __webpack_require__(62);
            Object.defineProperty(exports2, "Announcement", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Announcement).default;
              }
            });
            Object.defineProperty(exports2, "defaultAnnouncementOptions", {
              enumerable: true,
              get: function() {
                return _Announcement.defaultOptions;
              }
            });
            var _Focusable = __webpack_require__(59);
            Object.defineProperty(exports2, "Focusable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Focusable).default;
              }
            });
            var _Mirror = __webpack_require__(57);
            Object.defineProperty(exports2, "Mirror", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Mirror).default;
              }
            });
            Object.defineProperty(exports2, "defaultMirrorOptions", {
              enumerable: true,
              get: function() {
                return _Mirror.defaultOptions;
              }
            });
            var _Scrollable = __webpack_require__(53);
            Object.defineProperty(exports2, "Scrollable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Scrollable).default;
              }
            });
            Object.defineProperty(exports2, "defaultScrollableOptions", {
              enumerable: true,
              get: function() {
                return _Scrollable.defaultOptions;
              }
            });
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _DraggableEvent = __webpack_require__(63);
            Object.keys(_DraggableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _DraggableEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _DragEvent = __webpack_require__(65);
            Object.keys(_DragEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _DragEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onSortableSorted = Symbol("onSortableSorted");
            const defaultOptions = exports2.defaultOptions = {
              duration: 150,
              easingFunction: "ease-in-out",
              horizontal: false
            };
            class SwapAnimation extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.options = _extends({}, defaultOptions, this.getOptions());
                this.lastAnimationFrame = null;
                this[onSortableSorted] = this[onSortableSorted].bind(this);
              }
              attach() {
                this.draggable.on("sortable:sorted", this[onSortableSorted]);
              }
              detach() {
                this.draggable.off("sortable:sorted", this[onSortableSorted]);
              }
              getOptions() {
                return this.draggable.options.swapAnimation || {};
              }
              [onSortableSorted]({ oldIndex, newIndex, dragEvent }) {
                const { source, over } = dragEvent;
                cancelAnimationFrame(this.lastAnimationFrame);
                this.lastAnimationFrame = requestAnimationFrame(() => {
                  if (oldIndex >= newIndex) {
                    animate(source, over, this.options);
                  } else {
                    animate(over, source, this.options);
                  }
                });
              }
            }
            exports2.default = SwapAnimation;
            function animate(from, to, { duration, easingFunction, horizontal }) {
              for (const element of [from, to]) {
                element.style.pointerEvents = "none";
              }
              if (horizontal) {
                const width = from.offsetWidth;
                from.style.transform = `translate3d(${width}px, 0, 0)`;
                to.style.transform = `translate3d(-${width}px, 0, 0)`;
              } else {
                const height = from.offsetHeight;
                from.style.transform = `translate3d(0, ${height}px, 0)`;
                to.style.transform = `translate3d(0, -${height}px, 0)`;
              }
              requestAnimationFrame(() => {
                for (const element of [from, to]) {
                  element.addEventListener("transitionend", resetElementOnTransitionEnd);
                  element.style.transition = `transform ${duration}ms ${easingFunction}`;
                  element.style.transform = "";
                }
              });
            }
            function resetElementOnTransitionEnd(event) {
              event.target.style.transition = "";
              event.target.style.pointerEvents = "";
              event.target.removeEventListener("transitionend", resetElementOnTransitionEnd);
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _SwapAnimation = __webpack_require__(15);
            var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _SwapAnimation2.default;
            exports2.defaultOptions = _SwapAnimation.defaultOptions;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            var _SnappableEvent = __webpack_require__(7);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragStart = Symbol("onDragStart");
            const onDragStop = Symbol("onDragStop");
            const onDragOver = Symbol("onDragOver");
            const onDragOut = Symbol("onDragOut");
            const onMirrorCreated = Symbol("onMirrorCreated");
            const onMirrorDestroy = Symbol("onMirrorDestroy");
            class Snappable extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.firstSource = null;
                this.mirror = null;
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this[onDragOver] = this[onDragOver].bind(this);
                this[onDragOut] = this[onDragOut].bind(this);
                this[onMirrorCreated] = this[onMirrorCreated].bind(this);
                this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
              }
              attach() {
                this.draggable.on("drag:start", this[onDragStart]).on("drag:stop", this[onDragStop]).on("drag:over", this[onDragOver]).on("drag:out", this[onDragOut]).on("droppable:over", this[onDragOver]).on("droppable:out", this[onDragOut]).on("mirror:created", this[onMirrorCreated]).on("mirror:destroy", this[onMirrorDestroy]);
              }
              detach() {
                this.draggable.off("drag:start", this[onDragStart]).off("drag:stop", this[onDragStop]).off("drag:over", this[onDragOver]).off("drag:out", this[onDragOut]).off("droppable:over", this[onDragOver]).off("droppable:out", this[onDragOut]).off("mirror:created", this[onMirrorCreated]).off("mirror:destroy", this[onMirrorDestroy]);
              }
              [onDragStart](event) {
                if (event.canceled()) {
                  return;
                }
                this.firstSource = event.source;
              }
              [onDragStop]() {
                this.firstSource = null;
              }
              [onDragOver](event) {
                if (event.canceled()) {
                  return;
                }
                const source = event.source || event.dragEvent.source;
                if (source === this.firstSource) {
                  this.firstSource = null;
                  return;
                }
                const snapInEvent = new _SnappableEvent.SnapInEvent({
                  dragEvent: event,
                  snappable: event.over || event.droppable
                });
                this.draggable.trigger(snapInEvent);
                if (snapInEvent.canceled()) {
                  return;
                }
                if (this.mirror) {
                  this.mirror.style.display = "none";
                }
                source.classList.remove(this.draggable.getClassNameFor("source:dragging"));
                source.classList.add(this.draggable.getClassNameFor("source:placed"));
                setTimeout(() => {
                  source.classList.remove(this.draggable.getClassNameFor("source:placed"));
                }, this.draggable.options.placedTimeout);
              }
              [onDragOut](event) {
                if (event.canceled()) {
                  return;
                }
                const source = event.source || event.dragEvent.source;
                const snapOutEvent = new _SnappableEvent.SnapOutEvent({
                  dragEvent: event,
                  snappable: event.over || event.droppable
                });
                this.draggable.trigger(snapOutEvent);
                if (snapOutEvent.canceled()) {
                  return;
                }
                if (this.mirror) {
                  this.mirror.style.display = "";
                }
                source.classList.add(this.draggable.getClassNameFor("source:dragging"));
              }
              [onMirrorCreated]({ mirror }) {
                this.mirror = mirror;
              }
              [onMirrorDestroy]() {
                this.mirror = null;
              }
            }
            exports2.default = Snappable;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.SnapOutEvent = exports2.SnapInEvent = exports2.SnapEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class SnapEvent extends _AbstractEvent2.default {
              get dragEvent() {
                return this.data.dragEvent;
              }
              get snappable() {
                return this.data.snappable;
              }
            }
            exports2.SnapEvent = SnapEvent;
            SnapEvent.type = "snap";
            class SnapInEvent extends SnapEvent {
            }
            exports2.SnapInEvent = SnapInEvent;
            SnapInEvent.type = "snap:in";
            SnapInEvent.cancelable = true;
            class SnapOutEvent extends SnapEvent {
            }
            exports2.SnapOutEvent = SnapOutEvent;
            SnapOutEvent.type = "snap:out";
            SnapOutEvent.cancelable = true;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SnappableEvent = __webpack_require__(7);
            Object.keys(_SnappableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SnappableEvent[key];
                }
              });
            });
            var _Snappable = __webpack_require__(17);
            var _Snappable2 = _interopRequireDefault(_Snappable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Snappable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            var _utils = __webpack_require__(2);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onMirrorCreated = Symbol("onMirrorCreated");
            const onMirrorDestroy = Symbol("onMirrorDestroy");
            const onDragOver = Symbol("onDragOver");
            const resize = Symbol("resize");
            const defaultOptions = exports2.defaultOptions = {};
            class ResizeMirror extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.options = _extends({}, defaultOptions, this.getOptions());
                this.lastWidth = 0;
                this.lastHeight = 0;
                this.mirror = null;
                this[onMirrorCreated] = this[onMirrorCreated].bind(this);
                this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
                this[onDragOver] = this[onDragOver].bind(this);
              }
              attach() {
                this.draggable.on("mirror:created", this[onMirrorCreated]).on("drag:over", this[onDragOver]).on("drag:over:container", this[onDragOver]);
              }
              detach() {
                this.draggable.off("mirror:created", this[onMirrorCreated]).off("mirror:destroy", this[onMirrorDestroy]).off("drag:over", this[onDragOver]).off("drag:over:container", this[onDragOver]);
              }
              getOptions() {
                return this.draggable.options.resizeMirror || {};
              }
              [onMirrorCreated]({ mirror }) {
                this.mirror = mirror;
              }
              [onMirrorDestroy]() {
                this.mirror = null;
              }
              [onDragOver](dragEvent) {
                this[resize](dragEvent);
              }
              [resize]({ overContainer, over }) {
                requestAnimationFrame(() => {
                  if (this.mirror.parentNode !== overContainer) {
                    overContainer.appendChild(this.mirror);
                  }
                  const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
                  if (!overElement) {
                    return;
                  }
                  (0, _utils.requestNextAnimationFrame)(() => {
                    const overRect = overElement.getBoundingClientRect();
                    if (this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
                      return;
                    }
                    this.mirror.style.width = `${overRect.width}px`;
                    this.mirror.style.height = `${overRect.height}px`;
                    this.lastWidth = overRect.width;
                    this.lastHeight = overRect.height;
                  });
                });
              }
            }
            exports2.default = ResizeMirror;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _ResizeMirror = __webpack_require__(20);
            var _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _ResizeMirror2.default;
            exports2.defaultOptions = _ResizeMirror.defaultOptions;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            var _utils = __webpack_require__(2);
            var _CollidableEvent = __webpack_require__(8);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragMove = Symbol("onDragMove");
            const onDragStop = Symbol("onDragStop");
            const onRequestAnimationFrame = Symbol("onRequestAnimationFrame");
            class Collidable extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.currentlyCollidingElement = null;
                this.lastCollidingElement = null;
                this.currentAnimationFrame = null;
                this[onDragMove] = this[onDragMove].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
              }
              attach() {
                this.draggable.on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]);
              }
              detach() {
                this.draggable.off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]);
              }
              getCollidables() {
                const collidables = this.draggable.options.collidables;
                if (typeof collidables === "string") {
                  return Array.prototype.slice.call(document.querySelectorAll(collidables));
                } else if (collidables instanceof NodeList || collidables instanceof Array) {
                  return Array.prototype.slice.call(collidables);
                } else if (collidables instanceof HTMLElement) {
                  return [collidables];
                } else if (typeof collidables === "function") {
                  return collidables();
                } else {
                  return [];
                }
              }
              [onDragMove](event) {
                const target = event.sensorEvent.target;
                this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));
                if (this.currentlyCollidingElement) {
                  event.cancel();
                }
                const collidableInEvent = new _CollidableEvent.CollidableInEvent({
                  dragEvent: event,
                  collidingElement: this.currentlyCollidingElement
                });
                const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
                  dragEvent: event,
                  collidingElement: this.lastCollidingElement
                });
                const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
                const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
                if (enteringCollidable) {
                  if (this.lastCollidingElement) {
                    this.draggable.trigger(collidableOutEvent);
                  }
                  this.draggable.trigger(collidableInEvent);
                } else if (leavingCollidable) {
                  this.draggable.trigger(collidableOutEvent);
                }
                this.lastCollidingElement = this.currentlyCollidingElement;
              }
              [onDragStop](event) {
                const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
                const collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
                  dragEvent: event,
                  collidingElement: lastCollidingElement
                });
                if (lastCollidingElement) {
                  this.draggable.trigger(collidableOutEvent);
                }
                this.lastCollidingElement = null;
                this.currentlyCollidingElement = null;
              }
              [onRequestAnimationFrame](target) {
                return () => {
                  const collidables = this.getCollidables();
                  this.currentlyCollidingElement = (0, _utils.closest)(target, (element) => collidables.includes(element));
                };
              }
            }
            exports2.default = Collidable;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.CollidableOutEvent = exports2.CollidableInEvent = exports2.CollidableEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class CollidableEvent extends _AbstractEvent2.default {
              get dragEvent() {
                return this.data.dragEvent;
              }
            }
            exports2.CollidableEvent = CollidableEvent;
            CollidableEvent.type = "collidable";
            class CollidableInEvent extends CollidableEvent {
              get collidingElement() {
                return this.data.collidingElement;
              }
            }
            exports2.CollidableInEvent = CollidableInEvent;
            CollidableInEvent.type = "collidable:in";
            class CollidableOutEvent extends CollidableEvent {
              get collidingElement() {
                return this.data.collidingElement;
              }
            }
            exports2.CollidableOutEvent = CollidableOutEvent;
            CollidableOutEvent.type = "collidable:out";
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _CollidableEvent = __webpack_require__(8);
            Object.keys(_CollidableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _CollidableEvent[key];
                }
              });
            });
            var _Collidable = __webpack_require__(22);
            var _Collidable2 = _interopRequireDefault(_Collidable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Collidable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Collidable = __webpack_require__(24);
            Object.defineProperty(exports2, "Collidable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Collidable).default;
              }
            });
            var _ResizeMirror = __webpack_require__(21);
            Object.defineProperty(exports2, "ResizeMirror", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_ResizeMirror).default;
              }
            });
            Object.defineProperty(exports2, "defaultResizeMirrorOptions", {
              enumerable: true,
              get: function() {
                return _ResizeMirror.defaultOptions;
              }
            });
            var _Snappable = __webpack_require__(19);
            Object.defineProperty(exports2, "Snappable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Snappable).default;
              }
            });
            var _SwapAnimation = __webpack_require__(16);
            Object.defineProperty(exports2, "SwapAnimation", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_SwapAnimation).default;
              }
            });
            Object.defineProperty(exports2, "defaultSwapAnimationOptions", {
              enumerable: true,
              get: function() {
                return _SwapAnimation.defaultOptions;
              }
            });
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _Draggable = __webpack_require__(5);
            var _Draggable2 = _interopRequireDefault(_Draggable);
            var _SortableEvent = __webpack_require__(9);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragStart = Symbol("onDragStart");
            const onDragOverContainer = Symbol("onDragOverContainer");
            const onDragOver = Symbol("onDragOver");
            const onDragStop = Symbol("onDragStop");
            function onSortableSortedDefaultAnnouncement({ dragEvent }) {
              const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "sortable element";
              if (dragEvent.over) {
                const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || "sortable element";
                const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
                if (isFollowing) {
                  return `Placed ${sourceText} after ${overText}`;
                } else {
                  return `Placed ${sourceText} before ${overText}`;
                }
              } else {
                return `Placed ${sourceText} into a different container`;
              }
            }
            const defaultAnnouncements = {
              "sortable:sorted": onSortableSortedDefaultAnnouncement
            };
            class Sortable2 extends _Draggable2.default {
              constructor(containers = [], options = {}) {
                super(containers, _extends({}, options, {
                  announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                }));
                this.startIndex = null;
                this.startContainer = null;
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragOverContainer] = this[onDragOverContainer].bind(this);
                this[onDragOver] = this[onDragOver].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this.on("drag:start", this[onDragStart]).on("drag:over:container", this[onDragOverContainer]).on("drag:over", this[onDragOver]).on("drag:stop", this[onDragStop]);
              }
              destroy() {
                super.destroy();
                this.off("drag:start", this[onDragStart]).off("drag:over:container", this[onDragOverContainer]).off("drag:over", this[onDragOver]).off("drag:stop", this[onDragStop]);
              }
              index(element) {
                return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);
              }
              [onDragStart](event) {
                this.startContainer = event.source.parentNode;
                this.startIndex = this.index(event.source);
                const sortableStartEvent = new _SortableEvent.SortableStartEvent({
                  dragEvent: event,
                  startIndex: this.startIndex,
                  startContainer: this.startContainer
                });
                this.trigger(sortableStartEvent);
                if (sortableStartEvent.canceled()) {
                  event.cancel();
                }
              }
              [onDragOverContainer](event) {
                if (event.canceled()) {
                  return;
                }
                const { source, over, overContainer } = event;
                const oldIndex = this.index(source);
                const sortableSortEvent = new _SortableEvent.SortableSortEvent({
                  dragEvent: event,
                  currentIndex: oldIndex,
                  source,
                  over
                });
                this.trigger(sortableSortEvent);
                if (sortableSortEvent.canceled()) {
                  return;
                }
                const children = this.getDraggableElementsForContainer(overContainer);
                const moves = move({ source, over, overContainer, children });
                if (!moves) {
                  return;
                }
                const { oldContainer, newContainer } = moves;
                const newIndex = this.index(event.source);
                const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                  dragEvent: event,
                  oldIndex,
                  newIndex,
                  oldContainer,
                  newContainer
                });
                this.trigger(sortableSortedEvent);
              }
              [onDragOver](event) {
                if (event.over === event.originalSource || event.over === event.source) {
                  return;
                }
                const { source, over, overContainer } = event;
                const oldIndex = this.index(source);
                const sortableSortEvent = new _SortableEvent.SortableSortEvent({
                  dragEvent: event,
                  currentIndex: oldIndex,
                  source,
                  over
                });
                this.trigger(sortableSortEvent);
                if (sortableSortEvent.canceled()) {
                  return;
                }
                const children = this.getDraggableElementsForContainer(overContainer);
                const moves = move({ source, over, overContainer, children });
                if (!moves) {
                  return;
                }
                const { oldContainer, newContainer } = moves;
                const newIndex = this.index(source);
                const sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
                  dragEvent: event,
                  oldIndex,
                  newIndex,
                  oldContainer,
                  newContainer
                });
                this.trigger(sortableSortedEvent);
              }
              [onDragStop](event) {
                const sortableStopEvent = new _SortableEvent.SortableStopEvent({
                  dragEvent: event,
                  oldIndex: this.startIndex,
                  newIndex: this.index(event.source),
                  oldContainer: this.startContainer,
                  newContainer: event.source.parentNode
                });
                this.trigger(sortableStopEvent);
                this.startIndex = null;
                this.startContainer = null;
              }
            }
            exports2.default = Sortable2;
            function index(element) {
              return Array.prototype.indexOf.call(element.parentNode.children, element);
            }
            function move({ source, over, overContainer, children }) {
              const emptyOverContainer = !children.length;
              const differentContainer = source.parentNode !== overContainer;
              const sameContainer = over && !differentContainer;
              if (emptyOverContainer) {
                return moveInsideEmptyContainer(source, overContainer);
              } else if (sameContainer) {
                return moveWithinContainer(source, over);
              } else if (differentContainer) {
                return moveOutsideContainer(source, over, overContainer);
              } else {
                return null;
              }
            }
            function moveInsideEmptyContainer(source, overContainer) {
              const oldContainer = source.parentNode;
              overContainer.appendChild(source);
              return { oldContainer, newContainer: overContainer };
            }
            function moveWithinContainer(source, over) {
              const oldIndex = index(source);
              const newIndex = index(over);
              if (oldIndex < newIndex) {
                source.parentNode.insertBefore(source, over.nextElementSibling);
              } else {
                source.parentNode.insertBefore(source, over);
              }
              return { oldContainer: source.parentNode, newContainer: source.parentNode };
            }
            function moveOutsideContainer(source, over, overContainer) {
              const oldContainer = source.parentNode;
              if (over) {
                over.parentNode.insertBefore(source, over);
              } else {
                overContainer.appendChild(source);
              }
              return { oldContainer, newContainer: source.parentNode };
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.SortableStopEvent = exports2.SortableSortedEvent = exports2.SortableSortEvent = exports2.SortableStartEvent = exports2.SortableEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class SortableEvent extends _AbstractEvent2.default {
              get dragEvent() {
                return this.data.dragEvent;
              }
            }
            exports2.SortableEvent = SortableEvent;
            SortableEvent.type = "sortable";
            class SortableStartEvent extends SortableEvent {
              get startIndex() {
                return this.data.startIndex;
              }
              get startContainer() {
                return this.data.startContainer;
              }
            }
            exports2.SortableStartEvent = SortableStartEvent;
            SortableStartEvent.type = "sortable:start";
            SortableStartEvent.cancelable = true;
            class SortableSortEvent extends SortableEvent {
              get currentIndex() {
                return this.data.currentIndex;
              }
              get over() {
                return this.data.oldIndex;
              }
              get overContainer() {
                return this.data.newIndex;
              }
            }
            exports2.SortableSortEvent = SortableSortEvent;
            SortableSortEvent.type = "sortable:sort";
            SortableSortEvent.cancelable = true;
            class SortableSortedEvent extends SortableEvent {
              get oldIndex() {
                return this.data.oldIndex;
              }
              get newIndex() {
                return this.data.newIndex;
              }
              get oldContainer() {
                return this.data.oldContainer;
              }
              get newContainer() {
                return this.data.newContainer;
              }
            }
            exports2.SortableSortedEvent = SortableSortedEvent;
            SortableSortedEvent.type = "sortable:sorted";
            class SortableStopEvent extends SortableEvent {
              get oldIndex() {
                return this.data.oldIndex;
              }
              get newIndex() {
                return this.data.newIndex;
              }
              get oldContainer() {
                return this.data.oldContainer;
              }
              get newContainer() {
                return this.data.newContainer;
              }
            }
            exports2.SortableStopEvent = SortableStopEvent;
            SortableStopEvent.type = "sortable:stop";
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SortableEvent = __webpack_require__(9);
            Object.keys(_SortableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SortableEvent[key];
                }
              });
            });
            var _Sortable = __webpack_require__(26);
            var _Sortable2 = _interopRequireDefault(_Sortable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Sortable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _Draggable = __webpack_require__(5);
            var _Draggable2 = _interopRequireDefault(_Draggable);
            var _SwappableEvent = __webpack_require__(10);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragStart = Symbol("onDragStart");
            const onDragOver = Symbol("onDragOver");
            const onDragStop = Symbol("onDragStop");
            function onSwappableSwappedDefaultAnnouncement({ dragEvent, swappedElement }) {
              const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "swappable element";
              const overText = swappedElement.textContent.trim() || swappedElement.id || "swappable element";
              return `Swapped ${sourceText} with ${overText}`;
            }
            const defaultAnnouncements = {
              "swappabled:swapped": onSwappableSwappedDefaultAnnouncement
            };
            class Swappable extends _Draggable2.default {
              constructor(containers = [], options = {}) {
                super(containers, _extends({}, options, {
                  announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                }));
                this.lastOver = null;
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragOver] = this[onDragOver].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this.on("drag:start", this[onDragStart]).on("drag:over", this[onDragOver]).on("drag:stop", this[onDragStop]);
              }
              destroy() {
                super.destroy();
                this.off("drag:start", this._onDragStart).off("drag:over", this._onDragOver).off("drag:stop", this._onDragStop);
              }
              [onDragStart](event) {
                const swappableStartEvent = new _SwappableEvent.SwappableStartEvent({
                  dragEvent: event
                });
                this.trigger(swappableStartEvent);
                if (swappableStartEvent.canceled()) {
                  event.cancel();
                }
              }
              [onDragOver](event) {
                if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
                  return;
                }
                const swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({
                  dragEvent: event,
                  over: event.over,
                  overContainer: event.overContainer
                });
                this.trigger(swappableSwapEvent);
                if (swappableSwapEvent.canceled()) {
                  return;
                }
                if (this.lastOver && this.lastOver !== event.over) {
                  swap(this.lastOver, event.source);
                }
                if (this.lastOver === event.over) {
                  this.lastOver = null;
                } else {
                  this.lastOver = event.over;
                }
                swap(event.source, event.over);
                const swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({
                  dragEvent: event,
                  swappedElement: event.over
                });
                this.trigger(swappableSwappedEvent);
              }
              [onDragStop](event) {
                const swappableStopEvent = new _SwappableEvent.SwappableStopEvent({
                  dragEvent: event
                });
                this.trigger(swappableStopEvent);
                this.lastOver = null;
              }
            }
            exports2.default = Swappable;
            function withTempElement(callback) {
              const tmpElement = document.createElement("div");
              callback(tmpElement);
              tmpElement.parentNode.removeChild(tmpElement);
            }
            function swap(source, over) {
              const overParent = over.parentNode;
              const sourceParent = source.parentNode;
              withTempElement((tmpElement) => {
                sourceParent.insertBefore(tmpElement, source);
                overParent.insertBefore(source, over);
                sourceParent.insertBefore(over, tmpElement);
              });
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.SwappableStopEvent = exports2.SwappableSwappedEvent = exports2.SwappableSwapEvent = exports2.SwappableStartEvent = exports2.SwappableEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class SwappableEvent extends _AbstractEvent2.default {
              get dragEvent() {
                return this.data.dragEvent;
              }
            }
            exports2.SwappableEvent = SwappableEvent;
            SwappableEvent.type = "swappable";
            class SwappableStartEvent extends SwappableEvent {
            }
            exports2.SwappableStartEvent = SwappableStartEvent;
            SwappableStartEvent.type = "swappable:start";
            SwappableStartEvent.cancelable = true;
            class SwappableSwapEvent extends SwappableEvent {
              get over() {
                return this.data.over;
              }
              get overContainer() {
                return this.data.overContainer;
              }
            }
            exports2.SwappableSwapEvent = SwappableSwapEvent;
            SwappableSwapEvent.type = "swappable:swap";
            SwappableSwapEvent.cancelable = true;
            class SwappableSwappedEvent extends SwappableEvent {
              get swappedElement() {
                return this.data.swappedElement;
              }
            }
            exports2.SwappableSwappedEvent = SwappableSwappedEvent;
            SwappableSwappedEvent.type = "swappable:swapped";
            class SwappableStopEvent extends SwappableEvent {
            }
            exports2.SwappableStopEvent = SwappableStopEvent;
            SwappableStopEvent.type = "swappable:stop";
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _SwappableEvent = __webpack_require__(10);
            Object.keys(_SwappableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _SwappableEvent[key];
                }
              });
            });
            var _Swappable = __webpack_require__(29);
            var _Swappable2 = _interopRequireDefault(_Swappable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Swappable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _utils = __webpack_require__(2);
            var _Draggable = __webpack_require__(5);
            var _Draggable2 = _interopRequireDefault(_Draggable);
            var _DroppableEvent = __webpack_require__(11);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragStart = Symbol("onDragStart");
            const onDragMove = Symbol("onDragMove");
            const onDragStop = Symbol("onDragStop");
            const dropInDropzone = Symbol("dropInDropZone");
            const returnToOriginalDropzone = Symbol("returnToOriginalDropzone");
            const closestDropzone = Symbol("closestDropzone");
            const getDropzones = Symbol("getDropzones");
            function onDroppableDroppedDefaultAnnouncement({ dragEvent, dropzone }) {
              const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "draggable element";
              const dropzoneText = dropzone.textContent.trim() || dropzone.id || "droppable element";
              return `Dropped ${sourceText} into ${dropzoneText}`;
            }
            function onDroppableReturnedDefaultAnnouncement({ dragEvent, dropzone }) {
              const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || "draggable element";
              const dropzoneText = dropzone.textContent.trim() || dropzone.id || "droppable element";
              return `Returned ${sourceText} from ${dropzoneText}`;
            }
            const defaultAnnouncements = {
              "droppable:dropped": onDroppableDroppedDefaultAnnouncement,
              "droppable:returned": onDroppableReturnedDefaultAnnouncement
            };
            const defaultClasses = {
              "droppable:active": "draggable-dropzone--active",
              "droppable:occupied": "draggable-dropzone--occupied"
            };
            const defaultOptions = {
              dropzone: ".draggable-droppable"
            };
            class Droppable extends _Draggable2.default {
              constructor(containers = [], options = {}) {
                super(containers, _extends({}, defaultOptions, options, {
                  classes: _extends({}, defaultClasses, options.classes || {}),
                  announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                }));
                this.dropzones = null;
                this.lastDropzone = null;
                this.initialDropzone = null;
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragMove] = this[onDragMove].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this.on("drag:start", this[onDragStart]).on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]);
              }
              destroy() {
                super.destroy();
                this.off("drag:start", this[onDragStart]).off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]);
              }
              [onDragStart](event) {
                if (event.canceled()) {
                  return;
                }
                this.dropzones = [...this[getDropzones]()];
                const dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);
                if (!dropzone) {
                  event.cancel();
                  return;
                }
                const droppableStartEvent = new _DroppableEvent.DroppableStartEvent({
                  dragEvent: event,
                  dropzone
                });
                this.trigger(droppableStartEvent);
                if (droppableStartEvent.canceled()) {
                  event.cancel();
                  return;
                }
                this.initialDropzone = dropzone;
                for (const dropzoneElement of this.dropzones) {
                  if (dropzoneElement.classList.contains(this.getClassNameFor("droppable:occupied"))) {
                    continue;
                  }
                  dropzoneElement.classList.add(this.getClassNameFor("droppable:active"));
                }
              }
              [onDragMove](event) {
                if (event.canceled()) {
                  return;
                }
                const dropzone = this[closestDropzone](event.sensorEvent.target);
                const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor("droppable:occupied"));
                if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
                  this.lastDropzone = dropzone;
                } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
                  this[returnToOriginalDropzone](event);
                  this.lastDropzone = null;
                }
              }
              [onDragStop](event) {
                const droppableStopEvent = new _DroppableEvent.DroppableStopEvent({
                  dragEvent: event,
                  dropzone: this.lastDropzone || this.initialDropzone
                });
                this.trigger(droppableStopEvent);
                const occupiedClass = this.getClassNameFor("droppable:occupied");
                for (const dropzone of this.dropzones) {
                  dropzone.classList.remove(this.getClassNameFor("droppable:active"));
                }
                if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
                  this.initialDropzone.classList.remove(occupiedClass);
                }
                this.dropzones = null;
                this.lastDropzone = null;
                this.initialDropzone = null;
              }
              [dropInDropzone](event, dropzone) {
                const droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({
                  dragEvent: event,
                  dropzone
                });
                this.trigger(droppableDroppedEvent);
                if (droppableDroppedEvent.canceled()) {
                  return false;
                }
                const occupiedClass = this.getClassNameFor("droppable:occupied");
                if (this.lastDropzone) {
                  this.lastDropzone.classList.remove(occupiedClass);
                }
                dropzone.appendChild(event.source);
                dropzone.classList.add(occupiedClass);
                return true;
              }
              [returnToOriginalDropzone](event) {
                const droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({
                  dragEvent: event,
                  dropzone: this.lastDropzone
                });
                this.trigger(droppableReturnedEvent);
                if (droppableReturnedEvent.canceled()) {
                  return;
                }
                this.initialDropzone.appendChild(event.source);
                this.lastDropzone.classList.remove(this.getClassNameFor("droppable:occupied"));
              }
              [closestDropzone](target) {
                if (!this.dropzones) {
                  return null;
                }
                return (0, _utils.closest)(target, this.dropzones);
              }
              [getDropzones]() {
                const dropzone = this.options.dropzone;
                if (typeof dropzone === "string") {
                  return document.querySelectorAll(dropzone);
                } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
                  return dropzone;
                } else if (typeof dropzone === "function") {
                  return dropzone();
                } else {
                  return [];
                }
              }
            }
            exports2.default = Droppable;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.DroppableStopEvent = exports2.DroppableReturnedEvent = exports2.DroppableDroppedEvent = exports2.DroppableStartEvent = exports2.DroppableEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class DroppableEvent extends _AbstractEvent2.default {
              get dragEvent() {
                return this.data.dragEvent;
              }
            }
            exports2.DroppableEvent = DroppableEvent;
            DroppableEvent.type = "droppable";
            class DroppableStartEvent extends DroppableEvent {
              get dropzone() {
                return this.data.dropzone;
              }
            }
            exports2.DroppableStartEvent = DroppableStartEvent;
            DroppableStartEvent.type = "droppable:start";
            DroppableStartEvent.cancelable = true;
            class DroppableDroppedEvent extends DroppableEvent {
              get dropzone() {
                return this.data.dropzone;
              }
            }
            exports2.DroppableDroppedEvent = DroppableDroppedEvent;
            DroppableDroppedEvent.type = "droppable:dropped";
            DroppableDroppedEvent.cancelable = true;
            class DroppableReturnedEvent extends DroppableEvent {
              get dropzone() {
                return this.data.dropzone;
              }
            }
            exports2.DroppableReturnedEvent = DroppableReturnedEvent;
            DroppableReturnedEvent.type = "droppable:returned";
            DroppableReturnedEvent.cancelable = true;
            class DroppableStopEvent extends DroppableEvent {
              get dropzone() {
                return this.data.dropzone;
              }
            }
            exports2.DroppableStopEvent = DroppableStopEvent;
            DroppableStopEvent.type = "droppable:stop";
            DroppableStopEvent.cancelable = true;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _DroppableEvent = __webpack_require__(11);
            Object.keys(_DroppableEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _DroppableEvent[key];
                }
              });
            });
            var _Droppable = __webpack_require__(32);
            var _Droppable2 = _interopRequireDefault(_Droppable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Droppable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            class Emitter {
              constructor() {
                this.callbacks = {};
              }
              on(type, ...callbacks) {
                if (!this.callbacks[type]) {
                  this.callbacks[type] = [];
                }
                this.callbacks[type].push(...callbacks);
                return this;
              }
              off(type, callback) {
                if (!this.callbacks[type]) {
                  return null;
                }
                const copy = this.callbacks[type].slice(0);
                for (let i = 0; i < copy.length; i++) {
                  if (callback === copy[i]) {
                    this.callbacks[type].splice(i, 1);
                  }
                }
                return this;
              }
              trigger(event) {
                if (!this.callbacks[event.type]) {
                  return null;
                }
                const callbacks = [...this.callbacks[event.type]];
                const caughtErrors = [];
                for (let i = callbacks.length - 1; i >= 0; i--) {
                  const callback = callbacks[i];
                  try {
                    callback(event);
                  } catch (error) {
                    caughtErrors.push(error);
                  }
                }
                if (caughtErrors.length) {
                  console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);
                }
                return this;
              }
            }
            exports2.default = Emitter;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Emitter = __webpack_require__(35);
            var _Emitter2 = _interopRequireDefault(_Emitter);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Emitter2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _utils = __webpack_require__(2);
            var _Plugins = __webpack_require__(12);
            var _Emitter = __webpack_require__(36);
            var _Emitter2 = _interopRequireDefault(_Emitter);
            var _Sensors = __webpack_require__(6);
            var _DraggableEvent = __webpack_require__(13);
            var _DragEvent = __webpack_require__(14);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragStart = Symbol("onDragStart");
            const onDragMove = Symbol("onDragMove");
            const onDragStop = Symbol("onDragStop");
            const onDragPressure = Symbol("onDragPressure");
            const defaultAnnouncements = {
              "drag:start": (event) => `Picked up ${event.source.textContent.trim() || event.source.id || "draggable element"}`,
              "drag:stop": (event) => `Released ${event.source.textContent.trim() || event.source.id || "draggable element"}`
            };
            const defaultClasses = {
              "container:dragging": "draggable-container--is-dragging",
              "source:dragging": "draggable-source--is-dragging",
              "source:placed": "draggable-source--placed",
              "container:placed": "draggable-container--placed",
              "body:dragging": "draggable--is-dragging",
              "draggable:over": "draggable--over",
              "container:over": "draggable-container--over",
              "source:original": "draggable--original",
              mirror: "draggable-mirror"
            };
            const defaultOptions = exports2.defaultOptions = {
              draggable: ".draggable-source",
              handle: null,
              delay: 100,
              placedTimeout: 800,
              plugins: [],
              sensors: []
            };
            class Draggable {
              constructor(containers = [document.body], options = {}) {
                if (containers instanceof NodeList || containers instanceof Array) {
                  this.containers = [...containers];
                } else if (containers instanceof HTMLElement) {
                  this.containers = [containers];
                } else {
                  throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");
                }
                this.options = _extends({}, defaultOptions, options, {
                  classes: _extends({}, defaultClasses, options.classes || {}),
                  announcements: _extends({}, defaultAnnouncements, options.announcements || {})
                });
                this.emitter = new _Emitter2.default();
                this.dragging = false;
                this.plugins = [];
                this.sensors = [];
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragMove] = this[onDragMove].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this[onDragPressure] = this[onDragPressure].bind(this);
                document.addEventListener("drag:start", this[onDragStart], true);
                document.addEventListener("drag:move", this[onDragMove], true);
                document.addEventListener("drag:stop", this[onDragStop], true);
                document.addEventListener("drag:pressure", this[onDragPressure], true);
                const defaultPlugins = Object.values(Draggable.Plugins).map((Plugin) => Plugin);
                const defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];
                this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
                this.addSensor(...[...defaultSensors, ...this.options.sensors]);
                const draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
                  draggable: this
                });
                this.on("mirror:created", ({ mirror }) => this.mirror = mirror);
                this.on("mirror:destroy", () => this.mirror = null);
                this.trigger(draggableInitializedEvent);
              }
              destroy() {
                document.removeEventListener("drag:start", this[onDragStart], true);
                document.removeEventListener("drag:move", this[onDragMove], true);
                document.removeEventListener("drag:stop", this[onDragStop], true);
                document.removeEventListener("drag:pressure", this[onDragPressure], true);
                const draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
                  draggable: this
                });
                this.trigger(draggableDestroyEvent);
                this.removePlugin(...this.plugins.map((plugin) => plugin.constructor));
                this.removeSensor(...this.sensors.map((sensor) => sensor.constructor));
              }
              addPlugin(...plugins) {
                const activePlugins = plugins.map((Plugin) => new Plugin(this));
                activePlugins.forEach((plugin) => plugin.attach());
                this.plugins = [...this.plugins, ...activePlugins];
                return this;
              }
              removePlugin(...plugins) {
                const removedPlugins = this.plugins.filter((plugin) => plugins.includes(plugin.constructor));
                removedPlugins.forEach((plugin) => plugin.detach());
                this.plugins = this.plugins.filter((plugin) => !plugins.includes(plugin.constructor));
                return this;
              }
              addSensor(...sensors) {
                const activeSensors = sensors.map((Sensor) => new Sensor(this.containers, this.options));
                activeSensors.forEach((sensor) => sensor.attach());
                this.sensors = [...this.sensors, ...activeSensors];
                return this;
              }
              removeSensor(...sensors) {
                const removedSensors = this.sensors.filter((sensor) => sensors.includes(sensor.constructor));
                removedSensors.forEach((sensor) => sensor.detach());
                this.sensors = this.sensors.filter((sensor) => !sensors.includes(sensor.constructor));
                return this;
              }
              addContainer(...containers) {
                this.containers = [...this.containers, ...containers];
                this.sensors.forEach((sensor) => sensor.addContainer(...containers));
                return this;
              }
              removeContainer(...containers) {
                this.containers = this.containers.filter((container) => !containers.includes(container));
                this.sensors.forEach((sensor) => sensor.removeContainer(...containers));
                return this;
              }
              on(type, ...callbacks) {
                this.emitter.on(type, ...callbacks);
                return this;
              }
              off(type, callback) {
                this.emitter.off(type, callback);
                return this;
              }
              trigger(event) {
                this.emitter.trigger(event);
                return this;
              }
              getClassNameFor(name) {
                return this.options.classes[name];
              }
              isDragging() {
                return Boolean(this.dragging);
              }
              getDraggableElements() {
                return this.containers.reduce((current, container) => {
                  return [...current, ...this.getDraggableElementsForContainer(container)];
                }, []);
              }
              getDraggableElementsForContainer(container) {
                const allDraggableElements = container.querySelectorAll(this.options.draggable);
                return [...allDraggableElements].filter((childElement) => {
                  return childElement !== this.originalSource && childElement !== this.mirror;
                });
              }
              [onDragStart](event) {
                const sensorEvent = getSensorEvent(event);
                const { target, container } = sensorEvent;
                if (!this.containers.includes(container)) {
                  return;
                }
                if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
                  sensorEvent.cancel();
                  return;
                }
                this.originalSource = (0, _utils.closest)(target, this.options.draggable);
                this.sourceContainer = container;
                if (!this.originalSource) {
                  sensorEvent.cancel();
                  return;
                }
                if (this.lastPlacedSource && this.lastPlacedContainer) {
                  clearTimeout(this.placedTimeoutID);
                  this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed"));
                  this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"));
                }
                this.source = this.originalSource.cloneNode(true);
                this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
                this.originalSource.style.display = "none";
                const dragEvent = new _DragEvent.DragStartEvent({
                  source: this.source,
                  originalSource: this.originalSource,
                  sourceContainer: container,
                  sensorEvent
                });
                this.trigger(dragEvent);
                this.dragging = !dragEvent.canceled();
                if (dragEvent.canceled()) {
                  this.source.parentNode.removeChild(this.source);
                  this.originalSource.style.display = null;
                  return;
                }
                this.originalSource.classList.add(this.getClassNameFor("source:original"));
                this.source.classList.add(this.getClassNameFor("source:dragging"));
                this.sourceContainer.classList.add(this.getClassNameFor("container:dragging"));
                document.body.classList.add(this.getClassNameFor("body:dragging"));
                applyUserSelect(document.body, "none");
                requestAnimationFrame(() => {
                  const oldSensorEvent = getSensorEvent(event);
                  const newSensorEvent = oldSensorEvent.clone({ target: this.source });
                  this[onDragMove](_extends({}, event, {
                    detail: newSensorEvent
                  }));
                });
              }
              [onDragMove](event) {
                if (!this.dragging) {
                  return;
                }
                const sensorEvent = getSensorEvent(event);
                const { container } = sensorEvent;
                let target = sensorEvent.target;
                const dragMoveEvent = new _DragEvent.DragMoveEvent({
                  source: this.source,
                  originalSource: this.originalSource,
                  sourceContainer: container,
                  sensorEvent
                });
                this.trigger(dragMoveEvent);
                if (dragMoveEvent.canceled()) {
                  sensorEvent.cancel();
                }
                target = (0, _utils.closest)(target, this.options.draggable);
                const withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
                const overContainer = sensorEvent.overContainer || withinCorrectContainer;
                const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
                const isLeavingDraggable = this.currentOver && target !== this.currentOver;
                const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
                const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
                if (isLeavingDraggable) {
                  const dragOutEvent = new _DragEvent.DragOutEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: container,
                    sensorEvent,
                    over: this.currentOver
                  });
                  this.currentOver.classList.remove(this.getClassNameFor("draggable:over"));
                  this.currentOver = null;
                  this.trigger(dragOutEvent);
                }
                if (isLeavingContainer) {
                  const dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: container,
                    sensorEvent,
                    overContainer: this.currentOverContainer
                  });
                  this.currentOverContainer.classList.remove(this.getClassNameFor("container:over"));
                  this.currentOverContainer = null;
                  this.trigger(dragOutContainerEvent);
                }
                if (isOverContainer) {
                  overContainer.classList.add(this.getClassNameFor("container:over"));
                  const dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: container,
                    sensorEvent,
                    overContainer
                  });
                  this.currentOverContainer = overContainer;
                  this.trigger(dragOverContainerEvent);
                }
                if (isOverDraggable) {
                  target.classList.add(this.getClassNameFor("draggable:over"));
                  const dragOverEvent = new _DragEvent.DragOverEvent({
                    source: this.source,
                    originalSource: this.originalSource,
                    sourceContainer: container,
                    sensorEvent,
                    overContainer,
                    over: target
                  });
                  this.currentOver = target;
                  this.trigger(dragOverEvent);
                }
              }
              [onDragStop](event) {
                if (!this.dragging) {
                  return;
                }
                this.dragging = false;
                const dragStopEvent = new _DragEvent.DragStopEvent({
                  source: this.source,
                  originalSource: this.originalSource,
                  sensorEvent: event.sensorEvent,
                  sourceContainer: this.sourceContainer
                });
                this.trigger(dragStopEvent);
                this.source.parentNode.insertBefore(this.originalSource, this.source);
                this.source.parentNode.removeChild(this.source);
                this.originalSource.style.display = "";
                this.source.classList.remove(this.getClassNameFor("source:dragging"));
                this.originalSource.classList.remove(this.getClassNameFor("source:original"));
                this.originalSource.classList.add(this.getClassNameFor("source:placed"));
                this.sourceContainer.classList.add(this.getClassNameFor("container:placed"));
                this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging"));
                document.body.classList.remove(this.getClassNameFor("body:dragging"));
                applyUserSelect(document.body, "");
                if (this.currentOver) {
                  this.currentOver.classList.remove(this.getClassNameFor("draggable:over"));
                }
                if (this.currentOverContainer) {
                  this.currentOverContainer.classList.remove(this.getClassNameFor("container:over"));
                }
                this.lastPlacedSource = this.originalSource;
                this.lastPlacedContainer = this.sourceContainer;
                this.placedTimeoutID = setTimeout(() => {
                  if (this.lastPlacedSource) {
                    this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed"));
                  }
                  if (this.lastPlacedContainer) {
                    this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"));
                  }
                  this.lastPlacedSource = null;
                  this.lastPlacedContainer = null;
                }, this.options.placedTimeout);
                this.source = null;
                this.originalSource = null;
                this.currentOverContainer = null;
                this.currentOver = null;
                this.sourceContainer = null;
              }
              [onDragPressure](event) {
                if (!this.dragging) {
                  return;
                }
                const sensorEvent = getSensorEvent(event);
                const source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);
                const dragPressureEvent = new _DragEvent.DragPressureEvent({
                  sensorEvent,
                  source,
                  pressure: sensorEvent.pressure
                });
                this.trigger(dragPressureEvent);
              }
            }
            exports2.default = Draggable;
            Draggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };
            function getSensorEvent(event) {
              return event.detail;
            }
            function applyUserSelect(element, value) {
              element.style.webkitUserSelect = value;
              element.style.mozUserSelect = value;
              element.style.msUserSelect = value;
              element.style.oUserSelect = value;
              element.style.userSelect = value;
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Sensor = __webpack_require__(4);
            var _Sensor2 = _interopRequireDefault(_Sensor);
            var _SensorEvent = __webpack_require__(3);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onMouseForceWillBegin = Symbol("onMouseForceWillBegin");
            const onMouseForceDown = Symbol("onMouseForceDown");
            const onMouseDown = Symbol("onMouseDown");
            const onMouseForceChange = Symbol("onMouseForceChange");
            const onMouseMove = Symbol("onMouseMove");
            const onMouseUp = Symbol("onMouseUp");
            const onMouseForceGlobalChange = Symbol("onMouseForceGlobalChange");
            class ForceTouchSensor extends _Sensor2.default {
              constructor(containers = [], options = {}) {
                super(containers, options);
                this.mightDrag = false;
                this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
                this[onMouseForceDown] = this[onMouseForceDown].bind(this);
                this[onMouseDown] = this[onMouseDown].bind(this);
                this[onMouseForceChange] = this[onMouseForceChange].bind(this);
                this[onMouseMove] = this[onMouseMove].bind(this);
                this[onMouseUp] = this[onMouseUp].bind(this);
              }
              attach() {
                for (const container of this.containers) {
                  container.addEventListener("webkitmouseforcewillbegin", this[onMouseForceWillBegin], false);
                  container.addEventListener("webkitmouseforcedown", this[onMouseForceDown], false);
                  container.addEventListener("mousedown", this[onMouseDown], true);
                  container.addEventListener("webkitmouseforcechanged", this[onMouseForceChange], false);
                }
                document.addEventListener("mousemove", this[onMouseMove]);
                document.addEventListener("mouseup", this[onMouseUp]);
              }
              detach() {
                for (const container of this.containers) {
                  container.removeEventListener("webkitmouseforcewillbegin", this[onMouseForceWillBegin], false);
                  container.removeEventListener("webkitmouseforcedown", this[onMouseForceDown], false);
                  container.removeEventListener("mousedown", this[onMouseDown], true);
                  container.removeEventListener("webkitmouseforcechanged", this[onMouseForceChange], false);
                }
                document.removeEventListener("mousemove", this[onMouseMove]);
                document.removeEventListener("mouseup", this[onMouseUp]);
              }
              [onMouseForceWillBegin](event) {
                event.preventDefault();
                this.mightDrag = true;
              }
              [onMouseForceDown](event) {
                if (this.dragging) {
                  return;
                }
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const container = event.currentTarget;
                const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container,
                  originalEvent: event
                });
                this.trigger(container, dragStartEvent);
                this.currentContainer = container;
                this.dragging = !dragStartEvent.canceled();
                this.mightDrag = false;
              }
              [onMouseUp](event) {
                if (!this.dragging) {
                  return;
                }
                const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target: null,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragStopEvent);
                this.currentContainer = null;
                this.dragging = false;
                this.mightDrag = false;
              }
              [onMouseDown](event) {
                if (!this.mightDrag) {
                  return;
                }
                event.stopPropagation();
                event.stopImmediatePropagation();
                event.preventDefault();
              }
              [onMouseMove](event) {
                if (!this.dragging) {
                  return;
                }
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragMoveEvent);
              }
              [onMouseForceChange](event) {
                if (this.dragging) {
                  return;
                }
                const target = event.target;
                const container = event.currentTarget;
                const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                  pressure: event.webkitForce,
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container,
                  originalEvent: event
                });
                this.trigger(container, dragPressureEvent);
              }
              [onMouseForceGlobalChange](event) {
                if (!this.dragging) {
                  return;
                }
                const target = event.target;
                const dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
                  pressure: event.webkitForce,
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragPressureEvent);
              }
            }
            exports2.default = ForceTouchSensor;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _ForceTouchSensor = __webpack_require__(38);
            var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _ForceTouchSensor2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _utils = __webpack_require__(2);
            var _Sensor = __webpack_require__(4);
            var _Sensor2 = _interopRequireDefault(_Sensor);
            var _SensorEvent = __webpack_require__(3);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onMouseDown = Symbol("onMouseDown");
            const onMouseUp = Symbol("onMouseUp");
            const onDragStart = Symbol("onDragStart");
            const onDragOver = Symbol("onDragOver");
            const onDragEnd = Symbol("onDragEnd");
            const onDrop = Symbol("onDrop");
            const reset = Symbol("reset");
            class DragSensor extends _Sensor2.default {
              constructor(containers = [], options = {}) {
                super(containers, options);
                this.mouseDownTimeout = null;
                this.draggableElement = null;
                this.nativeDraggableElement = null;
                this[onMouseDown] = this[onMouseDown].bind(this);
                this[onMouseUp] = this[onMouseUp].bind(this);
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragOver] = this[onDragOver].bind(this);
                this[onDragEnd] = this[onDragEnd].bind(this);
                this[onDrop] = this[onDrop].bind(this);
              }
              attach() {
                document.addEventListener("mousedown", this[onMouseDown], true);
              }
              detach() {
                document.removeEventListener("mousedown", this[onMouseDown], true);
              }
              [onDragStart](event) {
                event.dataTransfer.setData("text", "");
                event.dataTransfer.effectAllowed = this.options.type;
                const target = document.elementFromPoint(event.clientX, event.clientY);
                this.currentContainer = (0, _utils.closest)(event.target, this.containers);
                if (!this.currentContainer) {
                  return;
                }
                const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                setTimeout(() => {
                  this.trigger(this.currentContainer, dragStartEvent);
                  if (dragStartEvent.canceled()) {
                    this.dragging = false;
                  } else {
                    this.dragging = true;
                  }
                }, 0);
              }
              [onDragOver](event) {
                if (!this.dragging) {
                  return;
                }
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const container = this.currentContainer;
                const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container,
                  originalEvent: event
                });
                this.trigger(container, dragMoveEvent);
                if (!dragMoveEvent.canceled()) {
                  event.preventDefault();
                  event.dataTransfer.dropEffect = this.options.type;
                }
              }
              [onDragEnd](event) {
                if (!this.dragging) {
                  return;
                }
                document.removeEventListener("mouseup", this[onMouseUp], true);
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const container = this.currentContainer;
                const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container,
                  originalEvent: event
                });
                this.trigger(container, dragStopEvent);
                this.dragging = false;
                this[reset]();
              }
              [onDrop](event) {
                event.preventDefault();
              }
              [onMouseDown](event) {
                if (event.target && (event.target.form || event.target.contenteditable)) {
                  return;
                }
                const nativeDraggableElement = (0, _utils.closest)(event.target, (element) => element.draggable);
                if (nativeDraggableElement) {
                  nativeDraggableElement.draggable = false;
                  this.nativeDraggableElement = nativeDraggableElement;
                }
                document.addEventListener("mouseup", this[onMouseUp], true);
                document.addEventListener("dragstart", this[onDragStart], false);
                document.addEventListener("dragover", this[onDragOver], false);
                document.addEventListener("dragend", this[onDragEnd], false);
                document.addEventListener("drop", this[onDrop], false);
                const target = (0, _utils.closest)(event.target, this.options.draggable);
                if (!target) {
                  return;
                }
                this.mouseDownTimeout = setTimeout(() => {
                  target.draggable = true;
                  this.draggableElement = target;
                }, this.options.delay);
              }
              [onMouseUp]() {
                this[reset]();
              }
              [reset]() {
                clearTimeout(this.mouseDownTimeout);
                document.removeEventListener("mouseup", this[onMouseUp], true);
                document.removeEventListener("dragstart", this[onDragStart], false);
                document.removeEventListener("dragover", this[onDragOver], false);
                document.removeEventListener("dragend", this[onDragEnd], false);
                document.removeEventListener("drop", this[onDrop], false);
                if (this.nativeDraggableElement) {
                  this.nativeDraggableElement.draggable = true;
                  this.nativeDraggableElement = null;
                }
                if (this.draggableElement) {
                  this.draggableElement.draggable = false;
                  this.draggableElement = null;
                }
              }
            }
            exports2.default = DragSensor;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _DragSensor = __webpack_require__(40);
            var _DragSensor2 = _interopRequireDefault(_DragSensor);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _DragSensor2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _utils = __webpack_require__(2);
            var _Sensor = __webpack_require__(4);
            var _Sensor2 = _interopRequireDefault(_Sensor);
            var _SensorEvent = __webpack_require__(3);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onTouchStart = Symbol("onTouchStart");
            const onTouchHold = Symbol("onTouchHold");
            const onTouchEnd = Symbol("onTouchEnd");
            const onTouchMove = Symbol("onTouchMove");
            let preventScrolling = false;
            window.addEventListener("touchmove", (event) => {
              if (!preventScrolling) {
                return;
              }
              event.preventDefault();
            }, { passive: false });
            class TouchSensor extends _Sensor2.default {
              constructor(containers = [], options = {}) {
                super(containers, options);
                this.currentScrollableParent = null;
                this.tapTimeout = null;
                this.touchMoved = false;
                this[onTouchStart] = this[onTouchStart].bind(this);
                this[onTouchHold] = this[onTouchHold].bind(this);
                this[onTouchEnd] = this[onTouchEnd].bind(this);
                this[onTouchMove] = this[onTouchMove].bind(this);
              }
              attach() {
                document.addEventListener("touchstart", this[onTouchStart]);
              }
              detach() {
                document.removeEventListener("touchstart", this[onTouchStart]);
              }
              [onTouchStart](event) {
                const container = (0, _utils.closest)(event.target, this.containers);
                if (!container) {
                  return;
                }
                document.addEventListener("touchmove", this[onTouchMove]);
                document.addEventListener("touchend", this[onTouchEnd]);
                document.addEventListener("touchcancel", this[onTouchEnd]);
                container.addEventListener("contextmenu", onContextMenu);
                this.currentContainer = container;
                this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);
              }
              [onTouchHold](event, container) {
                return () => {
                  if (this.touchMoved) {
                    return;
                  }
                  const touch = event.touches[0] || event.changedTouches[0];
                  const target = event.target;
                  const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                    clientX: touch.pageX,
                    clientY: touch.pageY,
                    target,
                    container,
                    originalEvent: event
                  });
                  this.trigger(container, dragStartEvent);
                  this.dragging = !dragStartEvent.canceled();
                  preventScrolling = this.dragging;
                };
              }
              [onTouchMove](event) {
                this.touchMoved = true;
                if (!this.dragging) {
                  return;
                }
                const touch = event.touches[0] || event.changedTouches[0];
                const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
                const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                  clientX: touch.pageX,
                  clientY: touch.pageY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragMoveEvent);
              }
              [onTouchEnd](event) {
                this.touchMoved = false;
                preventScrolling = false;
                document.removeEventListener("touchend", this[onTouchEnd]);
                document.removeEventListener("touchcancel", this[onTouchEnd]);
                document.removeEventListener("touchmove", this[onTouchMove]);
                if (this.currentContainer) {
                  this.currentContainer.removeEventListener("contextmenu", onContextMenu);
                }
                clearTimeout(this.tapTimeout);
                if (!this.dragging) {
                  return;
                }
                const touch = event.touches[0] || event.changedTouches[0];
                const target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);
                event.preventDefault();
                const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                  clientX: touch.pageX,
                  clientY: touch.pageY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragStopEvent);
                this.currentContainer = null;
                this.dragging = false;
              }
            }
            exports2.default = TouchSensor;
            function onContextMenu(event) {
              event.preventDefault();
              event.stopPropagation();
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _TouchSensor = __webpack_require__(42);
            var _TouchSensor2 = _interopRequireDefault(_TouchSensor);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _TouchSensor2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.DragPressureSensorEvent = exports2.DragStopSensorEvent = exports2.DragMoveSensorEvent = exports2.DragStartSensorEvent = exports2.SensorEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class SensorEvent extends _AbstractEvent2.default {
              get originalEvent() {
                return this.data.originalEvent;
              }
              get clientX() {
                return this.data.clientX;
              }
              get clientY() {
                return this.data.clientY;
              }
              get target() {
                return this.data.target;
              }
              get container() {
                return this.data.container;
              }
              get pressure() {
                return this.data.pressure;
              }
            }
            exports2.SensorEvent = SensorEvent;
            class DragStartSensorEvent extends SensorEvent {
            }
            exports2.DragStartSensorEvent = DragStartSensorEvent;
            DragStartSensorEvent.type = "drag:start";
            class DragMoveSensorEvent extends SensorEvent {
            }
            exports2.DragMoveSensorEvent = DragMoveSensorEvent;
            DragMoveSensorEvent.type = "drag:move";
            class DragStopSensorEvent extends SensorEvent {
            }
            exports2.DragStopSensorEvent = DragStopSensorEvent;
            DragStopSensorEvent.type = "drag:stop";
            class DragPressureSensorEvent extends SensorEvent {
            }
            exports2.DragPressureSensorEvent = DragPressureSensorEvent;
            DragPressureSensorEvent.type = "drag:pressure";
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _utils = __webpack_require__(2);
            var _Sensor = __webpack_require__(4);
            var _Sensor2 = _interopRequireDefault(_Sensor);
            var _SensorEvent = __webpack_require__(3);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onContextMenuWhileDragging = Symbol("onContextMenuWhileDragging");
            const onMouseDown = Symbol("onMouseDown");
            const onMouseMove = Symbol("onMouseMove");
            const onMouseUp = Symbol("onMouseUp");
            class MouseSensor extends _Sensor2.default {
              constructor(containers = [], options = {}) {
                super(containers, options);
                this.mouseDown = false;
                this.mouseDownTimeout = null;
                this.openedContextMenu = false;
                this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
                this[onMouseDown] = this[onMouseDown].bind(this);
                this[onMouseMove] = this[onMouseMove].bind(this);
                this[onMouseUp] = this[onMouseUp].bind(this);
              }
              attach() {
                document.addEventListener("mousedown", this[onMouseDown], true);
              }
              detach() {
                document.removeEventListener("mousedown", this[onMouseDown], true);
              }
              [onMouseDown](event) {
                if (event.button !== 0 || event.ctrlKey || event.metaKey) {
                  return;
                }
                document.addEventListener("mouseup", this[onMouseUp]);
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const container = (0, _utils.closest)(target, this.containers);
                if (!container) {
                  return;
                }
                document.addEventListener("dragstart", preventNativeDragStart);
                this.mouseDown = true;
                clearTimeout(this.mouseDownTimeout);
                this.mouseDownTimeout = setTimeout(() => {
                  if (!this.mouseDown) {
                    return;
                  }
                  const dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                    clientX: event.clientX,
                    clientY: event.clientY,
                    target,
                    container,
                    originalEvent: event
                  });
                  this.trigger(container, dragStartEvent);
                  this.currentContainer = container;
                  this.dragging = !dragStartEvent.canceled();
                  if (this.dragging) {
                    document.addEventListener("contextmenu", this[onContextMenuWhileDragging]);
                    document.addEventListener("mousemove", this[onMouseMove]);
                  }
                }, this.options.delay);
              }
              [onMouseMove](event) {
                if (!this.dragging) {
                  return;
                }
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragMoveEvent);
              }
              [onMouseUp](event) {
                this.mouseDown = Boolean(this.openedContextMenu);
                if (this.openedContextMenu) {
                  this.openedContextMenu = false;
                  return;
                }
                document.removeEventListener("mouseup", this[onMouseUp]);
                document.removeEventListener("dragstart", preventNativeDragStart);
                if (!this.dragging) {
                  return;
                }
                const target = document.elementFromPoint(event.clientX, event.clientY);
                const dragStopEvent = new _SensorEvent.DragStopSensorEvent({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  target,
                  container: this.currentContainer,
                  originalEvent: event
                });
                this.trigger(this.currentContainer, dragStopEvent);
                document.removeEventListener("contextmenu", this[onContextMenuWhileDragging]);
                document.removeEventListener("mousemove", this[onMouseMove]);
                this.currentContainer = null;
                this.dragging = false;
              }
              [onContextMenuWhileDragging](event) {
                event.preventDefault();
                this.openedContextMenu = true;
              }
            }
            exports2.default = MouseSensor;
            function preventNativeDragStart(event) {
              event.preventDefault();
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _MouseSensor = __webpack_require__(45);
            var _MouseSensor2 = _interopRequireDefault(_MouseSensor);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _MouseSensor2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            class Sensor {
              constructor(containers = [], options = {}) {
                this.containers = [...containers];
                this.options = _extends({}, options);
                this.dragging = false;
                this.currentContainer = null;
              }
              attach() {
                return this;
              }
              detach() {
                return this;
              }
              addContainer(...containers) {
                this.containers = [...this.containers, ...containers];
              }
              removeContainer(...containers) {
                this.containers = this.containers.filter((container) => !containers.includes(container));
              }
              trigger(element, sensorEvent) {
                const event = document.createEvent("Event");
                event.detail = sensorEvent;
                event.initEvent(sensorEvent.type, true, true);
                element.dispatchEvent(event);
                this.lastEvent = sensorEvent;
                return sensorEvent;
              }
            }
            exports2.default = Sensor;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = requestNextAnimationFrame;
            function requestNextAnimationFrame(callback) {
              return requestAnimationFrame(() => {
                requestAnimationFrame(callback);
              });
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _requestNextAnimationFrame = __webpack_require__(48);
            var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _requestNextAnimationFrame2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.default = closest;
            const matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
            function closest(element, value) {
              if (!element) {
                return null;
              }
              const selector = value;
              const callback = value;
              const nodeList = value;
              const singleElement = value;
              const isSelector = Boolean(typeof value === "string");
              const isFunction = Boolean(typeof value === "function");
              const isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
              const isElement = Boolean(value instanceof HTMLElement);
              function conditionFn(currentElement) {
                if (!currentElement) {
                  return currentElement;
                } else if (isSelector) {
                  return matchFunction.call(currentElement, selector);
                } else if (isNodeList) {
                  return [...nodeList].includes(currentElement);
                } else if (isElement) {
                  return singleElement === currentElement;
                } else if (isFunction) {
                  return callback(currentElement);
                } else {
                  return null;
                }
              }
              let current = element;
              do {
                current = current.correspondingUseElement || current.correspondingElement || current;
                if (conditionFn(current)) {
                  return current;
                }
                current = current.parentNode;
              } while (current && current !== document.body && current !== document);
              return null;
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _closest = __webpack_require__(50);
            var _closest2 = _interopRequireDefault(_closest);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _closest2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = exports2.scroll = exports2.onDragStop = exports2.onDragMove = exports2.onDragStart = void 0;
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            var _utils = __webpack_require__(2);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onDragStart = exports2.onDragStart = Symbol("onDragStart");
            const onDragMove = exports2.onDragMove = Symbol("onDragMove");
            const onDragStop = exports2.onDragStop = Symbol("onDragStop");
            const scroll = exports2.scroll = Symbol("scroll");
            const defaultOptions = exports2.defaultOptions = {
              speed: 6,
              sensitivity: 50,
              scrollableElements: []
            };
            class Scrollable extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.options = _extends({}, defaultOptions, this.getOptions());
                this.currentMousePosition = null;
                this.scrollAnimationFrame = null;
                this.scrollableElement = null;
                this.findScrollableElementFrame = null;
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragMove] = this[onDragMove].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this[scroll] = this[scroll].bind(this);
              }
              attach() {
                this.draggable.on("drag:start", this[onDragStart]).on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]);
              }
              detach() {
                this.draggable.off("drag:start", this[onDragStart]).off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]);
              }
              getOptions() {
                return this.draggable.options.scrollable || {};
              }
              getScrollableElement(target) {
                if (this.hasDefinedScrollableElements()) {
                  return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
                } else {
                  return closestScrollableElement(target);
                }
              }
              hasDefinedScrollableElements() {
                return Boolean(this.options.scrollableElements.length !== 0);
              }
              [onDragStart](dragEvent) {
                this.findScrollableElementFrame = requestAnimationFrame(() => {
                  this.scrollableElement = this.getScrollableElement(dragEvent.source);
                });
              }
              [onDragMove](dragEvent) {
                this.findScrollableElementFrame = requestAnimationFrame(() => {
                  this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
                });
                if (!this.scrollableElement) {
                  return;
                }
                const sensorEvent = dragEvent.sensorEvent;
                const scrollOffset = { x: 0, y: 0 };
                if ("ontouchstart" in window) {
                  scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                  scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                }
                this.currentMousePosition = {
                  clientX: sensorEvent.clientX - scrollOffset.x,
                  clientY: sensorEvent.clientY - scrollOffset.y
                };
                this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
              }
              [onDragStop]() {
                cancelAnimationFrame(this.scrollAnimationFrame);
                cancelAnimationFrame(this.findScrollableElementFrame);
                this.scrollableElement = null;
                this.scrollAnimationFrame = null;
                this.findScrollableElementFrame = null;
                this.currentMousePosition = null;
              }
              [scroll]() {
                if (!this.scrollableElement || !this.currentMousePosition) {
                  return;
                }
                cancelAnimationFrame(this.scrollAnimationFrame);
                const { speed, sensitivity } = this.options;
                const rect = this.scrollableElement.getBoundingClientRect();
                const bottomCutOff = rect.bottom > window.innerHeight;
                const topCutOff = rect.top < 0;
                const cutOff = topCutOff || bottomCutOff;
                const documentScrollingElement = getDocumentScrollingElement();
                const scrollableElement = this.scrollableElement;
                const clientX = this.currentMousePosition.clientX;
                const clientY = this.currentMousePosition.clientY;
                if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
                  const { offsetHeight, offsetWidth } = scrollableElement;
                  if (rect.top + offsetHeight - clientY < sensitivity) {
                    scrollableElement.scrollTop += speed;
                  } else if (clientY - rect.top < sensitivity) {
                    scrollableElement.scrollTop -= speed;
                  }
                  if (rect.left + offsetWidth - clientX < sensitivity) {
                    scrollableElement.scrollLeft += speed;
                  } else if (clientX - rect.left < sensitivity) {
                    scrollableElement.scrollLeft -= speed;
                  }
                } else {
                  const { innerHeight, innerWidth } = window;
                  if (clientY < sensitivity) {
                    documentScrollingElement.scrollTop -= speed;
                  } else if (innerHeight - clientY < sensitivity) {
                    documentScrollingElement.scrollTop += speed;
                  }
                  if (clientX < sensitivity) {
                    documentScrollingElement.scrollLeft -= speed;
                  } else if (innerWidth - clientX < sensitivity) {
                    documentScrollingElement.scrollLeft += speed;
                  }
                }
                this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
              }
            }
            exports2.default = Scrollable;
            function hasOverflow(element) {
              const overflowRegex = /(auto|scroll)/;
              const computedStyles = getComputedStyle(element, null);
              const overflow = computedStyles.getPropertyValue("overflow") + computedStyles.getPropertyValue("overflow-y") + computedStyles.getPropertyValue("overflow-x");
              return overflowRegex.test(overflow);
            }
            function isStaticallyPositioned(element) {
              const position = getComputedStyle(element).getPropertyValue("position");
              return position === "static";
            }
            function closestScrollableElement(element) {
              if (!element) {
                return getDocumentScrollingElement();
              }
              const position = getComputedStyle(element).getPropertyValue("position");
              const excludeStaticParents = position === "absolute";
              const scrollableElement = (0, _utils.closest)(element, (parent) => {
                if (excludeStaticParents && isStaticallyPositioned(parent)) {
                  return false;
                }
                return hasOverflow(parent);
              });
              if (position === "fixed" || !scrollableElement) {
                return getDocumentScrollingElement();
              } else {
                return scrollableElement;
              }
            }
            function getDocumentScrollingElement() {
              return document.scrollingElement || document.documentElement;
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _Scrollable = __webpack_require__(52);
            var _Scrollable2 = _interopRequireDefault(_Scrollable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Scrollable2.default;
            exports2.defaultOptions = _Scrollable.defaultOptions;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.MirrorDestroyEvent = exports2.MirrorMoveEvent = exports2.MirrorAttachedEvent = exports2.MirrorCreatedEvent = exports2.MirrorCreateEvent = exports2.MirrorEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class MirrorEvent extends _AbstractEvent2.default {
              get source() {
                return this.data.source;
              }
              get originalSource() {
                return this.data.originalSource;
              }
              get sourceContainer() {
                return this.data.sourceContainer;
              }
              get sensorEvent() {
                return this.data.sensorEvent;
              }
              get dragEvent() {
                return this.data.dragEvent;
              }
              get originalEvent() {
                if (this.sensorEvent) {
                  return this.sensorEvent.originalEvent;
                }
                return null;
              }
            }
            exports2.MirrorEvent = MirrorEvent;
            class MirrorCreateEvent extends MirrorEvent {
            }
            exports2.MirrorCreateEvent = MirrorCreateEvent;
            MirrorCreateEvent.type = "mirror:create";
            class MirrorCreatedEvent extends MirrorEvent {
              get mirror() {
                return this.data.mirror;
              }
            }
            exports2.MirrorCreatedEvent = MirrorCreatedEvent;
            MirrorCreatedEvent.type = "mirror:created";
            class MirrorAttachedEvent extends MirrorEvent {
              get mirror() {
                return this.data.mirror;
              }
            }
            exports2.MirrorAttachedEvent = MirrorAttachedEvent;
            MirrorAttachedEvent.type = "mirror:attached";
            class MirrorMoveEvent extends MirrorEvent {
              get mirror() {
                return this.data.mirror;
              }
            }
            exports2.MirrorMoveEvent = MirrorMoveEvent;
            MirrorMoveEvent.type = "mirror:move";
            MirrorMoveEvent.cancelable = true;
            class MirrorDestroyEvent extends MirrorEvent {
              get mirror() {
                return this.data.mirror;
              }
            }
            exports2.MirrorDestroyEvent = MirrorDestroyEvent;
            MirrorDestroyEvent.type = "mirror:destroy";
            MirrorDestroyEvent.cancelable = true;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _MirrorEvent = __webpack_require__(54);
            Object.keys(_MirrorEvent).forEach(function(key) {
              if (key === "default" || key === "__esModule")
                return;
              Object.defineProperty(exports2, key, {
                enumerable: true,
                get: function() {
                  return _MirrorEvent[key];
                }
              });
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = exports2.getAppendableContainer = exports2.onScroll = exports2.onMirrorMove = exports2.onMirrorCreated = exports2.onDragStop = exports2.onDragMove = exports2.onDragStart = void 0;
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            var _MirrorEvent = __webpack_require__(55);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            function _objectWithoutProperties(obj, keys) {
              var target = {};
              for (var i in obj) {
                if (keys.indexOf(i) >= 0)
                  continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i))
                  continue;
                target[i] = obj[i];
              }
              return target;
            }
            const onDragStart = exports2.onDragStart = Symbol("onDragStart");
            const onDragMove = exports2.onDragMove = Symbol("onDragMove");
            const onDragStop = exports2.onDragStop = Symbol("onDragStop");
            const onMirrorCreated = exports2.onMirrorCreated = Symbol("onMirrorCreated");
            const onMirrorMove = exports2.onMirrorMove = Symbol("onMirrorMove");
            const onScroll = exports2.onScroll = Symbol("onScroll");
            const getAppendableContainer = exports2.getAppendableContainer = Symbol("getAppendableContainer");
            const defaultOptions = exports2.defaultOptions = {
              constrainDimensions: false,
              xAxis: true,
              yAxis: true,
              cursorOffsetX: null,
              cursorOffsetY: null
            };
            class Mirror extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.options = _extends({}, defaultOptions, this.getOptions());
                this.scrollOffset = { x: 0, y: 0 };
                this.initialScrollOffset = {
                  x: window.scrollX,
                  y: window.scrollY
                };
                this[onDragStart] = this[onDragStart].bind(this);
                this[onDragMove] = this[onDragMove].bind(this);
                this[onDragStop] = this[onDragStop].bind(this);
                this[onMirrorCreated] = this[onMirrorCreated].bind(this);
                this[onMirrorMove] = this[onMirrorMove].bind(this);
                this[onScroll] = this[onScroll].bind(this);
              }
              attach() {
                this.draggable.on("drag:start", this[onDragStart]).on("drag:move", this[onDragMove]).on("drag:stop", this[onDragStop]).on("mirror:created", this[onMirrorCreated]).on("mirror:move", this[onMirrorMove]);
              }
              detach() {
                this.draggable.off("drag:start", this[onDragStart]).off("drag:move", this[onDragMove]).off("drag:stop", this[onDragStop]).off("mirror:created", this[onMirrorCreated]).off("mirror:move", this[onMirrorMove]);
              }
              getOptions() {
                return this.draggable.options.mirror || {};
              }
              [onDragStart](dragEvent) {
                if (dragEvent.canceled()) {
                  return;
                }
                if ("ontouchstart" in window) {
                  document.addEventListener("scroll", this[onScroll], true);
                }
                this.initialScrollOffset = {
                  x: window.scrollX,
                  y: window.scrollY
                };
                const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;
                const mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
                  source,
                  originalSource,
                  sourceContainer,
                  sensorEvent,
                  dragEvent
                });
                this.draggable.trigger(mirrorCreateEvent);
                if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
                  return;
                }
                const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
                this.mirror = source.cloneNode(true);
                const mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
                  source,
                  originalSource,
                  sourceContainer,
                  sensorEvent,
                  dragEvent,
                  mirror: this.mirror
                });
                const mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
                  source,
                  originalSource,
                  sourceContainer,
                  sensorEvent,
                  dragEvent,
                  mirror: this.mirror
                });
                this.draggable.trigger(mirrorCreatedEvent);
                appendableContainer.appendChild(this.mirror);
                this.draggable.trigger(mirrorAttachedEvent);
              }
              [onDragMove](dragEvent) {
                if (!this.mirror || dragEvent.canceled()) {
                  return;
                }
                const { source, originalSource, sourceContainer, sensorEvent } = dragEvent;
                const mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
                  source,
                  originalSource,
                  sourceContainer,
                  sensorEvent,
                  dragEvent,
                  mirror: this.mirror
                });
                this.draggable.trigger(mirrorMoveEvent);
              }
              [onDragStop](dragEvent) {
                if ("ontouchstart" in window) {
                  document.removeEventListener("scroll", this[onScroll], true);
                }
                this.initialScrollOffset = { x: 0, y: 0 };
                this.scrollOffset = { x: 0, y: 0 };
                if (!this.mirror) {
                  return;
                }
                const { source, sourceContainer, sensorEvent } = dragEvent;
                const mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
                  source,
                  mirror: this.mirror,
                  sourceContainer,
                  sensorEvent,
                  dragEvent
                });
                this.draggable.trigger(mirrorDestroyEvent);
                if (!mirrorDestroyEvent.canceled()) {
                  this.mirror.parentNode.removeChild(this.mirror);
                }
              }
              [onScroll]() {
                this.scrollOffset = {
                  x: window.scrollX - this.initialScrollOffset.x,
                  y: window.scrollY - this.initialScrollOffset.y
                };
              }
              [onMirrorCreated]({ mirror, source, sensorEvent }) {
                const mirrorClass = this.draggable.getClassNameFor("mirror");
                const setState = (_ref) => {
                  let { mirrorOffset, initialX, initialY } = _ref, args = _objectWithoutProperties(_ref, ["mirrorOffset", "initialX", "initialY"]);
                  this.mirrorOffset = mirrorOffset;
                  this.initialX = initialX;
                  this.initialY = initialY;
                  return _extends({ mirrorOffset, initialX, initialY }, args);
                };
                const initialState = {
                  mirror,
                  source,
                  sensorEvent,
                  mirrorClass,
                  scrollOffset: this.scrollOffset,
                  options: this.options
                };
                return Promise.resolve(initialState).then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);
              }
              [onMirrorMove](mirrorEvent) {
                if (mirrorEvent.canceled()) {
                  return null;
                }
                const initialState = {
                  mirror: mirrorEvent.mirror,
                  sensorEvent: mirrorEvent.sensorEvent,
                  mirrorOffset: this.mirrorOffset,
                  options: this.options,
                  initialX: this.initialX,
                  initialY: this.initialY,
                  scrollOffset: this.scrollOffset
                };
                return Promise.resolve(initialState).then(positionMirror({ raf: true }));
              }
              [getAppendableContainer](source) {
                const appendTo = this.options.appendTo;
                if (typeof appendTo === "string") {
                  return document.querySelector(appendTo);
                } else if (appendTo instanceof HTMLElement) {
                  return appendTo;
                } else if (typeof appendTo === "function") {
                  return appendTo(source);
                } else {
                  return source.parentNode;
                }
              }
            }
            exports2.default = Mirror;
            function computeMirrorDimensions(_ref2) {
              let { source } = _ref2, args = _objectWithoutProperties(_ref2, ["source"]);
              return withPromise((resolve) => {
                const sourceRect = source.getBoundingClientRect();
                resolve(_extends({ source, sourceRect }, args));
              });
            }
            function calculateMirrorOffset(_ref3) {
              let { sensorEvent, sourceRect, options } = _ref3, args = _objectWithoutProperties(_ref3, ["sensorEvent", "sourceRect", "options"]);
              return withPromise((resolve) => {
                const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
                const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
                const mirrorOffset = { top, left };
                resolve(_extends({ sensorEvent, sourceRect, mirrorOffset, options }, args));
              });
            }
            function resetMirror(_ref4) {
              let { mirror, source, options } = _ref4, args = _objectWithoutProperties(_ref4, ["mirror", "source", "options"]);
              return withPromise((resolve) => {
                let offsetHeight;
                let offsetWidth;
                if (options.constrainDimensions) {
                  const computedSourceStyles = getComputedStyle(source);
                  offsetHeight = computedSourceStyles.getPropertyValue("height");
                  offsetWidth = computedSourceStyles.getPropertyValue("width");
                }
                mirror.style.position = "fixed";
                mirror.style.pointerEvents = "none";
                mirror.style.top = 0;
                mirror.style.left = 0;
                mirror.style.margin = 0;
                if (options.constrainDimensions) {
                  mirror.style.height = offsetHeight;
                  mirror.style.width = offsetWidth;
                }
                resolve(_extends({ mirror, source, options }, args));
              });
            }
            function addMirrorClasses(_ref5) {
              let { mirror, mirrorClass } = _ref5, args = _objectWithoutProperties(_ref5, ["mirror", "mirrorClass"]);
              return withPromise((resolve) => {
                mirror.classList.add(mirrorClass);
                resolve(_extends({ mirror, mirrorClass }, args));
              });
            }
            function removeMirrorID(_ref6) {
              let { mirror } = _ref6, args = _objectWithoutProperties(_ref6, ["mirror"]);
              return withPromise((resolve) => {
                mirror.removeAttribute("id");
                delete mirror.id;
                resolve(_extends({ mirror }, args));
              });
            }
            function positionMirror({ withFrame = false, initial = false } = {}) {
              return (_ref7) => {
                let { mirror, sensorEvent, mirrorOffset, initialY, initialX, scrollOffset, options } = _ref7, args = _objectWithoutProperties(_ref7, ["mirror", "sensorEvent", "mirrorOffset", "initialY", "initialX", "scrollOffset", "options"]);
                return withPromise((resolve) => {
                  const result = _extends({
                    mirror,
                    sensorEvent,
                    mirrorOffset,
                    options
                  }, args);
                  if (mirrorOffset) {
                    const x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;
                    const y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;
                    if (options.xAxis && options.yAxis || initial) {
                      mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                    } else if (options.xAxis && !options.yAxis) {
                      mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
                    } else if (options.yAxis && !options.xAxis) {
                      mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
                    }
                    if (initial) {
                      result.initialX = x;
                      result.initialY = y;
                    }
                  }
                  resolve(result);
                }, { frame: withFrame });
              };
            }
            function withPromise(callback, { raf = false } = {}) {
              return new Promise((resolve, reject) => {
                if (raf) {
                  requestAnimationFrame(() => {
                    callback(resolve, reject);
                  });
                } else {
                  callback(resolve, reject);
                }
              });
            }
            function isNativeDragEvent(sensorEvent) {
              return /^drag/.test(sensorEvent.originalEvent.type);
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _Mirror = __webpack_require__(56);
            var _Mirror2 = _interopRequireDefault(_Mirror);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Mirror2.default;
            exports2.defaultOptions = _Mirror.defaultOptions;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onInitialize = Symbol("onInitialize");
            const onDestroy = Symbol("onDestroy");
            const defaultOptions = {};
            class Focusable extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.options = _extends({}, defaultOptions, this.getOptions());
                this[onInitialize] = this[onInitialize].bind(this);
                this[onDestroy] = this[onDestroy].bind(this);
              }
              attach() {
                this.draggable.on("draggable:initialize", this[onInitialize]).on("draggable:destroy", this[onDestroy]);
              }
              detach() {
                this.draggable.off("draggable:initialize", this[onInitialize]).off("draggable:destroy", this[onDestroy]);
              }
              getOptions() {
                return this.draggable.options.focusable || {};
              }
              getElements() {
                return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
              }
              [onInitialize]() {
                requestAnimationFrame(() => {
                  this.getElements().forEach((element) => decorateElement(element));
                });
              }
              [onDestroy]() {
                requestAnimationFrame(() => {
                  this.getElements().forEach((element) => stripElement(element));
                });
              }
            }
            exports2.default = Focusable;
            const elementsWithMissingTabIndex = [];
            function decorateElement(element) {
              const hasMissingTabIndex = Boolean(!element.getAttribute("tabindex") && element.tabIndex === -1);
              if (hasMissingTabIndex) {
                elementsWithMissingTabIndex.push(element);
                element.tabIndex = 0;
              }
            }
            function stripElement(element) {
              const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
              if (tabIndexElementPosition !== -1) {
                element.tabIndex = -1;
                elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
              }
            }
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _Focusable = __webpack_require__(58);
            var _Focusable2 = _interopRequireDefault(_Focusable);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Focusable2.default;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            class AbstractPlugin {
              constructor(draggable) {
                this.draggable = draggable;
              }
              attach() {
                throw new Error("Not Implemented");
              }
              detach() {
                throw new Error("Not Implemented");
              }
            }
            exports2.default = AbstractPlugin;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            const onInitialize = Symbol("onInitialize");
            const onDestroy = Symbol("onDestroy");
            const announceEvent = Symbol("announceEvent");
            const announceMessage = Symbol("announceMessage");
            const ARIA_RELEVANT = "aria-relevant";
            const ARIA_ATOMIC = "aria-atomic";
            const ARIA_LIVE = "aria-live";
            const ROLE = "role";
            const defaultOptions = exports2.defaultOptions = {
              expire: 7e3
            };
            class Announcement extends _AbstractPlugin2.default {
              constructor(draggable) {
                super(draggable);
                this.options = _extends({}, defaultOptions, this.getOptions());
                this.originalTriggerMethod = this.draggable.trigger;
                this[onInitialize] = this[onInitialize].bind(this);
                this[onDestroy] = this[onDestroy].bind(this);
              }
              attach() {
                this.draggable.on("draggable:initialize", this[onInitialize]);
              }
              detach() {
                this.draggable.off("draggable:destroy", this[onDestroy]);
              }
              getOptions() {
                return this.draggable.options.announcements || {};
              }
              [announceEvent](event) {
                const message = this.options[event.type];
                if (message && typeof message === "string") {
                  this[announceMessage](message);
                }
                if (message && typeof message === "function") {
                  this[announceMessage](message(event));
                }
              }
              [announceMessage](message) {
                announce(message, { expire: this.options.expire });
              }
              [onInitialize]() {
                this.draggable.trigger = (event) => {
                  try {
                    this[announceEvent](event);
                  } finally {
                    this.originalTriggerMethod.call(this.draggable, event);
                  }
                };
              }
              [onDestroy]() {
                this.draggable.trigger = this.originalTriggerMethod;
              }
            }
            exports2.default = Announcement;
            const liveRegion = createRegion();
            function announce(message, { expire }) {
              const element = document.createElement("div");
              element.textContent = message;
              liveRegion.appendChild(element);
              return setTimeout(() => {
                liveRegion.removeChild(element);
              }, expire);
            }
            function createRegion() {
              const element = document.createElement("div");
              element.setAttribute("id", "draggable-live-region");
              element.setAttribute(ARIA_RELEVANT, "additions");
              element.setAttribute(ARIA_ATOMIC, "true");
              element.setAttribute(ARIA_LIVE, "assertive");
              element.setAttribute(ROLE, "log");
              element.style.position = "fixed";
              element.style.width = "1px";
              element.style.height = "1px";
              element.style.top = "-1px";
              element.style.overflow = "hidden";
              return element;
            }
            document.addEventListener("DOMContentLoaded", () => {
              document.body.appendChild(liveRegion);
            });
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.defaultOptions = void 0;
            var _Announcement = __webpack_require__(61);
            var _Announcement2 = _interopRequireDefault(_Announcement);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.default = _Announcement2.default;
            exports2.defaultOptions = _Announcement.defaultOptions;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.DraggableDestroyEvent = exports2.DraggableInitializedEvent = exports2.DraggableEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class DraggableEvent extends _AbstractEvent2.default {
              get draggable() {
                return this.data.draggable;
              }
            }
            exports2.DraggableEvent = DraggableEvent;
            DraggableEvent.type = "draggable";
            class DraggableInitializedEvent extends DraggableEvent {
            }
            exports2.DraggableInitializedEvent = DraggableInitializedEvent;
            DraggableInitializedEvent.type = "draggable:initialize";
            class DraggableDestroyEvent extends DraggableEvent {
            }
            exports2.DraggableDestroyEvent = DraggableDestroyEvent;
            DraggableDestroyEvent.type = "draggable:destroy";
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            var _extends = Object.assign || function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
            const canceled = Symbol("canceled");
            class AbstractEvent {
              constructor(data) {
                this[canceled] = false;
                this.data = data;
              }
              get type() {
                return this.constructor.type;
              }
              get cancelable() {
                return this.constructor.cancelable;
              }
              cancel() {
                this[canceled] = true;
              }
              canceled() {
                return Boolean(this[canceled]);
              }
              clone(data) {
                return new this.constructor(_extends({}, this.data, data));
              }
            }
            exports2.default = AbstractEvent;
            AbstractEvent.type = "event";
            AbstractEvent.cancelable = false;
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.DragStopEvent = exports2.DragPressureEvent = exports2.DragOutContainerEvent = exports2.DragOverContainerEvent = exports2.DragOutEvent = exports2.DragOverEvent = exports2.DragMoveEvent = exports2.DragStartEvent = exports2.DragEvent = void 0;
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            class DragEvent extends _AbstractEvent2.default {
              get source() {
                return this.data.source;
              }
              get originalSource() {
                return this.data.originalSource;
              }
              get mirror() {
                return this.data.mirror;
              }
              get sourceContainer() {
                return this.data.sourceContainer;
              }
              get sensorEvent() {
                return this.data.sensorEvent;
              }
              get originalEvent() {
                if (this.sensorEvent) {
                  return this.sensorEvent.originalEvent;
                }
                return null;
              }
            }
            exports2.DragEvent = DragEvent;
            DragEvent.type = "drag";
            class DragStartEvent extends DragEvent {
            }
            exports2.DragStartEvent = DragStartEvent;
            DragStartEvent.type = "drag:start";
            DragStartEvent.cancelable = true;
            class DragMoveEvent extends DragEvent {
            }
            exports2.DragMoveEvent = DragMoveEvent;
            DragMoveEvent.type = "drag:move";
            class DragOverEvent extends DragEvent {
              get overContainer() {
                return this.data.overContainer;
              }
              get over() {
                return this.data.over;
              }
            }
            exports2.DragOverEvent = DragOverEvent;
            DragOverEvent.type = "drag:over";
            DragOverEvent.cancelable = true;
            class DragOutEvent extends DragEvent {
              get overContainer() {
                return this.data.overContainer;
              }
              get over() {
                return this.data.over;
              }
            }
            exports2.DragOutEvent = DragOutEvent;
            DragOutEvent.type = "drag:out";
            class DragOverContainerEvent extends DragEvent {
              get overContainer() {
                return this.data.overContainer;
              }
            }
            exports2.DragOverContainerEvent = DragOverContainerEvent;
            DragOverContainerEvent.type = "drag:over:container";
            class DragOutContainerEvent extends DragEvent {
              get overContainer() {
                return this.data.overContainer;
              }
            }
            exports2.DragOutContainerEvent = DragOutContainerEvent;
            DragOutContainerEvent.type = "drag:out:container";
            class DragPressureEvent extends DragEvent {
              get pressure() {
                return this.data.pressure;
              }
            }
            exports2.DragPressureEvent = DragPressureEvent;
            DragPressureEvent.type = "drag:pressure";
            class DragStopEvent extends DragEvent {
            }
            exports2.DragStopEvent = DragStopEvent;
            DragStopEvent.type = "drag:stop";
          },
          function(module2, exports2, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            exports2.Plugins = exports2.Sensors = exports2.Sortable = exports2.Swappable = exports2.Droppable = exports2.Draggable = exports2.BasePlugin = exports2.BaseEvent = void 0;
            var _Draggable = __webpack_require__(5);
            Object.defineProperty(exports2, "Draggable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Draggable).default;
              }
            });
            var _Droppable = __webpack_require__(34);
            Object.defineProperty(exports2, "Droppable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Droppable).default;
              }
            });
            var _Swappable = __webpack_require__(31);
            Object.defineProperty(exports2, "Swappable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Swappable).default;
              }
            });
            var _Sortable = __webpack_require__(28);
            Object.defineProperty(exports2, "Sortable", {
              enumerable: true,
              get: function() {
                return _interopRequireDefault(_Sortable).default;
              }
            });
            var _AbstractEvent = __webpack_require__(0);
            var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);
            var _AbstractPlugin = __webpack_require__(1);
            var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);
            var _Sensors = __webpack_require__(6);
            var Sensors = _interopRequireWildcard(_Sensors);
            var _Plugins = __webpack_require__(25);
            var Plugins2 = _interopRequireWildcard(_Plugins);
            function _interopRequireWildcard(obj) {
              if (obj && obj.__esModule) {
                return obj;
              } else {
                var newObj = {};
                if (obj != null) {
                  for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key))
                      newObj[key] = obj[key];
                  }
                }
                newObj.default = obj;
                return newObj;
              }
            }
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            exports2.BaseEvent = _AbstractEvent2.default;
            exports2.BasePlugin = _AbstractPlugin2.default;
            exports2.Sensors = Sensors;
            exports2.Plugins = Plugins2;
          }
        ]);
      });
    }
  });

  // vendor/topbar.js
  var require_topbar = __commonJS({
    "vendor/topbar.js"(exports, module) {
      (function(window2, document2) {
        "use strict";
        (function() {
          var lastTime = 0;
          var vendors = ["ms", "moz", "webkit", "o"];
          for (var x = 0; x < vendors.length && !window2.requestAnimationFrame; ++x) {
            window2.requestAnimationFrame = window2[vendors[x] + "RequestAnimationFrame"];
            window2.cancelAnimationFrame = window2[vendors[x] + "CancelAnimationFrame"] || window2[vendors[x] + "CancelRequestAnimationFrame"];
          }
          if (!window2.requestAnimationFrame)
            window2.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window2.setTimeout(function() {
                callback(currTime + timeToCall);
              }, timeToCall);
              lastTime = currTime + timeToCall;
              return id;
            };
          if (!window2.cancelAnimationFrame)
            window2.cancelAnimationFrame = function(id) {
              clearTimeout(id);
            };
        })();
        var canvas, progressTimerId, fadeTimerId, currentProgress, showing, addEvent = function(elem, type, handler) {
          if (elem.addEventListener)
            elem.addEventListener(type, handler, false);
          else if (elem.attachEvent)
            elem.attachEvent("on" + type, handler);
          else
            elem["on" + type] = handler;
        }, options = {
          autoRun: true,
          barThickness: 3,
          barColors: {
            0: "rgba(26,  188, 156, .9)",
            ".25": "rgba(52,  152, 219, .9)",
            ".50": "rgba(241, 196, 15,  .9)",
            ".75": "rgba(230, 126, 34,  .9)",
            "1.0": "rgba(211, 84,  0,   .9)"
          },
          shadowBlur: 10,
          shadowColor: "rgba(0,   0,   0,   .6)",
          className: null
        }, repaint = function() {
          canvas.width = window2.innerWidth;
          canvas.height = options.barThickness * 5;
          var ctx = canvas.getContext("2d");
          ctx.shadowBlur = options.shadowBlur;
          ctx.shadowColor = options.shadowColor;
          var lineGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          for (var stop in options.barColors)
            lineGradient.addColorStop(stop, options.barColors[stop]);
          ctx.lineWidth = options.barThickness;
          ctx.beginPath();
          ctx.moveTo(0, options.barThickness / 2);
          ctx.lineTo(Math.ceil(currentProgress * canvas.width), options.barThickness / 2);
          ctx.strokeStyle = lineGradient;
          ctx.stroke();
        }, createCanvas = function() {
          canvas = document2.createElement("canvas");
          var style = canvas.style;
          style.position = "fixed";
          style.top = style.left = style.right = style.margin = style.padding = 0;
          style.zIndex = 100001;
          style.display = "none";
          if (options.className)
            canvas.classList.add(options.className);
          document2.body.appendChild(canvas);
          addEvent(window2, "resize", repaint);
        }, topbar2 = {
          config: function(opts) {
            for (var key in opts)
              if (options.hasOwnProperty(key))
                options[key] = opts[key];
          },
          show: function() {
            if (showing)
              return;
            showing = true;
            if (fadeTimerId !== null)
              window2.cancelAnimationFrame(fadeTimerId);
            if (!canvas)
              createCanvas();
            canvas.style.opacity = 1;
            canvas.style.display = "block";
            topbar2.progress(0);
            if (options.autoRun) {
              (function loop() {
                progressTimerId = window2.requestAnimationFrame(loop);
                topbar2.progress("+" + 0.05 * Math.pow(1 - Math.sqrt(currentProgress), 2));
              })();
            }
          },
          progress: function(to) {
            if (typeof to === "undefined")
              return currentProgress;
            if (typeof to === "string") {
              to = (to.indexOf("+") >= 0 || to.indexOf("-") >= 0 ? currentProgress : 0) + parseFloat(to);
            }
            currentProgress = to > 1 ? 1 : to;
            repaint();
            return currentProgress;
          },
          hide: function() {
            if (!showing)
              return;
            showing = false;
            if (progressTimerId != null) {
              window2.cancelAnimationFrame(progressTimerId);
              progressTimerId = null;
            }
            (function loop() {
              if (topbar2.progress("+.1") >= 1) {
                canvas.style.opacity -= 0.05;
                if (canvas.style.opacity <= 0.05) {
                  canvas.style.display = "none";
                  fadeTimerId = null;
                  return;
                }
              }
              fadeTimerId = window2.requestAnimationFrame(loop);
            })();
          }
        };
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = topbar2;
        } else if (typeof define === "function" && define.amd) {
          define(function() {
            return topbar2;
          });
        } else {
          this.topbar = topbar2;
        }
      }).call(exports, window, document);
    }
  });

  // node_modules/bootstrap-icons/font/bootstrap-icons.css
  var require_ = __commonJS({
    "node_modules/bootstrap-icons/font/bootstrap-icons.css"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/material-icons/iconfont/material-icons.css
  var require_2 = __commonJS({
    "node_modules/material-icons/iconfont/material-icons.css"(exports, module) {
      module.exports = {};
    }
  });

  // ../deps/phoenix_html/priv/static/phoenix_html.js
  "use strict";
  (function() {
    var PolyfillEvent = eventConstructor();
    function eventConstructor() {
      if (typeof window.CustomEvent === "function")
        return window.CustomEvent;
      function CustomEvent2(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: void 0 };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }
      CustomEvent2.prototype = window.Event.prototype;
      return CustomEvent2;
    }
    function buildHiddenInput(name, value) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      return input;
    }
    function handleClick(element, targetModifierKey) {
      var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), target = element.getAttribute("target");
      form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
      form.action = to;
      form.style.display = "hidden";
      if (target)
        form.target = target;
      else if (targetModifierKey)
        form.target = "_blank";
      form.appendChild(csrf);
      form.appendChild(method);
      document.body.appendChild(form);
      form.submit();
    }
    window.addEventListener("click", function(e) {
      var element = e.target;
      if (e.defaultPrevented)
        return;
      while (element && element.getAttribute) {
        var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
          "bubbles": true,
          "cancelable": true
        });
        if (!element.dispatchEvent(phoenixLinkEvent)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          return false;
        }
        if (element.getAttribute("data-method")) {
          handleClick(element, e.metaKey || e.shiftKey);
          e.preventDefault();
          return false;
        } else {
          element = element.parentNode;
        }
      }
    }, false);
    window.addEventListener("phoenix.link.click", function(e) {
      var message = e.target.getAttribute("data-confirm");
      if (message && !window.confirm(message)) {
        e.preventDefault();
      }
    }, false);
  })();

  // ../deps/phoenix/priv/static/phoenix.esm.js
  var closure = (value) => {
    if (typeof value === "function") {
      return value;
    } else {
      let closure22 = function() {
        return value;
      };
      return closure22;
    }
  };
  var globalSelf = typeof self !== "undefined" ? self : null;
  var phxWindow = typeof window !== "undefined" ? window : null;
  var global = globalSelf || phxWindow || void 0;
  var DEFAULT_VSN = "2.0.0";
  var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1e3;
  var CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  var CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  };
  var TRANSPORTS = {
    longpoll: "longpoll",
    websocket: "websocket"
  };
  var XHR_STATES = {
    complete: 4
  };
  var Push = class {
    constructor(channel, event, payload, timeout) {
      this.channel = channel;
      this.event = event;
      this.payload = payload || function() {
        return {};
      };
      this.receivedResp = null;
      this.timeout = timeout;
      this.timeoutTimer = null;
      this.recHooks = [];
      this.sent = false;
    }
    resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    receive(status, callback) {
      if (this.hasReceived(status)) {
        callback(this.receivedResp.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
    matchReceive({ status, response, _ref }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, (payload) => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
    trigger(status, response) {
      this.channel.trigger(this.refEvent, { status, response });
    }
  };
  var Timer = class {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = null;
      this.tries = 0;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var Channel = class {
    constructor(topic, params, socket) {
      this.state = CHANNEL_STATES.closed;
      this.topic = topic;
      this.params = closure(params || {});
      this.socket = socket;
      this.bindings = [];
      this.bindingRef = 0;
      this.timeout = this.socket.timeout;
      this.joinedOnce = false;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.pushBuffer = [];
      this.stateChangeRefs = [];
      this.rejoinTimer = new Timer(() => {
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }, this.socket.rejoinAfterMs);
      this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
      this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      }));
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this.joinPush.receive("error", () => {
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.onClose(() => {
        this.rejoinTimer.reset();
        if (this.socket.hasLogger())
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
        this.state = CHANNEL_STATES.closed;
        this.socket.remove(this);
      });
      this.onError((reason) => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.isJoining()) {
          this.joinPush.reset();
        }
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.joinPush.receive("timeout", () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
        leavePush.send();
        this.state = CHANNEL_STATES.errored;
        this.joinPush.reset();
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
        this.trigger(this.replyEventName(ref), payload);
      });
    }
    join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    onClose(callback) {
      this.on(CHANNEL_EVENTS.close, callback);
    }
    onError(callback) {
      return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
    }
    on(event, callback) {
      let ref = this.bindingRef++;
      this.bindings.push({ event, ref, callback });
      return ref;
    }
    off(event, ref) {
      this.bindings = this.bindings.filter((bind) => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function() {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES.leaving;
      let onClose = () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    onMessage(_event, payload, _ref) {
      return payload;
    }
    isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger())
          this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
        return false;
      } else {
        return true;
      }
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter((bind) => bind.event === event);
      for (let i = 0; i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    isErrored() {
      return this.state === CHANNEL_STATES.errored;
    }
    isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  };
  var Ajax = class {
    static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
      if (global.XDomainRequest) {
        let req = new global.XDomainRequest();
        this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
      } else {
        let req = new global.XMLHttpRequest();
        this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
      }
    }
    static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback && callback(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {
      };
      req.send(body);
    }
    static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      req.setRequestHeader("Content-Type", accept);
      req.onerror = () => {
        callback && callback(null);
      };
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback) {
          let response = this.parseJSON(req.responseText);
          callback(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
    }
    static parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch (e) {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
    static serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
    static appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  };
  var LongPoll = class {
    constructor(endPoint) {
      this.endPoint = null;
      this.token = null;
      this.skipHeartbeat = true;
      this.onopen = function() {
      };
      this.onerror = function() {
      };
      this.onmessage = function() {
      };
      this.onclose = function() {
      };
      this.pollEndpoint = this.normalizeEndpoint(endPoint);
      this.readyState = SOCKET_STATES.connecting;
      this.poll();
    }
    normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
    endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry() {
      this.close();
      this.readyState = SOCKET_STATES.connecting;
    }
    ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry();
    }
    poll() {
      if (!(this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting)) {
        return;
      }
      Ajax.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), (resp) => {
        if (resp) {
          var { status, token, messages } = resp;
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach((msg) => {
              setTimeout(() => {
                this.onmessage({ data: msg });
              }, 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen();
            this.poll();
            break;
          case 403:
            this.onerror();
            this.close();
            break;
          case 0:
          case 500:
            this.onerror();
            this.closeAndRetry();
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    send(body) {
      Ajax.request("POST", this.endpointURL(), "application/json", body, this.timeout, this.onerror.bind(this, "timeout"), (resp) => {
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry();
        }
      });
    }
    close(_code, _reason) {
      this.readyState = SOCKET_STATES.closed;
      this.onclose();
    }
  };
  var serializer_default = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(msg, callback) {
      if (msg.payload.constructor === ArrayBuffer) {
        return callback(this.binaryEncode(msg));
      } else {
        let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
        return callback(JSON.stringify(payload));
      }
    },
    decode(rawPayload, callback) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback(this.binaryDecode(rawPayload));
      } else {
        let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
        return callback({ join_ref, ref, topic, event, payload });
      }
    },
    binaryEncode(message) {
      let { join_ref, ref, event, topic, payload } = message;
      let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
      let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.push);
      view.setUint8(offset++, join_ref.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, event.length);
      Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + payload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(payload), header.byteLength);
      return combined.buffer;
    },
    binaryDecode(buffer) {
      let view = new DataView(buffer);
      let kind = view.getUint8(0);
      let decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.push:
          return this.decodePush(buffer, view, decoder);
        case this.KINDS.reply:
          return this.decodeReply(buffer, view, decoder);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(buffer, view, decoder);
      }
    },
    decodePush(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let topicSize = view.getUint8(2);
      let eventSize = view.getUint8(3);
      let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: joinRef, ref: null, topic, event, payload: data };
    },
    decodeReply(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let refSize = view.getUint8(2);
      let topicSize = view.getUint8(3);
      let eventSize = view.getUint8(4);
      let offset = this.HEADER_LENGTH + this.META_LENGTH;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let ref = decoder.decode(buffer.slice(offset, offset + refSize));
      offset = offset + refSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      let payload = { status: event, response: data };
      return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
    },
    decodeBroadcast(buffer, view, decoder) {
      let topicSize = view.getUint8(1);
      let eventSize = view.getUint8(2);
      let offset = this.HEADER_LENGTH + 2;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: null, ref: null, topic, event, payload: data };
    }
  };
  var Socket = class {
    constructor(endPoint, opts = {}) {
      this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
      this.channels = [];
      this.sendBuffer = [];
      this.ref = 0;
      this.timeout = opts.timeout || DEFAULT_TIMEOUT;
      this.transport = opts.transport || global.WebSocket || LongPoll;
      this.establishedConnections = 0;
      this.defaultEncoder = serializer_default.encode.bind(serializer_default);
      this.defaultDecoder = serializer_default.decode.bind(serializer_default);
      this.closeWasClean = false;
      this.binaryType = opts.binaryType || "arraybuffer";
      this.connectClock = 1;
      if (this.transport !== LongPoll) {
        this.encode = opts.encode || this.defaultEncoder;
        this.decode = opts.decode || this.defaultDecoder;
      } else {
        this.encode = this.defaultEncoder;
        this.decode = this.defaultDecoder;
      }
      let awaitingConnectionOnPageShow = null;
      if (phxWindow && phxWindow.addEventListener) {
        phxWindow.addEventListener("pagehide", (_e) => {
          if (this.conn) {
            this.disconnect();
            awaitingConnectionOnPageShow = this.connectClock;
          }
        });
        phxWindow.addEventListener("pageshow", (_e) => {
          if (awaitingConnectionOnPageShow === this.connectClock) {
            awaitingConnectionOnPageShow = null;
            this.connect();
          }
        });
      }
      this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
      this.rejoinAfterMs = (tries) => {
        if (opts.rejoinAfterMs) {
          return opts.rejoinAfterMs(tries);
        } else {
          return [1e3, 2e3, 5e3][tries - 1] || 1e4;
        }
      };
      this.reconnectAfterMs = (tries) => {
        if (opts.reconnectAfterMs) {
          return opts.reconnectAfterMs(tries);
        } else {
          return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
        }
      };
      this.logger = opts.logger || null;
      this.longpollerTimeout = opts.longpollerTimeout || 2e4;
      this.params = closure(opts.params || {});
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.vsn = opts.vsn || DEFAULT_VSN;
      this.heartbeatTimer = null;
      this.pendingHeartbeatRef = null;
      this.reconnectTimer = new Timer(() => {
        this.teardown(() => this.connect());
      }, this.reconnectAfterMs);
    }
    replaceTransport(newTransport) {
      this.disconnect();
      this.transport = newTransport;
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    disconnect(callback, code, reason) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.teardown(callback, code, reason);
    }
    connect(params) {
      this.connectClock++;
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure(params);
      }
      if (this.conn) {
        return;
      }
      this.closeWasClean = false;
      this.conn = new this.transport(this.endPointURL());
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = (error) => this.onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this.onConnClose(event);
    }
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback]);
      return ref;
    }
    onClose(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback]);
      return ref;
    }
    onError(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback]);
      return ref;
    }
    onMessage(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback]);
      return ref;
    }
    onConnOpen() {
      if (this.hasLogger())
        this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      this.resetHeartbeat();
      this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        this.abnormalClose("heartbeat timeout");
      }
    }
    resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      clearTimeout(this.heartbeatTimer);
      setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    teardown(callback, code, reason) {
      if (!this.conn) {
        return callback && callback();
      }
      this.waitForBufferDone(() => {
        if (this.conn) {
          if (code) {
            this.conn.close(code, reason || "");
          } else {
            this.conn.close();
          }
        }
        this.waitForSocketClosed(() => {
          if (this.conn) {
            this.conn.onclose = function() {
            };
            this.conn = null;
          }
          callback && callback();
        });
      });
    }
    waitForBufferDone(callback, tries = 1) {
      if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(callback, tries + 1);
      }, 150 * tries);
    }
    waitForSocketClosed(callback, tries = 1) {
      if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(callback, tries + 1);
      }, 150 * tries);
    }
    onConnClose(event) {
      let closeCode = event && event.code;
      if (this.hasLogger())
        this.log("transport", "close", event);
      this.triggerChanError();
      clearTimeout(this.heartbeatTimer);
      if (!this.closeWasClean && closeCode !== 1e3) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
    }
    onConnError(error) {
      if (this.hasLogger())
        this.log("transport", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.stateChangeCallbacks.error.forEach(([, callback]) => {
        callback(error, transportBefore, establishedBefore);
      });
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError();
      }
    }
    triggerChanError() {
      this.channels.forEach((channel) => {
        if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
          channel.trigger(CHANNEL_EVENTS.error);
        }
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(channel) {
      this.off(channel.stateChangeRefs);
      this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
    }
    off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    push(data) {
      if (this.hasLogger()) {
        let { topic, event, payload, ref, join_ref } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, (result) => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
      }
    }
    makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    sendHeartbeat() {
      if (this.pendingHeartbeatRef && !this.isConnected()) {
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
      this.heartbeatTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
    abnormalClose(reason) {
      this.closeWasClean = false;
      if (this.isConnected()) {
        this.conn.close(WS_CLOSE_NORMAL, reason);
      }
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        let { topic, event, payload, ref, join_ref } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          clearTimeout(this.heartbeatTimer);
          this.pendingHeartbeatRef = null;
          setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
        if (this.hasLogger())
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
        for (let i = 0; i < this.channels.length; i++) {
          const channel = this.channels[i];
          if (!channel.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel.trigger(event, payload, ref, join_ref);
        }
        for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
          let [, callback] = this.stateChangeCallbacks.message[i];
          callback(msg);
        }
      });
    }
    leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger())
          this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  };

  // ../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js
  var CONSECUTIVE_RELOADS = "consecutive-reloads";
  var MAX_RELOADS = 10;
  var RELOAD_JITTER_MIN = 1e3;
  var RELOAD_JITTER_MAX = 3e3;
  var FAILSAFE_JITTER = 3e4;
  var PHX_EVENT_CLASSES = [
    "phx-click-loading",
    "phx-change-loading",
    "phx-submit-loading",
    "phx-keydown-loading",
    "phx-keyup-loading",
    "phx-blur-loading",
    "phx-focus-loading"
  ];
  var PHX_COMPONENT = "data-phx-component";
  var PHX_LIVE_LINK = "data-phx-link";
  var PHX_TRACK_STATIC = "track-static";
  var PHX_LINK_STATE = "data-phx-link-state";
  var PHX_REF = "data-phx-ref";
  var PHX_REF_SRC = "data-phx-ref-src";
  var PHX_TRACK_UPLOADS = "track-uploads";
  var PHX_UPLOAD_REF = "data-phx-upload-ref";
  var PHX_PREFLIGHTED_REFS = "data-phx-preflighted-refs";
  var PHX_DONE_REFS = "data-phx-done-refs";
  var PHX_DROP_TARGET = "drop-target";
  var PHX_ACTIVE_ENTRY_REFS = "data-phx-active-refs";
  var PHX_LIVE_FILE_UPDATED = "phx:live-file:updated";
  var PHX_SKIP = "data-phx-skip";
  var PHX_PRUNE = "data-phx-prune";
  var PHX_PAGE_LOADING = "page-loading";
  var PHX_CONNECTED_CLASS = "phx-connected";
  var PHX_DISCONNECTED_CLASS = "phx-loading";
  var PHX_NO_FEEDBACK_CLASS = "phx-no-feedback";
  var PHX_ERROR_CLASS = "phx-error";
  var PHX_PARENT_ID = "data-phx-parent-id";
  var PHX_MAIN = "data-phx-main";
  var PHX_ROOT_ID = "data-phx-root-id";
  var PHX_TRIGGER_ACTION = "trigger-action";
  var PHX_FEEDBACK_FOR = "feedback-for";
  var PHX_HAS_FOCUSED = "phx-has-focused";
  var FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time", "datetime-local", "color", "range"];
  var CHECKABLE_INPUTS = ["checkbox", "radio"];
  var PHX_HAS_SUBMITTED = "phx-has-submitted";
  var PHX_SESSION = "data-phx-session";
  var PHX_VIEW_SELECTOR = `[${PHX_SESSION}]`;
  var PHX_STICKY = "data-phx-sticky";
  var PHX_STATIC = "data-phx-static";
  var PHX_READONLY = "data-phx-readonly";
  var PHX_DISABLED = "data-phx-disabled";
  var PHX_DISABLE_WITH = "disable-with";
  var PHX_DISABLE_WITH_RESTORE = "data-phx-disable-with-restore";
  var PHX_HOOK = "hook";
  var PHX_DEBOUNCE = "debounce";
  var PHX_THROTTLE = "throttle";
  var PHX_UPDATE = "update";
  var PHX_KEY = "key";
  var PHX_PRIVATE = "phxPrivate";
  var PHX_AUTO_RECOVER = "auto-recover";
  var PHX_LV_DEBUG = "phx:live-socket:debug";
  var PHX_LV_PROFILE = "phx:live-socket:profiling";
  var PHX_LV_LATENCY_SIM = "phx:live-socket:latency-sim";
  var PHX_PROGRESS = "progress";
  var LOADER_TIMEOUT = 1;
  var BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
  var BINDING_PREFIX = "phx-";
  var PUSH_TIMEOUT = 3e4;
  var DEBOUNCE_TRIGGER = "debounce-trigger";
  var THROTTLED = "throttled";
  var DEBOUNCE_PREV_KEY = "debounce-prev-key";
  var DEFAULTS = {
    debounce: 300,
    throttle: 300
  };
  var DYNAMICS = "d";
  var STATIC = "s";
  var COMPONENTS = "c";
  var EVENTS = "e";
  var REPLY = "r";
  var TITLE = "t";
  var TEMPLATES = "p";
  var EntryUploader = class {
    constructor(entry, chunkSize, liveSocket2) {
      this.liveSocket = liveSocket2;
      this.entry = entry;
      this.offset = 0;
      this.chunkSize = chunkSize;
      this.chunkTimer = null;
      this.uploadChannel = liveSocket2.channel(`lvu:${entry.ref}`, { token: entry.metadata() });
    }
    error(reason) {
      clearTimeout(this.chunkTimer);
      this.uploadChannel.leave();
      this.entry.error(reason);
    }
    upload() {
      this.uploadChannel.onError((reason) => this.error(reason));
      this.uploadChannel.join().receive("ok", (_data) => this.readNextChunk()).receive("error", (reason) => this.error(reason));
    }
    isDone() {
      return this.offset >= this.entry.file.size;
    }
    readNextChunk() {
      let reader = new window.FileReader();
      let blob = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
      reader.onload = (e) => {
        if (e.target.error === null) {
          this.offset += e.target.result.byteLength;
          this.pushChunk(e.target.result);
        } else {
          return logError("Read error: " + e.target.error);
        }
      };
      reader.readAsArrayBuffer(blob);
    }
    pushChunk(chunk) {
      if (!this.uploadChannel.isJoined()) {
        return;
      }
      this.uploadChannel.push("chunk", chunk).receive("ok", () => {
        this.entry.progress(this.offset / this.entry.file.size * 100);
        if (!this.isDone()) {
          this.chunkTimer = setTimeout(() => this.readNextChunk(), this.liveSocket.getLatencySim() || 0);
        }
      });
    }
  };
  var logError = (msg, obj) => console.error && console.error(msg, obj);
  var isCid = (cid) => {
    let type = typeof cid;
    return type === "number" || type === "string" && /^(0|[1-9]\d*)$/.test(cid);
  };
  function detectDuplicateIds() {
    let ids = /* @__PURE__ */ new Set();
    let elems = document.querySelectorAll("*[id]");
    for (let i = 0, len = elems.length; i < len; i++) {
      if (ids.has(elems[i].id)) {
        console.error(`Multiple IDs detected: ${elems[i].id}. Ensure unique element ids.`);
      } else {
        ids.add(elems[i].id);
      }
    }
  }
  var debug = (view, kind, msg, obj) => {
    if (view.liveSocket.isDebugEnabled()) {
      console.log(`${view.id} ${kind}: ${msg} - `, obj);
    }
  };
  var closure2 = (val) => typeof val === "function" ? val : function() {
    return val;
  };
  var clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  var closestPhxBinding = (el, binding, borderEl) => {
    do {
      if (el.matches(`[${binding}]`)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1 && !(borderEl && borderEl.isSameNode(el) || el.matches(PHX_VIEW_SELECTOR)));
    return null;
  };
  var isObject = (obj) => {
    return obj !== null && typeof obj === "object" && !(obj instanceof Array);
  };
  var isEqualObj = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
  var isEmpty = (obj) => {
    for (let x in obj) {
      return false;
    }
    return true;
  };
  var maybe = (el, callback) => el && callback(el);
  var channelUploader = function(entries, onError, resp, liveSocket2) {
    entries.forEach((entry) => {
      let entryUploader = new EntryUploader(entry, resp.config.chunk_size, liveSocket2);
      entryUploader.upload();
    });
  };
  var Browser = {
    canPushState() {
      return typeof history.pushState !== "undefined";
    },
    dropLocal(localStorage, namespace, subkey) {
      return localStorage.removeItem(this.localKey(namespace, subkey));
    },
    updateLocal(localStorage, namespace, subkey, initial, func) {
      let current = this.getLocal(localStorage, namespace, subkey);
      let key = this.localKey(namespace, subkey);
      let newVal = current === null ? initial : func(current);
      localStorage.setItem(key, JSON.stringify(newVal));
      return newVal;
    },
    getLocal(localStorage, namespace, subkey) {
      return JSON.parse(localStorage.getItem(this.localKey(namespace, subkey)));
    },
    updateCurrentState(callback) {
      if (!this.canPushState()) {
        return;
      }
      history.replaceState(callback(history.state || {}), "", window.location.href);
    },
    pushState(kind, meta, to) {
      if (this.canPushState()) {
        if (to !== window.location.href) {
          if (meta.type == "redirect" && meta.scroll) {
            let currentState = history.state || {};
            currentState.scroll = meta.scroll;
            history.replaceState(currentState, "", window.location.href);
          }
          delete meta.scroll;
          history[kind + "State"](meta, "", to || null);
          let hashEl = this.getHashTargetEl(window.location.hash);
          if (hashEl) {
            hashEl.scrollIntoView();
          } else if (meta.type === "redirect") {
            window.scroll(0, 0);
          }
        }
      } else {
        this.redirect(to);
      }
    },
    setCookie(name, value) {
      document.cookie = `${name}=${value}`;
    },
    getCookie(name) {
      return document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${name}s*=s*([^;]*).*$)|^.*$`), "$1");
    },
    redirect(toURL, flash) {
      if (flash) {
        Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
      }
      window.location = toURL;
    },
    localKey(namespace, subkey) {
      return `${namespace}-${subkey}`;
    },
    getHashTargetEl(maybeHash) {
      let hash = maybeHash.toString().substring(1);
      if (hash === "") {
        return;
      }
      return document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
    }
  };
  var browser_default = Browser;
  var DOM = {
    byId(id) {
      return document.getElementById(id) || logError(`no id found for ${id}`);
    },
    removeClass(el, className) {
      el.classList.remove(className);
      if (el.classList.length === 0) {
        el.removeAttribute("class");
      }
    },
    all(node, query, callback) {
      if (!node) {
        return [];
      }
      let array = Array.from(node.querySelectorAll(query));
      return callback ? array.forEach(callback) : array;
    },
    childNodeLength(html) {
      let template = document.createElement("template");
      template.innerHTML = html;
      return template.content.childElementCount;
    },
    isUploadInput(el) {
      return el.type === "file" && el.getAttribute(PHX_UPLOAD_REF) !== null;
    },
    findUploadInputs(node) {
      return this.all(node, `input[type="file"][${PHX_UPLOAD_REF}]`);
    },
    findComponentNodeList(node, cid) {
      return this.filterWithinSameLiveView(this.all(node, `[${PHX_COMPONENT}="${cid}"]`), node);
    },
    isPhxDestroyed(node) {
      return node.id && DOM.private(node, "destroyed") ? true : false;
    },
    markPhxChildDestroyed(el) {
      if (this.isPhxChild(el)) {
        el.setAttribute(PHX_SESSION, "");
      }
      this.putPrivate(el, "destroyed", true);
    },
    findPhxChildrenInFragment(html, parentId) {
      let template = document.createElement("template");
      template.innerHTML = html;
      return this.findPhxChildren(template.content, parentId);
    },
    isIgnored(el, phxUpdate) {
      return (el.getAttribute(phxUpdate) || el.getAttribute("data-phx-update")) === "ignore";
    },
    isPhxUpdate(el, phxUpdate, updateTypes) {
      return el.getAttribute && updateTypes.indexOf(el.getAttribute(phxUpdate)) >= 0;
    },
    findPhxSticky(el) {
      return this.all(el, `[${PHX_STICKY}]`);
    },
    findPhxChildren(el, parentId) {
      return this.all(el, `${PHX_VIEW_SELECTOR}[${PHX_PARENT_ID}="${parentId}"]`);
    },
    findParentCIDs(node, cids) {
      let initial = new Set(cids);
      return cids.reduce((acc, cid) => {
        let selector = `[${PHX_COMPONENT}="${cid}"] [${PHX_COMPONENT}]`;
        this.filterWithinSameLiveView(this.all(node, selector), node).map((el) => parseInt(el.getAttribute(PHX_COMPONENT))).forEach((childCID) => acc.delete(childCID));
        return acc;
      }, initial);
    },
    filterWithinSameLiveView(nodes, parent) {
      if (parent.querySelector(PHX_VIEW_SELECTOR)) {
        return nodes.filter((el) => this.withinSameLiveView(el, parent));
      } else {
        return nodes;
      }
    },
    withinSameLiveView(node, parent) {
      while (node = node.parentNode) {
        if (node.isSameNode(parent)) {
          return true;
        }
        if (node.getAttribute(PHX_SESSION) !== null) {
          return false;
        }
      }
    },
    private(el, key) {
      return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
    },
    deletePrivate(el, key) {
      el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
    },
    putPrivate(el, key, value) {
      if (!el[PHX_PRIVATE]) {
        el[PHX_PRIVATE] = {};
      }
      el[PHX_PRIVATE][key] = value;
    },
    updatePrivate(el, key, defaultVal, updateFunc) {
      let existing = this.private(el, key);
      if (existing === void 0) {
        this.putPrivate(el, key, updateFunc(defaultVal));
      } else {
        this.putPrivate(el, key, updateFunc(existing));
      }
    },
    copyPrivates(target, source) {
      if (source[PHX_PRIVATE]) {
        target[PHX_PRIVATE] = source[PHX_PRIVATE];
      }
    },
    putTitle(str) {
      let titleEl = document.querySelector("title");
      let { prefix, suffix } = titleEl.dataset;
      document.title = `${prefix || ""}${str}${suffix || ""}`;
    },
    debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, callback) {
      let debounce = el.getAttribute(phxDebounce);
      let throttle = el.getAttribute(phxThrottle);
      if (debounce === "") {
        debounce = defaultDebounce;
      }
      if (throttle === "") {
        throttle = defaultThrottle;
      }
      let value = debounce || throttle;
      switch (value) {
        case null:
          return callback();
        case "blur":
          if (this.once(el, "debounce-blur")) {
            el.addEventListener("blur", () => callback());
          }
          return;
        default:
          let timeout = parseInt(value);
          let trigger = () => throttle ? this.deletePrivate(el, THROTTLED) : callback();
          let currentCycle = this.incCycle(el, DEBOUNCE_TRIGGER, trigger);
          if (isNaN(timeout)) {
            return logError(`invalid throttle/debounce value: ${value}`);
          }
          if (throttle) {
            let newKeyDown = false;
            if (event.type === "keydown") {
              let prevKey = this.private(el, DEBOUNCE_PREV_KEY);
              this.putPrivate(el, DEBOUNCE_PREV_KEY, event.key);
              newKeyDown = prevKey !== event.key;
            }
            if (!newKeyDown && this.private(el, THROTTLED)) {
              return false;
            } else {
              callback();
              this.putPrivate(el, THROTTLED, true);
              setTimeout(() => this.triggerCycle(el, DEBOUNCE_TRIGGER), timeout);
            }
          } else {
            setTimeout(() => this.triggerCycle(el, DEBOUNCE_TRIGGER, currentCycle), timeout);
          }
          let form = el.form;
          if (form && this.once(form, "bind-debounce")) {
            form.addEventListener("submit", () => {
              Array.from(new FormData(form).entries(), ([name]) => {
                let input = form.querySelector(`[name="${name}"]`);
                this.incCycle(input, DEBOUNCE_TRIGGER);
                this.deletePrivate(input, THROTTLED);
              });
            });
          }
          if (this.once(el, "bind-debounce")) {
            el.addEventListener("blur", () => this.triggerCycle(el, DEBOUNCE_TRIGGER));
          }
      }
    },
    triggerCycle(el, key, currentCycle) {
      let [cycle, trigger] = this.private(el, key);
      if (!currentCycle) {
        currentCycle = cycle;
      }
      if (currentCycle === cycle) {
        this.incCycle(el, key);
        trigger();
      }
    },
    once(el, key) {
      if (this.private(el, key) === true) {
        return false;
      }
      this.putPrivate(el, key, true);
      return true;
    },
    incCycle(el, key, trigger = function() {
    }) {
      let [currentCycle] = this.private(el, key) || [0, trigger];
      currentCycle++;
      this.putPrivate(el, key, [currentCycle, trigger]);
      return currentCycle;
    },
    discardError(container, el, phxFeedbackFor) {
      let field = el.getAttribute && el.getAttribute(phxFeedbackFor);
      let input = field && container.querySelector(`[id="${field}"], [name="${field}"]`);
      if (!input) {
        return;
      }
      if (!(this.private(input, PHX_HAS_FOCUSED) || this.private(input.form, PHX_HAS_SUBMITTED))) {
        el.classList.add(PHX_NO_FEEDBACK_CLASS);
      }
    },
    showError(inputEl, phxFeedbackFor) {
      if (inputEl.id || inputEl.name) {
        this.all(inputEl.form, `[${phxFeedbackFor}="${inputEl.id}"], [${phxFeedbackFor}="${inputEl.name}"]`, (el) => {
          this.removeClass(el, PHX_NO_FEEDBACK_CLASS);
        });
      }
    },
    isPhxChild(node) {
      return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
    },
    isPhxSticky(node) {
      return node.getAttribute && node.getAttribute(PHX_STICKY) !== null;
    },
    firstPhxChild(el) {
      return this.isPhxChild(el) ? el : this.all(el, `[${PHX_PARENT_ID}]`)[0];
    },
    dispatchEvent(target, eventString, detail = {}) {
      let event = new CustomEvent(eventString, { bubbles: true, cancelable: true, detail });
      target.dispatchEvent(event);
    },
    cloneNode(node, html) {
      if (typeof html === "undefined") {
        return node.cloneNode(true);
      } else {
        let cloned = node.cloneNode(false);
        cloned.innerHTML = html;
        return cloned;
      }
    },
    mergeAttrs(target, source, opts = {}) {
      let exclude = opts.exclude || [];
      let isIgnored = opts.isIgnored;
      let sourceAttrs = source.attributes;
      for (let i = sourceAttrs.length - 1; i >= 0; i--) {
        let name = sourceAttrs[i].name;
        if (exclude.indexOf(name) < 0) {
          target.setAttribute(name, source.getAttribute(name));
        }
      }
      let targetAttrs = target.attributes;
      for (let i = targetAttrs.length - 1; i >= 0; i--) {
        let name = targetAttrs[i].name;
        if (isIgnored) {
          if (name.startsWith("data-") && !source.hasAttribute(name)) {
            target.removeAttribute(name);
          }
        } else {
          if (!source.hasAttribute(name)) {
            target.removeAttribute(name);
          }
        }
      }
    },
    mergeFocusedInput(target, source) {
      if (!(target instanceof HTMLSelectElement)) {
        DOM.mergeAttrs(target, source, { except: ["value"] });
      }
      if (source.readOnly) {
        target.setAttribute("readonly", true);
      } else {
        target.removeAttribute("readonly");
      }
    },
    hasSelectionRange(el) {
      return el.setSelectionRange && (el.type === "text" || el.type === "textarea");
    },
    restoreFocus(focused, selectionStart, selectionEnd) {
      if (!DOM.isTextualInput(focused)) {
        return;
      }
      let wasFocused = focused.matches(":focus");
      if (focused.readOnly) {
        focused.blur();
      }
      if (!wasFocused) {
        focused.focus();
      }
      if (this.hasSelectionRange(focused)) {
        focused.setSelectionRange(selectionStart, selectionEnd);
      }
    },
    isFormInput(el) {
      return /^(?:input|select|textarea)$/i.test(el.tagName) && el.type !== "button";
    },
    syncAttrsToProps(el) {
      if (el instanceof HTMLInputElement && CHECKABLE_INPUTS.indexOf(el.type.toLocaleLowerCase()) >= 0) {
        el.checked = el.getAttribute("checked") !== null;
      }
    },
    isTextualInput(el) {
      return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
    },
    isNowTriggerFormExternal(el, phxTriggerExternal) {
      return el.getAttribute && el.getAttribute(phxTriggerExternal) !== null;
    },
    syncPendingRef(fromEl, toEl, disableWith) {
      let ref = fromEl.getAttribute(PHX_REF);
      if (ref === null) {
        return true;
      }
      let refSrc = fromEl.getAttribute(PHX_REF_SRC);
      if (DOM.isFormInput(fromEl) || fromEl.getAttribute(disableWith) !== null) {
        if (DOM.isUploadInput(fromEl)) {
          DOM.mergeAttrs(fromEl, toEl, { isIgnored: true });
        }
        DOM.putPrivate(fromEl, PHX_REF, toEl);
        return false;
      } else {
        PHX_EVENT_CLASSES.forEach((className) => {
          fromEl.classList.contains(className) && toEl.classList.add(className);
        });
        toEl.setAttribute(PHX_REF, ref);
        toEl.setAttribute(PHX_REF_SRC, refSrc);
        return true;
      }
    },
    cleanChildNodes(container, phxUpdate) {
      if (DOM.isPhxUpdate(container, phxUpdate, ["append", "prepend"])) {
        let toRemove = [];
        container.childNodes.forEach((childNode) => {
          if (!childNode.id) {
            let isEmptyTextNode = childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "";
            if (!isEmptyTextNode) {
              logError(`only HTML element tags with an id are allowed inside containers with phx-update.

removing illegal node: "${(childNode.outerHTML || childNode.nodeValue).trim()}"

`);
            }
            toRemove.push(childNode);
          }
        });
        toRemove.forEach((childNode) => childNode.remove());
      }
    },
    replaceRootContainer(container, tagName, attrs) {
      let retainedAttrs = /* @__PURE__ */ new Set(["id", PHX_SESSION, PHX_STATIC, PHX_MAIN, PHX_ROOT_ID]);
      if (container.tagName.toLowerCase() === tagName.toLowerCase()) {
        Array.from(container.attributes).filter((attr) => !retainedAttrs.has(attr.name.toLowerCase())).forEach((attr) => container.removeAttribute(attr.name));
        Object.keys(attrs).filter((name) => !retainedAttrs.has(name.toLowerCase())).forEach((attr) => container.setAttribute(attr, attrs[attr]));
        return container;
      } else {
        let newContainer = document.createElement(tagName);
        Object.keys(attrs).forEach((attr) => newContainer.setAttribute(attr, attrs[attr]));
        retainedAttrs.forEach((attr) => newContainer.setAttribute(attr, container.getAttribute(attr)));
        newContainer.innerHTML = container.innerHTML;
        container.replaceWith(newContainer);
        return newContainer;
      }
    },
    getSticky(el, name, defaultVal) {
      let op = (DOM.private(el, "sticky") || []).find(([existingName]) => name === existingName);
      if (op) {
        let [_name, _op, stashedResult] = op;
        return stashedResult;
      } else {
        return typeof defaultVal === "function" ? defaultVal() : defaultVal;
      }
    },
    deleteSticky(el, name) {
      this.updatePrivate(el, "sticky", [], (ops) => {
        return ops.filter(([existingName, _]) => existingName !== name);
      });
    },
    putSticky(el, name, op) {
      let stashedResult = op(el);
      this.updatePrivate(el, "sticky", [], (ops) => {
        let existingIndex = ops.findIndex(([existingName]) => name === existingName);
        if (existingIndex >= 0) {
          ops[existingIndex] = [name, op, stashedResult];
        } else {
          ops.push([name, op, stashedResult]);
        }
        return ops;
      });
    },
    applyStickyOperations(el) {
      let ops = DOM.private(el, "sticky");
      if (!ops) {
        return;
      }
      ops.forEach(([name, op, _stashed]) => this.putSticky(el, name, op));
    }
  };
  var dom_default = DOM;
  var UploadEntry = class {
    static isActive(fileEl, file) {
      let isNew = file._phxRef === void 0;
      let activeRefs = fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
      let isActive = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
      return file.size > 0 && (isNew || isActive);
    }
    static isPreflighted(fileEl, file) {
      let preflightedRefs = fileEl.getAttribute(PHX_PREFLIGHTED_REFS).split(",");
      let isPreflighted = preflightedRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
      return isPreflighted && this.isActive(fileEl, file);
    }
    constructor(fileEl, file, view) {
      this.ref = LiveUploader.genFileRef(file);
      this.fileEl = fileEl;
      this.file = file;
      this.view = view;
      this.meta = null;
      this._isCancelled = false;
      this._isDone = false;
      this._progress = 0;
      this._lastProgressSent = -1;
      this._onDone = function() {
      };
      this._onElUpdated = this.onElUpdated.bind(this);
      this.fileEl.addEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
    }
    metadata() {
      return this.meta;
    }
    progress(progress) {
      this._progress = Math.floor(progress);
      if (this._progress > this._lastProgressSent) {
        if (this._progress >= 100) {
          this._progress = 100;
          this._lastProgressSent = 100;
          this._isDone = true;
          this.view.pushFileProgress(this.fileEl, this.ref, 100, () => {
            LiveUploader.untrackFile(this.fileEl, this.file);
            this._onDone();
          });
        } else {
          this._lastProgressSent = this._progress;
          this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
        }
      }
    }
    cancel() {
      this._isCancelled = true;
      this._isDone = true;
      this._onDone();
    }
    isDone() {
      return this._isDone;
    }
    error(reason = "failed") {
      this.view.pushFileProgress(this.fileEl, this.ref, { error: reason });
      LiveUploader.clearFiles(this.fileEl);
    }
    onDone(callback) {
      this._onDone = () => {
        this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
        callback();
      };
    }
    onElUpdated() {
      let activeRefs = this.fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
      if (activeRefs.indexOf(this.ref) === -1) {
        this.cancel();
      }
    }
    toPreflightPayload() {
      return {
        last_modified: this.file.lastModified,
        name: this.file.name,
        size: this.file.size,
        type: this.file.type,
        ref: this.ref
      };
    }
    uploader(uploaders) {
      if (this.meta.uploader) {
        let callback = uploaders[this.meta.uploader] || logError(`no uploader configured for ${this.meta.uploader}`);
        return { name: this.meta.uploader, callback };
      } else {
        return { name: "channel", callback: channelUploader };
      }
    }
    zipPostFlight(resp) {
      this.meta = resp.entries[this.ref];
      if (!this.meta) {
        logError(`no preflight upload response returned with ref ${this.ref}`, { input: this.fileEl, response: resp });
      }
    }
  };
  var liveUploaderFileRef = 0;
  var LiveUploader = class {
    static genFileRef(file) {
      let ref = file._phxRef;
      if (ref !== void 0) {
        return ref;
      } else {
        file._phxRef = (liveUploaderFileRef++).toString();
        return file._phxRef;
      }
    }
    static getEntryDataURL(inputEl, ref, callback) {
      let file = this.activeFiles(inputEl).find((file2) => this.genFileRef(file2) === ref);
      callback(URL.createObjectURL(file));
    }
    static hasUploadsInProgress(formEl) {
      let active = 0;
      dom_default.findUploadInputs(formEl).forEach((input) => {
        if (input.getAttribute(PHX_PREFLIGHTED_REFS) !== input.getAttribute(PHX_DONE_REFS)) {
          active++;
        }
      });
      return active > 0;
    }
    static serializeUploads(inputEl) {
      let files = this.activeFiles(inputEl);
      let fileData = {};
      files.forEach((file) => {
        let entry = { path: inputEl.name };
        let uploadRef = inputEl.getAttribute(PHX_UPLOAD_REF);
        fileData[uploadRef] = fileData[uploadRef] || [];
        entry.ref = this.genFileRef(file);
        entry.name = file.name || entry.ref;
        entry.type = file.type;
        entry.size = file.size;
        fileData[uploadRef].push(entry);
      });
      return fileData;
    }
    static clearFiles(inputEl) {
      inputEl.value = null;
      inputEl.removeAttribute(PHX_UPLOAD_REF);
      dom_default.putPrivate(inputEl, "files", []);
    }
    static untrackFile(inputEl, file) {
      dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f) => !Object.is(f, file)));
    }
    static trackFiles(inputEl, files) {
      if (inputEl.getAttribute("multiple") !== null) {
        let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f) => Object.is(f, file)));
        dom_default.putPrivate(inputEl, "files", this.activeFiles(inputEl).concat(newFiles));
        inputEl.value = null;
      } else {
        dom_default.putPrivate(inputEl, "files", files);
      }
    }
    static activeFileInputs(formEl) {
      let fileInputs = dom_default.findUploadInputs(formEl);
      return Array.from(fileInputs).filter((el) => el.files && this.activeFiles(el).length > 0);
    }
    static activeFiles(input) {
      return (dom_default.private(input, "files") || []).filter((f) => UploadEntry.isActive(input, f));
    }
    static inputsAwaitingPreflight(formEl) {
      let fileInputs = dom_default.findUploadInputs(formEl);
      return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
    }
    static filesAwaitingPreflight(input) {
      return this.activeFiles(input).filter((f) => !UploadEntry.isPreflighted(input, f));
    }
    constructor(inputEl, view, onComplete) {
      this.view = view;
      this.onComplete = onComplete;
      this._entries = Array.from(LiveUploader.filesAwaitingPreflight(inputEl) || []).map((file) => new UploadEntry(inputEl, file, view));
      this.numEntriesInProgress = this._entries.length;
    }
    entries() {
      return this._entries;
    }
    initAdapterUpload(resp, onError, liveSocket2) {
      this._entries = this._entries.map((entry) => {
        entry.zipPostFlight(resp);
        entry.onDone(() => {
          this.numEntriesInProgress--;
          if (this.numEntriesInProgress === 0) {
            this.onComplete();
          }
        });
        return entry;
      });
      let groupedEntries = this._entries.reduce((acc, entry) => {
        let { name, callback } = entry.uploader(liveSocket2.uploaders);
        acc[name] = acc[name] || { callback, entries: [] };
        acc[name].entries.push(entry);
        return acc;
      }, {});
      for (let name in groupedEntries) {
        let { callback, entries } = groupedEntries[name];
        callback(entries, onError, resp, liveSocket2);
      }
    }
  };
  var Hooks = {
    LiveFileUpload: {
      activeRefs() {
        return this.el.getAttribute(PHX_ACTIVE_ENTRY_REFS);
      },
      preflightedRefs() {
        return this.el.getAttribute(PHX_PREFLIGHTED_REFS);
      },
      mounted() {
        this.preflightedWas = this.preflightedRefs();
      },
      updated() {
        let newPreflights = this.preflightedRefs();
        if (this.preflightedWas !== newPreflights) {
          this.preflightedWas = newPreflights;
          if (newPreflights === "") {
            this.__view.cancelSubmit(this.el.form);
          }
        }
        if (this.activeRefs() === "") {
          this.el.value = null;
        }
        this.el.dispatchEvent(new CustomEvent(PHX_LIVE_FILE_UPDATED));
      }
    },
    LiveImgPreview: {
      mounted() {
        this.ref = this.el.getAttribute("data-phx-entry-ref");
        this.inputEl = document.getElementById(this.el.getAttribute(PHX_UPLOAD_REF));
        LiveUploader.getEntryDataURL(this.inputEl, this.ref, (url) => {
          this.url = url;
          this.el.src = url;
        });
      },
      destroyed() {
        URL.revokeObjectURL(this.url);
      }
    }
  };
  var hooks_default = Hooks;
  var DOMPostMorphRestorer = class {
    constructor(containerBefore, containerAfter, updateType) {
      let idsBefore = /* @__PURE__ */ new Set();
      let idsAfter = new Set([...containerAfter.children].map((child) => child.id));
      let elementsToModify = [];
      Array.from(containerBefore.children).forEach((child) => {
        if (child.id) {
          idsBefore.add(child.id);
          if (idsAfter.has(child.id)) {
            let previousElementId = child.previousElementSibling && child.previousElementSibling.id;
            elementsToModify.push({ elementId: child.id, previousElementId });
          }
        }
      });
      this.containerId = containerAfter.id;
      this.updateType = updateType;
      this.elementsToModify = elementsToModify;
      this.elementIdsToAdd = [...idsAfter].filter((id) => !idsBefore.has(id));
    }
    perform() {
      let container = dom_default.byId(this.containerId);
      this.elementsToModify.forEach((elementToModify) => {
        if (elementToModify.previousElementId) {
          maybe(document.getElementById(elementToModify.previousElementId), (previousElem) => {
            maybe(document.getElementById(elementToModify.elementId), (elem) => {
              let isInRightPlace = elem.previousElementSibling && elem.previousElementSibling.id == previousElem.id;
              if (!isInRightPlace) {
                previousElem.insertAdjacentElement("afterend", elem);
              }
            });
          });
        } else {
          maybe(document.getElementById(elementToModify.elementId), (elem) => {
            let isInRightPlace = elem.previousElementSibling == null;
            if (!isInRightPlace) {
              container.insertAdjacentElement("afterbegin", elem);
            }
          });
        }
      });
      if (this.updateType == "prepend") {
        this.elementIdsToAdd.reverse().forEach((elemId) => {
          maybe(document.getElementById(elemId), (elem) => container.insertAdjacentElement("afterbegin", elem));
        });
      }
    }
  };
  var DOCUMENT_FRAGMENT_NODE = 11;
  function morphAttrs(fromNode, toNode) {
    var toNodeAttrs = toNode.attributes;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;
    if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return;
    }
    for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
      attr = toNodeAttrs[i];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      attrValue = attr.value;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
        if (fromValue !== attrValue) {
          if (attr.prefix === "xmlns") {
            attrName = attr.name;
          }
          fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
        }
      } else {
        fromValue = fromNode.getAttribute(attrName);
        if (fromValue !== attrValue) {
          fromNode.setAttribute(attrName, attrValue);
        }
      }
    }
    var fromNodeAttrs = fromNode.attributes;
    for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
      attr = fromNodeAttrs[d];
      attrName = attr.name;
      attrNamespaceURI = attr.namespaceURI;
      if (attrNamespaceURI) {
        attrName = attr.localName || attrName;
        if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          fromNode.removeAttributeNS(attrNamespaceURI, attrName);
        }
      } else {
        if (!toNode.hasAttribute(attrName)) {
          fromNode.removeAttribute(attrName);
        }
      }
    }
  }
  var range;
  var NS_XHTML = "http://www.w3.org/1999/xhtml";
  var doc = typeof document === "undefined" ? void 0 : document;
  var HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
  var HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
  function createFragmentFromTemplate(str) {
    var template = doc.createElement("template");
    template.innerHTML = str;
    return template.content.childNodes[0];
  }
  function createFragmentFromRange(str) {
    if (!range) {
      range = doc.createRange();
      range.selectNode(doc.body);
    }
    var fragment = range.createContextualFragment(str);
    return fragment.childNodes[0];
  }
  function createFragmentFromWrap(str) {
    var fragment = doc.createElement("body");
    fragment.innerHTML = str;
    return fragment.childNodes[0];
  }
  function toElement(str) {
    str = str.trim();
    if (HAS_TEMPLATE_SUPPORT) {
      return createFragmentFromTemplate(str);
    } else if (HAS_RANGE_SUPPORT) {
      return createFragmentFromRange(str);
    }
    return createFragmentFromWrap(str);
  }
  function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;
    var fromCodeStart, toCodeStart;
    if (fromNodeName === toNodeName) {
      return true;
    }
    fromCodeStart = fromNodeName.charCodeAt(0);
    toCodeStart = toNodeName.charCodeAt(0);
    if (fromCodeStart <= 90 && toCodeStart >= 97) {
      return fromNodeName === toNodeName.toUpperCase();
    } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
      return toNodeName === fromNodeName.toUpperCase();
    } else {
      return false;
    }
  }
  function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
  }
  function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
      var nextChild = curChild.nextSibling;
      toEl.appendChild(curChild);
      curChild = nextChild;
    }
    return toEl;
  }
  function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
      fromEl[name] = toEl[name];
      if (fromEl[name]) {
        fromEl.setAttribute(name, "");
      } else {
        fromEl.removeAttribute(name);
      }
    }
  }
  var specialElHandlers = {
    OPTION: function(fromEl, toEl) {
      var parentNode = fromEl.parentNode;
      if (parentNode) {
        var parentName = parentNode.nodeName.toUpperCase();
        if (parentName === "OPTGROUP") {
          parentNode = parentNode.parentNode;
          parentName = parentNode && parentNode.nodeName.toUpperCase();
        }
        if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
          if (fromEl.hasAttribute("selected") && !toEl.selected) {
            fromEl.setAttribute("selected", "selected");
            fromEl.removeAttribute("selected");
          }
          parentNode.selectedIndex = -1;
        }
      }
      syncBooleanAttrProp(fromEl, toEl, "selected");
    },
    INPUT: function(fromEl, toEl) {
      syncBooleanAttrProp(fromEl, toEl, "checked");
      syncBooleanAttrProp(fromEl, toEl, "disabled");
      if (fromEl.value !== toEl.value) {
        fromEl.value = toEl.value;
      }
      if (!toEl.hasAttribute("value")) {
        fromEl.removeAttribute("value");
      }
    },
    TEXTAREA: function(fromEl, toEl) {
      var newValue = toEl.value;
      if (fromEl.value !== newValue) {
        fromEl.value = newValue;
      }
      var firstChild = fromEl.firstChild;
      if (firstChild) {
        var oldValue = firstChild.nodeValue;
        if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
          return;
        }
        firstChild.nodeValue = newValue;
      }
    },
    SELECT: function(fromEl, toEl) {
      if (!toEl.hasAttribute("multiple")) {
        var selectedIndex = -1;
        var i = 0;
        var curChild = fromEl.firstChild;
        var optgroup;
        var nodeName;
        while (curChild) {
          nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
          if (nodeName === "OPTGROUP") {
            optgroup = curChild;
            curChild = optgroup.firstChild;
          } else {
            if (nodeName === "OPTION") {
              if (curChild.hasAttribute("selected")) {
                selectedIndex = i;
                break;
              }
              i++;
            }
            curChild = curChild.nextSibling;
            if (!curChild && optgroup) {
              curChild = optgroup.nextSibling;
              optgroup = null;
            }
          }
        }
        fromEl.selectedIndex = selectedIndex;
      }
    }
  };
  var ELEMENT_NODE = 1;
  var DOCUMENT_FRAGMENT_NODE$1 = 11;
  var TEXT_NODE = 3;
  var COMMENT_NODE = 8;
  function noop() {
  }
  function defaultGetNodeKey(node) {
    if (node) {
      return node.getAttribute && node.getAttribute("id") || node.id;
    }
  }
  function morphdomFactory(morphAttrs2) {
    return function morphdom2(fromNode, toNode, options) {
      if (!options) {
        options = {};
      }
      if (typeof toNode === "string") {
        if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
          var toNodeHtml = toNode;
          toNode = doc.createElement("html");
          toNode.innerHTML = toNodeHtml;
        } else {
          toNode = toElement(toNode);
        }
      }
      var getNodeKey = options.getNodeKey || defaultGetNodeKey;
      var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
      var onNodeAdded = options.onNodeAdded || noop;
      var onBeforeElUpdated = options.onBeforeElUpdated || noop;
      var onElUpdated = options.onElUpdated || noop;
      var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
      var onNodeDiscarded = options.onNodeDiscarded || noop;
      var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
      var childrenOnly = options.childrenOnly === true;
      var fromNodesLookup = Object.create(null);
      var keyedRemovalList = [];
      function addKeyedRemoval(key) {
        keyedRemovalList.push(key);
      }
      function walkDiscardedChildNodes(node, skipKeyedNodes) {
        if (node.nodeType === ELEMENT_NODE) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = void 0;
            if (skipKeyedNodes && (key = getNodeKey(curChild))) {
              addKeyedRemoval(key);
            } else {
              onNodeDiscarded(curChild);
              if (curChild.firstChild) {
                walkDiscardedChildNodes(curChild, skipKeyedNodes);
              }
            }
            curChild = curChild.nextSibling;
          }
        }
      }
      function removeNode(node, parentNode, skipKeyedNodes) {
        if (onBeforeNodeDiscarded(node) === false) {
          return;
        }
        if (parentNode) {
          parentNode.removeChild(node);
        }
        onNodeDiscarded(node);
        walkDiscardedChildNodes(node, skipKeyedNodes);
      }
      function indexTree(node) {
        if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
          var curChild = node.firstChild;
          while (curChild) {
            var key = getNodeKey(curChild);
            if (key) {
              fromNodesLookup[key] = curChild;
            }
            indexTree(curChild);
            curChild = curChild.nextSibling;
          }
        }
      }
      indexTree(fromNode);
      function handleNodeAdded(el) {
        onNodeAdded(el);
        var curChild = el.firstChild;
        while (curChild) {
          var nextSibling = curChild.nextSibling;
          var key = getNodeKey(curChild);
          if (key) {
            var unmatchedFromEl = fromNodesLookup[key];
            if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
              curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
              morphEl(unmatchedFromEl, curChild);
            } else {
              handleNodeAdded(curChild);
            }
          } else {
            handleNodeAdded(curChild);
          }
          curChild = nextSibling;
        }
      }
      function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
        while (curFromNodeChild) {
          var fromNextSibling = curFromNodeChild.nextSibling;
          if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
            addKeyedRemoval(curFromNodeKey);
          } else {
            removeNode(curFromNodeChild, fromEl, true);
          }
          curFromNodeChild = fromNextSibling;
        }
      }
      function morphEl(fromEl, toEl, childrenOnly2) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
          delete fromNodesLookup[toElKey];
        }
        if (!childrenOnly2) {
          if (onBeforeElUpdated(fromEl, toEl) === false) {
            return;
          }
          morphAttrs2(fromEl, toEl);
          onElUpdated(fromEl);
          if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
            return;
          }
        }
        if (fromEl.nodeName !== "TEXTAREA") {
          morphChildren(fromEl, toEl);
        } else {
          specialElHandlers.TEXTAREA(fromEl, toEl);
        }
      }
      function morphChildren(fromEl, toEl) {
        var curToNodeChild = toEl.firstChild;
        var curFromNodeChild = fromEl.firstChild;
        var curToNodeKey;
        var curFromNodeKey;
        var fromNextSibling;
        var toNextSibling;
        var matchingFromEl;
        outer:
          while (curToNodeChild) {
            toNextSibling = curToNodeChild.nextSibling;
            curToNodeKey = getNodeKey(curToNodeChild);
            while (curFromNodeChild) {
              fromNextSibling = curFromNodeChild.nextSibling;
              if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              curFromNodeKey = getNodeKey(curFromNodeChild);
              var curFromNodeType = curFromNodeChild.nodeType;
              var isCompatible = void 0;
              if (curFromNodeType === curToNodeChild.nodeType) {
                if (curFromNodeType === ELEMENT_NODE) {
                  if (curToNodeKey) {
                    if (curToNodeKey !== curFromNodeKey) {
                      if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                        if (fromNextSibling === matchingFromEl) {
                          isCompatible = false;
                        } else {
                          fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                          if (curFromNodeKey) {
                            addKeyedRemoval(curFromNodeKey);
                          } else {
                            removeNode(curFromNodeChild, fromEl, true);
                          }
                          curFromNodeChild = matchingFromEl;
                        }
                      } else {
                        isCompatible = false;
                      }
                    }
                  } else if (curFromNodeKey) {
                    isCompatible = false;
                  }
                  isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                  if (isCompatible) {
                    morphEl(curFromNodeChild, curToNodeChild);
                  }
                } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                  isCompatible = true;
                  if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                    curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                  }
                }
              }
              if (isCompatible) {
                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
                continue outer;
              }
              if (curFromNodeKey) {
                addKeyedRemoval(curFromNodeKey);
              } else {
                removeNode(curFromNodeChild, fromEl, true);
              }
              curFromNodeChild = fromNextSibling;
            }
            if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
              fromEl.appendChild(matchingFromEl);
              morphEl(matchingFromEl, curToNodeChild);
            } else {
              var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
              if (onBeforeNodeAddedResult !== false) {
                if (onBeforeNodeAddedResult) {
                  curToNodeChild = onBeforeNodeAddedResult;
                }
                if (curToNodeChild.actualize) {
                  curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                }
                fromEl.appendChild(curToNodeChild);
                handleNodeAdded(curToNodeChild);
              }
            }
            curToNodeChild = toNextSibling;
            curFromNodeChild = fromNextSibling;
          }
        cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
        var specialElHandler = specialElHandlers[fromEl.nodeName];
        if (specialElHandler) {
          specialElHandler(fromEl, toEl);
        }
      }
      var morphedNode = fromNode;
      var morphedNodeType = morphedNode.nodeType;
      var toNodeType = toNode.nodeType;
      if (!childrenOnly) {
        if (morphedNodeType === ELEMENT_NODE) {
          if (toNodeType === ELEMENT_NODE) {
            if (!compareNodeNames(fromNode, toNode)) {
              onNodeDiscarded(fromNode);
              morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
            }
          } else {
            morphedNode = toNode;
          }
        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
          if (toNodeType === morphedNodeType) {
            if (morphedNode.nodeValue !== toNode.nodeValue) {
              morphedNode.nodeValue = toNode.nodeValue;
            }
            return morphedNode;
          } else {
            morphedNode = toNode;
          }
        }
      }
      if (morphedNode === toNode) {
        onNodeDiscarded(fromNode);
      } else {
        if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
          return;
        }
        morphEl(morphedNode, toNode, childrenOnly);
        if (keyedRemovalList) {
          for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
            var elToRemove = fromNodesLookup[keyedRemovalList[i]];
            if (elToRemove) {
              removeNode(elToRemove, elToRemove.parentNode, false);
            }
          }
        }
      }
      if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        if (morphedNode.actualize) {
          morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
        }
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
      }
      return morphedNode;
    };
  }
  var morphdom = morphdomFactory(morphAttrs);
  var morphdom_esm_default = morphdom;
  var DOMPatch = class {
    static patchEl(fromEl, toEl, activeElement) {
      morphdom_esm_default(fromEl, toEl, {
        childrenOnly: false,
        onBeforeElUpdated: (fromEl2, toEl2) => {
          if (activeElement && activeElement.isSameNode(fromEl2) && dom_default.isFormInput(fromEl2)) {
            dom_default.mergeFocusedInput(fromEl2, toEl2);
            return false;
          }
        }
      });
    }
    constructor(view, container, id, html, targetCID) {
      this.view = view;
      this.liveSocket = view.liveSocket;
      this.container = container;
      this.id = id;
      this.rootID = view.root.id;
      this.html = html;
      this.targetCID = targetCID;
      this.cidPatch = isCid(this.targetCID);
      this.callbacks = {
        beforeadded: [],
        beforeupdated: [],
        beforephxChildAdded: [],
        afteradded: [],
        afterupdated: [],
        afterdiscarded: [],
        afterphxChildAdded: [],
        aftertransitionsDiscarded: []
      };
    }
    before(kind, callback) {
      this.callbacks[`before${kind}`].push(callback);
    }
    after(kind, callback) {
      this.callbacks[`after${kind}`].push(callback);
    }
    trackBefore(kind, ...args) {
      this.callbacks[`before${kind}`].forEach((callback) => callback(...args));
    }
    trackAfter(kind, ...args) {
      this.callbacks[`after${kind}`].forEach((callback) => callback(...args));
    }
    markPrunableContentForRemoval() {
      dom_default.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (el) => {
        el.setAttribute(PHX_PRUNE, "");
      });
    }
    perform() {
      let { view, liveSocket: liveSocket2, container, html } = this;
      let targetContainer = this.isCIDPatch() ? this.targetCIDContainer(html) : container;
      if (this.isCIDPatch() && !targetContainer) {
        return;
      }
      let focused = liveSocket2.getActiveElement();
      let { selectionStart, selectionEnd } = focused && dom_default.hasSelectionRange(focused) ? focused : {};
      let phxUpdate = liveSocket2.binding(PHX_UPDATE);
      let phxFeedbackFor = liveSocket2.binding(PHX_FEEDBACK_FOR);
      let disableWith = liveSocket2.binding(PHX_DISABLE_WITH);
      let phxTriggerExternal = liveSocket2.binding(PHX_TRIGGER_ACTION);
      let phxRemove = liveSocket2.binding("remove");
      let added = [];
      let updates = [];
      let appendPrependUpdates = [];
      let pendingRemoves = [];
      let externalFormTriggered = null;
      let diffHTML = liveSocket2.time("premorph container prep", () => {
        return this.buildDiffHTML(container, html, phxUpdate, targetContainer);
      });
      this.trackBefore("added", container);
      this.trackBefore("updated", container, container);
      liveSocket2.time("morphdom", () => {
        morphdom_esm_default(targetContainer, diffHTML, {
          childrenOnly: targetContainer.getAttribute(PHX_COMPONENT) === null,
          getNodeKey: (node) => {
            return dom_default.isPhxDestroyed(node) ? null : node.id;
          },
          onBeforeNodeAdded: (el) => {
            this.trackBefore("added", el);
            return el;
          },
          onNodeAdded: (el) => {
            if (el instanceof HTMLImageElement && el.srcset) {
              el.srcset = el.srcset;
            } else if (el instanceof HTMLVideoElement && el.autoplay) {
              el.play();
            }
            if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
              externalFormTriggered = el;
            }
            dom_default.discardError(targetContainer, el, phxFeedbackFor);
            if (dom_default.isPhxChild(el) && view.ownsElement(el) || dom_default.isPhxSticky(el) && view.ownsElement(el.parentNode)) {
              this.trackAfter("phxChildAdded", el);
            }
            added.push(el);
          },
          onNodeDiscarded: (el) => {
            if (dom_default.isPhxChild(el) || dom_default.isPhxSticky(el)) {
              liveSocket2.destroyViewByEl(el);
            }
            this.trackAfter("discarded", el);
          },
          onBeforeNodeDiscarded: (el) => {
            if (el.getAttribute && el.getAttribute(PHX_PRUNE) !== null) {
              return true;
            }
            if (el.parentNode !== null && dom_default.isPhxUpdate(el.parentNode, phxUpdate, ["append", "prepend"]) && el.id) {
              return false;
            }
            if (el.getAttribute && el.getAttribute(phxRemove)) {
              pendingRemoves.push(el);
              return false;
            }
            if (this.skipCIDSibling(el)) {
              return false;
            }
            return true;
          },
          onElUpdated: (el) => {
            if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
              externalFormTriggered = el;
            }
            updates.push(el);
          },
          onBeforeElUpdated: (fromEl, toEl) => {
            dom_default.cleanChildNodes(toEl, phxUpdate);
            if (this.skipCIDSibling(toEl)) {
              return false;
            }
            if (dom_default.isPhxSticky(fromEl)) {
              return false;
            }
            if (dom_default.isIgnored(fromEl, phxUpdate)) {
              this.trackBefore("updated", fromEl, toEl);
              dom_default.mergeAttrs(fromEl, toEl, { isIgnored: true });
              updates.push(fromEl);
              dom_default.applyStickyOperations(fromEl);
              return false;
            }
            if (fromEl.type === "number" && (fromEl.validity && fromEl.validity.badInput)) {
              return false;
            }
            if (!dom_default.syncPendingRef(fromEl, toEl, disableWith)) {
              if (dom_default.isUploadInput(fromEl)) {
                this.trackBefore("updated", fromEl, toEl);
                updates.push(fromEl);
              }
              dom_default.applyStickyOperations(fromEl);
              return false;
            }
            if (dom_default.isPhxChild(toEl)) {
              let prevSession = fromEl.getAttribute(PHX_SESSION);
              dom_default.mergeAttrs(fromEl, toEl, { exclude: [PHX_STATIC] });
              if (prevSession !== "") {
                fromEl.setAttribute(PHX_SESSION, prevSession);
              }
              fromEl.setAttribute(PHX_ROOT_ID, this.rootID);
              dom_default.applyStickyOperations(fromEl);
              return false;
            }
            dom_default.copyPrivates(toEl, fromEl);
            dom_default.discardError(targetContainer, toEl, phxFeedbackFor);
            let isFocusedFormEl = focused && fromEl.isSameNode(focused) && dom_default.isFormInput(fromEl);
            if (isFocusedFormEl) {
              this.trackBefore("updated", fromEl, toEl);
              dom_default.mergeFocusedInput(fromEl, toEl);
              dom_default.syncAttrsToProps(fromEl);
              updates.push(fromEl);
              dom_default.applyStickyOperations(fromEl);
              return false;
            } else {
              if (dom_default.isPhxUpdate(toEl, phxUpdate, ["append", "prepend"])) {
                appendPrependUpdates.push(new DOMPostMorphRestorer(fromEl, toEl, toEl.getAttribute(phxUpdate)));
              }
              dom_default.syncAttrsToProps(toEl);
              dom_default.applyStickyOperations(toEl);
              this.trackBefore("updated", fromEl, toEl);
              return true;
            }
          }
        });
      });
      if (liveSocket2.isDebugEnabled()) {
        detectDuplicateIds();
      }
      if (appendPrependUpdates.length > 0) {
        liveSocket2.time("post-morph append/prepend restoration", () => {
          appendPrependUpdates.forEach((update) => update.perform());
        });
      }
      liveSocket2.silenceEvents(() => dom_default.restoreFocus(focused, selectionStart, selectionEnd));
      dom_default.dispatchEvent(document, "phx:update");
      added.forEach((el) => this.trackAfter("added", el));
      updates.forEach((el) => this.trackAfter("updated", el));
      if (pendingRemoves.length > 0) {
        liveSocket2.transitionRemoves(pendingRemoves);
        liveSocket2.requestDOMUpdate(() => {
          pendingRemoves.forEach((el) => {
            let child = dom_default.firstPhxChild(el);
            if (child) {
              liveSocket2.destroyViewByEl(child);
            }
            el.remove();
          });
          this.trackAfter("transitionsDiscarded", pendingRemoves);
        });
      }
      if (externalFormTriggered) {
        liveSocket2.disconnect();
        externalFormTriggered.submit();
      }
      return true;
    }
    isCIDPatch() {
      return this.cidPatch;
    }
    skipCIDSibling(el) {
      return el.nodeType === Node.ELEMENT_NODE && el.getAttribute(PHX_SKIP) !== null;
    }
    targetCIDContainer(html) {
      if (!this.isCIDPatch()) {
        return;
      }
      let [first, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
      if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
        return first;
      } else {
        return first && first.parentNode;
      }
    }
    buildDiffHTML(container, html, phxUpdate, targetContainer) {
      let isCIDPatch = this.isCIDPatch();
      let isCIDWithSingleRoot = isCIDPatch && targetContainer.getAttribute(PHX_COMPONENT) === this.targetCID.toString();
      if (!isCIDPatch || isCIDWithSingleRoot) {
        return html;
      } else {
        let diffContainer = null;
        let template = document.createElement("template");
        diffContainer = dom_default.cloneNode(targetContainer);
        let [firstComponent, ...rest] = dom_default.findComponentNodeList(diffContainer, this.targetCID);
        template.innerHTML = html;
        rest.forEach((el) => el.remove());
        Array.from(diffContainer.childNodes).forEach((child) => {
          if (child.id && child.nodeType === Node.ELEMENT_NODE && child.getAttribute(PHX_COMPONENT) !== this.targetCID.toString()) {
            child.setAttribute(PHX_SKIP, "");
            child.innerHTML = "";
          }
        });
        Array.from(template.content.childNodes).forEach((el) => diffContainer.insertBefore(el, firstComponent));
        firstComponent.remove();
        return diffContainer.outerHTML;
      }
    }
  };
  var Rendered = class {
    static extract(diff) {
      let { [REPLY]: reply, [EVENTS]: events, [TITLE]: title } = diff;
      delete diff[REPLY];
      delete diff[EVENTS];
      delete diff[TITLE];
      return { diff, title, reply: reply || null, events: events || [] };
    }
    constructor(viewId, rendered) {
      this.viewId = viewId;
      this.rendered = {};
      this.mergeDiff(rendered);
    }
    parentViewId() {
      return this.viewId;
    }
    toString(onlyCids) {
      return this.recursiveToString(this.rendered, this.rendered[COMPONENTS], onlyCids);
    }
    recursiveToString(rendered, components = rendered[COMPONENTS], onlyCids) {
      onlyCids = onlyCids ? new Set(onlyCids) : null;
      let output = { buffer: "", components, onlyCids };
      this.toOutputBuffer(rendered, null, output);
      return output.buffer;
    }
    componentCIDs(diff) {
      return Object.keys(diff[COMPONENTS] || {}).map((i) => parseInt(i));
    }
    isComponentOnlyDiff(diff) {
      if (!diff[COMPONENTS]) {
        return false;
      }
      return Object.keys(diff).length === 1;
    }
    getComponent(diff, cid) {
      return diff[COMPONENTS][cid];
    }
    mergeDiff(diff) {
      let newc = diff[COMPONENTS];
      let cache = {};
      delete diff[COMPONENTS];
      this.rendered = this.mutableMerge(this.rendered, diff);
      this.rendered[COMPONENTS] = this.rendered[COMPONENTS] || {};
      if (newc) {
        let oldc = this.rendered[COMPONENTS];
        for (let cid in newc) {
          newc[cid] = this.cachedFindComponent(cid, newc[cid], oldc, newc, cache);
        }
        for (let cid in newc) {
          oldc[cid] = newc[cid];
        }
        diff[COMPONENTS] = newc;
      }
    }
    cachedFindComponent(cid, cdiff, oldc, newc, cache) {
      if (cache[cid]) {
        return cache[cid];
      } else {
        let ndiff, stat, scid = cdiff[STATIC];
        if (isCid(scid)) {
          let tdiff;
          if (scid > 0) {
            tdiff = this.cachedFindComponent(scid, newc[scid], oldc, newc, cache);
          } else {
            tdiff = oldc[-scid];
          }
          stat = tdiff[STATIC];
          ndiff = this.cloneMerge(tdiff, cdiff);
          ndiff[STATIC] = stat;
        } else {
          ndiff = cdiff[STATIC] !== void 0 ? cdiff : this.cloneMerge(oldc[cid] || {}, cdiff);
        }
        cache[cid] = ndiff;
        return ndiff;
      }
    }
    mutableMerge(target, source) {
      if (source[STATIC] !== void 0) {
        return source;
      } else {
        this.doMutableMerge(target, source);
        return target;
      }
    }
    doMutableMerge(target, source) {
      for (let key in source) {
        let val = source[key];
        let targetVal = target[key];
        if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
          this.doMutableMerge(targetVal, val);
        } else {
          target[key] = val;
        }
      }
    }
    cloneMerge(target, source) {
      let merged = __spreadValues(__spreadValues({}, target), source);
      for (let key in merged) {
        let val = source[key];
        let targetVal = target[key];
        if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
          merged[key] = this.cloneMerge(targetVal, val);
        }
      }
      return merged;
    }
    componentToString(cid) {
      return this.recursiveCIDToString(this.rendered[COMPONENTS], cid);
    }
    pruneCIDs(cids) {
      cids.forEach((cid) => delete this.rendered[COMPONENTS][cid]);
    }
    get() {
      return this.rendered;
    }
    isNewFingerprint(diff = {}) {
      return !!diff[STATIC];
    }
    templateStatic(part, templates) {
      if (typeof part === "number") {
        return templates[part];
      } else {
        return part;
      }
    }
    toOutputBuffer(rendered, templates, output) {
      if (rendered[DYNAMICS]) {
        return this.comprehensionToBuffer(rendered, templates, output);
      }
      let { [STATIC]: statics } = rendered;
      statics = this.templateStatic(statics, templates);
      output.buffer += statics[0];
      for (let i = 1; i < statics.length; i++) {
        this.dynamicToBuffer(rendered[i - 1], templates, output);
        output.buffer += statics[i];
      }
    }
    comprehensionToBuffer(rendered, templates, output) {
      let { [DYNAMICS]: dynamics, [STATIC]: statics } = rendered;
      statics = this.templateStatic(statics, templates);
      let compTemplates = templates || rendered[TEMPLATES];
      for (let d = 0; d < dynamics.length; d++) {
        let dynamic = dynamics[d];
        output.buffer += statics[0];
        for (let i = 1; i < statics.length; i++) {
          this.dynamicToBuffer(dynamic[i - 1], compTemplates, output);
          output.buffer += statics[i];
        }
      }
    }
    dynamicToBuffer(rendered, templates, output) {
      if (typeof rendered === "number") {
        output.buffer += this.recursiveCIDToString(output.components, rendered, output.onlyCids);
      } else if (isObject(rendered)) {
        this.toOutputBuffer(rendered, templates, output);
      } else {
        output.buffer += rendered;
      }
    }
    recursiveCIDToString(components, cid, onlyCids) {
      let component = components[cid] || logError(`no component for CID ${cid}`, components);
      let template = document.createElement("template");
      template.innerHTML = this.recursiveToString(component, components, onlyCids);
      let container = template.content;
      let skip = onlyCids && !onlyCids.has(cid);
      let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i) => {
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (child.getAttribute(PHX_COMPONENT)) {
            return [hasNodes, true];
          }
          child.setAttribute(PHX_COMPONENT, cid);
          if (!child.id) {
            child.id = `${this.parentViewId()}-${cid}-${i}`;
          }
          if (skip) {
            child.setAttribute(PHX_SKIP, "");
            child.innerHTML = "";
          }
          return [true, hasComponents];
        } else {
          if (child.nodeValue.trim() !== "") {
            logError(`only HTML element tags are allowed at the root of components.

got: "${child.nodeValue.trim()}"

within:
`, template.innerHTML.trim());
            child.replaceWith(this.createSpan(child.nodeValue, cid));
            return [true, hasComponents];
          } else {
            child.remove();
            return [hasNodes, hasComponents];
          }
        }
      }, [false, false]);
      if (!hasChildNodes && !hasChildComponents) {
        logError("expected at least one HTML element tag inside a component, but the component is empty:\n", template.innerHTML.trim());
        return this.createSpan("", cid).outerHTML;
      } else if (!hasChildNodes && hasChildComponents) {
        logError("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", template.innerHTML.trim());
        return template.innerHTML;
      } else {
        return template.innerHTML;
      }
    }
    createSpan(text, cid) {
      let span = document.createElement("span");
      span.innerText = text;
      span.setAttribute(PHX_COMPONENT, cid);
      return span;
    }
  };
  var viewHookID = 1;
  var ViewHook = class {
    static makeID() {
      return viewHookID++;
    }
    static elementID(el) {
      return el.phxHookId;
    }
    constructor(view, el, callbacks) {
      this.__view = view;
      this.__liveSocket = view.liveSocket;
      this.__callbacks = callbacks;
      this.__listeners = /* @__PURE__ */ new Set();
      this.__isDisconnected = false;
      this.el = el;
      this.el.phxHookId = this.constructor.makeID();
      for (let key in this.__callbacks) {
        this[key] = this.__callbacks[key];
      }
    }
    __mounted() {
      this.mounted && this.mounted();
    }
    __updated() {
      this.updated && this.updated();
    }
    __beforeUpdate() {
      this.beforeUpdate && this.beforeUpdate();
    }
    __destroyed() {
      this.destroyed && this.destroyed();
    }
    __reconnected() {
      if (this.__isDisconnected) {
        this.__isDisconnected = false;
        this.reconnected && this.reconnected();
      }
    }
    __disconnected() {
      this.__isDisconnected = true;
      this.disconnected && this.disconnected();
    }
    pushEvent(event, payload = {}, onReply = function() {
    }) {
      return this.__view.pushHookEvent(null, event, payload, onReply);
    }
    pushEventTo(phxTarget, event, payload = {}, onReply = function() {
    }) {
      return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
        return view.pushHookEvent(targetCtx, event, payload, onReply);
      });
    }
    handleEvent(event, callback) {
      let callbackRef = (customEvent, bypass) => bypass ? event : callback(customEvent.detail);
      window.addEventListener(`phx:${event}`, callbackRef);
      this.__listeners.add(callbackRef);
      return callbackRef;
    }
    removeHandleEvent(callbackRef) {
      let event = callbackRef(null, true);
      window.removeEventListener(`phx:${event}`, callbackRef);
      this.__listeners.delete(callbackRef);
    }
    upload(name, files) {
      return this.__view.dispatchUploads(name, files);
    }
    uploadTo(phxTarget, name, files) {
      return this.__view.withinTargets(phxTarget, (view) => view.dispatchUploads(name, files));
    }
    __cleanup__() {
      this.__listeners.forEach((callbackRef) => this.removeHandleEvent(callbackRef));
    }
  };
  var JS = {
    exec(eventType, phxEvent, view, sourceEl, defaults) {
      let [defaultKind, defaultArgs] = defaults || [null, {}];
      let commands = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
      commands.forEach(([kind, args]) => {
        if (kind === defaultKind && defaultArgs.data) {
          args.data = Object.assign(args.data || {}, defaultArgs.data);
        }
        this.filterToEls(sourceEl, args).forEach((el) => {
          this[`exec_${kind}`](eventType, phxEvent, view, sourceEl, el, args);
        });
      });
    },
    isVisible(el) {
      return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length > 0);
    },
    exec_dispatch(eventType, phxEvent, view, sourceEl, el, { to, event, detail }) {
      dom_default.dispatchEvent(el, event, detail);
    },
    exec_push(eventType, phxEvent, view, sourceEl, el, args) {
      let { event, data, target, page_loading, loading, value } = args;
      let pushOpts = { loading, value, target, page_loading: !!page_loading };
      let targetSrc = eventType === "change" ? sourceEl.form : sourceEl;
      let phxTarget = target || targetSrc.getAttribute(view.binding("target")) || targetSrc;
      view.withinTargets(phxTarget, (targetView, targetCtx) => {
        if (eventType === "change") {
          let { newCid, _target, callback } = args;
          if (_target) {
            pushOpts._target = _target;
          }
          targetView.pushInput(sourceEl, targetCtx, newCid, event || phxEvent, pushOpts, callback);
        } else if (eventType === "submit") {
          targetView.submitForm(sourceEl, targetCtx, event || phxEvent, pushOpts);
        } else {
          targetView.pushEvent(eventType, sourceEl, targetCtx, event || phxEvent, data, pushOpts);
        }
      });
    },
    exec_add_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
      this.addOrRemoveClasses(el, names, [], transition, time, view);
    },
    exec_remove_class(eventType, phxEvent, view, sourceEl, el, { names, transition, time }) {
      this.addOrRemoveClasses(el, [], names, transition, time, view);
    },
    exec_transition(eventType, phxEvent, view, sourceEl, el, { time, transition }) {
      let [transition_start, running, transition_end] = transition;
      let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(running), []);
      let onDone = () => this.addOrRemoveClasses(el, transition_end, transition_start.concat(running));
      view.transition(time, onStart, onDone);
    },
    exec_toggle(eventType, phxEvent, view, sourceEl, el, { display, ins, outs, time }) {
      this.toggle(eventType, view, el, display, ins, outs, time);
    },
    exec_show(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
      this.show(eventType, view, el, display, transition, time);
    },
    exec_hide(eventType, phxEvent, view, sourceEl, el, { display, transition, time }) {
      this.hide(eventType, view, el, display, transition, time);
    },
    exec_set_attr(eventType, phxEvent, view, sourceEl, el, { attr: [attr, val] }) {
      this.setOrRemoveAttrs(el, [[attr, val]], []);
    },
    exec_remove_attr(eventType, phxEvent, view, sourceEl, el, { attr }) {
      this.setOrRemoveAttrs(el, [], [attr]);
    },
    show(eventType, view, el, display, transition, time) {
      if (!this.isVisible(el)) {
        this.toggle(eventType, view, el, display, transition, null, time);
      }
    },
    hide(eventType, view, el, display, transition, time) {
      if (this.isVisible(el)) {
        this.toggle(eventType, view, el, display, null, transition, time);
      }
    },
    toggle(eventType, view, el, display, ins, outs, time) {
      let [inClasses, inStartClasses, inEndClasses] = ins || [[], [], []];
      let [outClasses, outStartClasses, outEndClasses] = outs || [[], [], []];
      if (inClasses.length > 0 || outClasses.length > 0) {
        if (this.isVisible(el)) {
          let onStart = () => {
            this.addOrRemoveClasses(el, outStartClasses, inClasses.concat(inStartClasses).concat(inEndClasses));
            window.requestAnimationFrame(() => {
              this.addOrRemoveClasses(el, outClasses, []);
              window.requestAnimationFrame(() => this.addOrRemoveClasses(el, outEndClasses, outStartClasses));
            });
          };
          el.dispatchEvent(new Event("phx:hide-start"));
          view.transition(time, onStart, () => {
            this.addOrRemoveClasses(el, [], outClasses.concat(outEndClasses));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
            el.dispatchEvent(new Event("phx:hide-end"));
          });
        } else {
          if (eventType === "remove") {
            return;
          }
          let onStart = () => {
            this.addOrRemoveClasses(el, inStartClasses, outClasses.concat(outStartClasses).concat(outEndClasses));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = display || "block");
            window.requestAnimationFrame(() => {
              this.addOrRemoveClasses(el, inClasses, []);
              window.requestAnimationFrame(() => this.addOrRemoveClasses(el, inEndClasses, inStartClasses));
            });
          };
          el.dispatchEvent(new Event("phx:show-start"));
          view.transition(time, onStart, () => {
            this.addOrRemoveClasses(el, [], inClasses.concat(inEndClasses));
            el.dispatchEvent(new Event("phx:show-end"));
          });
        }
      } else {
        if (this.isVisible(el)) {
          window.requestAnimationFrame(() => {
            el.dispatchEvent(new Event("phx:hide-start"));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
            el.dispatchEvent(new Event("phx:hide-end"));
          });
        } else {
          window.requestAnimationFrame(() => {
            el.dispatchEvent(new Event("phx:show-start"));
            dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = display || "block");
            el.dispatchEvent(new Event("phx:show-end"));
          });
        }
      }
    },
    addOrRemoveClasses(el, adds, removes, transition, time, view) {
      let [transition_run, transition_start, transition_end] = transition || [[], [], []];
      if (transition_run.length > 0) {
        let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(transition_run), []);
        let onDone = () => this.addOrRemoveClasses(el, adds.concat(transition_end), removes.concat(transition_run).concat(transition_start));
        return view.transition(time, onStart, onDone);
      }
      window.requestAnimationFrame(() => {
        let [prevAdds, prevRemoves] = dom_default.getSticky(el, "classes", [[], []]);
        let keepAdds = adds.filter((name) => prevAdds.indexOf(name) < 0 && !el.classList.contains(name));
        let keepRemoves = removes.filter((name) => prevRemoves.indexOf(name) < 0 && el.classList.contains(name));
        let newAdds = prevAdds.filter((name) => removes.indexOf(name) < 0).concat(keepAdds);
        let newRemoves = prevRemoves.filter((name) => adds.indexOf(name) < 0).concat(keepRemoves);
        dom_default.putSticky(el, "classes", (currentEl) => {
          currentEl.classList.remove(...newRemoves);
          currentEl.classList.add(...newAdds);
          return [newAdds, newRemoves];
        });
      });
    },
    setOrRemoveAttrs(el, sets, removes) {
      let [prevSets, prevRemoves] = dom_default.getSticky(el, "attrs", [[], []]);
      let keepSets = sets.filter(([attr, _val]) => !this.hasSet(prevSets, attr) && !el.attributes.getNamedItem(attr));
      let keepRemoves = removes.filter((attr) => prevRemoves.indexOf(attr) < 0 && el.attributes.getNamedItem(attr));
      let newSets = prevSets.filter(([attr, _val]) => removes.indexOf(attr) < 0).concat(keepSets);
      let newRemoves = prevRemoves.filter((attr) => !this.hasSet(sets, attr)).concat(keepRemoves);
      dom_default.putSticky(el, "attrs", (currentEl) => {
        newRemoves.forEach((attr) => currentEl.removeAttribute(attr));
        newSets.forEach(([attr, val]) => currentEl.setAttribute(attr, val));
        return [newSets, newRemoves];
      });
    },
    hasSet(sets, nameSearch) {
      return sets.find(([name, val]) => name === nameSearch);
    },
    hasAllClasses(el, classes) {
      return classes.every((name) => el.classList.contains(name));
    },
    isToggledOut(el, outClasses) {
      return !this.isVisible(el) || this.hasAllClasses(el, outClasses);
    },
    filterToEls(sourceEl, { to }) {
      return to ? dom_default.all(document, to) : [sourceEl];
    }
  };
  var js_default = JS;
  var serializeForm = (form, meta = {}) => {
    let formData = new FormData(form);
    let toRemove = [];
    formData.forEach((val, key, _index) => {
      if (val instanceof File) {
        toRemove.push(key);
      }
    });
    toRemove.forEach((key) => formData.delete(key));
    let params = new URLSearchParams();
    for (let [key, val] of formData.entries()) {
      params.append(key, val);
    }
    for (let metaKey in meta) {
      params.append(metaKey, meta[metaKey]);
    }
    return params.toString();
  };
  var View = class {
    constructor(el, liveSocket2, parentView, flash) {
      this.liveSocket = liveSocket2;
      this.flash = flash;
      this.parent = parentView;
      this.root = parentView ? parentView.root : this;
      this.el = el;
      this.id = this.el.id;
      this.ref = 0;
      this.childJoins = 0;
      this.loaderTimer = null;
      this.pendingDiffs = [];
      this.pruningCIDs = [];
      this.redirect = false;
      this.href = null;
      this.joinCount = this.parent ? this.parent.joinCount - 1 : 0;
      this.joinPending = true;
      this.destroyed = false;
      this.joinCallback = function(onDone) {
        onDone && onDone();
      };
      this.stopCallback = function() {
      };
      this.pendingJoinOps = this.parent ? null : [];
      this.viewHooks = {};
      this.uploaders = {};
      this.formSubmits = [];
      this.children = this.parent ? null : {};
      this.root.children[this.id] = {};
      this.channel = this.liveSocket.channel(`lv:${this.id}`, () => {
        return {
          redirect: this.redirect ? this.href : void 0,
          url: this.redirect ? void 0 : this.href || void 0,
          params: this.connectParams(),
          session: this.getSession(),
          static: this.getStatic(),
          flash: this.flash
        };
      });
      this.showLoader(this.liveSocket.loaderTimeout);
      this.bindChannel();
    }
    setHref(href) {
      this.href = href;
    }
    setRedirect(href) {
      this.redirect = true;
      this.href = href;
    }
    isMain() {
      return this.el.getAttribute(PHX_MAIN) !== null;
    }
    connectParams() {
      let params = this.liveSocket.params(this.el);
      let manifest = dom_default.all(document, `[${this.binding(PHX_TRACK_STATIC)}]`).map((node) => node.src || node.href).filter((url) => typeof url === "string");
      if (manifest.length > 0) {
        params["_track_static"] = manifest;
      }
      params["_mounts"] = this.joinCount;
      return params;
    }
    isConnected() {
      return this.channel.canPush();
    }
    getSession() {
      return this.el.getAttribute(PHX_SESSION);
    }
    getStatic() {
      let val = this.el.getAttribute(PHX_STATIC);
      return val === "" ? null : val;
    }
    destroy(callback = function() {
    }) {
      this.destroyAllChildren();
      this.destroyed = true;
      delete this.root.children[this.id];
      if (this.parent) {
        delete this.root.children[this.parent.id][this.id];
      }
      clearTimeout(this.loaderTimer);
      let onFinished = () => {
        callback();
        for (let id in this.viewHooks) {
          this.destroyHook(this.viewHooks[id]);
        }
      };
      dom_default.markPhxChildDestroyed(this.el);
      this.log("destroyed", () => ["the child has been removed from the parent"]);
      this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
    }
    setContainerClasses(...classes) {
      this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
      this.el.classList.add(...classes);
    }
    showLoader(timeout) {
      clearTimeout(this.loaderTimer);
      if (timeout) {
        this.loaderTimer = setTimeout(() => this.showLoader(), timeout);
      } else {
        for (let id in this.viewHooks) {
          this.viewHooks[id].__disconnected();
        }
        this.setContainerClasses(PHX_DISCONNECTED_CLASS);
      }
    }
    hideLoader() {
      clearTimeout(this.loaderTimer);
      this.setContainerClasses(PHX_CONNECTED_CLASS);
    }
    triggerReconnected() {
      for (let id in this.viewHooks) {
        this.viewHooks[id].__reconnected();
      }
    }
    log(kind, msgCallback) {
      this.liveSocket.log(this, kind, msgCallback);
    }
    transition(time, onStart, onDone = function() {
    }) {
      this.liveSocket.transition(time, onStart, onDone);
    }
    withinTargets(phxTarget, callback) {
      if (phxTarget instanceof HTMLElement || phxTarget instanceof SVGElement) {
        return this.liveSocket.owner(phxTarget, (view) => callback(view, phxTarget));
      }
      if (isCid(phxTarget)) {
        let targets = dom_default.findComponentNodeList(this.el, phxTarget);
        if (targets.length === 0) {
          logError(`no component found matching phx-target of ${phxTarget}`);
        } else {
          callback(this, parseInt(phxTarget));
        }
      } else {
        let targets = Array.from(document.querySelectorAll(phxTarget));
        if (targets.length === 0) {
          logError(`nothing found matching the phx-target selector "${phxTarget}"`);
        }
        targets.forEach((target) => this.liveSocket.owner(target, (view) => callback(view, target)));
      }
    }
    applyDiff(type, rawDiff, callback) {
      this.log(type, () => ["", clone(rawDiff)]);
      let { diff, reply, events, title } = Rendered.extract(rawDiff);
      if (title) {
        dom_default.putTitle(title);
      }
      callback({ diff, reply, events });
      return reply;
    }
    onJoin(resp) {
      let { rendered, container } = resp;
      if (container) {
        let [tag, attrs] = container;
        this.el = dom_default.replaceRootContainer(this.el, tag, attrs);
      }
      this.childJoins = 0;
      this.joinPending = true;
      this.flash = null;
      browser_default.dropLocal(this.liveSocket.localStorage, window.location.pathname, CONSECUTIVE_RELOADS);
      this.applyDiff("mount", rendered, ({ diff, events }) => {
        this.rendered = new Rendered(this.id, diff);
        let html = this.renderContainer(null, "join");
        this.dropPendingRefs();
        let forms = this.formsForRecovery(html);
        this.joinCount++;
        if (forms.length > 0) {
          forms.forEach(([form, newForm, newCid], i) => {
            this.pushFormRecovery(form, newCid, (resp2) => {
              if (i === forms.length - 1) {
                this.onJoinComplete(resp2, html, events);
              }
            });
          });
        } else {
          this.onJoinComplete(resp, html, events);
        }
      });
    }
    dropPendingRefs() {
      dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}]`, (el) => {
        el.removeAttribute(PHX_REF);
        el.removeAttribute(PHX_REF_SRC);
      });
    }
    onJoinComplete({ live_patch }, html, events) {
      if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) {
        return this.applyJoinPatch(live_patch, html, events);
      }
      let newChildren = dom_default.findPhxChildrenInFragment(html, this.id).filter((toEl) => {
        let fromEl = toEl.id && this.el.querySelector(`[id="${toEl.id}"]`);
        let phxStatic = fromEl && fromEl.getAttribute(PHX_STATIC);
        if (phxStatic) {
          toEl.setAttribute(PHX_STATIC, phxStatic);
        }
        return this.joinChild(toEl);
      });
      if (newChildren.length === 0) {
        if (this.parent) {
          this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
          this.parent.ackJoin(this);
        } else {
          this.onAllChildJoinsComplete();
          this.applyJoinPatch(live_patch, html, events);
        }
      } else {
        this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
      }
    }
    attachTrueDocEl() {
      this.el = dom_default.byId(this.id);
      this.el.setAttribute(PHX_ROOT_ID, this.root.id);
    }
    applyJoinPatch(live_patch, html, events) {
      this.attachTrueDocEl();
      let patch = new DOMPatch(this, this.el, this.id, html, null);
      patch.markPrunableContentForRemoval();
      this.performPatch(patch, false);
      this.joinNewChildren();
      dom_default.all(this.el, `[${this.binding(PHX_HOOK)}], [data-phx-${PHX_HOOK}]`, (hookEl) => {
        let hook = this.addHook(hookEl);
        if (hook) {
          hook.__mounted();
        }
      });
      this.joinPending = false;
      this.liveSocket.dispatchEvents(events);
      this.applyPendingUpdates();
      if (live_patch) {
        let { kind, to } = live_patch;
        this.liveSocket.historyPatch(to, kind);
      }
      this.hideLoader();
      if (this.joinCount > 1) {
        this.triggerReconnected();
      }
      this.stopCallback();
    }
    triggerBeforeUpdateHook(fromEl, toEl) {
      this.liveSocket.triggerDOM("onBeforeElUpdated", [fromEl, toEl]);
      let hook = this.getHook(fromEl);
      let isIgnored = hook && dom_default.isIgnored(fromEl, this.binding(PHX_UPDATE));
      if (hook && !fromEl.isEqualNode(toEl) && !(isIgnored && isEqualObj(fromEl.dataset, toEl.dataset))) {
        hook.__beforeUpdate();
        return hook;
      }
    }
    performPatch(patch, pruneCids) {
      let removedEls = [];
      let phxChildrenAdded = false;
      let updatedHookIds = /* @__PURE__ */ new Set();
      patch.after("added", (el) => {
        this.liveSocket.triggerDOM("onNodeAdded", [el]);
        let newHook = this.addHook(el);
        if (newHook) {
          newHook.__mounted();
        }
      });
      patch.after("phxChildAdded", (el) => {
        if (dom_default.isPhxSticky(el)) {
          this.liveSocket.joinRootViews();
        } else {
          phxChildrenAdded = true;
        }
      });
      patch.before("updated", (fromEl, toEl) => {
        let hook = this.triggerBeforeUpdateHook(fromEl, toEl);
        if (hook) {
          updatedHookIds.add(fromEl.id);
        }
      });
      patch.after("updated", (el) => {
        if (updatedHookIds.has(el.id)) {
          this.getHook(el).__updated();
        }
      });
      patch.after("discarded", (el) => {
        if (el.nodeType === Node.ELEMENT_NODE) {
          removedEls.push(el);
        }
      });
      patch.after("transitionsDiscarded", (els) => this.afterElementsRemoved(els, pruneCids));
      patch.perform();
      this.afterElementsRemoved(removedEls, pruneCids);
      return phxChildrenAdded;
    }
    afterElementsRemoved(elements, pruneCids) {
      let destroyedCIDs = [];
      elements.forEach((parent) => {
        let components = dom_default.all(parent, `[${PHX_COMPONENT}]`);
        components.concat(parent).forEach((el) => {
          let cid = this.componentID(el);
          if (isCid(cid) && destroyedCIDs.indexOf(cid) === -1) {
            destroyedCIDs.push(cid);
          }
          let hook = this.getHook(el);
          hook && this.destroyHook(hook);
        });
      });
      if (pruneCids) {
        this.maybePushComponentsDestroyed(destroyedCIDs);
      }
    }
    joinNewChildren() {
      dom_default.findPhxChildren(this.el, this.id).forEach((el) => this.joinChild(el));
    }
    getChildById(id) {
      return this.root.children[this.id][id];
    }
    getDescendentByEl(el) {
      if (el.id === this.id) {
        return this;
      } else {
        return this.children[el.getAttribute(PHX_PARENT_ID)][el.id];
      }
    }
    destroyDescendent(id) {
      for (let parentId in this.root.children) {
        for (let childId in this.root.children[parentId]) {
          if (childId === id) {
            return this.root.children[parentId][childId].destroy();
          }
        }
      }
    }
    joinChild(el) {
      let child = this.getChildById(el.id);
      if (!child) {
        let view = new View(el, this.liveSocket, this);
        this.root.children[this.id][view.id] = view;
        view.join();
        this.childJoins++;
        return true;
      }
    }
    isJoinPending() {
      return this.joinPending;
    }
    ackJoin(_child) {
      this.childJoins--;
      if (this.childJoins === 0) {
        if (this.parent) {
          this.parent.ackJoin(this);
        } else {
          this.onAllChildJoinsComplete();
        }
      }
    }
    onAllChildJoinsComplete() {
      this.joinCallback(() => {
        this.pendingJoinOps.forEach(([view, op]) => {
          if (!view.isDestroyed()) {
            op();
          }
        });
        this.pendingJoinOps = [];
      });
    }
    update(diff, events) {
      if (this.isJoinPending() || this.liveSocket.hasPendingLink()) {
        return this.pendingDiffs.push({ diff, events });
      }
      this.rendered.mergeDiff(diff);
      let phxChildrenAdded = false;
      if (this.rendered.isComponentOnlyDiff(diff)) {
        this.liveSocket.time("component patch complete", () => {
          let parentCids = dom_default.findParentCIDs(this.el, this.rendered.componentCIDs(diff));
          parentCids.forEach((parentCID) => {
            if (this.componentPatch(this.rendered.getComponent(diff, parentCID), parentCID)) {
              phxChildrenAdded = true;
            }
          });
        });
      } else if (!isEmpty(diff)) {
        this.liveSocket.time("full patch complete", () => {
          let html = this.renderContainer(diff, "update");
          let patch = new DOMPatch(this, this.el, this.id, html, null);
          phxChildrenAdded = this.performPatch(patch, true);
        });
      }
      this.liveSocket.dispatchEvents(events);
      if (phxChildrenAdded) {
        this.joinNewChildren();
      }
    }
    renderContainer(diff, kind) {
      return this.liveSocket.time(`toString diff (${kind})`, () => {
        let tag = this.el.tagName;
        let cids = diff ? this.rendered.componentCIDs(diff).concat(this.pruningCIDs) : null;
        let html = this.rendered.toString(cids);
        return `<${tag}>${html}</${tag}>`;
      });
    }
    componentPatch(diff, cid) {
      if (isEmpty(diff))
        return false;
      let html = this.rendered.componentToString(cid);
      let patch = new DOMPatch(this, this.el, this.id, html, cid);
      let childrenAdded = this.performPatch(patch, true);
      return childrenAdded;
    }
    getHook(el) {
      return this.viewHooks[ViewHook.elementID(el)];
    }
    addHook(el) {
      if (ViewHook.elementID(el) || !el.getAttribute) {
        return;
      }
      let hookName = el.getAttribute(`data-phx-${PHX_HOOK}`) || el.getAttribute(this.binding(PHX_HOOK));
      if (hookName && !this.ownsElement(el)) {
        return;
      }
      let callbacks = this.liveSocket.getHookCallbacks(hookName);
      if (callbacks) {
        if (!el.id) {
          logError(`no DOM ID for hook "${hookName}". Hooks require a unique ID on each element.`, el);
        }
        let hook = new ViewHook(this, el, callbacks);
        this.viewHooks[ViewHook.elementID(hook.el)] = hook;
        return hook;
      } else if (hookName !== null) {
        logError(`unknown hook found for "${hookName}"`, el);
      }
    }
    destroyHook(hook) {
      hook.__destroyed();
      hook.__cleanup__();
      delete this.viewHooks[ViewHook.elementID(hook.el)];
    }
    applyPendingUpdates() {
      this.pendingDiffs.forEach(({ diff, events }) => this.update(diff, events));
      this.pendingDiffs = [];
    }
    onChannel(event, cb) {
      this.liveSocket.onChannel(this.channel, event, (resp) => {
        if (this.isJoinPending()) {
          this.root.pendingJoinOps.push([this, () => cb(resp)]);
        } else {
          this.liveSocket.requestDOMUpdate(() => cb(resp));
        }
      });
    }
    bindChannel() {
      this.liveSocket.onChannel(this.channel, "diff", (rawDiff) => {
        this.liveSocket.requestDOMUpdate(() => {
          this.applyDiff("update", rawDiff, ({ diff, events }) => this.update(diff, events));
        });
      });
      this.onChannel("redirect", ({ to, flash }) => this.onRedirect({ to, flash }));
      this.onChannel("live_patch", (redir) => this.onLivePatch(redir));
      this.onChannel("live_redirect", (redir) => this.onLiveRedirect(redir));
      this.channel.onError((reason) => this.onError(reason));
      this.channel.onClose((reason) => this.onClose(reason));
    }
    destroyAllChildren() {
      for (let id in this.root.children[this.id]) {
        this.getChildById(id).destroy();
      }
    }
    onLiveRedirect(redir) {
      let { to, kind, flash } = redir;
      let url = this.expandURL(to);
      this.liveSocket.historyRedirect(url, kind, flash);
    }
    onLivePatch(redir) {
      let { to, kind } = redir;
      this.href = this.expandURL(to);
      this.liveSocket.historyPatch(to, kind);
    }
    expandURL(to) {
      return to.startsWith("/") ? `${window.location.protocol}//${window.location.host}${to}` : to;
    }
    onRedirect({ to, flash }) {
      this.liveSocket.redirect(to, flash);
    }
    isDestroyed() {
      return this.destroyed;
    }
    join(callback) {
      if (this.isMain()) {
        this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" });
      }
      this.joinCallback = (onDone) => {
        onDone = onDone || function() {
        };
        callback ? callback(this.joinCount, onDone) : onDone();
      };
      this.liveSocket.wrapPush(this, { timeout: false }, () => {
        return this.channel.join().receive("ok", (data) => {
          if (!this.isDestroyed()) {
            this.liveSocket.requestDOMUpdate(() => this.onJoin(data));
          }
        }).receive("error", (resp) => !this.isDestroyed() && this.onJoinError(resp)).receive("timeout", () => !this.isDestroyed() && this.onJoinError({ reason: "timeout" }));
      });
    }
    onJoinError(resp) {
      if (resp.reason === "unauthorized" || resp.reason === "stale") {
        this.log("error", () => ["unauthorized live_redirect. Falling back to page request", resp]);
        return this.onRedirect({ to: this.href });
      }
      if (resp.redirect || resp.live_redirect) {
        this.joinPending = false;
        this.channel.leave();
      }
      if (resp.redirect) {
        return this.onRedirect(resp.redirect);
      }
      if (resp.live_redirect) {
        return this.onLiveRedirect(resp.live_redirect);
      }
      this.log("error", () => ["unable to join", resp]);
      return this.liveSocket.reloadWithJitter(this);
    }
    onClose(reason) {
      if (this.isDestroyed()) {
        return;
      }
      if (this.isJoinPending() && document.visibilityState !== "hidden" || this.liveSocket.hasPendingLink() && reason !== "leave") {
        return this.liveSocket.reloadWithJitter(this);
      }
      this.destroyAllChildren();
      this.liveSocket.dropActiveElement(this);
      if (document.activeElement) {
        document.activeElement.blur();
      }
      if (this.liveSocket.isUnloaded()) {
        this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
      }
    }
    onError(reason) {
      this.onClose(reason);
      this.log("error", () => ["view crashed", reason]);
      if (!this.liveSocket.isUnloaded()) {
        this.displayError();
      }
    }
    displayError() {
      if (this.isMain()) {
        dom_default.dispatchEvent(window, "phx:page-loading-start", { to: this.href, kind: "error" });
      }
      this.showLoader();
      this.setContainerClasses(PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
    }
    pushWithReply(refGenerator, event, payload, onReply = function() {
    }) {
      if (!this.isConnected()) {
        return;
      }
      let [ref, [el], opts] = refGenerator ? refGenerator() : [null, [], {}];
      let onLoadingDone = function() {
      };
      if (opts.page_loading || el && el.getAttribute(this.binding(PHX_PAGE_LOADING)) !== null) {
        onLoadingDone = this.liveSocket.withPageLoading({ kind: "element", target: el });
      }
      if (typeof payload.cid !== "number") {
        delete payload.cid;
      }
      return this.liveSocket.wrapPush(this, { timeout: true }, () => {
        return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", (resp) => {
          if (ref !== null) {
            this.undoRefs(ref);
          }
          let finish = (hookReply) => {
            if (resp.redirect) {
              this.onRedirect(resp.redirect);
            }
            if (resp.live_patch) {
              this.onLivePatch(resp.live_patch);
            }
            if (resp.live_redirect) {
              this.onLiveRedirect(resp.live_redirect);
            }
            onLoadingDone();
            onReply(resp, hookReply);
          };
          if (resp.diff) {
            this.liveSocket.requestDOMUpdate(() => {
              let hookReply = this.applyDiff("update", resp.diff, ({ diff, events }) => {
                this.update(diff, events);
              });
              finish(hookReply);
            });
          } else {
            finish(null);
          }
        });
      });
    }
    undoRefs(ref) {
      dom_default.all(document, `[${PHX_REF_SRC}="${this.id}"][${PHX_REF}="${ref}"]`, (el) => {
        let disabledVal = el.getAttribute(PHX_DISABLED);
        el.removeAttribute(PHX_REF);
        el.removeAttribute(PHX_REF_SRC);
        if (el.getAttribute(PHX_READONLY) !== null) {
          el.readOnly = false;
          el.removeAttribute(PHX_READONLY);
        }
        if (disabledVal !== null) {
          el.disabled = disabledVal === "true" ? true : false;
          el.removeAttribute(PHX_DISABLED);
        }
        PHX_EVENT_CLASSES.forEach((className) => dom_default.removeClass(el, className));
        let disableRestore = el.getAttribute(PHX_DISABLE_WITH_RESTORE);
        if (disableRestore !== null) {
          el.innerText = disableRestore;
          el.removeAttribute(PHX_DISABLE_WITH_RESTORE);
        }
        let toEl = dom_default.private(el, PHX_REF);
        if (toEl) {
          let hook = this.triggerBeforeUpdateHook(el, toEl);
          DOMPatch.patchEl(el, toEl, this.liveSocket.getActiveElement());
          if (hook) {
            hook.__updated();
          }
          dom_default.deletePrivate(el, PHX_REF);
        }
      });
    }
    putRef(elements, event, opts = {}) {
      let newRef = this.ref++;
      let disableWith = this.binding(PHX_DISABLE_WITH);
      if (opts.loading) {
        elements = elements.concat(dom_default.all(document, opts.loading));
      }
      elements.forEach((el) => {
        el.classList.add(`phx-${event}-loading`);
        el.setAttribute(PHX_REF, newRef);
        el.setAttribute(PHX_REF_SRC, this.el.id);
        let disableText = el.getAttribute(disableWith);
        if (disableText !== null) {
          if (!el.getAttribute(PHX_DISABLE_WITH_RESTORE)) {
            el.setAttribute(PHX_DISABLE_WITH_RESTORE, el.innerText);
          }
          if (disableText !== "") {
            el.innerText = disableText;
          }
          el.setAttribute("disabled", "");
        }
      });
      return [newRef, elements, opts];
    }
    componentID(el) {
      let cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
      return cid ? parseInt(cid) : null;
    }
    targetComponentID(target, targetCtx, opts = {}) {
      if (isCid(targetCtx)) {
        return targetCtx;
      }
      let cidOrSelector = target.getAttribute(this.binding("target"));
      if (isCid(cidOrSelector)) {
        return parseInt(cidOrSelector);
      } else if (targetCtx && (cidOrSelector !== null || opts.target)) {
        return this.closestComponentID(targetCtx);
      } else {
        return null;
      }
    }
    closestComponentID(targetCtx) {
      if (isCid(targetCtx)) {
        return targetCtx;
      } else if (targetCtx) {
        return maybe(targetCtx.closest(`[${PHX_COMPONENT}]`), (el) => this.ownsElement(el) && this.componentID(el));
      } else {
        return null;
      }
    }
    pushHookEvent(targetCtx, event, payload, onReply) {
      if (!this.isConnected()) {
        this.log("hook", () => ["unable to push hook event. LiveView not connected", event, payload]);
        return false;
      }
      let [ref, els, opts] = this.putRef([], "hook");
      this.pushWithReply(() => [ref, els, opts], "event", {
        type: "hook",
        event,
        value: payload,
        cid: this.closestComponentID(targetCtx)
      }, (resp, reply) => onReply(reply, ref));
      return ref;
    }
    extractMeta(el, meta, value) {
      let prefix = this.binding("value-");
      for (let i = 0; i < el.attributes.length; i++) {
        if (!meta) {
          meta = {};
        }
        let name = el.attributes[i].name;
        if (name.startsWith(prefix)) {
          meta[name.replace(prefix, "")] = el.getAttribute(name);
        }
      }
      if (el.value !== void 0) {
        if (!meta) {
          meta = {};
        }
        meta.value = el.value;
        if (el.tagName === "INPUT" && CHECKABLE_INPUTS.indexOf(el.type) >= 0 && !el.checked) {
          delete meta.value;
        }
      }
      if (value) {
        if (!meta) {
          meta = {};
        }
        for (let key in value) {
          meta[key] = value[key];
        }
      }
      return meta;
    }
    pushEvent(type, el, targetCtx, phxEvent, meta, opts = {}) {
      this.pushWithReply(() => this.putRef([el], type, opts), "event", {
        type,
        event: phxEvent,
        value: this.extractMeta(el, meta, opts.value),
        cid: this.targetComponentID(el, targetCtx, opts)
      });
    }
    pushFileProgress(fileEl, entryRef, progress, onReply = function() {
    }) {
      this.liveSocket.withinOwners(fileEl.form, (view, targetCtx) => {
        view.pushWithReply(null, "progress", {
          event: fileEl.getAttribute(view.binding(PHX_PROGRESS)),
          ref: fileEl.getAttribute(PHX_UPLOAD_REF),
          entry_ref: entryRef,
          progress,
          cid: view.targetComponentID(fileEl.form, targetCtx)
        }, onReply);
      });
    }
    pushInput(inputEl, targetCtx, forceCid, phxEvent, opts, callback) {
      let uploads;
      let cid = isCid(forceCid) ? forceCid : this.targetComponentID(inputEl.form, targetCtx);
      let refGenerator = () => this.putRef([inputEl, inputEl.form], "change", opts);
      let formData = serializeForm(inputEl.form, { _target: opts._target });
      if (dom_default.isUploadInput(inputEl) && inputEl.files && inputEl.files.length > 0) {
        LiveUploader.trackFiles(inputEl, Array.from(inputEl.files));
      }
      uploads = LiveUploader.serializeUploads(inputEl);
      let event = {
        type: "form",
        event: phxEvent,
        value: formData,
        uploads,
        cid
      };
      this.pushWithReply(refGenerator, "event", event, (resp) => {
        dom_default.showError(inputEl, this.liveSocket.binding(PHX_FEEDBACK_FOR));
        if (dom_default.isUploadInput(inputEl) && inputEl.getAttribute("data-phx-auto-upload") !== null) {
          if (LiveUploader.filesAwaitingPreflight(inputEl).length > 0) {
            let [ref, _els] = refGenerator();
            this.uploadFiles(inputEl.form, targetCtx, ref, cid, (_uploads) => {
              callback && callback(resp);
              this.triggerAwaitingSubmit(inputEl.form);
            });
          }
        } else {
          callback && callback(resp);
        }
      });
    }
    triggerAwaitingSubmit(formEl) {
      let awaitingSubmit = this.getScheduledSubmit(formEl);
      if (awaitingSubmit) {
        let [_el, _ref, _opts, callback] = awaitingSubmit;
        this.cancelSubmit(formEl);
        callback();
      }
    }
    getScheduledSubmit(formEl) {
      return this.formSubmits.find(([el, _ref, _opts, _callback]) => el.isSameNode(formEl));
    }
    scheduleSubmit(formEl, ref, opts, callback) {
      if (this.getScheduledSubmit(formEl)) {
        return true;
      }
      this.formSubmits.push([formEl, ref, opts, callback]);
    }
    cancelSubmit(formEl) {
      this.formSubmits = this.formSubmits.filter(([el, ref, _callback]) => {
        if (el.isSameNode(formEl)) {
          this.undoRefs(ref);
          return false;
        } else {
          return true;
        }
      });
    }
    pushFormSubmit(formEl, targetCtx, phxEvent, opts, onReply) {
      let filterIgnored = (el) => {
        let userIgnored = closestPhxBinding(el, `${this.binding(PHX_UPDATE)}=ignore`, el.form);
        return !(userIgnored || closestPhxBinding(el, "data-phx-update=ignore", el.form));
      };
      let filterDisables = (el) => {
        return el.hasAttribute(this.binding(PHX_DISABLE_WITH));
      };
      let filterButton = (el) => el.tagName == "BUTTON";
      let filterInput = (el) => ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
      let refGenerator = () => {
        let formElements = Array.from(formEl.elements);
        let disables = formElements.filter(filterDisables);
        let buttons = formElements.filter(filterButton).filter(filterIgnored);
        let inputs = formElements.filter(filterInput).filter(filterIgnored);
        buttons.forEach((button) => {
          button.setAttribute(PHX_DISABLED, button.disabled);
          button.disabled = true;
        });
        inputs.forEach((input) => {
          input.setAttribute(PHX_READONLY, input.readOnly);
          input.readOnly = true;
          if (input.files) {
            input.setAttribute(PHX_DISABLED, input.disabled);
            input.disabled = true;
          }
        });
        formEl.setAttribute(this.binding(PHX_PAGE_LOADING), "");
        return this.putRef([formEl].concat(disables).concat(buttons).concat(inputs), "submit", opts);
      };
      let cid = this.targetComponentID(formEl, targetCtx);
      if (LiveUploader.hasUploadsInProgress(formEl)) {
        let [ref, _els] = refGenerator();
        let push = () => this.pushFormSubmit(formEl, targetCtx, phxEvent, opts, onReply);
        return this.scheduleSubmit(formEl, ref, opts, push);
      } else if (LiveUploader.inputsAwaitingPreflight(formEl).length > 0) {
        let [ref, els] = refGenerator();
        let proxyRefGen = () => [ref, els, opts];
        this.uploadFiles(formEl, targetCtx, ref, cid, (_uploads) => {
          let formData = serializeForm(formEl, {});
          this.pushWithReply(proxyRefGen, "event", {
            type: "form",
            event: phxEvent,
            value: formData,
            cid
          }, onReply);
        });
      } else {
        let formData = serializeForm(formEl);
        this.pushWithReply(refGenerator, "event", {
          type: "form",
          event: phxEvent,
          value: formData,
          cid
        }, onReply);
      }
    }
    uploadFiles(formEl, targetCtx, ref, cid, onComplete) {
      let joinCountAtUpload = this.joinCount;
      let inputEls = LiveUploader.activeFileInputs(formEl);
      let numFileInputsInProgress = inputEls.length;
      inputEls.forEach((inputEl) => {
        let uploader = new LiveUploader(inputEl, this, () => {
          numFileInputsInProgress--;
          if (numFileInputsInProgress === 0) {
            onComplete();
          }
        });
        this.uploaders[inputEl] = uploader;
        let entries = uploader.entries().map((entry) => entry.toPreflightPayload());
        let payload = {
          ref: inputEl.getAttribute(PHX_UPLOAD_REF),
          entries,
          cid: this.targetComponentID(inputEl.form, targetCtx)
        };
        this.log("upload", () => ["sending preflight request", payload]);
        this.pushWithReply(null, "allow_upload", payload, (resp) => {
          this.log("upload", () => ["got preflight response", resp]);
          if (resp.error) {
            this.undoRefs(ref);
            let [entry_ref, reason] = resp.error;
            this.log("upload", () => [`error for entry ${entry_ref}`, reason]);
          } else {
            let onError = (callback) => {
              this.channel.onError(() => {
                if (this.joinCount === joinCountAtUpload) {
                  callback();
                }
              });
            };
            uploader.initAdapterUpload(resp, onError, this.liveSocket);
          }
        });
      });
    }
    dispatchUploads(name, filesOrBlobs) {
      let inputs = dom_default.findUploadInputs(this.el).filter((el) => el.name === name);
      if (inputs.length === 0) {
        logError(`no live file inputs found matching the name "${name}"`);
      } else if (inputs.length > 1) {
        logError(`duplicate live file inputs found matching the name "${name}"`);
      } else {
        dom_default.dispatchEvent(inputs[0], PHX_TRACK_UPLOADS, { files: filesOrBlobs });
      }
    }
    pushFormRecovery(form, newCid, callback) {
      this.liveSocket.withinOwners(form, (view, targetCtx) => {
        let input = form.elements[0];
        let phxEvent = form.getAttribute(this.binding(PHX_AUTO_RECOVER)) || form.getAttribute(this.binding("change"));
        js_default.exec("change", phxEvent, view, input, ["push", { _target: input.name, newCid, callback }]);
      });
    }
    pushLinkPatch(href, targetEl, callback) {
      let linkRef = this.liveSocket.setPendingLink(href);
      let refGen = targetEl ? () => this.putRef([targetEl], "click") : null;
      let fallback = () => this.liveSocket.redirect(window.location.href);
      let push = this.pushWithReply(refGen, "live_patch", { url: href }, (resp) => {
        this.liveSocket.requestDOMUpdate(() => {
          if (resp.link_redirect) {
            this.liveSocket.replaceMain(href, null, callback, linkRef);
          } else {
            if (this.liveSocket.commitPendingLink(linkRef)) {
              this.href = href;
            }
            this.applyPendingUpdates();
            callback && callback(linkRef);
          }
        });
      });
      if (push) {
        push.receive("timeout", fallback);
      } else {
        fallback();
      }
    }
    formsForRecovery(html) {
      if (this.joinCount === 0) {
        return [];
      }
      let phxChange = this.binding("change");
      let template = document.createElement("template");
      template.innerHTML = html;
      return dom_default.all(this.el, `form[${phxChange}]`).filter((form) => form.id && this.ownsElement(form)).filter((form) => form.elements.length > 0).filter((form) => form.getAttribute(this.binding(PHX_AUTO_RECOVER)) !== "ignore").map((form) => {
        let newForm = template.content.querySelector(`form[id="${form.id}"][${phxChange}="${form.getAttribute(phxChange)}"]`);
        if (newForm) {
          return [form, newForm, this.targetComponentID(newForm)];
        } else {
          return [form, null, null];
        }
      }).filter(([form, newForm, newCid]) => newForm);
    }
    maybePushComponentsDestroyed(destroyedCIDs) {
      let willDestroyCIDs = destroyedCIDs.filter((cid) => {
        return dom_default.findComponentNodeList(this.el, cid).length === 0;
      });
      if (willDestroyCIDs.length > 0) {
        this.pruningCIDs.push(...willDestroyCIDs);
        this.pushWithReply(null, "cids_will_destroy", { cids: willDestroyCIDs }, () => {
          this.pruningCIDs = this.pruningCIDs.filter((cid) => willDestroyCIDs.indexOf(cid) !== -1);
          let completelyDestroyCIDs = willDestroyCIDs.filter((cid) => {
            return dom_default.findComponentNodeList(this.el, cid).length === 0;
          });
          if (completelyDestroyCIDs.length > 0) {
            this.pushWithReply(null, "cids_destroyed", { cids: completelyDestroyCIDs }, (resp) => {
              this.rendered.pruneCIDs(resp.cids);
            });
          }
        });
      }
    }
    ownsElement(el) {
      return el.getAttribute(PHX_PARENT_ID) === this.id || maybe(el.closest(PHX_VIEW_SELECTOR), (node) => node.id) === this.id;
    }
    submitForm(form, targetCtx, phxEvent, opts = {}) {
      dom_default.putPrivate(form, PHX_HAS_SUBMITTED, true);
      let phxFeedback = this.liveSocket.binding(PHX_FEEDBACK_FOR);
      let inputs = Array.from(form.elements);
      this.liveSocket.blurActiveElement(this);
      this.pushFormSubmit(form, targetCtx, phxEvent, opts, () => {
        inputs.forEach((input) => dom_default.showError(input, phxFeedback));
        this.liveSocket.restorePreviouslyActiveFocus();
      });
    }
    binding(kind) {
      return this.liveSocket.binding(kind);
    }
  };
  var LiveSocket = class {
    constructor(url, phxSocket, opts = {}) {
      this.unloaded = false;
      if (!phxSocket || phxSocket.constructor.name === "Object") {
        throw new Error(`
      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:

          import {Socket} from "phoenix"
          import {LiveSocket} from "phoenix_live_view"
          let liveSocket = new LiveSocket("/live", Socket, {...})
      `);
      }
      this.socket = new phxSocket(url, opts);
      this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
      this.opts = opts;
      this.params = closure2(opts.params || {});
      this.viewLogger = opts.viewLogger;
      this.metadataCallbacks = opts.metadata || {};
      this.defaults = Object.assign(clone(DEFAULTS), opts.defaults || {});
      this.activeElement = null;
      this.prevActive = null;
      this.silenced = false;
      this.main = null;
      this.linkRef = 1;
      this.clickRef = 1;
      this.roots = {};
      this.href = window.location.href;
      this.pendingLink = null;
      this.currentLocation = clone(window.location);
      this.hooks = opts.hooks || {};
      this.uploaders = opts.uploaders || {};
      this.loaderTimeout = opts.loaderTimeout || LOADER_TIMEOUT;
      this.maxReloads = opts.maxReloads || MAX_RELOADS;
      this.reloadJitterMin = opts.reloadJitterMin || RELOAD_JITTER_MIN;
      this.reloadJitterMax = opts.reloadJitterMax || RELOAD_JITTER_MAX;
      this.failsafeJitter = opts.failsafeJitter || FAILSAFE_JITTER;
      this.localStorage = opts.localStorage || window.localStorage;
      this.sessionStorage = opts.sessionStorage || window.sessionStorage;
      this.boundTopLevelEvents = false;
      this.domCallbacks = Object.assign({ onNodeAdded: closure2(), onBeforeElUpdated: closure2() }, opts.dom || {});
      this.transitions = new TransitionSet();
      window.addEventListener("pagehide", (_e) => {
        this.unloaded = true;
      });
      this.socket.onOpen(() => {
        if (this.isUnloaded()) {
          window.location.reload();
        }
      });
    }
    isProfileEnabled() {
      return this.sessionStorage.getItem(PHX_LV_PROFILE) === "true";
    }
    isDebugEnabled() {
      return this.sessionStorage.getItem(PHX_LV_DEBUG) === "true";
    }
    enableDebug() {
      this.sessionStorage.setItem(PHX_LV_DEBUG, "true");
    }
    enableProfiling() {
      this.sessionStorage.setItem(PHX_LV_PROFILE, "true");
    }
    disableDebug() {
      this.sessionStorage.removeItem(PHX_LV_DEBUG);
    }
    disableProfiling() {
      this.sessionStorage.removeItem(PHX_LV_PROFILE);
    }
    enableLatencySim(upperBoundMs) {
      this.enableDebug();
      console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable");
      this.sessionStorage.setItem(PHX_LV_LATENCY_SIM, upperBoundMs);
    }
    disableLatencySim() {
      this.sessionStorage.removeItem(PHX_LV_LATENCY_SIM);
    }
    getLatencySim() {
      let str = this.sessionStorage.getItem(PHX_LV_LATENCY_SIM);
      return str ? parseInt(str) : null;
    }
    getSocket() {
      return this.socket;
    }
    connect() {
      let doConnect = () => {
        if (this.joinRootViews()) {
          this.bindTopLevelEvents();
          this.socket.connect();
        }
      };
      if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
        doConnect();
      } else {
        document.addEventListener("DOMContentLoaded", () => doConnect());
      }
    }
    disconnect(callback) {
      this.socket.disconnect(callback);
    }
    execJS(el, encodedJS, eventType = null) {
      this.owner(el, (view) => js_default.exec(eventType, encodedJS, view, el));
    }
    triggerDOM(kind, args) {
      this.domCallbacks[kind](...args);
    }
    time(name, func) {
      if (!this.isProfileEnabled() || !console.time) {
        return func();
      }
      console.time(name);
      let result = func();
      console.timeEnd(name);
      return result;
    }
    log(view, kind, msgCallback) {
      if (this.viewLogger) {
        let [msg, obj] = msgCallback();
        this.viewLogger(view, kind, msg, obj);
      } else if (this.isDebugEnabled()) {
        let [msg, obj] = msgCallback();
        debug(view, kind, msg, obj);
      }
    }
    requestDOMUpdate(callback) {
      this.transitions.after(callback);
    }
    transition(time, onStart, onDone = function() {
    }) {
      this.transitions.addTransition(time, onStart, onDone);
    }
    onChannel(channel, event, cb) {
      channel.on(event, (data) => {
        let latency = this.getLatencySim();
        if (!latency) {
          cb(data);
        } else {
          console.log(`simulating ${latency}ms of latency from server to client`);
          setTimeout(() => cb(data), latency);
        }
      });
    }
    wrapPush(view, opts, push) {
      let latency = this.getLatencySim();
      let oldJoinCount = view.joinCount;
      if (!latency) {
        if (opts.timeout) {
          return push().receive("timeout", () => {
            if (view.joinCount === oldJoinCount && !view.isDestroyed()) {
              this.reloadWithJitter(view, () => {
                this.log(view, "timeout", () => ["received timeout while communicating with server. Falling back to hard refresh for recovery"]);
              });
            }
          });
        } else {
          return push();
        }
      }
      console.log(`simulating ${latency}ms of latency from client to server`);
      let fakePush = {
        receives: [],
        receive(kind, cb) {
          this.receives.push([kind, cb]);
        }
      };
      setTimeout(() => {
        if (view.isDestroyed()) {
          return;
        }
        fakePush.receives.reduce((acc, [kind, cb]) => acc.receive(kind, cb), push());
      }, latency);
      return fakePush;
    }
    reloadWithJitter(view, log) {
      view.destroy();
      this.disconnect();
      let minMs = this.reloadJitterMin;
      let maxMs = this.reloadJitterMax;
      let afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
      let tries = browser_default.updateLocal(this.localStorage, window.location.pathname, CONSECUTIVE_RELOADS, 0, (count) => count + 1);
      log ? log() : this.log(view, "join", () => [`encountered ${tries} consecutive reloads`]);
      if (tries > this.maxReloads) {
        this.log(view, "join", () => [`exceeded ${this.maxReloads} consecutive reloads. Entering failsafe mode`]);
        afterMs = this.failsafeJitter;
      }
      setTimeout(() => {
        if (this.hasPendingLink()) {
          window.location = this.pendingLink;
        } else {
          window.location.reload();
        }
      }, afterMs);
    }
    getHookCallbacks(name) {
      return name && name.startsWith("Phoenix.") ? hooks_default[name.split(".")[1]] : this.hooks[name];
    }
    isUnloaded() {
      return this.unloaded;
    }
    isConnected() {
      return this.socket.isConnected();
    }
    getBindingPrefix() {
      return this.bindingPrefix;
    }
    binding(kind) {
      return `${this.getBindingPrefix()}${kind}`;
    }
    channel(topic, params) {
      return this.socket.channel(topic, params);
    }
    joinRootViews() {
      let rootsFound = false;
      dom_default.all(document, `${PHX_VIEW_SELECTOR}:not([${PHX_PARENT_ID}])`, (rootEl) => {
        if (!this.getRootById(rootEl.id)) {
          let view = this.newRootView(rootEl);
          view.setHref(this.getHref());
          view.join();
          if (rootEl.getAttribute(PHX_MAIN)) {
            this.main = view;
          }
        }
        rootsFound = true;
      });
      return rootsFound;
    }
    redirect(to, flash) {
      this.disconnect();
      browser_default.redirect(to, flash);
    }
    replaceMain(href, flash, callback = null, linkRef = this.setPendingLink(href)) {
      let oldMainEl = this.main.el;
      let newMainEl = dom_default.cloneNode(oldMainEl, "");
      this.main.showLoader(this.loaderTimeout);
      this.main.destroy();
      this.main = this.newRootView(newMainEl, flash);
      this.main.setRedirect(href);
      this.transitionRemoves();
      this.main.join((joinCount, onDone) => {
        if (joinCount === 1 && this.commitPendingLink(linkRef)) {
          this.requestDOMUpdate(() => {
            dom_default.findPhxSticky(document).forEach((el) => newMainEl.appendChild(el));
            oldMainEl.replaceWith(newMainEl);
            callback && callback();
            onDone();
          });
        }
      });
    }
    transitionRemoves(elements) {
      let removeAttr = this.binding("remove");
      elements = elements || dom_default.all(document, `[${removeAttr}]`);
      elements.forEach((el) => {
        if (document.body.contains(el)) {
          this.execJS(el, el.getAttribute(removeAttr), "remove");
        }
      });
    }
    isPhxView(el) {
      return el.getAttribute && el.getAttribute(PHX_SESSION) !== null;
    }
    newRootView(el, flash) {
      let view = new View(el, this, null, flash);
      this.roots[view.id] = view;
      return view;
    }
    owner(childEl, callback) {
      let view = maybe(childEl.closest(PHX_VIEW_SELECTOR), (el) => this.getViewByEl(el)) || this.main;
      if (view) {
        callback(view);
      }
    }
    withinOwners(childEl, callback) {
      this.owner(childEl, (view) => callback(view, childEl));
    }
    getViewByEl(el) {
      let rootId = el.getAttribute(PHX_ROOT_ID);
      return maybe(this.getRootById(rootId), (root) => root.getDescendentByEl(el));
    }
    getRootById(id) {
      return this.roots[id];
    }
    destroyAllViews() {
      for (let id in this.roots) {
        this.roots[id].destroy();
        delete this.roots[id];
      }
    }
    destroyViewByEl(el) {
      let root = this.getRootById(el.getAttribute(PHX_ROOT_ID));
      if (root && root.id === el.id) {
        root.destroy();
        delete this.roots[root.id];
      } else if (root) {
        root.destroyDescendent(el.id);
      }
    }
    setActiveElement(target) {
      if (this.activeElement === target) {
        return;
      }
      this.activeElement = target;
      let cancel = () => {
        if (target === this.activeElement) {
          this.activeElement = null;
        }
        target.removeEventListener("mouseup", this);
        target.removeEventListener("touchend", this);
      };
      target.addEventListener("mouseup", cancel);
      target.addEventListener("touchend", cancel);
    }
    getActiveElement() {
      if (document.activeElement === document.body) {
        return this.activeElement || document.activeElement;
      } else {
        return document.activeElement || document.body;
      }
    }
    dropActiveElement(view) {
      if (this.prevActive && view.ownsElement(this.prevActive)) {
        this.prevActive = null;
      }
    }
    restorePreviouslyActiveFocus() {
      if (this.prevActive && this.prevActive !== document.body) {
        this.prevActive.focus();
      }
    }
    blurActiveElement() {
      this.prevActive = this.getActiveElement();
      if (this.prevActive !== document.body) {
        this.prevActive.blur();
      }
    }
    bindTopLevelEvents() {
      if (this.boundTopLevelEvents) {
        return;
      }
      this.boundTopLevelEvents = true;
      this.socket.onClose((event) => {
        if (event.code === 1e3 && this.main) {
          this.reloadWithJitter(this.main);
        }
      });
      document.body.addEventListener("click", function() {
      });
      window.addEventListener("pageshow", (e) => {
        if (e.persisted) {
          this.getSocket().disconnect();
          this.withPageLoading({ to: window.location.href, kind: "redirect" });
          window.location.reload();
        }
      }, true);
      this.bindNav();
      this.bindClicks();
      this.bindForms();
      this.bind({ keyup: "keyup", keydown: "keydown" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
        let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
        let pressedKey = e.key && e.key.toLowerCase();
        if (matchKey && matchKey.toLowerCase() !== pressedKey) {
          return;
        }
        let data = __spreadValues({ key: e.key }, this.eventMeta(type, e, targetEl));
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
      });
      this.bind({ blur: "focusout", focus: "focusin" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
        if (!eventTarget) {
          let data = __spreadValues({ key: e.key }, this.eventMeta(type, e, targetEl));
          js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
        }
      });
      this.bind({ blur: "blur", focus: "focus" }, (e, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
        if (phxTarget === "window") {
          let data = this.eventMeta(type, e, targetEl);
          js_default.exec(type, phxEvent, view, targetEl, ["push", { data }]);
        }
      });
      window.addEventListener("dragover", (e) => e.preventDefault());
      window.addEventListener("drop", (e) => {
        e.preventDefault();
        let dropTargetId = maybe(closestPhxBinding(e.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
          return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
        });
        let dropTarget = dropTargetId && document.getElementById(dropTargetId);
        let files = Array.from(e.dataTransfer.files || []);
        if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
          return;
        }
        LiveUploader.trackFiles(dropTarget, files);
        dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
      });
      this.on(PHX_TRACK_UPLOADS, (e) => {
        let uploadTarget = e.target;
        if (!dom_default.isUploadInput(uploadTarget)) {
          return;
        }
        let files = Array.from(e.detail.files || []).filter((f) => f instanceof File || f instanceof Blob);
        LiveUploader.trackFiles(uploadTarget, files);
        uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }
    eventMeta(eventName, e, targetEl) {
      let callback = this.metadataCallbacks[eventName];
      return callback ? callback(e, targetEl) : {};
    }
    setPendingLink(href) {
      this.linkRef++;
      this.pendingLink = href;
      return this.linkRef;
    }
    commitPendingLink(linkRef) {
      if (this.linkRef !== linkRef) {
        return false;
      } else {
        this.href = this.pendingLink;
        this.pendingLink = null;
        return true;
      }
    }
    getHref() {
      return this.href;
    }
    hasPendingLink() {
      return !!this.pendingLink;
    }
    bind(events, callback) {
      for (let event in events) {
        let browserEventName = events[event];
        this.on(browserEventName, (e) => {
          let binding = this.binding(event);
          let windowBinding = this.binding(`window-${event}`);
          let targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);
          if (targetPhxEvent) {
            this.debounce(e.target, e, () => {
              this.withinOwners(e.target, (view) => {
                callback(e, event, view, e.target, targetPhxEvent, null);
              });
            });
          } else {
            dom_default.all(document, `[${windowBinding}]`, (el) => {
              let phxEvent = el.getAttribute(windowBinding);
              this.debounce(el, e, () => {
                this.withinOwners(el, (view) => {
                  callback(e, event, view, el, phxEvent, "window");
                });
              });
            });
          }
        });
      }
    }
    bindClicks() {
      this.bindClick("click", "click", false);
      this.bindClick("mousedown", "capture-click", true);
    }
    bindClick(eventName, bindingName, capture) {
      let click = this.binding(bindingName);
      window.addEventListener(eventName, (e) => {
        if (!this.isConnected()) {
          return;
        }
        this.clickRef++;
        let clickRefWas = this.clickRef;
        let target = null;
        if (capture) {
          target = e.target.matches(`[${click}]`) ? e.target : e.target.querySelector(`[${click}]`);
        } else {
          target = closestPhxBinding(e.target, click);
          this.dispatchClickAway(e, clickRefWas);
        }
        let phxEvent = target && target.getAttribute(click);
        if (!phxEvent) {
          return;
        }
        if (target.getAttribute("href") === "#") {
          e.preventDefault();
        }
        this.debounce(target, e, () => {
          this.withinOwners(target, (view) => {
            js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e, target) }]);
          });
        });
      }, capture);
    }
    dispatchClickAway(e, clickRefWas) {
      let phxClickAway = this.binding("click-away");
      let phxClick = this.binding("click");
      dom_default.all(document, `[${phxClickAway}]`, (el) => {
        if (!(el.isSameNode(e.target) || el.contains(e.target))) {
          this.withinOwners(e.target, (view) => {
            let phxEvent = el.getAttribute(phxClickAway);
            if (js_default.isVisible(el)) {
              let target = e.target.closest(`[${phxClick}]`) || e.target;
              js_default.exec("click", phxEvent, view, el, ["push", { data: this.eventMeta("click", e, e.target) }]);
            }
          });
        }
      });
    }
    bindNav() {
      if (!browser_default.canPushState()) {
        return;
      }
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
      }
      let scrollTimer = null;
      window.addEventListener("scroll", (_e) => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          browser_default.updateCurrentState((state) => Object.assign(state, { scroll: window.scrollY }));
        }, 100);
      });
      window.addEventListener("popstate", (event) => {
        if (!this.registerNewLocation(window.location)) {
          return;
        }
        let { type, id, root, scroll } = event.state || {};
        let href = window.location.href;
        this.requestDOMUpdate(() => {
          if (this.main.isConnected() && (type === "patch" && id === this.main.id)) {
            this.main.pushLinkPatch(href, null);
          } else {
            this.replaceMain(href, null, () => {
              if (root) {
                this.replaceRootHistory();
              }
              if (typeof scroll === "number") {
                setTimeout(() => {
                  window.scrollTo(0, scroll);
                }, 0);
              }
            });
          }
        });
      }, false);
      window.addEventListener("click", (e) => {
        let target = closestPhxBinding(e.target, PHX_LIVE_LINK);
        let type = target && target.getAttribute(PHX_LIVE_LINK);
        let wantsNewTab = e.metaKey || e.ctrlKey || e.button === 1;
        if (!type || !this.isConnected() || !this.main || wantsNewTab) {
          return;
        }
        let href = target.href;
        let linkState = target.getAttribute(PHX_LINK_STATE);
        e.preventDefault();
        if (this.pendingLink === href) {
          return;
        }
        this.requestDOMUpdate(() => {
          if (type === "patch") {
            this.pushHistoryPatch(href, linkState, target);
          } else if (type === "redirect") {
            this.historyRedirect(href, linkState);
          } else {
            throw new Error(`expected ${PHX_LIVE_LINK} to be "patch" or "redirect", got: ${type}`);
          }
        });
      }, false);
    }
    dispatchEvent(event, payload = {}) {
      dom_default.dispatchEvent(window, `phx:${event}`, payload);
    }
    dispatchEvents(events) {
      events.forEach(([event, payload]) => this.dispatchEvent(event, payload));
    }
    withPageLoading(info, callback) {
      dom_default.dispatchEvent(window, "phx:page-loading-start", info);
      let done = () => dom_default.dispatchEvent(window, "phx:page-loading-stop", info);
      return callback ? callback(done) : done;
    }
    pushHistoryPatch(href, linkState, targetEl) {
      this.withPageLoading({ to: href, kind: "patch" }, (done) => {
        this.main.pushLinkPatch(href, targetEl, (linkRef) => {
          this.historyPatch(href, linkState, linkRef);
          done();
        });
      });
    }
    historyPatch(href, linkState, linkRef = this.setPendingLink(href)) {
      if (!this.commitPendingLink(linkRef)) {
        return;
      }
      browser_default.pushState(linkState, { type: "patch", id: this.main.id }, href);
      this.registerNewLocation(window.location);
    }
    historyRedirect(href, linkState, flash) {
      let scroll = window.scrollY;
      this.withPageLoading({ to: href, kind: "redirect" }, (done) => {
        this.replaceMain(href, flash, () => {
          browser_default.pushState(linkState, { type: "redirect", id: this.main.id, scroll }, href);
          this.registerNewLocation(window.location);
          done();
        });
      });
    }
    replaceRootHistory() {
      browser_default.pushState("replace", { root: true, type: "patch", id: this.main.id });
    }
    registerNewLocation(newLocation) {
      let { pathname, search } = this.currentLocation;
      if (pathname + search === newLocation.pathname + newLocation.search) {
        return false;
      } else {
        this.currentLocation = clone(newLocation);
        return true;
      }
    }
    bindForms() {
      let iterations = 0;
      this.on("submit", (e) => {
        let phxEvent = e.target.getAttribute(this.binding("submit"));
        if (!phxEvent) {
          return;
        }
        e.preventDefault();
        e.target.disabled = true;
        this.withinOwners(e.target, (view) => {
          js_default.exec("submit", phxEvent, view, e.target, ["push", {}]);
        });
      }, false);
      for (let type of ["change", "input"]) {
        this.on(type, (e) => {
          let input = e.target;
          let phxEvent = input.form && input.form.getAttribute(this.binding("change"));
          if (!phxEvent) {
            return;
          }
          if (input.type === "number" && input.validity && input.validity.badInput) {
            return;
          }
          let currentIterations = iterations;
          iterations++;
          let { at, type: lastType } = dom_default.private(input, "prev-iteration") || {};
          if (at === currentIterations - 1 && type !== lastType) {
            return;
          }
          dom_default.putPrivate(input, "prev-iteration", { at: currentIterations, type });
          this.debounce(input, e, () => {
            this.withinOwners(input.form, (view) => {
              dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
              if (!dom_default.isTextualInput(input)) {
                this.setActiveElement(input);
              }
              js_default.exec("change", phxEvent, view, input, ["push", { _target: e.target.name }]);
            });
          });
        }, false);
      }
    }
    debounce(el, event, callback) {
      let phxDebounce = this.binding(PHX_DEBOUNCE);
      let phxThrottle = this.binding(PHX_THROTTLE);
      let defaultDebounce = this.defaults.debounce.toString();
      let defaultThrottle = this.defaults.throttle.toString();
      dom_default.debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, callback);
    }
    silenceEvents(callback) {
      this.silenced = true;
      callback();
      this.silenced = false;
    }
    on(event, callback) {
      window.addEventListener(event, (e) => {
        if (!this.silenced) {
          callback(e);
        }
      });
    }
  };
  var TransitionSet = class {
    constructor() {
      this.transitions = /* @__PURE__ */ new Set();
      this.pendingOps = [];
      this.reset();
    }
    reset() {
      this.transitions.forEach((timer) => {
        cancelTimeout(timer);
        this.transitions.delete(timer);
      });
      this.flushPendingOps();
    }
    after(callback) {
      if (this.size() === 0) {
        callback();
      } else {
        this.pushPendingOp(callback);
      }
    }
    addTransition(time, onStart, onDone) {
      onStart();
      let timer = setTimeout(() => {
        this.transitions.delete(timer);
        onDone();
        if (this.size() === 0) {
          this.flushPendingOps();
        }
      }, time);
      this.transitions.add(timer);
    }
    pushPendingOp(op) {
      this.pendingOps.push(op);
    }
    size() {
      return this.transitions.size;
    }
    flushPendingOps() {
      this.pendingOps.forEach((op) => op());
      this.pendingOps = [];
    }
  };

  // js/app.js
  var import_draggable = __toModule(require_draggable_bundle());
  var import_topbar = __toModule(require_topbar());
  require_();
  require_2();
  var messageBody = document.querySelector("#messageBody");
  var Hooks2 = {};
  Hooks2.Board = {
    mounted() {
      this.initDraggables();
    },
    updated() {
      this.sortableCard.destroy();
      this.sortableStage.destroy();
      this.initDraggables();
    },
    initDraggables() {
      this.sortableCard = new import_draggable.Sortable(document.querySelectorAll(".stage__cards"), {
        draggable: ".card",
        mirror: {
          constrainDimensions: true
        },
        swapAnimation: {
          duration: 200,
          easingFunction: "ease-in-out"
        },
        plugins: [import_draggable.Plugins.SwapAnimation]
      });
      this.sortableCard.on("sortable:stop", (event) => {
        const source = event.data.dragEvent.data.source;
        const cardId = parseInt(source.getAttribute("data-card-id"));
        const newStageId = parseInt(event.data.newContainer.getAttribute("data-stage-id"));
        const newIndex = parseInt(event.data.newIndex);
        const cardPayload = {
          card: {
            id: cardId,
            stage_id: newStageId,
            position: newIndex
          }
        };
        this.pushEvent("update_card", cardPayload);
      });
      this.sortableStage = new import_draggable.Sortable(document.querySelectorAll(".board"), {
        draggable: ".stage",
        handle: ".draggable-handle",
        mirror: {
          constrainDimensions: true,
          yAxis: false
        }
      });
      this.sortableStage.on("sortable:stop", (event) => {
        const source = event.data.dragEvent.data.source;
        const stageId = parseInt(source.getAttribute("data-stage-id"));
        const newIndex = parseInt(event.data.newIndex);
        const stagePayload = {
          stage: {
            id: stageId,
            position: newIndex
          }
        };
        this.pushEvent("update_stage", stagePayload);
      });
    }
  };
  Hooks2.AnimateAlert = {
    mounted() {
      this.handleEvent("AnimateAlert", ({}) => this.reset_opacity());
    },
    updated() {
    },
    reset_opacity() {
      var alert = document.querySelector("#alert_anim");
      alert.style.opacity = 1;
      window.setTimeout(function() {
        alert.style.opacity = 0;
      }, 2e3);
    },
    anim_onload() {
      var alerts2 = document.querySelectorAll(".alert");
      alerts2.forEach((item) => {
        item.style.opacity = 1;
        item.onload = window.setTimeout(function() {
          item.style.opacity = 0;
        }, 2e3);
      });
      for (var i = 0; i < alerts2.length; i++) {
        alerts2[i].style.opacity = 1;
        alerts2[i].onload = window.setTimeout(function() {
          alerts2[i].style.opacity = 0;
        }, 2e3);
      }
    }
  };
  Hooks2.blurHook = {
    mounted() {
      this.handleEvent("blurBody", ({ param1, param2 }) => this.blurBody());
    },
    blurBody() {
      var body = document.body;
      var request_form = document.querySelector("#the_request_form");
      body.style.opacity = 0.5;
      request_form.style.opacity = 1;
    }
  };
  Hooks2.MessageBody = {
    mounted() {
      var messageBody2 = document.querySelector("#messageBody");
      this.handleEvent("updateScroll", ({}) => messageBody2.scrollTop = messageBody2.scrollHeight - messageBody2.clientHeight);
    }
  };
  Hooks2.SpinTest = {
    mounted() {
      this.handleEvent("SpinTest", ({}) => this.spin_icon());
      this.handleEvent("SpinComment", ({}) => this.spin_comment_icon());
    },
    spin_icon() {
      var spins = document.querySelectorAll(".notif__load");
      spins.forEach((item) => {
        item.classList.add("new__rotate__icon");
      });
      spins.forEach((item) => {
        window.setTimeout(function() {
          item.classList.remove("new__rotate__icon");
        }, 500);
      });
    },
    spin_comment_icon() {
      var clock_comment = document.getElementById("clock_comment");
      clock_comment.classList.add("rotate__icon");
      window.setTimeout(function() {
        clock_comment.classList.remove("rotate__icon");
      }, 500);
    }
  };
  var navToggle = document.querySelector(".nav__toggle");
  var navWrapper = document.querySelector(".nav__wrapper");
  navToggle.addEventListener("click", function() {
    if (navWrapper.classList.contains("active")) {
      this.setAttribute("aria-expanded", "false");
      this.setAttribute("aria-label", "menu");
      navWrapper.classList.remove("active");
    } else {
      navWrapper.classList.add("active");
      this.setAttribute("aria-label", "close menu");
      this.setAttribute("aria-expanded", "true");
    }
  });
  var menuBtn = document.querySelector(".menu-btn");
  var menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
  var alerts = document.querySelectorAll(".alert");
  alerts.forEach((item) => {
    item.style.opacity = 1;
    item.onload = window.setTimeout(function() {
      item.style.opacity = 0;
    }, 2e3);
  });
  var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
  var liveSocket = new LiveSocket("/live", Socket, {
    params: { _csrf_token: csrfToken },
    hooks: Hooks2
  });
  import_topbar.default.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
  window.addEventListener("phx:page-loading-start", (info) => import_topbar.default.show());
  window.addEventListener("phx:page-loading-stop", (info) => import_topbar.default.hide());
  liveSocket.connect();
  window.liveSocket = liveSocket;
})();
/**
 * @license MIT
 * topbar 1.0.0, 2021-01-06
 * https://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */