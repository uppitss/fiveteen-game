import {BoneAbstract} from "./boneAbstract";
import {ClickOnBoneEventArgs} from "./eventArgs/clickOnBoneEventArgs";
import {BoneEmpty} from "./boneEmpty";

export class BoneClass extends BoneAbstract{

    public name:string;
    public matrix: (BoneClass|BoneEmpty) [];
    public size:number;
    constructor(name:string,matrix: (BoneClass | BoneEmpty) []) {
        super();
        this.name = name;
        this.matrix = matrix;
        this.size=100;
        document.addEventListener(ClickOnBoneEventArgs.EventName,this.ClickOnBoneEventHandler.bind(this));
    }
    public ClickOnBoneEventHandler(e: CustomEventInit<ClickOnBoneEventArgs>){
      //  alert('BoneActionHandler Position='+this.position+" action="+e.detail?.message);
    }

    getCurrentPosition = () => {
         return this.matrix.findIndex((f)=> f instanceof BoneClass && (f as BoneClass) === this)
     }
    public getRow = () => {
         const position = this.getCurrentPosition();
         return Math.floor(position / 4)
     }
    getColumn = () => {
         return this.getCurrentPosition() - this.getRow() * 4;
     }
    getX = () => this.getColumn() * this.size;
    getY = () => this.getRow() * this.size;

    public override Draw(ctx: CanvasRenderingContext2D, size: number, offsetX?: number, offsetY?: number) {
        const gap=2;
        const rX = this.getX() + (offsetX !== undefined? offsetX :0);
        const rY = this.getY() + (offsetY !== undefined? offsetY :0);
        ctx.fillRect(rX + gap, rY + gap, size - gap * 2, size - gap * 2);
    }
}
