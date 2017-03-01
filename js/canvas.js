function createCanvas()
{
	var canvas = document.getElementById("drawing_area"),
	ctx = canvas.getContext("2d");
	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.scale(1, -1);
}

function clearCanvas()
{
    var canvas = document.getElementById("drawing_area"),
        ctx = canvas.getContext("2d");
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
}


function drawShapeInfo(shapePerimeter, shapeArea)
{
	var canvas = document.getElementById("drawing_area"),
	ctx = canvas.getContext("2d");
	var TEXT_COLOR = "#000000";
	var TEXT_COORDINATE_X = -150;
	var TEXT_COORDINATE_Y = 240;
	ctx.save();
	ctx.font = "20px Arial";
	ctx.scale(1, -1);
	ctx.fillStyle = TEXT_COLOR;
	ctx.fillText("Perimeter = " + shapePerimeter.toFixed(0) + "; Area = " + shapeArea.toFixed(0), TEXT_COORDINATE_X, TEXT_COORDINATE_Y);
	ctx.restore();
}