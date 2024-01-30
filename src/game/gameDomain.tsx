import {BoneEmpty} from "./boneEmpty";
import {BoneClass} from "./boneClass";

export class GameDomain {
    public matrix: (BoneClass | BoneEmpty) [];
    protected size:number;
    constructor() {
        this.size = 100;
        this.matrix = [];
        for (let i = 0; i < 15; i++) {
            this.matrix.push(new BoneClass(i.toString(),this.matrix));
        }
        this.matrix.push(new BoneEmpty());
    }

    // getCurrentPosition = (index?:number) => {
    //     if (index !== undefined){
    //         return this.matrix.findIndex((f)=> f instanceof BoneClass && (f as BoneClass).position === index)
    //     }else{
    //         return this.matrix.findIndex((f)=>f instanceof BoneEmpty)
    //     }
    // }
    // public getRow = (index?:number) => {
    //     const position = this.getCurrentPosition(index);
    //     return Math.floor(position / 4)
    // }
    // public getColumn = (index?:number) => {
    //     return this.getCurrentPosition(index) - this.getRow(index) * 4;
    // }
    // getX = (index?:number) => this.getColumn(index) * this.size;
    // getY = (index?:number) => this.getRow(index) * this.size;

    // public Init = (ctx: CanvasRenderingContext2D) => {
    //     for (const item of this.matrix) {
    //         const index = item instanceof BoneClass ? (item as BoneClass).position : undefined;
    //         const x = this.getX(index);
    //         const y = this.getY(index);
    //         item.Draw(ctx,this.getX(index),this.getY(index),this.size);
    //     }
    // }

    public Init = (ctx: CanvasRenderingContext2D) => {
        for (const item of this.matrix) {
            // const index = item instanceof BoneClass ? (item as BoneClass).position : undefined;
            // const x = this.getX(index);
            // const y = this.getY(index);
            item.Draw(ctx,this.size);
        }
    }

    // public OnClick = (ctx: CanvasRenderingContext2D, mouseX:number, mouseY:number) =>{
    //     const event = new CustomEvent("boneAction", {detail: new BoneAction("Hello 2")});
    //     document.dispatchEvent(event);
    //     // let element:BoneClass|BoneEmpty|undefined = undefined;
    //     // for (const item of this.matrix){
    //     //     const index = item instanceof BoneClass ? (item as BoneClass).position : undefined;
    //     //     const x = this.getX(index);
    //     //     const y = this.getY(index);
    //     //     if (mouseX >= x && mouseX < (x+this.size) && mouseY >= y && mouseY < (y+this.size)){
    //     //         element =item;
    //     //         break;
    //     //     }
    //     // }
    //     //
    //     // if (element !== undefined && element instanceof  BoneClass){
    //     //     alert(element.position);
    //     // }
    // }
}
