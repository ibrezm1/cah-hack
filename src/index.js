import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TreeMenu, { ItemComponent } from "react-simple-tree-menu";
//import { Icon } from 'semantic-ui-react'
import { Line, Pie } from "react-chartjs-2";

//data
import { panaldata } from "./data/panaldata";

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

const dataInArray = [
  {
    key: "Mississauga",
    label: "Mississauga",
    url: "https://www.google.com/search?q=mammal",
    nodes: [
      {
        key: "Canada",
        label: "Canada",
        url: "https://www.google.com/search?q=canidae",
        nodes: [
          {
            key: "Route-4344",
            label: "Route-4344",
            url: "https://www.google.com/search?q=dog",
            nodes: [
              {
                key: "Duke University",
                label: "Duke University",
                url: "https://www.google.com/search?q=wolf",
                nodes: []
              }
            ]
          },

          {
            key: "Route-4347",
            label: "Route-4347",
            url: "https://www.google.com/search?q=wolf",
            nodes: []
          }
        ]
      },
      {
        key: "Dexcom",
        label: "Dexcom",
        url: "https://www.google.com/search?q=fox",
        nodes: [
          {
            key: "Route-5347",
            label: "Route-4347",
            url: "https://www.google.com/search?q=wolf",
            nodes: []
          }
        ]
      }
    ]
  },
  {
    key: "Ontario",
    label: "Ontario",
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

  // adding for Charts
  const rand = () => Math.round(Math.random() * 200 + 100);
  const genData = () => {
    // statements
    return {
      labels: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ],
      //backgroundColor: ['rgba(255,0,0,1)'],
      //lineTension: 1,
      datasets: [
        {
          label: "Predicted",
          fill: false,
          borderColor: "blue",
          borderWidth: 1,
          pointRadius: 2,
          data: [
            11,
            23,
            27,
            61,
            276,
            338,
            342,
            345,
            353,
            380,
            420,
            458,
            529,
            588,
            752,
            830,
            884,
            924,
            969,
            1013,
            1047,
            1064,
            1077,
            1087
          ]
        },
        {
          label: "Normal",
          fill: false,
          borderColor: "green",
          borderWidth: 1,
          pointRadius: 2,
          data: [
            10,
            29,
            31,
            0,
            211,
            312,
            315,
            317,
            323,
            338,
            365,
            407,
            446,
            493,
            545,
            646,
            727,
            777,
            810,
            841,
            875,
            886,
            895,
            904
          ]
        },
        {
          label: "Anomaly",
          fill: false,
          borderColor: "red",
          borderWidth: 2,
          pointRadius: 2,
          data: [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            626,
            705,
            740,
            772,
            832,
            893,
            929,
            951,
            957,
            967
          ]
        },
        {
          label: "Random",
          fill: false,
          borderColor: "pink",
          borderWidth: 1,
          pointRadius: 2,
          data: [rand(), rand(), rand(), rand(), rand(), rand()]
        }
      ]
    };
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

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgba(255,0,0, 1)", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  const [chartdata, setchartdata] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setchartdata(genData()), 5000);

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
