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
    var eventDialogSteal = (function (_super) {
        __extends(eventDialogSteal, _super);
        function eventDialogSteal() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "resource/assets/cunstom_skin/eventSteal.exml";
            return _this;
        }
        eventDialogSteal.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            console.log("createChildren");
        };
        eventDialogSteal.prototype.onComplete = function () {
            console.log("onComplete");
            this.init();
        };
        eventDialogSteal.prototype.init = function () {
            var _this = this;
            this.dialog_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                // this.parent.removeChild(this);
                _this.topUser.top = 106;
                _this.hideorshowViewafterEvent(true);
                _this.hideorshowViewbeforeEvent(false);
                console.log("click");
            }, this);
            this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.parent.removeChild(_this);
                console.log("click");
            }, this);
            this.cancle.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.parent.removeChild(_this);
                console.log("click");
            }, this);
            this.hideorshowViewafterEvent(false);
        };
        eventDialogSteal.prototype.hideorshowViewafterEvent = function (visible) {
            this.eventDiscription.visible = visible;
            this.sure.visible = visible;
            this.cancle.visible = visible;
        };
        eventDialogSteal.prototype.hideorshowViewbeforeEvent = function (visible) {
            this.leftuser.visible = visible;
            this.rightUser.visible = visible;
            this.dialog_tips.visible = visible;
        };
        eventDialogSteal.prototype.click = function (evt) {
            console.log("click touch angle:" + evt.target);
        };
        return eventDialogSteal;
    }(eui.Component));
    map.eventDialogSteal = eventDialogSteal;
    __reflect(eventDialogSteal.prototype, "map.eventDialogSteal");
})(map || (map = {}));
//# sourceMappingURL=eventDialogSteal.js.map