// flipY moves the origin and flips the Y axis, so the coordinate system
// is more familiar, with the origin (0,0) in the lower left corner

function flipY(ctx) {
    var canvas = ctx.canvas;
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    ctx.translate(0,h);
    ctx.scale(1,-1);
}   

function drawFilledCircle(ctx,centerx,centery,radius) {
    /* draws a filled circle at the given location, with
       the given radius */
    ctx.beginPath();
    ctx.arc(centerx,centery,radius,0,2*Math.PI);
    ctx.fill();
}

function drawTree1(ctx,height,width,radius) {
    /* Draws a tree with the lower left corner at the origin.
       The trunk has the given height and width, and the leaves
       have the given radius */

    // trunk is a brown rectangle
    ctx.fillStyle = "brown";
    ctx.fillRect(0,0,width,height);
    // leaves are a green circle
    ctx.fillStyle = "green";
    var cx = width/2;
    var cy = height+radius;
    drawFilledCircle(ctx,cx,cy,radius);
}

function drawTreeAt(ctx,x,y,height,width,radius) {
    /* Draws a tree at the (x,y) location. Other args
       passed on to drawTree1 */
    ctx.save();
    ctx.translate(x,y);
    drawTree1(ctx,height,width,radius);
    ctx.restore();
}

function redrawCanvas1() {
    var ctx = document.getElementById('canvas1').getContext('2d');
    // flip the coordinate frame
    ctx.save();
    flipY(ctx);

    // Draw background
    ctx.fillStyle = "#1DC4CD";
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

    // Draw ground
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,ctx.canvas.clientWidth, ctx.canvas.clientHeight/2);
    
    // drawTreeAt(ctx,x,y,height,width.radius);
    drawTreeAt(ctx,200,50,90,20,30);
    ctx.restore();
}


function drawHouse(ctx,width,height,dx,dy) {
    var ridgex = width/2;
    var ridgey = height+width/2;
    // create the front part
    ctx.beginPath();
    ctx.lineTo(width,0);
    ctx.lineTo(width,height);
    ctx.lineTo(ridgex,ridgey);
    ctx.lineTo(0,height);
    ctx.lineTo(0,0);
    // create the back part
    ctx.lineTo(width,0);
    ctx.lineTo(width+dx,dy);
    ctx.lineTo(width+dx,height+dy);
    ctx.lineTo(ridgex+dx,ridgey+dy);
    ctx.lineTo(ridgex,ridgey);
    // house color
    ctx.fillStyle = "yellow";
    ctx.fillRect(0,0,width,height);
    // draw the window
    ctx.fillStyle = "blue";
    ctx.fillRect(5,25,10,10);
    ctx.fillRect(24,25,10,10);
    //draw door
    ctx.fillStyle = "brown";
    ctx.fillRect(14,0,10,15);
    // draw the lines
    ctx.stroke();
}

function drawHouseAt(ctx,x,y,width,height,dx,dy) {
    ctx.save();
    ctx.translate(x,y);
    drawHouse(ctx,width,height,dx,dy);
    ctx.restore();
}

function redrawCanvas2() {
    var ctx = document.getElementById('canvas2').getContext('2d');
    // flip the coordinate frame
    ctx.save();
    flipY(ctx);

    // Draw background
    ctx.fillStyle = "#1DC4CD";
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    
    // Draw ground
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,ctx.canvas.clientWidth, ctx.canvas.clientHeight/2);

    // drawHouseAt(ctx,x,y,width,height,dx,dy)
    drawHouseAt(ctx,200,50,40,50,20,7);
    ctx.restore();
}


function redrawCanvas3() {
    var ctx = document.getElementById('canvas3').getContext('2d');
    // flip the coordinate frame
    ctx.save();
    flipY(ctx);

    // Draw background
    ctx.fillStyle = "#1DC4CD";
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

    // Draw ground
    ctx.fillStyle = "gray";
    ctx.fillRect(0,0,ctx.canvas.clientWidth, ctx.canvas.clientHeight/2);
    
    // draw trees
    function tree(x,y) { drawTreeAt(ctx,x,y,90,20,30); }
    
    tree(80,45);
    

    // draw houses
    function house(x,y) { drawHouseAt(ctx,x,y,40,50,20,7); }

    house(200,50);
    ctx.restore();
}