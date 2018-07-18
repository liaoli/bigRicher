module tools {
	export class DragonBoneTools {
		private static _instance: DragonBoneTools;
		public static get Instance(): DragonBoneTools {
			if (DragonBoneTools._instance == null) DragonBoneTools._instance = new DragonBoneTools();
			return DragonBoneTools._instance;
		}
		/**
		 * 构建龙骨 新 不需要绑定时钟
		 */
		public createEff2New(dataRes: string, texJson: string, texPng: string): dragonBones.EgretFactory {
			var dragonbonesData = RES.getRes(dataRes);
			var textureData = RES.getRes(texJson);
			var texture = RES.getRes(texPng);
			let dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
			dragonbonesFactory.parseDragonBonesData(dragonbonesData);
			dragonbonesFactory.parseTextureAtlasData(textureData, texture);
			return dragonbonesFactory;

		}
	}
}