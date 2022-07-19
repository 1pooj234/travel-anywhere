import { useRef } from "react"
import "./AddPlaces.css"
const AddPlaces=(props)=>{
    const placeRef=useRef()
    const submitHandler=(e)=>{
        e.preventDefault()
        const place=placeRef.current.value
        props.onAdd({
            name:place,category:"active",id:Math.random(),thingsToDo:[]
        })
        placeRef.current.value=""
    }
    return <div className="form_place_box">
        <form onSubmit={submitHandler}>
        <div className="input_box1">
          <input type="text" placeholder="todo" ref={placeRef} />
          <div className="input_slidebar1"></div>
            <div></div>
            <button className="btn add_place_btn">Add</button>
          </div>
        </form>
    </div>
}

export default AddPlaces