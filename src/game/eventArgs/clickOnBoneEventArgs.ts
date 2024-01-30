export class ClickOnBoneEventArgs {
    x:number;
    y:number;
    constructor(x:number,y:number) {
        this.x = x;
        this.y=y;
    }

    static EventName = "ClickOnBone";
}
