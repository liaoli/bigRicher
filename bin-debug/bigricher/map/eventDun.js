var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var map;
(function (map) {
    var eventDun = (function (_super) {
        __extends(eventDun, _super);
        function eventDun() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "eventDun";
            return _this;
        }
        eventDun.prototype.onComplete = function () {
            var _this = this;
            console.log("onComplete");
            XhGame.Tools.anchorCenter(this.dun, false);
            egret.Tween.get(this.dun, { loop: false })
                .to({ skewY: 360 }, 2000).call(function () {
                _this.parent.removeChild(_this);
            });
        };
        return eventDun;
    }(eui.Component));
    map.eventDun = eventDun;
    __reflect(eventDun.prototype, "map.eventDun");
})(map || (map = {}));
//# sourceMappingURL=eventDun.js.map