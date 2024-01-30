export abstract class BoneAbstract {
    constructor() {
    }
    abstract Draw(ctx: CanvasRenderingContext2D, x:number,y:number,size:number,offsetX?:number , offsetY?:number): void;
}