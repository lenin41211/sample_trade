let express = require('express');
let cors = require('cors');

const app = express();

var server = app.listen(process.env.PORT || 5000, listen);
var io = require('socket.io')(server);



app.use(function (request, response, next) {

  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Credentials', true);
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://' + host + ':' + port);
}

var symbols,values;

function callrand(){
	 
        if (Array.isArray(symbols)) {
            symbols.forEach(function(symbol) {

            	 var d1 = Math.floor(Math.random().toFixed(5)*100000) ;
      			 var d2 = Math.floor(Math.random().toFixed(5)*100000) ;
            	 values = {symbol : symbol , sell : d1, buy : d2, spread : '000000', change : '000000', high : '000000', low : '000000', rolls : '000000', rollb : '000000', divs : '000000', divb : '000000', pipcost : '000000', mmr : '000000', time : '000000' };
            	 console.log(values);
                io.to(symbol).emit('stack',values);
                console.log('data send to the room :' + values);

            });
        }
}

io.on('connection', function (socket) {

	console.log('User connected. Socket id %s', socket.id);
    
    socket.on('join', function (rooms) {
      	symbols = rooms;
        console.log('Socket %s subscribed to %s', socket.id, symbols);
      	
        if (Array.isArray(rooms)) {
            rooms.forEach(function(room) {
                socket.join(room);
            });
        } else {
            socket.join(rooms);
        }
    });

    //callrand();
     setInterval(function(){callrand()}, 500);


    socket.on('disconnect', function () {
        console.log('User disconnected - %s', socket.id);
    });
  }
);