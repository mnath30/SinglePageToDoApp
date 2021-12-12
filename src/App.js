import "./styles.css";
import { useState } from "react";

export default function App() {
  const Header = () => {
    return <h1 className="heading">My To Do List</h1>;
  };

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
      <Header className="top" />
      <div className="main">
        <div className="input-div">
          <input
            className="input-box"
            type="text"
            value={inpvalue}
            placeholder="Enter Task..."
            onChange={display}
          />
          <button className="button" type="submit" onClick={addToList}>
            Add Task
          </button>
        </div>
        <div>
          {list.map((element) => {
            return (
              <div key={element.id} className="list-container">
                <li className="list-non-bullet">{element.task}</li>
                <button
                  className="button button-remove-style"
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
    </div>
  );
}
