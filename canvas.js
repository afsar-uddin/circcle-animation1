var canvas = document.querySelector('canvas');

canvas.width = 600;
canvas.height = 400;

var c = canvas.getContext('2d');
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.strokeStyle = "blue";
	c.stroke();

	if( x + radius > canvas.width || x - radius < 0 ){
		dx = -dx;
	}
	if( y + radius > canvas.height || y - radius < 0 ){
		dy = -dy;
	}

	x += dx;
	y += dy;

}
animate();
