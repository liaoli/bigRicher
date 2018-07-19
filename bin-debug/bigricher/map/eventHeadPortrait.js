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
    var eventHeadPortrait = (function (_super) {
        __extends(eventHeadPortrait, _super);
        function eventHeadPortrait() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
            _this.skinName = "headPortrait";
            return _this;
        }
        eventHeadPortrait.prototype.onComplete = function () {
            console.log("onComplete");
            this.init();
        };
        eventHeadPortrait.prototype.init = function () {
        };
        eventHeadPortrait.prototype.playstealAnimation = function () {
            this.egretFactory = tools.DragonBoneTools.Instance.createEff2New("xiaotou_ske_json", "xiaotou_tex_json", "xiaotou_tex_png");
            this.eff_robot = this.egretFactory.buildArmatureDisplay("xiaotou");
            this.addChild(this.eff_robot);
            this.eff_robot.x = this.icon.width;
            this.eff_robot.y = this.icon.height / 2;
            console.log("this.eff_robot.width:" + this.eff_robot.width + ",this.eff_robot.height:" + this.eff_robot.height);
            this.eff_robot.animation.play("xiaotou", 1);
            this.eff_robot.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        };
        eventHeadPortrait.prototype.playCannonAnimation = function () {
            this.egretFactory = tools.DragonBoneTools.Instance.createEff2New("cannons_ske_json", "cannons_tex_json", "cannons_tex_png");
            this.eff_robot = this.egretFactory.buildArmatureDisplay("cannons");
            this.addChild(this.eff_robot);
            this.eff_robot.x = this.icon.width / 2;
            this.eff_robot.y = this.icon.height / 2;
            this.eff_robot.width = this.eff_robot.width / 1.5;
            this.eff_robot.height = this.eff_robot.height / 1.5;
            console.log("this.eff_robot.width:" + this.eff_robot.width + ",this.eff_robot.height:" + this.eff_robot.height);
            this.eff_robot.animation.play("cannons", 1);
            this.eff_robot.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
        };
        eventHeadPortrait.prototype.animationEventHandler = function (event) {
            XhGame.EventBus.dispatchEvent(new egret.Event("event_steal_pao"));
        };
        return eventHeadPortrait;
    }(eui.Component));
    map.eventHeadPortrait = eventHeadPortrait;
    __reflect(eventHeadPortrait.prototype, "map.eventHeadPortrait");
})(map || (map = {}));
//# sourceMappingURL=eventHeadPortrait.js.map