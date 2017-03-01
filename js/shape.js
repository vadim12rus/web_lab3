var DEFAULT_FILL_COLOR = "#FF0000";
var DEFAULT_BORDER_COLOR = "#00FF00";

function Shape()
{
	this.fillColor = DEFAULT_FILL_COLOR;
	this.borderColor = DEFAULT_BORDER_COLOR;
	
	this.setFillColor = function(value)
	{
		this.fillColor = value;
	};
	
	this.getFillColor = function()
	{
		return this.fillColor;
	};
	
	this.setBorderColor = function(value)
	{
		this.borderColor = value;
	};
	
	this.getBorderColor = function()
	{
		return this.borderColor;
	};
}