function getShape()
{
	var shape;
	var shapeType = getShapeType();
	if(shapeType === "triangle")
	{
		shape = getTriangle();
	}
	else if(shapeType === "rectangle")
	{
		shape = getRectangle();
	}
	else if(shapeType === "circle")
	{
		shape = getCircle();
	}
	return shape;
}

function getValueForm(elementId, defaultValue)
{
	var value = document.getElementById(elementId).value;
	return (value === "") ? defaultValue : value;
}

function getCircle()
{	
    var circle = new Circle();
    circle.prototype.setFillColor(getValueForm("fill_color", circle.prototype.getFillColor()));
    circle.prototype.setBorderColor(getValueForm("border_color", circle.prototype.getBorderColor()));
	circle.setRadius(getValueForm("radius", circle.getRadius()));
	var centerX = getValueForm("centerX", circle.getCenterX());
	var centerY = getValueForm("centerY", circle.getCenterY());
	circle.setCenter(centerX, centerY);
	return circle;
}

function getTriangle()
{
	var triangle = new Triangle();
	triangle.prototype.setFillColor(getValueForm("fill_color", triangle.prototype.getFillColor()));
	triangle.prototype.setBorderColor(getValueForm("border_color", triangle.prototype.getBorderColor()));
	var x1 = getValueForm("triangle_x1", triangle.x1);
	var y1 = getValueForm("triangle_y1", triangle.y1);
	var x2 = getValueForm("triangle_x2", triangle.x2);
	var y2 = getValueForm("triangle_y2", triangle.y2);
	var x3 = getValueForm("triangle_x3", triangle.x3);
	var y3 = getValueForm("triangle_y3", triangle.y3);
	triangle.setCoordinates(x1, y1, x2, y2, x3, y3);
	return triangle;
}

function getRectangle()
{
	var rectangle = new Rectangle();
	rectangle.prototype.setFillColor(getValueForm("fill_color", rectangle.prototype.getFillColor()));
	rectangle.prototype.setBorderColor(getValueForm("border_color", rectangle.prototype.getBorderColor()));
	var x1 = getValueForm("rectangle_x1", rectangle.x1);
	var y1 = getValueForm("rectangle_y1", rectangle.y1);
	var x2 = getValueForm("rectangle_x2", rectangle.x2);
	var y2 = getValueForm("rectangle_y2", rectangle.y2);
	rectangle.setCoordinates(x1, y1, x2, y2);
	return rectangle;
}

function getShapeType()
{
	return document.getElementById("shape_type").value;
}

function resetFormInput()
{
	document.getElementById("fill_color").value = "";
	document.getElementById("border_color").value = "";
	document.getElementById("triangle_x1").value = "";
	document.getElementById("triangle_y1").value = "";
	document.getElementById("triangle_x2").value = "";
	document.getElementById("triangle_y2").value = "";
	document.getElementById("triangle_x3").value = "";
	document.getElementById("triangle_y3").value = "";	
	
	document.getElementById("radius").value = "";	
	document.getElementById("centerX").value = "";	
	document.getElementById("centerY").value = "";	
	
}

function setMenuSetting()
{
	var triangleElement = document.getElementById('triangle');
	var rectangleElement = document.getElementById('rectangle');
	var circleElement = document.getElementById('circle');
	triangleElement.style.display = 'none';
	rectangleElement.style.display = 'none';
	circleElement.style.display = 'none';
	
	var shapeType = getShapeType();
	if(shapeType === "triangle")
	{
		triangleElement.style.display = 'block';
	}
	else if(shapeType === "rectangle")
	{
		rectangleElement.style.display = 'block';
	}
	else if(shapeType === "circle")
	{
		circleElement.style.display = 'block';
	}
}

function setDefaultValueInMenuSetting()
{
	var shape = getShape();
	document.getElementById("fill_color").value = shape.prototype.getFillColor();
	document.getElementById("border_color").value = shape.prototype.getBorderColor(); 
	if(shape instanceof  Circle)
	{
		document.getElementById("radius").value = shape.getRadius();
		document.getElementById("centerX").value = shape.getCenterX();
		document.getElementById("centerY").value = shape.getCenterY();
	}
	else if(shape instanceof  Triangle)
	{
		document.getElementById("triangle_x1").value = shape.x1;
		document.getElementById("triangle_y1").value = shape.y1;
		document.getElementById("triangle_x2").value = shape.x2;
		document.getElementById("triangle_y2").value = shape.y2;
		document.getElementById("triangle_x3").value = shape.x3;
		document.getElementById("triangle_y3").value = shape.y3;
	}
	else if(shape instanceof Rectangle)
	{
		document.getElementById("rectangle_x1").value = shape.x1;
		document.getElementById("rectangle_y1").value = shape.y1;
		document.getElementById("rectangle_x2").value = shape.x2;
		document.getElementById("rectangle_y2").value = shape.y2;
	}
}


function setDefaultValueInPlaceholder()
{
	var shape = getShape();
	document.getElementById("fill_color").setAttribute("placeholder", shape.prototype.getFillColor());
	document.getElementById("border_color").setAttribute("placeholder", shape.prototype.getBorderColor());
	if(shape instanceof  Circle)
	{
		document.getElementById("radius").setAttribute("placeholder", shape.getRadius());
		document.getElementById("centerX").setAttribute("placeholder", shape.getCenterX());
		document.getElementById("centerY").setAttribute("placeholder", shape.getCenterY());
	}
	else if(shape instanceof  Triangle)
	{
		document.getElementById("triangle_x1").setAttribute("placeholder", shape.x1);
		document.getElementById("triangle_y1").setAttribute("placeholder", shape.y1);
		document.getElementById("triangle_x2").setAttribute("placeholder", shape.x2);
		document.getElementById("triangle_y2").setAttribute("placeholder", shape.y2);
		document.getElementById("triangle_x3").setAttribute("placeholder", shape.x3);
		document.getElementById("triangle_y3").setAttribute("placeholder", shape.y3);
	}
	else if(shape instanceof Rectangle)
	{
		document.getElementById("rectangle_x1").setAttribute("placeholder", shape.x1);
		document.getElementById("rectangle_y1").setAttribute("placeholder", shape.y1);
		document.getElementById("rectangle_x2").setAttribute("placeholder", shape.x2);
		document.getElementById("rectangle_y2").setAttribute("placeholder", shape.y2);
	}
}

function start()
{
	setMenuSetting();
	setDefaultValueInPlaceholder();
	createCanvas();	
}

function updateShapeSetting()
{
	resetFormInput();
	setMenuSetting();
	setDefaultValueInPlaceholder();
	clearCanvas();
}

function render()
{
	clearCanvas();
	var shape = getShape();
	shape.draw();
	drawShapeInfo(shape.calculatePerimeter(), shape.calculateArea());
}

