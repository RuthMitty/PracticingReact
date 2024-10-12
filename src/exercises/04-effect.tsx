import { useEffect, useState } from "react";

export default function Effect(){
    const [position, setPosition] = useState({x:0, y: 0})
    
    function handlerMouseMove(e: any){
        setPosition({x: e.x, y: e.y})
    }

    useEffect(()=>{
        window.addEventListener("mousemove", handlerMouseMove)
      }, []);

      
    return(
        <div style={{
            position: "absolute",
            backgroundColor: "red",
            opacity: "10%",
            transform: `translateX(${position.x}px) translateY(${position.y}px)`,
            height: 30,
            width: 30,
            left: -20,
            top: 0,
            bottom: 0,
            borderRadius: "50%"
        }}>

        </div>
    );
}