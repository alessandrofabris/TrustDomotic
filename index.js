const readline = require('readline');
var serialport = require('serialport');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.on('line', (line) => {
          console.log('Received: ${line'});
});

var portName = "/dev/ttyUSB1";

var myPort = new serialport(portName, 9600);

myPort.on('data', function(data){
  console.log(data.toString());
myPort.write('a');
});
