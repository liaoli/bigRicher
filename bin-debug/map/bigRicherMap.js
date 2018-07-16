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
    var bigRicherMap = (function (_super) {
        __extends(bigRicherMap, _super);
        function bigRicherMap() {
            var _this = _super.call(this) || this;
            _this.row = 9;
            _this.jumpgezis = [];
            _this.fangzigezis = [];
            _this.geziTextures = {};
            _this.indexOfPlayer = 0;
            _this.point2 = new egret.Point();
            _this.nextJinbis = new Array();
            _this.indexOfNext = 0;
            _this.oldindexOfPlayer = 0;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        bigRicherMap.prototype.onAddToStage = function (event) {
            this.createGameScene();
        };
        bigRicherMap.prototype.createGameScene = function () {
            var mapBg = map.GameUtil.createBitmapByName("gezi_bg_png");
            this.stage.scaleMode = egret.StageScaleMode.NO_BORDER;
            mapBg.width = this.width;
            this.bgwidth = mapBg.width;
            mapBg.height = this.bgwidth;
            this.bgHeight = mapBg.height;
            this.addChild(mapBg);
            this.createjumpgezi();
            this.addgezi();
            this.init();
            this.initExternalInterface();
        };
        bigRicherMap.prototype.initExternalInterface = function () {
            // TypeScript 代码
            egret.ExternalInterface.addCallback("sendToJS", function (message) {
                console.log("message form native : " + message); //message from native : message from native
            });
        };
        bigRicherMap.prototype.getGeziTexture = function (img) {
            var tx = this.geziTextures[img];
            if (tx === undefined) {
                tx = RES.getRes(img);
                this.geziTextures[img] = tx;
            }
            return tx;
        };
        bigRicherMap.prototype.createjumpgezi = function () {
            var gzw = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;
            this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);
            for (var i = 0; i < this.row; i++) {
                for (var j = 0; j < this.row; j++) {
                    switch (i) {
                        case 0:
                            if (j == 1) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_hongbaofagnzi", 1));
                            }
                            if (j == 2) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 2));
                            }
                            if (j == 4) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 4));
                            }
                            if (j == 5) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 5));
                            }
                            break;
                        case 1:
                            if (j == 1) {
                                //jump  起点
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_sart", 1));
                            }
                            if (j == 2) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 2));
                            }
                            if (j == 3) {
                                //jump 问号
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_wenhao", 3));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 3));
                            }
                            if (j == 4) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 4));
                            }
                            if (j == 5) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 5));
                            }
                            if (j == 6) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 7));
                            }
                            break;
                        case 2:
                            if (j == 5) {
                                //jump 问号
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_wenhao", 6));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 6));
                            }
                            if (j == 6) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 7));
                            }
                            if (j == 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 24));
                            }
                            if (j == 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 24));
                            }
                            break;
                        case 3:
                            if (j == 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 23));
                            }
                            if (j == 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 23));
                            }
                            if (j == 6) {
                                //jump 盾牌
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_dun", 8));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 8));
                            }
                            if (j == 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 9));
                            }
                            if (j == 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 9));
                            }
                            break;
                        case 4:
                            if (j == 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 22));
                            }
                            if (j == 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 22));
                            }
                            if (j == 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 10));
                            }
                            if (j == 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 10));
                            }
                            break;
                        case 5:
                            if (j == 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 21));
                            }
                            if (j == 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 21));
                            }
                            if (j == 2) {
                                //问号
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_wenhao", 20));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 20));
                            }
                            if (j == 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 11));
                            }
                            if (j == 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 11));
                            }
                            break;
                        case 6:
                            if (j == 2) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 19));
                            }
                            if (j == 3) {
                                //jump偷
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_tou", 18));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 18));
                            }
                            if (j == 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 12));
                            }
                            if (j == 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 12));
                            }
                            break;
                        case 7:
                            if (j == 2) {
                                //房
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 19));
                            }
                            if (j == 3) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 17));
                            }
                            if (j == 4) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 16));
                            }
                            if (j == 5) {
                                //jump炮
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_pao", 15));
                                //房
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 15));
                            }
                            if (j == 6) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_jinbi", 14));
                            }
                            if (j == 7) {
                                //jump体力
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_tili", 13));
                                //房
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 13));
                            }
                            break;
                        case 8:
                            if (j == 3) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 17));
                            }
                            if (j == 4) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 16));
                            }
                            if (j == 6) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_json.gezi_fangzi", 14));
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            this.sort();
        };
        bigRicherMap.prototype.sort = function () {
            this.jumpgezis.sort(function (a, b) {
                return a.index - b.index;
            });
            this.fangzigezis.sort(function (a, b) {
                return a.index - b.index;
            });
        };
        bigRicherMap.prototype.addgezi = function () {
            return __awaiter(this, void 0, void 0, function () {
                var resp, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, XhGame.getMapData()];
                        case 1:
                            resp = _a.sent();
                            this.indexOfPlayer = resp.currentPosition;
                            resp.map.forEach(function (item, index) {
                                console.log(item);
                            });
                            if (resp.map.length == this.jumpgezis.length) {
                                for (i = 0; i < resp.map.length; i++) {
                                    this.addChild(this.jumpgezis[i]);
                                    if (i == 2 || i == 5 || i == 7 || i == 12 || i == 14 || i == 17 || i == 19) {
                                        continue;
                                    }
                                    this.addChild(this.fangzigezis[i]);
                                }
                            }
                            this.initPalyer();
                            return [2 /*return*/];
                    }
                });
            });
        };
        bigRicherMap.prototype.createGeziByIndex = function (i, j, img, index) {
            var x = this.bgwidth / 2 - this.mGgzw / 2 * (j + 1) + this.mGgzw * i / 2;
            var y = this.bgHeight - this.mGgzw / 2 * (j + 2) - this.mGgzw * i / 2;
            var geziGroup = new map.gezi(x, y, img, this.mGgzw, this.mGgzw, index);
            return geziGroup;
        };
        bigRicherMap.prototype.initPalyer = function () {
            this.player = new eui.Image();
            this.player.source = "player_png";
            this.player.width = this.mGgzw - 30;
            this.player.height = this.mGgzw - 30;
            this.startgz = this.jumpgezis[this.indexOfPlayer];
            this.player.x = this.startgz.x + (this.startgz.width - this.player.width) / 2;
            this.player.y = this.startgz.y + this.startgz.height / 2 - this.player.height;
            console.log("player x = " + this.player.x + ",player y = " + this.player.y);
            this.addChild(this.player);
        };
        bigRicherMap.prototype.nextGezi = function () {
            var _this = this;
            console.log("this.indexOfNex = " + this.indexOfNext);
            if (this.indexOfNext >= this.nextJumpGezis.length) {
                this.indexOfNext = 0;
                this.touchEnabled = true;
                return;
            }
            var nextGz = this.nextJumpGezis[this.indexOfNext];
            this.targetPos = new egret.Point();
            this.targetPos.x = nextGz.x + (nextGz.width - this.player.width) / 2;
            this.targetPos.y = nextGz.y + nextGz.height / 2 - this.player.height;
            console.log("this.targetPos:" + this.targetPos);
            console.log("this.player.x=" + this.player.x + ",this.player.x=" + this.player.y);
            if (0 <= this.oldindexOfPlayer && this.oldindexOfPlayer < 12) {
                this.point2.x = this.player.x;
                this.point2.y = this.targetPos.y;
            }
            else {
                this.point2.x = this.targetPos.x;
                this.point2.y = this.player.y;
            }
            console.log("this.point2:" + this.point2);
            this.oldindexOfPlayer++;
            if (this.oldindexOfPlayer == this.jumpgezis.length) {
                this.oldindexOfPlayer = 0;
            }
            egret.Tween.get(this).to({ factor: 1 }, 500).call(function () {
                var jinbi = _this.nextJinbis.shift();
                _this.removeChild(jinbi);
                map.JinbiOfGezi.reclaim(jinbi);
                _this.indexOfNext++;
                _this.nextGezi();
            });
        };
        Object.defineProperty(bigRicherMap.prototype, "factor", {
            //添加factor的set,get方法,注意用public  
            get: function () {
                return 0;
            },
            //计算方法参考 二次贝塞尔公式  
            set: function (value) {
                //console.log("value = " + value);
                this.player.x = (1 - value) * (1 - value) * this.player.x + 2 * value * (1 - value) * this.point2.x + value * value * (this.targetPos.x);
                this.player.y = (1 - value) * (1 - value) * this.player.y + 2 * value * (1 - value) * this.point2.y + value * value * (this.targetPos.y);
            },
            enumerable: true,
            configurable: true
        });
        bigRicherMap.prototype.init = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
        };
        bigRicherMap.prototype.tapHandler = function () {
            var _this = this;
            this.touchEnabled = false;
            this.oldindexOfPlayer = this.indexOfPlayer;
            XhGame.playBigRicher().then(function (res) {
                var nextGeziNum = res.step;
                console.log("nextGeziNum = " + nextGeziNum);
                console.log("this.indexOfPlayer = " + _this.indexOfPlayer);
                var start = _this.indexOfPlayer + 1;
                var end = _this.indexOfPlayer + nextGeziNum + 1;
                var lengthOfJumpgezis = _this.jumpgezis.length;
                var delt = end - lengthOfJumpgezis;
                if (start == lengthOfJumpgezis) {
                    //player的当前位置是最后一格的时候
                    start = 0;
                    end = start + nextGeziNum;
                    _this.nextJumpGezis = _this.jumpgezis.slice(start, end);
                    console.log("start = " + start + ",end = " + end);
                    _this.indexOfPlayer = end - 1;
                }
                else {
                    if (delt > 0) {
                        //超过一圈了，得从数组最前面取格子补上
                        _this.nextJumpGezis = _this.jumpgezis.slice(start, end);
                        console.log("start = " + start + ",end = " + end);
                        start = 0;
                        end = end - lengthOfJumpgezis;
                        var gezis = _this.jumpgezis.slice(start, end);
                        console.log("this.nextJumpGezis.length = " + _this.nextJumpGezis.length);
                        console.log("gezis.length = " + gezis.length);
                        _this.nextJumpGezis = _this.nextJumpGezis.concat(gezis);
                        console.log("this.nextJumpGezis.length = " + _this.nextJumpGezis.length);
                        _this.indexOfPlayer = end - 1;
                    }
                    else {
                        _this.nextJumpGezis = _this.jumpgezis.slice(start, end);
                        _this.indexOfPlayer += nextGeziNum;
                    }
                }
                console.log("this.nextJumpGezis.length = " + _this.nextJumpGezis.length);
                console.log("this.indexOfPlayer = " + _this.indexOfPlayer);
                var items = res.rewards;
                console.log("this.nextJumpGezis.length = " + _this.nextJumpGezis.length);
                console.log("items.length = " + items.length);
                _this.nextJumpGezis.forEach(function (item, index) {
                    var jinbiValue = 0;
                    if (items[index].reward.event == 1) {
                        jinbiValue = items[index].reward.extra.coin;
                    }
                    var jinbi = map.JinbiOfGezi.produce(_this.mGgzw, jinbiValue + "");
                    jinbi.x = item.x + (item.width - jinbi.width) / 3;
                    jinbi.y = item.y - jinbi.height / 8;
                    _this.nextJinbis.push(jinbi);
                });
                _this.nextJinbis.forEach(function (item, index) {
                    _this.addChild(item);
                });
                _this.nextGezi();
            }).catch(function (err) {
                if (err.errorCode == 4005) {
                    console.log(err.message);
                }
                console.log(err);
            });
        };
        return bigRicherMap;
    }(eui.Group));
    map.bigRicherMap = bigRicherMap;
    __reflect(bigRicherMap.prototype, "map.bigRicherMap");
})(map || (map = {}));
//# sourceMappingURL=bigRicherMap.js.map