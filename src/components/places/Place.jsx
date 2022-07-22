import "./Place.css";
import ThingsToDo from "./ThingsToDo.jsx";
const Place = (props) => {
  const { name, thingsToDo,id, onStart, onEnd,isdisabled } = props;

  return (
    <div draggable  id={id}  onDragStart={onStart} onDragEnd={onEnd} className="drag">
      <div className="place_name">
        <h3>{name}</h3>
      </div>
      <ThingsToDo isdisabled={isdisabled} tdArr={thingsToDo} />
    </div>
  );
};

export default Place;
