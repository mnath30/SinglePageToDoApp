import "./styles.css";
import { useState } from "react";

export default function App() {
  var item;
  var [list, setList] = useState([]);
  const display = (e) => {
    item = e.target.value;
  };
  const addToList = () => {
    var newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <div className="App">
      <input
        type="text"
        className="input1"
        placeholder="Enter Task"
        onChange={display}
      />
      <button type="submit" onClick={addToList}>
        Add Task
      </button>
      <div>
        {list.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </div>
    </div>
  );
}
