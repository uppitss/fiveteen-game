import {useEffect, useRef, useState} from "react";
import {GameDomain} from "./gameDomain";
import {ClickOnBoneEventArgs} from "./eventArgs/clickOnBoneEventArgs";

export const Root = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | undefined | null>(null)
    const [gameDomain, setGameDomain] = useState<GameDomain>()

    useEffect(() => {
        console.log("Mount")
        const ctx = canvasRef?.current?.getContext('2d');
        if (ctx) {
            //Получим канвас
            setCanvasContext(ctx)
        }
    }, [])

    useEffect(() => {
        console.log("CanvasContext")
        if (canvasContext) {
            setGameDomain(new GameDomain())
        }
    }, [canvasContext])

    useEffect(()=>{
        console.log("GameDomain")
        if (canvasContext) {
            gameDomain?.Init(canvasContext);
        }
    },[gameDomain])

    return (<>
        <canvas width={400} height={400} style={{border: "1px solid black"}} ref={canvasRef} onClick={(e) => {
             if (canvasContext) {
                  var rect = canvasContext.canvas.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                 //    gameDomain?.OnClick(canvasContext,x,y);

                 const event = new CustomEvent(ClickOnBoneEventArgs.EventName, {detail: new ClickOnBoneEventArgs(x,y)});
                 document.dispatchEvent(event);

             }
        }}></canvas>
        <br/>
        <button onClick={() => {

        }}>Клик
        </button>
    </>);
}
