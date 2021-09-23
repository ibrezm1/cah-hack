import React, { useState } from "react";
import ReactDOM from "react-dom";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";

import { Line, Pie } from "react-chartjs-2";

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

  // adding for Charts
  const chartdata = {
    labels: [
      "01/01/2019",
      "02/01/2019",
      "03/01/2019",
      "04/01/2019",
      "05/01/2019",
      "06/01/2019",
      "07/01/2019"
    ],
    //backgroundColor: ['rgba(255,0,0,1)'],
    //lineTension: 1,
    datasets: [
      {
        label: "HSN",
        fill: false,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "CPX",
        fill: false,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 1,
        pointRadius: 2,
        data: [70, 32, 45, 65, 87, 92, 99]
      },
      {
        label: "Total",
        fill: false,
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 2,
        data: [135, 91, 125, 144, 143, 143, 139]
      }
    ]
  };

  var chartoptions = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10
      }
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false }
        }
      ]
    }
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgba(255,0,0, 1)", "#36A2EB", "#FFCE56"]
      }
    ]
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

      <div className="pc">
        <div className="w3-container w3-teal">
          <h1>My Page</h1>
        </div>

        <div className="chartpane">
          <Line data={chartdata} options={chartoptions} />
          <Pie data={pieData} options={chartoptions} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
