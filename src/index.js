import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
//import { Icon } from 'semantic-ui-react'
import { Line, Pie } from "react-chartjs-2";

//data
import { dataInArray1 } from "./data/panaldata";
import { genData } from "./data/chartdata";

import "react-simple-tree-menu/dist/main.css";

import "./styles.css";
import "./w3.css";

// https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_sidebar
// https://codesandbox.io/s/react-chart-js-forked-c21ye?file=/src/index.js:1466-1565
// https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Dynamic.js

//set up express
//https://codesandbox.io/s/6u6po?file=/routes/users.js

//const styleLink = document.createElement("link");
//styleLink.rel = "stylesheet";
//styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
//document.head.appendChild(styleLink);

function App() {
  const [data, setData] = useState(dataInArray1);
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);
  const [curnode, setcurnode] = useState("Mississauga");
  const [openNodes, setOpenNodes] = useState(["Mississauga"]);
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
    setOpenNodes(["Mississauga"]);
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
          ticks: { display: true }
        }
      ]
    }
  };

  const [chartdata, setchartdata] = useState(genData(curnode));

  useEffect(() => {
    const interval = setInterval(() => setchartdata(genData(curnode)), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div
        className="w3-sidebar w3-light-grey w3-bar-block"
        style={{ width: "20%" }}
      >
        <h4>Select the channed</h4>
        <button onClick={update}>update data</button>
        <TreeMenu
          data={data}
          resetOpenNodesOnDataUpdate
          initialOpenNodes={openNodes}
          onClickItem={({ key, url, label, ...props }) => {
            console.log(key); // user defined prop
            setcurnode(key);
          }}
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
          <h1>CardinalHealth - Spotify</h1>
          <div className="t">
            <h5>Scrutinize the flow for {curnode}</h5>
          </div>
          <div className="ticker">
            <h5>{dt}</h5>
          </div>
        </div>

        <div className="chartpane">
          <Line data={chartdata} options={chartoptions} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
