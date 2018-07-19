var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var XhGame;
(function (XhGame) {
    var EventBus = (function () {
        function EventBus() {
        }
        Object.defineProperty(EventBus, "bus", {
            get: function () {
                if (!this._bus) {
                    this._bus = new egret.EventDispatcher();
                }
                return this._bus;
            },
            enumerable: true,
            configurable: true
        });
        EventBus.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            this.bus.addEventListener(type, listener, thisObject, useCapture, priority);
        };
        EventBus.once = function (type, listener, thisObject, useCapture, priority) {
            this.bus.once(type, listener, thisObject, useCapture, priority);
        };
        EventBus.dispatchEvent = function (event) {
            return this.bus.dispatchEvent(event);
        };
        EventBus.removeEventListener = function (type, listener, thisObject, useCapture) {
            return this.bus.removeEventListener(type, listener, thisObject, useCapture);
        };
        EventBus.hasEventListener = function (type) {
            return this.bus.hasEventListener(type);
        };
        return EventBus;
    }());
    XhGame.EventBus = EventBus;
    __reflect(EventBus.prototype, "XhGame.EventBus");
})(XhGame || (XhGame = {}));
//# sourceMappingURL=EventBus.js.map