function draw(){
  var canvas = document.getElementById('canvas');

if(canvas.getContext){
var ctx = canvas.getContext('2d');
  
  //ctx.beginPath();
  ctx.fillStyle = 'red'; 
  ctx.fillRect(0,50,90,450);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('20',25,450);
  ctx.fillText('Apple',10,480);
  
  //ctx.beginPath();
  ctx.fillStyle = 'orange';
  ctx.fillRect(90,250,90,250);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('10',120,450);
  ctx.fillText('Orange',100,480);
  
  ctx.fillStyle = 'yellow';
  ctx.fillRect(180,100,90,400);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('15',210,450);
  ctx.fillText('Banana',190,480);
  
  ctx.fillStyle = 'green';
  ctx.fillRect(270,425,90,75);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('3',310,450);
  ctx.fillText('Kiwi',295,480);
  
  ctx.fillStyle = 'blue';
  ctx.fillRect(360,350,90,150);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('5',400,450);
  ctx.fillText('Blueberry',363,480);
  
  ctx.fillStyle = 'purple';
  ctx.fillRect(450,275,90,225);
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('8',490,450);
  ctx.fillText('Grapes',460,480);

    }
}