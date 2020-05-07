var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var color = '';
var marker = document.getElementById('marker');
ctx.lineWidth = '';

ctx.lineCap = 'round';

document.getElementById('size').onchange = function() {
    ctx.lineWidth = this.value;
    marker.style.width = marker.style.height = ctx.lineWidth + 'px';
    
}

document.getElementById('color').oninput = function(){
    color = this.value;
    marker.style.background = this.value;
}

canvas.onmousedown = function(event){
    canvas.onmousemove = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    var dx = event.movementX;
    var dy = event.movementY;

  ctx.beginPath()
    ctx.moveTo(x, y);
    ctx.lineTo(x - dx, y - dy);
    ctx.stroke();
    ctx.closePath();

    // ctx.fillRect(x-5, y-5, size, size);
    ctx.strokeStyle = color;
    }

    canvas.onmouseup = function(){
        canvas.onmousemove = null;
    }

    document.getElementById('clear').onclick = function clear(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    }
}



