import "./Menu.css"
const MenuBtn=(props)=>{
    return <div onClick={props.click} className="menu"> 
        <div className="line1"></div>
        <div className="line2"></div>
    </div>
}

export default MenuBtn;