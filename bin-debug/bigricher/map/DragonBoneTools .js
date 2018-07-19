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
})(tools || (tools = {}));
//# sourceMappingURL=DragonBoneTools .js.map