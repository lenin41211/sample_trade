import React from "react";
//import logo from './logo.svg';
import "./App.css";
import ChartComponent from "./ChartComponent";
import SimpleDealingRates from "./SimpleDealingRates";
import MenuBar from "./MenuBar";
import AccountOrderDetails from "./AccountOrderDetails";



class App extends React.Component {
   

  

  

 
  render() {
   

    return (
      <div style={{ backgroundColor: "", width: "100%", height: "100%" }}>
           <MenuBar />
         
          <SimpleDealingRates />

          <ChartComponent />

          <AccountOrderDetails />

         
        </div>
     
    );
  }
}

export default App;
