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
    var gezi = (function (_super) {
        __extends(gezi, _super);
        function gezi(x, y, geziImg, w, h, index) {
            var _this = _super.call(this) || this;
            _this.padding = 7;
            //我的SB 我叫廖理
            _this.blueRooms = ["", "map_room_blue_1_png", "map_room_blue_2_png", "map_room_blue_3_png", "map_room_blue_4_png", "map_room_blue_5_png", "map_room_blue_6_png", "map_room_blue_7_png", "map_room_blue_8_png", "map_room_blue_9_png", "map_room_blue_10_png"];
            _this.yellowRooms = ["", "map_room_yellow_1_png", "map_room_yellow_2_png", "map_room_yellow_3_png", "map_room_yellow_4_png", "map_room_yellow_5_png", "map_room_yellow_6_png", "map_room_yellow_7_png", "map_room_yellow_8_png", "map_room_yellow_9_png", "map_room_yellow_10_png"];
            _this.redRooms = ["", "map_room_yellow_1_png", "map_room_yellow_2_png", "map_room_yellow_3_png", "map_room_yellow_4_png", "map_room_yellow_5_png", "map_room_yellow_6_png", "map_room_yellow_7_png", "map_room_yellow_8_png", "map_room_yellow_9_png", "map_room_yellow_10_png"];
            _this.geziImg = geziImg;
            _this.mWidth = w;
            _this.mHight = h;
            _this.mX = x;
            _this.mY = y;
            _this.index = index;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        gezi.prototype.initData = function () {
            var data = this.data;
            if (data) {
                this.getfangziImg(data.category, data.build.level);
            }
        };
        gezi.prototype.getfangziImg = function (category, level) {
            var fangziImg;
            switch (category) {
                case 1:
                    fangziImg = this.blueRooms[level];
                    break;
                case 2:
                    fangziImg = this.yellowRooms[level];
                    break;
                case 3:
                    fangziImg = this.redRooms[level];
                    break;
            }
            this.geziImg = fangziImg;
        };
        /**初始化*/
        gezi.prototype.onAddToStage = function (event) {
            this.initData();
            this.width = this.mWidth;
            this.height = this.mHight;
            this.x = this.mX;
            this.y = this.mY;
            this.image = new eui.Image;
            this.image.texture = (this.parent).getGeziTexture(this.geziImg);
            var sub = this.geziImg.substring(0, "map_room_".length);
            if ("map_room_" == sub) {
                this.image.width = this.width;
                this.height = this.image.height = this.image.texture.bitmapData.height * this.width / this.image.texture.bitmapData.width;
                this.y = this.mY - this.height + this.mHight - 8;
                this.addChild(this.image);
            }
            else {
                // this.source = this.geziImg;
                this.image.x = this.padding / 2;
                this.image.y = this.padding / 2;
                this.image.width = this.mWidth - this.padding;
                this.image.height = this.mHight - this.padding;
                this.addChild(this.image);
            }
        };
        return gezi;
    }(eui.Group));
    map.gezi = gezi;
    __reflect(gezi.prototype, "map.gezi");
})(map || (map = {}));
//# sourceMappingURL=gezi.js.map