namespace tools {
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

	export function setNewSlot(animation: dragonBones.EgretArmatureDisplay, slotName: string, textureName: string): void {
		if(DEBUG) {
			if (!RES.hasRes(textureName)) {
				egret.error(`骨骼动画卡槽换装 ${textureName} 纹理没有配置!!!`);
			} else {
				if (RES.getRes(textureName) == null) {
					egret.error(`骨骼动画卡槽换装 ${textureName} 纹理没有被加载!!!`);
				}
			}
		}
			let slot: dragonBones.Slot = animation.armature.getSlot(slotName);
		let b: egret.Bitmap = new egret.Bitmap();
		b.texture = RES.getRes(textureName);
		// b.x = slot.display.x;
		// b.y = slot.display.y;
		b.anchorOffsetX = b.width >> 1;
		b.anchorOffsetY = b.height >> 1;
		slot.display = b;
	}
}