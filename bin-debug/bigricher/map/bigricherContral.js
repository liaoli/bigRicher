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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var map;
(function (map) {
    var bigricherContral = (function (_super) {
        __extends(bigricherContral, _super);
        function bigricherContral() {
            var _this = _super.call(this) || this;
            _this.touchPoints = { names: [] }; //{touchid:touch local,names:[ID1,ID2]};
            _this.distance = 0;
            _this.defAngle = 0;
            _this.touchCon = 0;
            _this._currentBirdRotation = 0;
            _this.c = 0.017453292; //2PI/360
            _this.width = 750;
            _this.height = 1334;
            return _this;
        }
        bigricherContral.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            egret.lifecycle.addLifecycleListener(function (context) {
                // custom lifecycle plugin
            });
            egret.lifecycle.onPause = function () {
                egret.ticker.pause();
            };
            egret.lifecycle.onResume = function () {
                egret.ticker.resume();
            };
            this.runGame().catch(function (e) {
                console.log(e);
            });
        };
        bigricherContral.prototype.runGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.createGameScene();
                    return [2 /*return*/];
                });
            });
        };
        /**
   * 创建场景界面
   * Create scene interface
   */
        bigricherContral.prototype.createGameScene = function () {
            var bigRicher = new map.bigRicherMap();
            this._bird = bigRicher;
            console.log(this.stage.height);
            bigRicher.width = this.width - this.width / 10;
            bigRicher.height = bigRicher.width;
            // this._bird.x = this.stage.stageWidth / 2;
            // this._bird.y = this.stage.stageHeight / 2;
            this._bird.anchorOffsetX = this._bird.width / 2;
            this._bird.anchorOffsetY = this._bird.height / 2;
            this._bird.x = this.stage.stageWidth / 2;
            this._bird.y = this.stage.stageHeight / 2;
            this.addChild(bigRicher);
            // this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            // this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
            // this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
            XhGame.EventBus.addEventListener("event_steal", this.callback, this);
            XhGame.EventBus.addEventListener("event_cannon", this.callback, this);
            XhGame.EventBus.addEventListener("event_dun", this.callback, this);
            XhGame.EventBus.addEventListener("event_tili", this.callback, this);
            // let dialog: map.eventSuijiTips = new map.eventSuijiTips(1);
            // this.addChild(dialog);
            var playShaizi = new map.playShaizi();
            XhGame.Tools.displayCenter(playShaizi);
            this.addChild(playShaizi);
            playShaizi.bottom = 12;
            playShaizi.horizontalCenter = 0;
            playShaizi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
        };
        bigricherContral.prototype.callback = function (event) {
            if (event.type == "event_steal") {
                var dialog = new map.eventDialogSteal(2);
                this.addChild(dialog);
            }
            else if (event.type == "event_cannon") {
                var dialog = new map.eventDialogSteal(1);
                this.addChild(dialog);
            }
            else if (event.type == "event_dun") {
                var dun = new map.eventDun();
                this.addChild(dun);
                XhGame.Tools.displayCenter(dun);
            }
            else if (event.type == "event_tili") {
                var tili = new map.eventGetTili();
                this.addChild(tili);
                XhGame.Tools.displayCenter(tili);
            }
        };
        bigricherContral.prototype.click = function (evt) {
            console.log("click touch angle:" + this.defAngle);
            this._bird.tapHandler();
        };
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        bigricherContral.prototype.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        bigricherContral.prototype.mouseDown = function (evt) {
            console.log("touch begin:" + evt.touchPointID);
            if (this.touchPoints[evt.touchPointID] == null) {
                this.touchPoints[evt.touchPointID] = new egret.Point(evt.stageX, evt.stageY);
                this.touchPoints["names"].push(evt.touchPointID);
            }
            this.touchCon++;
            if (this.touchCon == 2) {
                this.distance = this.getTouchDistance();
                console.log("distance:" + this.distance);
                // this.defAngle = this.getTouchAngle();
                //console.log("touch angle:" + this.defAngle);
                //console.log("bird angle:" + this._bird.rotation);
            }
        };
        bigricherContral.prototype.mouseMove = function (evt) {
            //egret.log("touch move:"+evt.touchPointID);
            this.touchPoints[evt.touchPointID].x = evt.stageX;
            this.touchPoints[evt.touchPointID].y = evt.stageY;
            console.log("this.distance:" + this.distance);
            if (this.touchCon == 2) {
                var newdistance = this.getTouchDistance();
                console.log("newdistance:" + newdistance);
                console.log("newdistance / this.distance:" + newdistance / this.distance);
                this._bird.scaleX *= newdistance / this.distance;
                this._bird.scaleY = this._bird.scaleX;
                // var newangle = this.getTouchAngle();
                // this._bird.rotation = this._currentBirdRotation + newangle - this.defAngle;
            }
        };
        bigricherContral.prototype.mouseUp = function (evt) {
            console.log("touch end:" + evt.touchPointID);
            delete this.touchPoints[evt.touchPointID];
            this.touchCon--;
            //
            // this._bird.width *= this._bird.scaleX;
            // this._bird.height *= this._bird.scaleY;
            // this._bird.scaleX = 1;
            // this._bird.scaleY = 1;
            // this._bird.anchorOffsetX = this._bird.width/2;
            // this._bird.anchorOffsetY = this._bird.height/2;
            //console.log("bird size [wdith:" + this._bird.width.toFixed(1) + ", height:" + this._bird.height.toFixed(1) + "]");
            //console.log("bird angle:" + this._bird.rotation);
        };
        bigricherContral.prototype.getTouchDistance = function () {
            var _distance = 0;
            var names = this.touchPoints["names"];
            _distance = egret.Point.distance(this.touchPoints[names[names.length - 1]], this.touchPoints[names[names.length - 2]]);
            return _distance;
        };
        bigricherContral.prototype.getTouchAngle = function () {
            var ang = 0;
            var names = this.touchPoints["names"];
            var p1 = this.touchPoints[names[names.length - 1]];
            var p2 = this.touchPoints[names[names.length - 2]];
            ang = Math.atan2((p1.y - p2.y), (p1.x - p2.x)) / this.c;
            return ang;
        };
        return bigricherContral;
    }(eui.UILayer));
    map.bigricherContral = bigricherContral;
    __reflect(bigricherContral.prototype, "map.bigricherContral");
})(map || (map = {}));
//# sourceMappingURL=bigricherContral.js.map