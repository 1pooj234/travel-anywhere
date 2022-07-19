import { useRef, useState } from "react";
import "./ThingsToDo.css";
const ThingsToDo = (props) => {
  const [todos, setTodos] = useState(props.tdArr);
  const nameRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    setTodos((prev) => [...prev, { name, id: Math.random() }]);
    nameRef.current.value = "";
  };
  const deleteTodos = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="toDos_section">
      <form className="form_box" onSubmit={submitHandler}>
        <div className="input_box">
          <input type="text" placeholder="todo" ref={nameRef} />
          <div className="input_slidebar"></div>
        </div>
        <button className="submit_btn">Add</button>
      </form>
      <b className="text">{todos.length === 0 ? "Add Todos" : "Veiw Todos"}</b>
      <div className="list_box">
        <ol>
          {todos.map((todo) => (
            <li className="todo" key={todo.id}>
              <p>{todo.name}</p>
              <button
                className="deleteTodo_btn"
                onClick={deleteTodos.bind(null, todo.id)}
              >
                x
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ThingsToDo;
