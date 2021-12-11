import "./styles.css";
import { useState } from "react";

export default function App() {
  var item;
  var updatedList = [];
  var [list, setList] = useState([]);
  var [inpvalue, setInpvalue] = useState(" ");
  const display = (e) => {
    item = e.currentTarget.value;
    setInpvalue(item);
  };
  const addToList = () => {
    var newList = [...list];
    var newitem = {
      id: list.length + inpvalue,
      task: inpvalue
    };
    newList.push(newitem);
    setList(newList);
    setInpvalue("");
  };

  const remove = (key) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== key) {
        updatedList.push(list[i]);
      }
    }
    setList(updatedList);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inpvalue}
        className="input1"
        placeholder="Enter Task"
        onChange={display}
      />
      <button type="submit" onClick={addToList}>
        Add Task
      </button>
      <div>
        {list.map((element) => {
          return (
            <div key={element.id}>
              <li>{element.task}</li>
              <button
                type="button"
                onClick={() => {
                  remove(element.id);
                }}
              >
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
