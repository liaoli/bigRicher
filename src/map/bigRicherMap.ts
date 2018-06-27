module map {
	export class bigRicherMap extends eui.Group {
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

		}




		private onAddToStage(event: egret.Event) {
			this.createGameScene();
		}

		protected createGameScene(): void {
			let mapBg = map.GameUtil.createBitmapByName("gezi_bg_png");
			this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
			mapBg.width = this.stage.stageWidth;
			this.bgwidth = mapBg.width;
			mapBg.height = this.bgwidth;

			this.bgHeight = mapBg.height;
			this.addChild(mapBg);
			//this.getwhAndxy();

			this.createjumpgezi();
			this.addgezi()
			this.testJump();
			this.init();
		}




		private bgwidth: number;
		private bgHeight: number;
		private row: number = 9;
		private mGgzw: number;
		private startgz: map.gezi;
		private socendgz: map.gezi;
		private jumpgezis: map.gezi[] = [];
		private fangzigezis: map.gezi[] = [];


		public createjumpgezi() {

			let gzw: number = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;

			this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);

			for (let i: number = 0; i < this.row; i++) {

				for (let j: number = 0; j < this.row; j++) {
					switch (i) {
						case 0:

							if (j == 1) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_hongbaofagnzi_png", 1))
							}

							if (j == 2) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 2))
							}
							if (j == 4) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 4))
							}
							if (j == 5) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 5))
							}
							break;
						case 1:
							if (j == 1) {
								//jump  起点
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_sart_png", 1));

							}

							if (j == 2) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 2));
							}

							if (j == 3) {
								//jump 问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 3));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 3))
							}
							if (j == 4) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 4))
							}
							if (j == 5) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 5))
							}
							if (j == 6) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 7))
							}
							break;
						case 2:
							if (j == 5) {
								//jump 问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 6));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 6))
							}

							if (j == 6) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 7));
							}

							if (j == 1) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 24));
							}
							if (j == 0) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 24))
							}
							break;
						case 3:
							if (j == 0) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 23))
							}
							if (j == 1) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 23));
							}
							if (j == 6) {
								//jump 盾牌
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_dun_png", 8));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 8))
							}
							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 9));
							}
							if (j == 8) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 9))
							}

							break;
						case 4:
							if (j == 0) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 22))
							}
							if (j == 1) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 22));
							}

							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 10));
							}
							if (j == 8) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 10))
							}
							break;
						case 5:
							if (j == 0) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 21))
							}
							if (j == 1) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 21));
							}

							if (j == 2) {
								//问号
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_wenhao_png", 20));
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 20))
							}
							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 11));
							}
							if (j == 8) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 11))
							}

							break;
						case 6:
							if (j == 2) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 19));
							}
							if (j == 3) {
								//jump偷
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_tou_png", 18))
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 18))
							}

							if (j == 7) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 12));
							}
							if (j == 8) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 12))
							}
							break;
						case 7:
							if (j == 2) {
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 19))
							}
							if (j == 3) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 17));
							}

							if (j == 4) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 16));
							}
							if (j == 5) {
								//jump炮
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_pao_png", 15));
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 15))
							}
							if (j == 6) {
								//jump
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_jinbi_png", 14));
							}
							if (j == 7) {
								//jump体力
								this.jumpgezis.push(this.createGeziByIndex(i, j, "gezi_tili_png", 13));
								//房
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 13))
							}
							break;
						case 8:
							if (j == 3) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 17))
							}

							if (j == 4) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 16))
							}
							if (j == 6) {
								//房子
								this.fangzigezis.push(this.createGeziByIndex(i, j, "gezi_fangzi_png", 14))
							}
							break;
						default:
							break;
					}

				}
			}

			this.sort();

		}


		private sort() {
			this.jumpgezis.sort((a: map.gezi, b: map.gezi) => {
				return a.index - b.index;
			})

			this.fangzigezis.sort((a: map.gezi, b: map.gezi) => {
				return a.index - b.index;
			})
		}


		private addgezi() {

			for (let i = 0; i < this.jumpgezis.length; i++) {
				this.addChild(this.jumpgezis[i]);
				if (i == 2 || i == 5 || i == 7 || i == 12 || i == 14 || i == 17 || i == 19) {
					continue
				}
				this.addChild(this.fangzigezis[i]);
			}
		}

		private createGeziByIndex(i: number, j: number, img: string, index: number): map.gezi {


			let x = this.bgwidth / 2 - this.mGgzw / 2 * (j + 1) + this.mGgzw * i / 2;

			let y = this.bgHeight - this.mGgzw / 2 * (j + 2) - this.mGgzw * i / 2;

			let geziGroup: map.gezi = new map.gezi(x, y, img, this.mGgzw, this.mGgzw, index);

			return geziGroup;
		}

		private createGezi(i: number, j: number, img: string): map.gezi {


			let x = this.bgwidth / 2 - this.mGgzw / 2 * (j + 1) + this.mGgzw * i / 2;

			let y = this.bgHeight - this.mGgzw / 2 * (j + 2) - this.mGgzw * i / 2;
			let geziGroup: map.gezi = new map.gezi(x, y, img, this.mGgzw, this.mGgzw, 0);

			return geziGroup;
		}

		public getwhAndxy() {

			let gzw: number = Math.sqrt((Math.pow(this.bgwidth / 2, 2) + Math.pow(this.bgHeight / 2, 2))) / this.row;

			this.mGgzw = Math.sqrt(Math.pow(gzw, 2) * 2);

			for (let i: number = 0; i < this.row; i++) {
				for (let j: number = 0; j < this.row; j++) {


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
						} else {
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
		}




		private addGezi(i: number, j: number, img: string): map.gezi {
			let geziGroup: map.gezi = this.createGezi(i, j, img);
			return geziGroup;
		}


		public testJump(): void {

			this.player = new eui.Image();
			this.player.source = "player_png";
			this.player.width = this.mGgzw - 30;
			this.player.height = this.mGgzw - 30;

			this.nextGezi();
			console.log("this.targetPos.x = " + this.targetPos.x + ",this.targetPos.y " + this.targetPos.x);
			this.startgz = this.jumpgezis[0];
			this.player.x = this.startgz.x + (this.startgz.width - this.player.width) / 2
			this.player.y = this.startgz.y + this.startgz.height / 2 - this.player.height;
			console.log("player x = " + this.player.x + ",player y = " + this.player.y);
			this.addChild(this.player)

		}

		private nextGezi(): egret.Point {
			let indexOfNext = this.indexOfPlayer + 1
			if(indexOfNext == this.jumpgezis.length){
				indexOfNext = 0;
				
			}
			let nextGz: map.gezi = this.jumpgezis[indexOfNext];
			this.targetPos = new egret.Point();
			this.targetPos.x = nextGz.x + (nextGz.width - this.player.width) / 2
			this.targetPos.y = nextGz.y + nextGz.height / 2 - this.player.height
			this.indexOfPlayer += 1;
			if(this.indexOfPlayer == this.jumpgezis.length ){
				this.indexOfPlayer = 0;
			}
			return this.targetPos;
		}



		private player: eui.Image;
		private indexOfPlayer: number = 0;
		private targetPos: egret.Point;

		//添加factor的set,get方法,注意用public  
		public get factor(): number {
			return 0;
		}
		//计算方法参考 二次贝塞尔公式  
		public set factor(value: number) {
			this.player.x = (1 - value) * (1 - value) * this.player.x + 2 * value * (1 - value) * (this.player.x + this.targetPos.x) / 2 + value * value * (this.targetPos.x);
			this.player.y = (1 - value) * (1 - value) * this.player.y + 2 * value * (1 - value) * (this.targetPos.y - 75) + value * value * (this.targetPos.y);
		}

		private init() {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapHandler, this);
		}
		private tapHandler() {

			egret.Tween.get(this).to({ factor: 1 }, 500).call(() => {
				this.nextGezi();
				
			});
		}

	}

}