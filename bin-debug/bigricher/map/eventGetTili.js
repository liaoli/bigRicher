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
    var eventGetTili = (function (_super) {
        __extends(eventGetTili, _super);
        function eventGetTili() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "eventGetTili";
            return _this;
        }
        eventGetTili.prototype.onComplete = function () {
            var _this = this;
            console.log("onComplete");
            XhGame.Tools.anchorCenter(this, false);
            egret.Tween.get(this, { loop: false })
                .to({ scaleX: 1.2, scaleY: 1.2 }, 2000).call(function () {
                _this.parent.removeChild(_this);
            });
        };
        return eventGetTili;
    }(eui.Component));
    map.eventGetTili = eventGetTili;
    __reflect(eventGetTili.prototype, "map.eventGetTili");
})(map || (map = {}));
//# sourceMappingURL=eventGetTili.js.map