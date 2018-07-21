namespace map {
	export class gezi extends eui.Group {


		private geziImg: string;
		private image: eui.Image;
		public padding: number = 7;
		private mWidth: number;
		private mHight: number;
		private mX: number;
		private mY: number;
		public index: number;
		public changeLevel: number;
		public data: any;
		//我的SB 我叫廖理

		private blueRooms: Array<string> = ["map_room_blue_0_png", "map_room_blue_1_png", "map_room_blue_2_png", "map_room_blue_3_png", "map_room_blue_4_png", "map_room_blue_5_png", "map_room_blue_6_png", "map_room_blue_7_png", "map_room_blue_8_png", "map_room_blue_9_png", "map_room_blue_10_png"];

		private yellowRooms: Array<string> = ["map_room_yellow_0_png", "map_room_yellow_1_png", "map_room_yellow_2_png", "map_room_yellow_3_png", "map_room_yellow_4_png", "map_room_yellow_5_png", "map_room_yellow_6_png", "map_room_yellow_7_png", "map_room_yellow_8_png", "map_room_yellow_9_png", "map_room_yellow_10_png"];

		private redRooms: Array<string> = ["map_room_red_0_png", "map_room_red_1_png", "map_room_red_2_png", "map_room_red_3_png", "map_room_red_4_png", "map_room_red_5_png", "map_room_red_6_png", "map_room_red_7_png", "map_room_red_8_png", "map_room_red_9_png", "map_room_red_10_png"];




		public constructor(x: number, y: number, geziImg: string, w: number, h: number, index: number) {
			super();
			this.geziImg = geziImg;
			this.mWidth = w;
			this.mHight = h;
			this.mX = x;
			this.mY = y;
			this.index = index;
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

		}


		private initData() {
			let data: any = this.data;
			if (data) {
				this.getfangziImg(data.build.category, data.build.level);
			}
		}

		private getfangziImg(category: any, level: any) {

			let fangziImg: string;
			switch (category) {
				case 1:
					fangziImg = this.blueRooms[<number>level];
					break;
				case 2:

					fangziImg = this.redRooms[<number>level];
					break;
				case 3:
					fangziImg = this.yellowRooms[<number>level];
					break;

			}

			this.geziImg = fangziImg

		}

		public changFangziLevel() {

			this.getfangziImg(this.data.build.category, this.changeLevel);
			this.image.texture = (<map.bigRicherMap>(this.parent)).getGeziTexture(this.geziImg);
		}


		/**初始化*/
		private onAddToStage(event: egret.Event) {
			this.initData();

			this.width = this.mWidth;
			this.height = this.mHight;
			this.x = this.mX; this.y = this.mY;
			this.image = new eui.Image

			this.image.texture = (<map.bigRicherMap>(this.parent)).getGeziTexture(this.geziImg);



			let sub = this.geziImg.substring(0, "map_room_".length)

			if ("map_room_" == sub) {

				this.image.width = this.width;
				this.height = this.image.height = this.image.texture.bitmapData.height * this.width / this.image.texture.bitmapData.width;
				this.y = this.mY - this.height + this.mHight - 8;
				this.addChild(this.image);
			} else {

				// this.source = this.geziImg;
				this.image.x = this.padding / 2;
				this.image.y = this.padding / 2;
				this.image.width = this.mWidth - this.padding;
				this.image.height = this.mHight - this.padding;
				this.addChild(this.image);
			}
		}


	}
}