namespace XhGame {
    export class EventBus {
        static _bus: egret.EventDispatcher;
        static get bus() {
            if (!this._bus) {
                this._bus = new egret.EventDispatcher();
            }
            return this._bus
        }
        static addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void{
            this.bus.addEventListener(type, listener, thisObject, useCapture, priority);
        }

        static once(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void {
            this.bus.once(type, listener, thisObject, useCapture, priority);
        }
        static dispatchEvent(event: egret.Event): boolean {
            return this.bus.dispatchEvent(event)
        }
        static removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean) {
            return this.bus.removeEventListener(type, listener, thisObject, useCapture)
        }
        static hasEventListener(type: string): boolean {
            return this.bus.hasEventListener(type)
        }
    }
}