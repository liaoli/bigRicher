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
    var bigRicherMap = (function (_super) {
        __extends(bigRicherMap, _super);
        function bigRicherMap() {
            var _this = _super.call(this) || this;
            _this.row = 9;
            _this.jumpgezis = [];
            _this.fangzigezis = [];
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        bigRicherMap.prototype.onAddToStage = function (event) {
            this.createGameScene();
        };
        bigRicherMap.prototype.createGameScene = function () {
            var mapBg = map.GameUtil.createBitmapByName("gezi_bg_png");
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
            mapBg.width = this.stage.stageWidth;
            this.bgwidth = mapBg.width;
            mapBg.height = this.bgwidth;
            this.bgHeight = mapBg.height;
            this.addChild(mapBg);
            //this.getwhAndxy();
            this.createjumpgezi();
            //this.addgezi()
            //this.testJump();
            //this.init();
        };
        bigRicherMap.prototype.init = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
        };
        bigRicherMap.prototype.tapHandler = function () {
            // egret.Tween.get(this).to({ factor: 1 }, 500).call(() => {
            // 	console.log("player x = " + this.player.x + ",player y = " + this.player.y);
            // });
        };
        bigRicherMap.prototype.createjumpgezi = function () {
            var gzw = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;
            this.gzw = Math.sqrt(Math.pow(gzw, 2) * 2);
            for (var y = 0; y < this.row; y++) {
                for (var j = 0; j < this.row; j++) {
                    var i = y;
                    switch (i) {
                        case 0:
                            if (j > 0 && j < 6) {
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", j));
                            }
                            break;
                        case 1:
                            if (j > 0 && j < 6) {
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", j));
                            }
                            if (j = 6) {
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 6));
                            }
                            break;
                        case 2:
                            if (j == 5) {
                                //jump 盾牌
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 6));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 6));
                            }
                            if (j == 6) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 7));
                            }
                            if (j == 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 24));
                            }
                            if (j = 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 24));
                            }
                            break;
                        case 3:
                            if (j = 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 23));
                            }
                            if (j = 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 23));
                            }
                            if (j = 6) {
                                //jump 盾牌
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 8));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 8));
                            }
                            if (j = 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 9));
                            }
                            if (j = 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 9));
                            }
                            break;
                        case 4:
                            if (j = 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 22));
                            }
                            if (j = 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 22));
                            }
                            if (j = 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 10));
                            }
                            if (j = 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 10));
                            }
                            break;
                        case 5:
                            if (j = 0) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 21));
                            }
                            if (j = 1) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 21));
                            }
                            if (j = 2) {
                                //问号
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 20));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 20));
                            }
                            if (j = 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 11));
                            }
                            if (j = 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 11));
                            }
                            break;
                        case 6:
                            if (j = 2) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 19));
                            }
                            if (j = 3) {
                                //jump偷
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 18));
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 18));
                            }
                            if (j = 7) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 12));
                            }
                            if (j = 8) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 12));
                            }
                            break;
                        case 7:
                            if (j = 2) {
                                //房
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 19));
                            }
                            if (j = 3) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 17));
                            }
                            if (j = 4) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 16));
                            }
                            if (j = 5) {
                                //jump炮
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 15));
                                //房
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 15));
                            }
                            if (j = 6) {
                                //jump
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 14));
                            }
                            if (j = 7) {
                                //jump体力
                                this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 13));
                                //房
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 13));
                            }
                            break;
                        case 8:
                            if (j = 3) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 17));
                            }
                            if (j = 4) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 16));
                            }
                            if (j = 6) {
                                //房子
                                this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 14));
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        };
        bigRicherMap.prototype.sort = function () {
            // this.jumpgezis.sort((a: map.gezi, b: map.gezi) => {
            // 	return a.index - b.index;
            // })
            // this.fangzigezis.sort((a: map.gezi, b: map.gezi) => {
            // 	return a.index - b.index;
            // })
        };
        bigRicherMap.prototype.addgezi = function () {
            for (var i = 0; i < this.jumpgezis.length; i++) {
                this.addChild(this.jumpgezis[i]);
                if (i == 2 || i == 6 || i == 8 || i == 13 || i == 15 || i == 18 || i == 20) {
                    continue;
                }
                this.addChild(this.fangzigezis[i]);
            }
        };
        bigRicherMap.prototype.createGeziByIndex = function (i, j, img, index) {
            var x = this.bgwidth / 2 - this.gzw / 2 * (j + 1) + this.gzw * i / 2;
            var y = this.bgHeight - this.gzw / 2 * (j + 2) - this.gzw * i / 2;
            var geziGroup = new map.gezi(x, y, img, this.gzw, this.gzw);
            return geziGroup;
        };
        bigRicherMap.prototype.createGezi = function (i, j, img) {
            var x = this.bgwidth / 2 - this.gzw / 2 * (j + 1) + this.gzw * i / 2;
            var y = this.bgHeight - this.gzw / 2 * (j + 2) - this.gzw * i / 2;
            var geziGroup = new map.gezi(x, y, img, this.gzw, this.gzw);
            return geziGroup;
        };
        bigRicherMap.prototype.getwhAndxy = function () {
            var gzw = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;
            this.gzw = Math.sqrt(Math.pow(gzw, 2) * 2);
            for (var i = 0; i < this.row; i++) {
                for (var j = 0; j < this.row; j++) {
                    if (i == 0 && j == 1) {
                        //红包房子
                        this.addGezi(i, j, "gezi_hongbaofagnzi_png");
                    }
                    if (i == 1 && j == 1) {
                        //起点
                        this.startgz = this.addGezi(i, j, "gezi_sart_png");
                    }
                    if (i == 0 && (j == 2 || j == 4 || j == 5)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 1 && (j == 6)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 2 && (j == 0)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 3 && (j == 0 || j == 8)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 4 && (j == 0 || j == 8)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 5 && (j == 0 || j == 8)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 6 && (j == 8)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 7 && (j == 2)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    if (i == 8 && (j == 3 || j == 4 || j == 6)) {
                        //房子
                        this.addGezi(i, j, "gezi_fangzi_png");
                    }
                    //金币格子
                    if (i == 1 && (j == 2 || j == 4 || j == 5)) {
                        //金币格子
                        if (j == 2) {
                            this.socendgz = this.addGezi(i, j, "gezi_jinbi_png");
                        }
                        else {
                            this.addGezi(i, j, "gezi_jinbi_png");
                        }
                    }
                    if (i == 2 && (j == 1 || j == 6)) {
                        //金币格子
                        this.addGezi(i, j, "gezi_jinbi_png");
                    }
                    if (i == 3 && (j == 1 || j == 7)) {
                        //金币格子
                        this.addGezi(i, j, "gezi_jinbi_png");
                    }
                    if (i == 4 && (j == 1 || j == 7)) {
                        //金币格子
                        this.addGezi(i, j, "gezi_jinbi_png");
                    }
                    if (i == 5 && (j == 1 || j == 7)) {
                        //金币格子
                        this.addGezi(i, j, "gezi_jinbi_png");
                    }
                    if (i == 6 && (j == 2 || j == 7)) {
                        //金币格子
                        this.addGezi(i, j, "gezi_jinbi_png");
                    }
                    if (i == 7 && (j == 3 || j == 4 || j == 6)) {
                        //金币格子
                        this.addGezi(i, j, "gezi_jinbi_png");
                    }
                    if ((i == 1 && j == 3) || (i == 2 && j == 5) || (i == 5 && j == 2)) {
                        //问号
                        this.addGezi(i, j, "gezi_wenhao_png");
                    }
                    if (i == 7 && (j == 5)) {
                        //炮
                        this.addGezi(i, j, "gezi_pao_png");
                    }
                    if (i == 6 && (j == 3)) {
                        //偷
                        this.addGezi(i, j, "gezi_tou_png");
                    }
                    if (i == 3 && (j == 6)) {
                        //盾牌
                        this.addGezi(i, j, "gezi_dun_png");
                    }
                    if (i == 7 && (j == 7)) {
                        //体力
                        this.addGezi(i, j, "gezi_tili_png");
                    }
                }
            }
        };
        bigRicherMap.prototype.addGezi = function (i, j, img) {
            var geziGroup = this.createGezi(i, j, img);
            return geziGroup;
        };
        bigRicherMap.prototype.testJump = function () {
            this.player = new eui.Image();
            this.player.source = "player_png";
            this.player.width = this.gzw - 30;
            this.player.height = this.gzw - 30;
            this.targetPos = new egret.Point();
            this.targetPos.x = this.socendgz.x + (this.socendgz.width - this.player.width) / 2;
            this.targetPos.y = this.socendgz.y + this.socendgz.height / 2 - this.player.height;
            console.log("this.targetPos.x = " + this.targetPos.x + ",this.targetPos.y " + this.targetPos.x);
            this.player.x = this.startgz.x + (this.startgz.width - this.player.width) / 2;
            this.player.y = this.startgz.y + this.startgz.height / 2 - this.player.height;
            console.log("player x = " + this.player.x + ",player y = " + this.player.y);
            this.addChild(this.player);
        };
        Object.defineProperty(bigRicherMap.prototype, "factor", {
            //添加factor的set,get方法,注意用public  
            get: function () {
                return 0;
            },
            //计算方法参考 二次贝塞尔公式  
            set: function (value) {
                this.player.x = (1 - value) * (1 - value) * this.player.x + 2 * value * (1 - value) * (this.player.x + this.targetPos.x) / 2 + value * value * (this.targetPos.x);
                this.player.y = (1 - value) * (1 - value) * this.player.y + 2 * value * (1 - value) * (this.targetPos.y - 75) + value * value * (this.targetPos.y);
            },
            enumerable: true,
            configurable: true
        });
        return bigRicherMap;
    }(eui.Group));
    map.bigRicherMap = bigRicherMap;
    __reflect(bigRicherMap.prototype, "map.bigRicherMap");
})(map || (map = {}));
//# sourceMappingURL=bigRicherMap.js.map