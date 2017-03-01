function Triangle()
{
	this.prototype = new Shape();
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 100;
	this.y2 = 100;
	this.x3 = 100;
	this.y3 = -100;
	
	this.setCoordinates = function(x1, y1, x2, y2, x3, y3)
	{
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
	};
	
	this.draw = function()
	{
		var canvas = document.getElementById("drawing_area");
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x2, this.y2);
		ctx.lineTo(this.x3, this.y3);
		ctx.closePath();
		ctx.fillStyle = this.prototype.getFillColor();
        ctx.fill();
        ctx.strokeStyle = this.prototype.getBorderColor();
        ctx.stroke();
	};
	
	
	this.calculatePerimeter = function()
	{
		var firstSide = Math.hypot(this.x1 - this.x2, this.y1 - this.y2); 
		var secondSide = Math.hypot(this.x2 - this.x3, this.y2 - this.y3); 
		var thirdSide = Math.hypot(this.x1 - this.x3, this.y1 - this.y3); 
		return (firstSide + secondSide + thirdSide);
	};
	
	this.calculateArea = function()
	{
		var semiperimeter = this.calculatePerimeter() / 2;
		var firstSide = Math.hypot(this.x1 - this.x2, this.y1 - this.y2); 
		var secondSide = Math.hypot(this.x2 - this.x3, this.y2 - this.y3); 
		var thirdSide = Math.hypot(this.x1 - this.x3, this.y1 - this.y3); 
		var area = Math.sqrt(semiperimeter * (semiperimeter - firstSide) * (semiperimeter - secondSide) * (semiperimeter - thirdSide));
		return area;
	};
}