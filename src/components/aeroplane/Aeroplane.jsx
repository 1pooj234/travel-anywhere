import { useEffect, useState } from "react"
import "./Aeroplane.css"
const Aeroplane=()=>{
    const [yOffset,setYOffset]=useState(0)
    const scrollHandler=()=>{
        setYOffset(window.pageYOffset)
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollHandler)
        return ()=>{

            window.removeEventListener("scroll",scrollHandler)
        }
    },[])
    
    let className="aeroplane"
    if(yOffset>30){
      className="aeroplane tilt"
    }
    if(yOffset>30){
        className="aeroplane move_to--second"
    }
    if(yOffset>625){
        className="aeroplane move_to--third"
        
      }
      if(yOffset>1275){
      className="aeroplane move_to--fourth"

    }
      if(yOffset>1995){
      className="aeroplane move_to--last"

    }
    return  <div  className={className}>
    <div className="side2 front">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="side1 top">
      
    <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="side1 bottom">
      
    <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="side3 left">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="wing1 w1"></div>
      <div className="wing1 w2"></div>
    </div>
    <div className="side3 right">
    <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="wing2 w3"></div>
      <div className="wing2 w4"></div> 
    </div>
    <div className="side2 back">
    <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
</div>
}
export default Aeroplane