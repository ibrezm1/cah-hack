import React, { useState } from "react";
import ReactDOM from "react-dom";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";

import "react-simple-tree-menu/dist/main.css";

import "./styles.css";
import "./w3.css";

const dataInArray = [
  {
    key: "mammal",
    label: "Mammal",
    url: "https://www.google.com/search?q=mammal",
    nodes: [
      {
        key: "canidae",
        label: "Canidae",
        url: "https://www.google.com/search?q=canidae",
        nodes: [
          {
            key: "dog",
            label: "Dog",
            url: "https://www.google.com/search?q=dog",
            nodes: []
          },
          {
            key: "fox",
            label: "Fox",
            url: "https://www.google.com/search?q=fox",
            nodes: []
          },
          {
            key: "wolf",
            label: "Wolf",
            url: "https://www.google.com/search?q=wolf",
            nodes: []
          }
        ]
      }
    ]
  },
  {
    key: "reptile",
    label: "Reptile",
    url: "https://www.google.com/search?q=reptile",
    nodes: [
      {
        key: "squamata",
        label: "Squamata",
        url: "https://www.google.com/search?q=squamata",
        nodes: [
          {
            key: "lizard",
            label: "Lizard",
            url: "https://www.google.com/search?q=lizard"
          },
          {
            key: "snake",
            label: "Snake",
            url: "https://www.google.com/search?q=snake"
          },
          {
            key: "gekko",
            label: "Gekko",
            url: "https://www.google.com/search?q=gekko"
          }
        ]
      }
    ]
  }
];

function App() {
  const [data, setData] = useState(dataInArray);
  const [openNodes, setOpenNodes] = useState(["mammal"]);
  const update = () => {
    setData((data) => [
      ...data,
      {
        key: "foo",
        label: "Foo",
        url: "https://www.google.com/search?q=foo",
        nodes: [
          {
            key: "bar",
            label: "Bar",
            url: "https://www.google.com/search?q=bar"
          }
        ]
      }
    ]);
    setOpenNodes(["mammal"]);
  };
  return (
    <div className="App">
      <div
        className="w3-sidebar w3-light-grey w3-bar-block"
        style={{ width: "25%" }}
      >
        <h4>Select the channed</h4>
        <button onClick={update}>update data</button>
        <TreeMenu
          data={data}
          resetOpenNodesOnDataUpdate
          initialOpenNodes={openNodes}
        >
          {({ items }) => (
            <ul className="tree-item-group">
              {items.map(({ key, onClickItem, ...props }) => (
                <ItemComponent key={key} {...props} />
              ))}
            </ul>
          )}
        </TreeMenu>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
