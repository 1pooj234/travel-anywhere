import "./Place.css";
import ThingsToDo from "./ThingsToDo.jsx";
const Place = (props) => {
  const { name, thingsToDo,id, onStart, onEnd } = props;
  return (
    <div draggable  id={id}  onDragStart={onStart} onDragEnd={onEnd} className="drag">
      <div className="place_name">
        <h3>{name}</h3>
      </div>
      <ThingsToDo tdArr={thingsToDo} />
    </div>
  );
};

export default Place;
