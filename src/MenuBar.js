import React from "react";
import "./App.css";

class MenuBar extends React.Component {
	 openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
   }
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
render(){

	 const mydiv = {
      position: "absolute",
      
      backgroundColor: "#000000",
      textAlign: "center",
      border: "1px solid #d3d3d3",
      width: "100%",
      height: "85px",
      color: "#ffffff"
    };

	return (
		<div id="main">
          <div id="mySidenav" className="sidenav">
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={this.closeNav.bind(this)}
            >
              &times;
            </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
          <div id="wallet" style={mydiv} className="wallet">
            <div
              id="walletheader"
              style={{
                top: "20px",
                textAlign: "center",
                width: "70px",
                position: "absolute"
              }}
              className="wallet"
            >
              <span
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={this.openNav.bind(this)}
              >
                &#9776;
              </span>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "100px",
                position: "absolute",
                marginLeft: "100px"
              }}
              className="wallet"
            >
              <p>Account</p>
              <p id="account">
                <b>1234567</b>
              </p>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "100px",
                position: "absolute",
                marginLeft: "200px"
              }}
              className="wallet"
            >
              <p>Balance</p>
              <p id="amount">
                <b>49,972.28</b>
              </p>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "100px",
                position: "absolute",
                marginLeft: "300px"
              }}
              className="wallet"
            >
              <p>Equity</p>
              <p id="equity">
                <b>49,972.28</b>
              </p>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "100px",
                position: "absolute",
                marginLeft: "400px"
              }}
              className="wallet"
            >
              <p>Day P/L</p>
              <p id="daypl">
                <b>00.0</b>
              </p>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "100px",
                position: "absolute",
                marginLeft: "500px"
              }}
              className="wallet"
            >
              <p>Gross P/L</p>
              <p id="grosspl">
                <b>00.0</b>
              </p>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "100px",
                position: "absolute",
                marginLeft: "600px"
              }}
              className="wallet"
            >
              <p>Used Margin</p>
              <p id="usedmargin">
                <b>00.0</b>
              </p>
            </div>
            <div
              id="walletheader"
              style={{
                textAlign: "center",
                width: "120px",
                position: "absolute",
                marginLeft: "700px"
              }}
              className="wallet"
            >
              <p>Usable Margin</p>
              <p id="usablemargin">
                <b>49,972.28</b>
              </p>
            </div>
          </div>
         </div>
		);
}
}
export default MenuBar;
