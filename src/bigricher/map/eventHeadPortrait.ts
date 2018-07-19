namespace map {
	export class eventHeadPortrait extends eui.Component {


        private type:number
		private icon: eui.Image;
		private userName: eui.Label;
		public constructor() {
			super();
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = "headPortrait";
		}

		private onComplete(): void {
			console.log("onComplete");
			this.init();
		}
		public init() {


		}

		private egretFactory: dragonBones.EgretFactory;

		private eff_robot: dragonBones.EgretArmatureDisplay;

		public playstealAnimation() {

			this.egretFactory = tools.DragonBoneTools.Instance.createEff2New(
				"xiaotou_ske_json",
				"xiaotou_tex_json",
				"xiaotou_tex_png",
			);



			this.eff_robot = this.egretFactory.buildArmatureDisplay("xiaotou");
			this.addChild(this.eff_robot);
			this.eff_robot.x = this.icon.width;
			this.eff_robot.y = this.icon.height / 2;


			console.log("this.eff_robot.width:" + this.eff_robot.width + ",this.eff_robot.height:" + this.eff_robot.height);
			this.eff_robot.animation.play("xiaotou", 1);
			this.eff_robot.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
		}


		public playCannonAnimation() {

			this.egretFactory = tools.DragonBoneTools.Instance.createEff2New(
				"cannons_ske_json",
				"cannons_tex_json",
				"cannons_tex_png",
			);



			this.eff_robot = this.egretFactory.buildArmatureDisplay("cannons");
			this.addChild(this.eff_robot);
			this.eff_robot.x = this.icon.width/2;
			this.eff_robot.y = this.icon.height/2;
			this.eff_robot.width = this.eff_robot.width / 1.5;
			this.eff_robot.height = this.eff_robot.height / 1.5;
			console.log("this.eff_robot.width:" + this.eff_robot.width + ",this.eff_robot.height:" + this.eff_robot.height);


			this.eff_robot.animation.play("cannons", 1);
			this.eff_robot.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this);
		}


		private animationEventHandler(event: dragonBones.EgretEvent): void {
					XhGame.EventBus.dispatchEvent(new egret.Event("event_steal_pao"));
			
		}

	}
}