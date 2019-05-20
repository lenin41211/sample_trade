import React from 'react';
//import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import Draggable from 'react-draggable'; 

var socket;
var oldsell1=0,oldsell2=0,oldsell3=0,oldbuy1=0,oldbuy2=0,oldbuy3=0,td1,td2,td3,td4,td5,td6;
const style1 = {
  backgroundColor : '#0400ff',
  color : '#ffffff'
};
const style2 = {
  backgroundColor : '#ff001d',
  color : '#fffff'

};

class App extends React.Component {
  
  constructor(props) {
     
    super(props);
    this.state = {
      stacks :[],
      eur_usd : {symbol: 'EUR/USD', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' },
      xau_usd : {symbol: 'XAU/USD', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' },
      gbp_usd : {symbol: 'GBP/USD', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' },
      usd :   {symbol: 'USDDOLLAR', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' },
      ger30 :     {symbol: 'GER30', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' },
      eur_jpy : {symbol: 'EUR/JPY', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' },
      usd_jpy : {symbol: 'USD/JPY', sell : '', buy : '', spread : '', change : '', high : '', low : '', rolls : '', rollb : '', divs : '', divb : '', pipcost : '', mmr : '', time : '' }

    };
  }


 componentDidMount() {
  
    console.log('Component has mounted ') ;
    
    var that = this;
     var symbols = ['EUR/USD','XAU/USD','GBP/USD'];
    
     socket = io.connect('http://localhost:5000');

     socket.emit('join', symbols);

      socket.on('stack', function(datas) {
        console.log(datas);
     
       let stacks = that.state.stacks;
            that.state.stacks.push(datas);
            that.setState({
              stacks: stacks
              
            });

            if (datas.symbol === 'EUR/USD') {
              console.log(datas.sell+' '+oldsell1);
              if(datas.sell > oldsell1 ){
                td1 = style1;
                oldsell1 = datas.sell;
                
              }
              if( datas.buy > oldbuy1){
                
                td2 = style1;
                oldbuy1 = datas.buy;
              }
              
              if(datas.sell < oldsell1 ){
                td1 = style2;
                oldsell1 = datas.sell;
               
              }
              if(datas.buy < oldbuy1){
                td2 = style2;
                oldbuy1 = datas.buy;
              }
              that.setState({
                eur_usd : datas
              });
    

            }
            if (datas.symbol === 'XAU/USD') {
  
               if(datas.sell > oldsell2 ){
                td3 = style1;
                oldsell2 = datas.sell;
              }
              if( datas.buy > oldbuy2){
                
                td4 = style1;
                 oldbuy2 = datas.buy;
              }
              
              if(datas.sell < oldsell2 ){
                td3 = style2;
                oldsell2 = datas.sell;
              }
              if(datas.buy < oldbuy2){
                td4 = style2;
                 oldbuy2 = datas.buy;
              }
               that.setState({
                xau_usd : datas
              });

            }

            if (datas.symbol === 'GBP/USD') {
               if(datas.sell > oldsell3 ){
                td5 = style1;
                oldsell3 = datas.sell;
              }
              if( datas.buy > oldbuy3){
                
                td6 = style1;
                 oldbuy3 = datas.buy;
              }
              
              if(datas.sell < oldsell3 ){
                td5 = style2;
                oldsell3 = datas.sell;
              }
              if(datas.buy < oldbuy3 ){
                td6 = style2;
                 oldbuy3 = datas.buy;
              }
               that.setState({
                gbp_usd : datas
              });
            }


            
    }
  );

  }

  openPage() {
    console.log('leninkumar test');
  
}

  openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render(){



    const mydiv = {
      position: 'absolute',
      zIndex: '9px',
      backgroundColor: '#000000',
      textAlign: 'center',
      border: '1px solid #d3d3d3',
      width: '100%',
      height: '100px',
      color: '#ffffff'
    };



    return (

       <div style={{backgroundColor: '#f1f1f1',width :'100%',height : '1000px'}}>
        <div id="mySidenav" className="sidenav" >
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <div id="wallet" style={mydiv} className='wallet'>
          <div id="walletheader" style ={{top : '20px', textAlign: 'center',width: '70px',position: 'absolute'}} className='wallet'>
           <span style={{fontSize:'30px',cursor: 'pointer'}} onClick={this.openNav.bind(this)}>&#9776;</span> 
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '100px',position: 'absolute',marginLeft : '100px'}} className='wallet'>
          <p>Account</p>
          <p id='account'><b>1234567</b></p>
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '100px',position: 'absolute',marginLeft : '200px'}} className='wallet'>
          <p>Balance</p>
          <p id='amount'><b>49,972.28</b></p>
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '100px',position: 'absolute',marginLeft : '300px'}} className='wallet'>
          <p>Equity</p>
          <p id='equity'><b>49,972.28</b></p>
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '100px',position: 'absolute',marginLeft : '400px'}} className='wallet'>
          <p>Day P/L</p>
          <p id='daypl'><b>00.0</b></p>
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '100px',position: 'absolute',marginLeft : '500px'}} className='wallet'>
          <p>Gross P/L</p>
          <p id='grosspl'><b>00.0</b></p>
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '100px',position: 'absolute',marginLeft : '600px'}} className='wallet'>
          <p>Used Margin</p>
          <p id='usedmargin'><b>00.0</b></p>
          </div>
          <div id="walletheader" style ={{textAlign: 'center',width: '120px',position: 'absolute',marginLeft : '700px'}} className='wallet'>
          <p>Usable Margin</p>
          <p id='usablemargin'><b>49,972.28</b></p>
          </div>
           </div><br/><br/><br/><br/><br/><br/>
           <div id="mydiv" className = 'table' style ={{position: 'absolute',marginLeft :'20px',backgroundColor : '#ffffff',width : '850px', height : '500px',border :'1px solid #000000'}}>
           <div id="mydivheader" style ={{position: 'relative'}}><b><p style ={{textIndent: '2em'}}>Simple Dealing Rates</p></b> </div>
           <div className ='table' style={{ textAlign : 'center' ,backgroundColor : '#ffffff', width : '850px', height : '447px',overflow : 'scroll'}} >
            
            <table className="table-hover" style = {{borderCollabse : 'collabse',backgroundColor : '#ffffff'}}>
                <thead>
                    <tr>
                        <th style = {{ textAlign : 'center'}} >Symbol</th>
                        <th style = {{ textAlign : 'center'}} >Sell</th>
                        <th style = {{ textAlign : 'center'}} >Buy</th>
                        <th style = {{ textAlign : 'center'}} >Spread</th>
                        <th style = {{ textAlign : 'center'}} >Change</th>
                        <th style = {{ textAlign : 'center'}} >High</th>
                        <th style = {{ textAlign : 'center'}} >Low</th>
                        <th style = {{ textAlign : 'center'}} >RollS</th>
                        <th style = {{ textAlign : 'center'}} >RollB</th>
                        <th style = {{ textAlign : 'center'}} >DivS</th>
                        <th style = {{ textAlign : 'center'}} >DivB</th>
                        <th style = {{ textAlign : 'center'}} >Pip Cost</th>
                        <th style = {{ textAlign : 'center'}} >MMR</th>
                        <th style = {{ textAlign : 'center'}} >Time</th>
                       
                    </tr>
                </thead>
                
                <tbody>
                <tr>
                <td>{this.state.eur_usd.symbol}</td>
                <td id ='sell' style ={td1} >{this.state.eur_usd.sell}</td>
                <td id ='buy' style ={td2} >{this.state.eur_usd.buy}</td>
                <td>{this.state.eur_usd.spread}</td>
                <td>{this.state.eur_usd.change} <span aria-hidden="true"></span></td>
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
                <td id ='sell' style ={td3}>{this.state.xau_usd.sell}</td>
                <td id ='buy' style ={td4}>{this.state.xau_usd.buy}</td>
                <td>{this.state.xau_usd.spread}</td>
                <td>{this.state.xau_usd.change} <span aria-hidden="true"></span></td>
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
                <td id ='sell'style ={td5}>{this.state.gbp_usd.sell}</td>
                <td id ='buy' style ={td6}>{this.state.gbp_usd.buy}</td>
                <td>{this.state.gbp_usd.spread}</td>
                <td>{this.state.gbp_usd.change} <span aria-hidden="true"></span></td>
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
                <tr>
                <td>{this.state.usd.symbol}</td>
                <td>{this.state.usd.sell}</td>
                <td>{this.state.usd.buy}</td>
                <td>{this.state.usd.spread}</td>
                <td>{this.state.usd.change} <span aria-hidden="true"></span></td>
                <td>{this.state.usd.high}</td>
                <td>{this.state.usd.low}</td>
                <td>{this.state.usd.rolls}</td>
                <td>{this.state.usd.rollb}</td>
                <td>{this.state.usd.divs}</td>
                <td>{this.state.usd.divb}</td>
                <td>{this.state.usd.pipcost}</td>
                <td>{this.state.usd.mmr}</td>
                <td>{this.state.usd.time}</td>
                </tr>
                <tr>
                <td>{this.state.eur_jpy.symbol}</td>
                <td>{this.state.eur_jpy.sell}</td>
                <td>{this.state.eur_jpy.buy}</td>
                <td>{this.state.eur_jpy.spread}</td>
                <td>{this.state.eur_jpy.change} <span aria-hidden="true"></span></td>
                <td>{this.state.eur_jpy.high}</td>
                <td>{this.state.eur_jpy.low}</td>
                <td>{this.state.eur_jpy.rolls}</td>
                <td>{this.state.eur_jpy.rollb}</td>
                <td>{this.state.eur_jpy.divs}</td>
                <td>{this.state.eur_jpy.divb}</td>
                <td>{this.state.eur_jpy.pipcost}</td>
                <td>{this.state.eur_jpy.mmr}</td>
                <td>{this.state.eur_jpy.time}</td>
                </tr>
                <tr>
                <td>{this.state.usd_jpy.symbol}</td>
                <td>{this.state.usd_jpy.sell}</td>
                <td>{this.state.usd_jpy.buy}</td>
                <td>{this.state.usd_jpy.spread}</td>
                <td>{this.state.usd_jpy.change} <span aria-hidden="true"></span></td>
                <td>{this.state.usd_jpy.high}</td>
                <td>{this.state.usd_jpy.low}</td>
                <td>{this.state.usd_jpy.rolls}</td>
                <td>{this.state.usd_jpy.rollb}</td>
                <td>{this.state.usd_jpy.divs}</td>
                <td>{this.state.usd_jpy.divb}</td>
                <td>{this.state.usd_jpy.pipcost}</td>
                <td>{this.state.usd_jpy.mmr}</td>
                <td>{this.state.usd_jpy.time}</td>
                </tr>
                <tr>
                <td>{this.state.ger30.symbol}</td>
                <td>{this.state.ger30.sell}</td>
                <td>{this.state.ger30.buy}</td>
                <td>{this.state.ger30.spread}</td>
                <td>{this.state.ger30.change} <span aria-hidden="true"></span></td>
                <td>{this.state.ger30.high}</td>
                <td>{this.state.ger30.low}</td>
                <td>{this.state.ger30.rolls}</td>
                <td>{this.state.ger30.rollb}</td>
                <td>{this.state.ger30.divs}</td>
                <td>{this.state.ger30.divb}</td>
                <td>{this.state.ger30.pipcost}</td>
                <td>{this.state.ger30.mmr}</td>
                <td>{this.state.ger30.time}</td>
                </tr>
                </tbody>
            </table>
            </div>
          </div>


          <Draggable
          style = {{cursor : 'move'}}
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
          <div id="mydiv" className = 'graph' style ={{position: 'absolute',zIndex : 1,marginLeft :'880px',backgroundColor : '#ffffff',width : '1000px', height : '500px',border :'1px solid #000000'}}>
           <div id="mydivheader"><b><p style ={{textIndent: '2em'}}>Docker Layout</p></b></div>
             Graph Will Appear Here
           </div>
           </Draggable>




           <div id="mydiv" className = 'trans' style ={{left : '20px',position: 'absolute',zIndex : 1,marginTop :'510px',backgroundColor : '#ffffff',width : '1860px', height : '300px',border :'1px solid #000000',overflow : 'scroll'}}>
              <button className="tablink" onClick={this.openPage.bind(this)} >Accounts</button>
              <button className="tablink" onClick={this.openPage.bind(this)} id="defaultOpen">Orders</button>
              <button className="tablink" onClick={this.openPage.bind(this)}>Open Positions</button>
              <button className="tablink" onClick={this.openPage.bind(this)}>Closed Positions</button>
              <button className="tablink" onClick={this.openPage.bind(this)}>Summary (0.00)</button>
              <button className="tablink" onClick={this.openPage.bind(this)}>Messages</button>

              <div id="Home" className="tabcontent">
                <h3>Home</h3>
                <p>Home is where the heart is..</p>
              </div>

              <div id="News" className="tabcontent">
                <h3>News</h3>
                <p>Some news this fine day!</p> 
              </div>

              <div id="Contact" className="tabcontent">
                <h3>Contact</h3>
                <p>Get in touch, or swing by for a cup of coffee.</p>
              </div>

              <div id="About" className="tabcontent">
                <h3>About</h3>
                <p>Who we are and what we do.</p>
              </div>
           </div>
          </div>

        
      );
  }

}

export default App;

