var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var tools;
(function (tools) {
    var DragonBoneTools = (function () {
        function DragonBoneTools() {
        }
        Object.defineProperty(DragonBoneTools, "Instance", {
            get: function () {
                if (DragonBoneTools._instance == null)
                    DragonBoneTools._instance = new DragonBoneTools();
                return DragonBoneTools._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 构建龙骨 新 不需要绑定时钟
         */
        DragonBoneTools.prototype.createEff2New = function (dataRes, texJson, texPng) {
            var dragonbonesData = RES.getRes(dataRes);
            var textureData = RES.getRes(texJson);
            var texture = RES.getRes(texPng);
            var dragonbonesFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.parseDragonBonesData(dragonbonesData);
            dragonbonesFactory.parseTextureAtlasData(textureData, texture);
            return dragonbonesFactory;
        };
        return DragonBoneTools;
    }());
    tools.DragonBoneTools = DragonBoneTools;
    __reflect(DragonBoneTools.prototype, "tools.DragonBoneTools");
    function setNewSlot(animation, slotName, textureName) {
        if (true) {
            if (!RES.hasRes(textureName)) {
                egret.error("\u9AA8\u9ABC\u52A8\u753B\u5361\u69FD\u6362\u88C5 " + textureName + " \u7EB9\u7406\u6CA1\u6709\u914D\u7F6E!!!");
            }
            else {
                if (RES.getRes(textureName) == null) {
                    egret.error("\u9AA8\u9ABC\u52A8\u753B\u5361\u69FD\u6362\u88C5 " + textureName + " \u7EB9\u7406\u6CA1\u6709\u88AB\u52A0\u8F7D!!!");
                }
            }
        }
        var slot = animation.armature.getSlot(slotName);
        var b = new egret.Bitmap();
        b.texture = RES.getRes(textureName);
        // b.x = slot.display.x;
        // b.y = slot.display.y;
        b.anchorOffsetX = b.width >> 1;
        b.anchorOffsetY = b.height >> 1;
        slot.display = b;
    }
    tools.setNewSlot = setNewSlot;
})(tools || (tools = {}));
//# sourceMappingURL=DragonBoneTools .js.map