import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Chart from "./Chart";
import { getData } from "./utils";

import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then(data => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <div
            id="mydiv"
            className="graph"
            style={{
              position: "absolute",
              marginLeft: "870px",
              backgroundColor: "#ffffff",
              width: "1040px",
              zIndex : -1,
              height: "500px",
              border: "1px solid #000000",
              marginTop: "100px"
            }}
          >
            <div id="mydivheader">
              <b>
                <p style={{ textIndent: "2em" }}>Docker Layout</p>
              </b>
            </div>
            <TypeChooser>
              {type => <Chart type={type} data={this.state.data} />}
            </TypeChooser>
          </div>
     
    );
  }
}
export default ChartComponent;
