import { useState } from "react";

function Todolist() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
        <hr />
        <ul>
          {toDos.length == 0 ? (
            <li>nothing</li>
          ) : (
            toDos.map((item, index) => <li key={index}>{item}</li>)
          )}
        </ul>
      </form>
    </div>
  );
}

export default Todolist;
