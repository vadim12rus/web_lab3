function Rectangle()
{
	this.prototype = new Shape();
	this.x1 = 100;
	this.y1 = 100;
	this.x2 = -100;
	this.y2 = -100;
	
	this.setCoordinates = function(x1, y1, x2, y2)
	{
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	};
	
	this.getWidth = function()
	{
		return Math.abs(this.x2 - this.x1);
	};
	
	this.getHeight = function()
	{
		return Math.abs(this.y2 - this.y1);
	};
	
	this.draw = function()
	{
		var canvas = document.getElementById("drawing_area");
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.rect(this.x1, this.y1, this.x2 - this.x1, this.y2 - this.y1);
		ctx.fillStyle = this.prototype.getFillColor();
        ctx.fill();
        ctx.strokeStyle = this.prototype.getBorderColor();
        ctx.stroke();
	};
	
	this.calculatePerimeter = function()
	{
		return (2 * (this.getWidth() + this.getHeight()));
	};
	
	this.calculateArea = function()
	{
		return (this.getWidth() * this.getHeight());
	};
}