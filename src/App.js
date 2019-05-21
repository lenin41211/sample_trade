import React from 'react';
//import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import Draggable from 'react-draggable'; 

var socket;
var oldsell1=0,oldsell2=0,oldsell3=0,oldbuy1=0,oldbuy2=0,oldbuy3=0,td1,td2,td3,td4,td5,td6;
const style1 = {
  borderRadius: '30px',
  backgroundColor : '#0400ff',
  color : '#ffffff'
};
const style2 = {
  borderRadius: '30px',
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

  openPage(e) {
    var i;
    var idx = e.target.id+'div';
    //console.log(e.target.id);
   var tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  var tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].style.backgroundColor = "black";
    tablinks[i].style.color = "white";


  }
   document.getElementById(e.target.id).style.backgroundColor = "white";
   document.getElementById(e.target.id).style.color = "black";
   document.getElementById(idx).style.display = "block";
  //elmnt.style.backgroundColor = color;
}

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }

   closeNavSize() {
     document.getElementById("table").style.width = "850px";
     document.getElementById("table").style.height = "450px";
    
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  render(){



    const mydiv = {
      position: 'absolute',
      zIndex: '9px',
      backgroundColor: '#000000',
      textAlign: 'center',
      border: '1px solid #d3d3d3',
      width: '100%',
      height: '85px',
      color: '#ffffff'
    };



    return (

       <div style={{backgroundColor: '',width :'100%',height : '100%'}} >
       <div id ="main">
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
           <div id="mydiv" className = 'table' style ={{position: 'absolute',marginLeft :'20px',backgroundColor : '#ffffff', border :'1px solid #000000',marginTop :'-20px'}}>
           <div id="mydivheader" style ={{position: 'absolute'}}><b><p style ={{textIndent: '2em'}}><div style ={{position  : 'absolute',marginLeft : '-30px',marginTop : '-20px'}}> <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavSize.bind(this)}>&times;</a></div>Simple Dealing Rates</p></b></div>
           <div id  ="table" className ='table' style={{marginTop : '50px',resize:'both', textAlign : 'center' ,backgroundColor : '#ffffff', width : '850px', height : '450px',overflow : 'auto',zIndex : 9}} >
            
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


         
          <div id="mydiv" className = 'graph' style ={{position: 'absolute',marginLeft :'880px',backgroundColor : '#ffffff',width : '1000px',zIndex:-1, height : '500px',border :'1px solid #000000',marginTop :'-20px'}}>
           <div id="mydivheader" ><b><p style ={{textIndent: '2em'}}>Docker Layout</p></b></div>
             Graph Will Appear Here
           </div>
          




           <div id="mydiv" className = 'trans' style ={{left : '20px',position: 'absolute',zIndex : -1,marginTop :'490px',backgroundColor : '#fff',width : '1860px', height : '320px',border :'1px solid #000000',overflow : 'auto'}}>
              <button className="tablink" onClick={this.openPage.bind(this)} id='accounts'style = {{}}>Accounts</button>
              <button className="tablink" onClick={this.openPage.bind(this)} id="orders">Orders</button>
              <button className="tablink" onClick={this.openPage.bind(this)} id="op_pos">Open Positions</button>
              <button className="tablink" onClick={this.openPage.bind(this)} id="close_pos">Closed Positions</button>
              <button className="tablink" onClick={this.openPage.bind(this)} id="summary">Summary (0.00)</button>
              <button className="tablink" onClick={this.openPage.bind(this)} id="msg">Messages</button>
             
              <div id="accountsdiv" className="tabcontent" >
                <table className="table-hover" style = {{backgroundColor : '#ffffff',width :'60%'}}>
                <thead>
                    <tr >
                        <td style = {{ textAlign : 'center',width :'150px'}} >Accounts</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Balance</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Equity</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Day P/L</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Used Mr</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Usable Mr</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Gross P/L</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Margin Call</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Type</td>
                        <td style = {{ textAlign : 'center',width :'550px'}} ></td>
                       
                    </tr>
                </thead>
                </table>
               
              </div>

              <div id="ordersdiv" className="tabcontent">
               <table className="table-hover" style = {{borderCollapse: 'collapse',backgroundColor : '#ffffff',width :'70%'}}>
                <thead>
                    <tr >
                        <td style = {{ textAlign : 'center',width :'150px'}} >Order ID</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Account</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Type</td>
                        <td style = {{ textAlign : 'center',width :'100x'}} >Status</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Symbol</td>
                        <td style = {{ textAlign : 'center',width :'150px'}} >Amount(K)</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Sell</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Buy</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Range</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Stop</td>
                        <td style = {{ textAlign : 'center',width :'100px'}} >Limit</td>
                        <td style = {{ textAlign : 'center',width :'550px'}} ></td>                       
                    </tr>
                </thead>
                </table>
               
              </div>

              <div id="op_posdiv" className="tabcontent">
                
              </div>

              <div id="close_posdiv" className="tabcontent">
                
              </div>
              <div id="summarydiv" className="tabcontent">
                
              </div>
              <div id="msgdiv" className="tabcontent">
                
              </div>
           </div>
           </div>
      </div>

        
      );
  }

}

export default App;

