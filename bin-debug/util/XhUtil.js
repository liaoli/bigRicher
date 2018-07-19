var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
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
var XhGame;
(function (XhGame) {
    var Tools = (function () {
        function Tools() {
        }
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        Tools.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        /**
         * 清除容器中所有东西
         * @param sp DisplayObjectContainer
         */
        Tools.removeALL = function (sp) {
            while (sp.numChildren > 0) {
                sp.removeChildAt(0);
            }
        };
        /**
         * 从父级移除child
         * @param child
         */
        Tools.removeFromParent = function (child) {
            if (child.parent == null)
                return;
            child.parent.removeChild(child);
        };
        /**
         * 在父容器中居中, 不考虑缩放变形引起的定位
         *
         */
        Tools.displayCenter = function (obj) {
            var width = obj.width, height = obj.height, anchorOffsetX = obj.anchorOffsetX, anchorOffsetY = obj.anchorOffsetY, parent = obj.parent;
            if (height == 0 || width == 0)
                return;
            var offset_x = width / 2 - anchorOffsetX;
            var offset_y = height / 2 - anchorOffsetY;
            if (parent) {
                var width_1 = parent.width, height_1 = parent.height;
                obj.x = width_1 / 2 - offset_x;
                obj.y = height_1 / 2 - offset_y;
            }
        };
        /**
         * 锚点居中
         */
        Tools.anchorCenter = function (obj, is) {
            if (is === void 0) { is = false; }
            if (obj.anchorOffsetX != obj.width >> 1) {
                obj.anchorOffsetX = obj.width >> 1;
                obj.anchorOffsetY = obj.height >> 1;
                if (is) {
                    return;
                }
                // 重新计算坐标定位
                obj.x += obj.anchorOffsetX;
                obj.y += obj.anchorOffsetY;
            }
        };
        /**按钮点击弹一下再执行代码
         *使用方法:Tool.ButtonBound(e.target,function(){console.log("执行");},this);
        */
        Tools.ButtonBound = function (btn, callback, self) {
            btn.touchEnabled = false;
            Tools.anchorCenter(btn);
            egret.Tween.get(btn).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100)
                .to({ "scaleX": 1, "scaleY": 1 }, 200, egret.Ease.bounceOut).call(function () {
                btn.touchEnabled = true;
                callback.call(self, [btn]);
            }, self);
        };
        // 缓动
        /** 由小到大进入 **/
        Tools.poompop = function (sp) {
            Tools.anchorCenter(sp);
            console.log(111);
            sp.scaleX = sp.scaleY = 0.5;
            return egret.Tween.get(sp).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.circOut);
        };
        /** 由大到小进入 **/
        Tools.narrowpop = function (sp) {
            Tools.anchorCenter(sp);
            sp.scaleX = sp.scaleY = 2;
            return egret.Tween.get(sp).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.circIn);
        };
        /** 从屏幕左外到右缓动到指定地方 **/
        Tools.LMoveR = function (obj, _x, _y, wait, times, ease, parent) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            if (parent === void 0) { parent = false; }
            obj.y = _y;
            obj.x = -obj.width;
            if (parent) {
                obj.x -= obj.parent.x;
            }
            return egret.Tween.get(obj).wait(wait).to({ x: _x, y: _y }, times, ease);
        };
        /** 从屏幕右外到左缓动到指定地方 **/
        Tools.RMoveL = function (obj, _x, _y, wait, times, ease, parent) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            if (parent === void 0) { parent = false; }
            obj.y = _y;
            obj.x = egret.MainContext.instance.stage.stageWidth + obj.width;
            if (parent) {
                obj.x += obj.parent.x;
            }
            return egret.Tween.get(obj).wait(wait).to({ x: _x, y: _y }, times, ease);
        };
        /** 左移出屏幕 **/
        Tools.LMoveRout = function (obj, wait, times, ease) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            return egret.Tween.get(obj).wait(wait).to({ x: obj.x + egret.MainContext.instance.stage.stageWidth }, times, ease);
        };
        /** 右移出屏幕 **/
        Tools.RMoveLout = function (obj, wait, times, ease) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            return egret.Tween.get(obj).wait(wait).to({ x: -(obj.x + obj.width) }, times, ease);
        };
        /** 下移出屏幕 **/
        Tools.TMoveBout = function (obj, wait, times, ease) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            return egret.Tween.get(obj).wait(wait).to({ y: obj.y + egret.MainContext.instance.stage.stageHeight }, times, ease);
        };
        /** 上移出屏幕 **/
        Tools.BMoveTout = function (obj, wait, times, ease) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            return egret.Tween.get(obj).wait(wait).to({ y: -(obj.y + obj.height) }, times, ease);
        };
        /**
         * 从屏幕上外到下缓动到指定地方
         *
         */
        Tools.TMoveB = function (obj, _x, _y, wait, times, ease, parent) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            if (parent === void 0) { parent = false; }
            obj.y = -obj.height;
            obj.x = _x;
            if (parent) {
                obj.x += obj.parent.x;
            }
            return egret.Tween.get(obj).wait(wait).to({ x: _x, y: _y }, times, ease);
        };
        /**
         *  从屏幕下外到上缓动到指定地方
         *
         */
        Tools.BMoveT = function (obj, _x, _y, wait, times, ease, parent) {
            if (wait === void 0) { wait = 0; }
            if (ease === void 0) { ease = null; }
            if (parent === void 0) { parent = false; }
            obj.y = egret.MainContext.instance.stage.stageHeight + obj.height;
            obj.x = _x;
            if (parent) {
                obj.x += obj.parent.x;
            }
            return egret.Tween.get(obj).wait(wait).to({ x: _x, y: _y }, times, ease);
        };
        /**
         * 锁屏
         */
        Tools.lock = function () {
            egret.MainContext.instance.stage.touchChildren = false;
        };
        /**
         * 解屏
         */
        Tools.unlock = function () {
            egret.MainContext.instance.stage.touchChildren = true;
        };
        /**
         * 文本overflow显示省略号 _len 保留的字节长度 中文4，英文2
         */
        Tools.getChar = function (_str, _len) {
            var _ba = new egret.ByteArray;
            _ba.writeUTFBytes(_str);
            if (_ba.length < _len)
                return _str;
            _ba.position = 0;
            return _ba.readUTFBytes(_len) + "...";
        };
        Tools.getImageFromUrl = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            var imgLoader = new egret.ImageLoader;
                            imgLoader.crossOrigin = "anonymous";
                            imgLoader.once(egret.Event.COMPLETE, function (evt) {
                                var loader = evt.currentTarget;
                                var texture = new egret.Texture();
                                texture._setBitmapData(loader.data);
                                var bmp = new egret.Bitmap(texture);
                                resolve(bmp);
                            }, _this);
                            imgLoader.once(egret.IOErrorEvent.IO_ERROR, function (evt) {
                                var bmp = XhGame.Tools.createBitmapByName('egret_icon_png');
                                resolve(bmp);
                            }, _this);
                            imgLoader.load(url);
                        }).catch(function (err) {
                            var bmp = XhGame.Tools.createBitmapByName('egret_icon_png');
                            return Promise.resolve(bmp);
                        })];
                });
            });
        };
        return Tools;
    }());
    XhGame.Tools = Tools;
    __reflect(Tools.prototype, "XhGame.Tools");
})(XhGame || (XhGame = {}));
//# sourceMappingURL=XhUtil.js.map