import React from "react";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const [newElement, setNewElement] = useState("");
  const [elements, setElements] = useState([]);

  const [searchElement, setSearchElement] = useState("");

  const addElement = (event) => {
    if (event.key === "Enter") {
      const element = {
        value: newElement,
      };
      setElements((oldList) => [...oldList, element]);
      setNewElement("");
    }
  };

  return (
    <div className="wrap">
      <div className="milieu">
        <div className="barre">
          <input
            type="text"
            onChange={(event) => setNewElement(event.target.value)}
            value={newElement}
            onKeyPress={addElement}
            placeholder="Add an element"
          />

          <input
            type="text"
            onChange={(event) => setSearchElement(event.target.value)}
            placeholder="Search an element"
          />
        </div>

        <div className="result">
          {elements
            .filter((element) => {
              if (
                element.value
                  .toLowerCase()
                  .includes(searchElement.toLowerCase())
              ) {
                return element;
              }
            })
            .map((element) => {
              return <p>{element.value}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
