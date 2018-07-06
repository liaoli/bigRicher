module map {
	export class gezi extends eui.Group {


		private geziImg: string;
		private image: eui.Image;
		public padding: number = 8;
		private mWidth: number;
		private mHight: number;
		private mX: number;
		private mY: number;
		public index: number;
		private fangzi:map.gezi;
		private data:any;
		
		

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


		/**初始化*/
		private onAddToStage(event: egret.Event) {
			this.width = this.mWidth;
			this.height = this.mHight;
			this.x = this.mX; this.y = this.mY;
			this.image = new eui.Image

			this.image.texture = (<map.bigRicherMap>(this.parent)).getGeziTexture(this.geziImg);
			// this.source = this.geziImg;
			this.image.width = this.mWidth - this.padding;
			this.image.height = this.mHight - this.padding;
			this.addChild(this.image);
		}




	}
}