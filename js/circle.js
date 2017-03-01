var DEFAULT_RADIUS = 50;

function Circle()
{
	this.prototype = new Shape();
	this.radius = DEFAULT_RADIUS;
	this.centerX = 0;
	this.centerY = 0;
	this.setRadius = function(r)
	{
		this.radius = r;
	};
	
	this.setCenter = function(x, y)
	{
		this.centerX = x;
		this.centerY = y;
	};
	
	this.getRadius = function()
	{
		return this.radius;
	};
	
	this.getCenterX = function()
	{
		return this.centerX;
	};
	
	this.getCenterY = function()
	{
		return this.centerY;
	};
	
	
	this.draw = function()
	{
		var canvas = document.getElementById("drawing_area");
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.prototype.getFillColor();
        ctx.fill();
        ctx.strokeStyle = this.prototype.getBorderColor();
        ctx.stroke();
	};
	
	this.calculatePerimeter = function()
	{
		return (2 * Math.PI * this.radius);
	};
	
	this.calculateArea = function()
	{
		return ( Math.PI * Math.pow(this.radius, 2));
	};
}