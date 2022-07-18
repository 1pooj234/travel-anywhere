import { useState } from "react";
import "./Places.css";
const AddPlaces = () => {
  const tasks = [
    { cat: "com", name: "Play", id: "t1" },
    { cat: "com", name: "slay", id: "t2" },
    { cat: "act", name: "Cook", id: "t3" },
    { cat: "act", name: "Look", id: "t4" }
  ];
  const arr = ["Cook", "slay", "look", "Play"];
  // const [cl1, setcl1] = useState("drag");
  // const [cl2, setcl2] = useState("drag");
  const [selectedEl, setSelectedEl] = useState(null);
  const [yval, setYval] = useState(null);
  let tasksObj = {
    com: [],
    act: []
  };
  tasks.forEach((task) => {
    if (task.cat === "com") {
      tasksObj.com.push(task);
    } else {
      tasksObj.act.push(task);
    }
  });

  const onDs1 = (e) => {
    const drags = document.querySelectorAll("drag");

    drags.forEach((drag) => {
      if (arr.includes(e.target.id)) {
        drag.className = "drag dragging";
      }
    });
    setSelectedEl(e.target);
  };
  const onDe1 = (e) => {
    const drags = document.querySelectorAll("drag");

    drags.forEach((drag) => {
      if (arr.includes(e.target.id)) {
        drag.className = "drag";
      }
    });
    console.log(drags);
    // const newClass = e.target.className.replace("drag dragging", "drag");
    // console.log(newClass);
    // setcl1(newClass);
    // e.target.className = newClass;
    // setSelectedEl(e.target);
  };
  // const onDs2 = (e) => {
  //   const newClass = e.target.className.replace("drag", "drag dragging");
  //   setcl2(newClass);
  //   e.target.className = newClass;
  //   setSelectedEl(e.target);
  // };
  // const onDe2 = (e) => {
  //   const newClass = e.target.className.replace("drag dragging", "drag");
  //   setcl2(newClass);
  //   e.target.className = newClass;
  //   setSelectedEl(e.target);
  // };

  const insertEl = (container, y) => {
    const eles = [...container.querySelectorAll(".drag:not(.dragging)")];

    return eles.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && closest.offset < offset) {
          return { element: child, offset };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  const onDo1 = (e) => {
    setYval(e.clientY);
    const container1 = [document.querySelector(`.act`)];
    const container2 = [document.querySelector(`.com`)];
    if (e.target.className === "act") {
      container1.forEach((container) => {
        const adjEl = insertEl(container, yval);
        if (selectedEl) {
          if (adjEl === null) {
            container.appendChild(selectedEl);
          } else {
            container.insertBefore(selectedEl, adjEl);
          }
        }
      });
    } else if (e.target.className === "com") {
      container2.forEach((container) => {
        const adjEl = insertEl(container, yval);
        if (selectedEl) {
          if (adjEl === null) {
            container.appendChild(selectedEl);
          } else {
            container.insertBefore(selectedEl, adjEl);
          }
        }
      });
    } else {
      return null;
    }
  };

  const cont1 = tasksObj.act.map((t) => (
    <div
      onDragStart={onDs1}
      onDragEnd={onDe1}
      style={{
        background: "yellow",
        marginBottom: "10px"
      }}
      id={t.name}
      className="drag"
      draggable
      key={t.id}
    >
      {t.name}
    </div>
  ));
  const cont2 = tasksObj.com.map((t) => (
    <div
      onDragStart={onDs1}
      onDragEnd={onDe1}
      style={{
        background: "yellow",
        marginBottom: "10px"
      }}
      draggable
      id={t.name}
      className="drag"
      key={t.id}
    >
      {t.name}
    </div>
  ));
  return (
    <div>
      <div
        onDragOver={(e) => onDo1(e)}
        style={{
          background: "green",
          marginBottom: "20px",
          padding: "20px",
          height: "50px"
        }}
        className="act"
      >
        {cont1}
      </div>
      <div
        onDragOver={(e) => onDo1(e)}
        style={{
          background: "red",
          marginBottom: "20px",
          padding: "20px",
          height: "50px"
        }}
        className="com"
      >
        {cont2}
      </div>
    </div>
  );
};
export default AddPlaces;
