import { useEffect, useState } from "react"
import MenuBtn from "../menuButton/Menu"
import "./Navigation.css"
import { NavLink } from "react-router-dom"
const NavBar=(props)=>{

    const [show,setShow]=useState(false)
    const [xVal,setPageX]=useState(0)
    const [yVal,setPageY]=useState(0)
    const getXandYvals=(e)=>{
        setPageX(e.pageX)
        setPageY(e.pageY)
    }
    useEffect(()=>{
        window.addEventListener("mousemove",getXandYvals)
        return ()=>{
            window.removeEventListener("mousemove",getXandYvals)
        }
    },[])
    const openLinks=()=>{
        setShow(prev=>!prev)
    }
    let classLinks="mobile_links"
    if(show){
        classLinks="mobile_links slide"
    }

    const closeLinks=()=>{
        setShow(false)
    }
    return <section className="web_page">
        <div style={{
            transform:`translate(${xVal}px,${yVal}px)`
        }}
        className="cursor">     
        </div>
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img className="logo__img"/>
                </div>
            <div className="links">
                <ul>
                    <li><a className="link" href="/home">Home</a></li>
                    <li><a className="link" href="/home">About</a>
                        <ul>
                            <li><a className="link" href="/home">Products</a></li>
                            <li><a className="link" href="/home">Pricing</a></li>
                        </ul>
                    </li>
                    <li><a className="link" href="/home">Contact</a></li>
                </ul> 
            </div>

            <MenuBtn click={openLinks} className="menu-button">click</MenuBtn>
       
            <div className={classLinks}>
                <ul>
                    <li><a onClick={closeLinks} className="link" href="#">Home</a></li>
                    <li><a className="link" href="#">About</a>
                        <ul>
                            <li><a onClick={closeLinks} className="link" href="#">Products</a></li>
                            <li><a onClick={closeLinks} className="link" href="#">Pricing</a></li>
                        </ul>
                    </li>
                    <li><a onClick={closeLinks} className="link" href="#">Contact</a></li>
                </ul> 
            </div>
            </div>
        </nav>
        <main>{props.children}</main>
    </section> 
}

export default NavBar