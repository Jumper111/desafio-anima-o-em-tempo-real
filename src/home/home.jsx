import React from "react";
import style from "./home.module.css"

export default function Home(){

  const [translateX,setTranslateX] = React.useState(0)
  const [translateY,setTranslateY] = React.useState(0)
  const [rotate,setRotate] = React.useState(0)
  const [scale,setScale] = React.useState(1)

  const boxStyle = {
    transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
    width: "9rem",
    height: "7rem",
    backgroundColor: "red",
    transition: "transform 0.3s ease",
  }
  
  return(
    
    <div className={style.main}>
    
      <form>
        
        <div className={style.context}>
          
          <label 
            htmlFor="translateX"
          >
            Translate X (px):
          </label>
          
          <input 
            id="translateX" 
            type="number" 
            onChange={(e)=> setTranslateX(e.target.value)}
          />

        </div>

        <div className={style.context}>
          
          <label 
            htmlFor="translateY"
          >
            Translate Y (px):
          </label>
          
          <input 
            id="translateY" 
            type="number" 
            onChange={(e)=>setTranslateY(e.target.value)}
            />
        </div>

        <div className={style.context}>
          
          <label 
            htmlFor="rotate"
          >
            Rotate (deg):
          </label>
          
          <input 
            id="rotate" 
            type="number" 
            onChange={(e)=>setRotate(e.target.value)}
          />
        
        </div>
        
        <div className={style.context}>
          
          <label htmlFor="scale">Scale:</label>
          
          <input 
            step="0.1"
            id="scale" 
            type="number" 
            onChange={(e)=> setScale(e.target.value)}
          />

        </div>

      </form>

      <div style={boxStyle}></div>
      
    </div>
  )
}