import React from "react";
import "./App.css";
import io from "socket.io-client";

var socket;
var oldsell1 = 0,
  oldsell2 = 0,
  oldsell3 = 0,
  oldbuy1 = 0,
  oldbuy2 = 0,
  oldbuy3 = 0,
  td1,
  td2,
  td3,
  td4,
  td5,
  td6;
const style1 = {
  borderRadius: "30px",
  backgroundColor: "#0400ff",
  color: "#ffffff"
};
const style2 = {
  borderRadius: "30px",
  backgroundColor: "#ff001d",
  color: "#fffff"
};


class SimpleDealingRates extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      stacks: [],
      eur_usd: {
        symbol: "EUR/USD",
        sell: "",
        buy: "",
        spread: "",
        change: "",
        high: "",
        low: "",
        rolls: "",
        rollb: "",
        divs: "",
        divb: "",
        pipcost: "",
        mmr: "",
        time: ""
      },

      xau_usd: {
        symbol: "XAU/USD",
        sell: "",
        buy: "",
        spread: "",
        change: "",
        high: "",
        low: "",
        rolls: "",
        rollb: "",
        divs: "",
        divb: "",
        pipcost: "",
        mmr: "",
        time: ""
      },

      gbp_usd: {
        symbol: "GBP/USD",
        sell: "",
        buy: "",
        spread: "",
        change: "",
        high: "",
        low: "",
        rolls: "",
        rollb: "",
        divs: "",
        divb: "",
        pipcost: "",
        mmr: "",
        time: ""
      }

    };
  }

  componentDidMount() {
    console.log("Component has mounted ");

    var that = this;
    var symbols = ["EUR/USD", "XAU/USD", "GBP/USD"];

    socket = io.connect("http://192.168.1.101:5000");

    socket.emit("join", symbols);

    socket.on("stack", function(datas) {
      console.log(datas);

      let stacks = that.state.stacks;
      that.state.stacks.push(datas);
      that.setState({
        stacks: stacks
      });

      if (datas.symbol === "EUR/USD") {
        console.log(datas.sell + " " + oldsell1);
        if (datas.sell > oldsell1) {
          td1 = style1;
          oldsell1 = datas.sell;
        }
        if (datas.buy > oldbuy1) {
          td2 = style1;
          oldbuy1 = datas.buy;
        }

        if (datas.sell < oldsell1) {
          td1 = style2;
          oldsell1 = datas.sell;
        }
        if (datas.buy < oldbuy1) {
          td2 = style2;
          oldbuy1 = datas.buy;
        }
        that.setState({
          eur_usd: datas
        });
      }
      if (datas.symbol === "XAU/USD") {
        if (datas.sell > oldsell2) {
          td3 = style1;
          oldsell2 = datas.sell;
        }
        if (datas.buy > oldbuy2) {
          td4 = style1;
          oldbuy2 = datas.buy;
        }

        if (datas.sell < oldsell2) {
          td3 = style2;
          oldsell2 = datas.sell;
        }
        if (datas.buy < oldbuy2) {
          td4 = style2;
          oldbuy2 = datas.buy;
        }
        that.setState({
          xau_usd: datas
        });
      }

      if (datas.symbol === "GBP/USD") {
        if (datas.sell > oldsell3) {
          td5 = style1;
          oldsell3 = datas.sell;
        }
        if (datas.buy > oldbuy3) {
          td6 = style1;
          oldbuy3 = datas.buy;
        }

        if (datas.sell < oldsell3) {
          td5 = style2;
          oldsell3 = datas.sell;
        }
        if (datas.buy < oldbuy3) {
          td6 = style2;
          oldbuy3 = datas.buy;
        }
        that.setState({
          gbp_usd: datas
        });
      }
    });
  }

 closeNavSize() {
    document.getElementById("table").style.width = "850px";
    document.getElementById("table").style.height = "450px";
  }


   render() {
   

    return (

    	<div
            id="mydiv"
            className="table"
            style={{
              zIndex : 1,
              position: "absolute",
              marginLeft: "10px",
              backgroundColor: "#ffffff",
              border: "1px solid #000000",
              marginTop: "100px"
            }}
          >
            <div id="mydivheader" style={{ position: "absolute" }}>
              <b>
                <p style={{ textIndent: "2em" }}>
                  <div
                    style={{
                      position: "absolute",
                      marginLeft: "-30px",
                      marginTop: "-20px"
                    }}
                  >
                    {" "}
                    <a
                      href="javascript:void(0)"
                      className="closebtn"
                      onClick={this.closeNavSize.bind(this)}
                    >
                      &times;
                    </a>
                  </div>
                  Simple Dealing Rates
                </p>
              </b>
            </div>
            <div
              id="table"
              className="table"
              style={{
                marginTop: "50px",
                resize: "both",
                textAlign: "center",
                backgroundColor: "#ffffff",
                width: "850px",
                height: "450px",
                overflow: "auto"
               
              }}
            >
              <table
                className="table-hover"
                style={{
                  borderCollabse: "collabse",
                  backgroundColor: "#ffffff"
                }}
              >
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Symbol</th>
                    <th style={{ textAlign: "center" }}>Sell</th>
                    <th style={{ textAlign: "center" }}>Buy</th>
                    <th style={{ textAlign: "center" }}>Spread</th>
                    <th style={{ textAlign: "center" }}>Change</th>
                    <th style={{ textAlign: "center" }}>High</th>
                    <th style={{ textAlign: "center" }}>Low</th>
                    <th style={{ textAlign: "center" }}>RollS</th>
                    <th style={{ textAlign: "center" }}>RollB</th>
                    <th style={{ textAlign: "center" }}>DivS</th>
                    <th style={{ textAlign: "center" }}>DivB</th>
                    <th style={{ textAlign: "center" }}>Pip Cost</th>
                    <th style={{ textAlign: "center" }}>MMR</th>
                    <th style={{ textAlign: "center" }}>Time</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{this.state.eur_usd.symbol}</td>
                    <td id="sell" style={td1}>
                      {this.state.eur_usd.sell}
                    </td>
                    <td id="buy" style={td2}>
                      {this.state.eur_usd.buy}
                    </td>
                    <td>{this.state.eur_usd.spread}</td>
                    <td>
                      {this.state.eur_usd.change} <span aria-hidden="true" />
                    </td>
                    <td>{this.state.eur_usd.high}</td>
                    <td>{this.state.eur_usd.low}</td>
                    <td>{this.state.eur_usd.rolls}</td>
                    <td>{this.state.eur_usd.rollb}</td>
                    <td>{this.state.eur_usd.divs}</td>
                    <td>{this.state.eur_usd.divb}</td>
                    <td>{this.state.eur_usd.pipcost}</td>
                    <td>{this.state.eur_usd.mmr}</td>
                    <td>{this.state.eur_usd.time}</td>
                  </tr>
                  <tr>
                    <td>{this.state.xau_usd.symbol}</td>
                    <td id="sell" style={td3}>
                      {this.state.xau_usd.sell}
                    </td>
                    <td id="buy" style={td4}>
                      {this.state.xau_usd.buy}
                    </td>
                    <td>{this.state.xau_usd.spread}</td>
                    <td>
                      {this.state.xau_usd.change} <span aria-hidden="true" />
                    </td>
                    <td>{this.state.xau_usd.high}</td>
                    <td>{this.state.xau_usd.low}</td>
                    <td>{this.state.xau_usd.rolls}</td>
                    <td>{this.state.xau_usd.rollb}</td>
                    <td>{this.state.xau_usd.divs}</td>
                    <td>{this.state.xau_usd.divb}</td>
                    <td>{this.state.xau_usd.pipcost}</td>
                    <td>{this.state.xau_usd.mmr}</td>
                    <td>{this.state.xau_usd.time}</td>
                  </tr>
                  <tr>
                    <td>{this.state.gbp_usd.symbol}</td>
                    <td id="sell" style={td5}>
                      {this.state.gbp_usd.sell}
                    </td>
                    <td id="buy" style={td6}>
                      {this.state.gbp_usd.buy}
                    </td>
                    <td>{this.state.gbp_usd.spread}</td>
                    <td>
                      {this.state.gbp_usd.change} <span aria-hidden="true" />
                    </td>
                    <td>{this.state.gbp_usd.high}</td>
                    <td>{this.state.gbp_usd.low}</td>
                    <td>{this.state.gbp_usd.rolls}</td>
                    <td>{this.state.gbp_usd.rollb}</td>
                    <td>{this.state.gbp_usd.divs}</td>
                    <td>{this.state.gbp_usd.divb}</td>
                    <td>{this.state.gbp_usd.pipcost}</td>
                    <td>{this.state.gbp_usd.mmr}</td>
                    <td>{this.state.gbp_usd.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


    	);
    }

}

export default SimpleDealingRates;
