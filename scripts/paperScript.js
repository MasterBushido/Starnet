
/*
// Create a raster item using the image tag with id='mona'


// Since the example image we're using is much too large,
// and therefore has way too many pixels, lets downsize it to
// 40 pixels wide and 30 pixels high:
raster.size = new Size(40, 30);

// Hide the raster:
raster.visible = false;

// The size of our grid cells:
var gridSize = 12;



// Space the cells by 120%:
var spacing = 10;

var text = new PointText(view.center);
		
text.content="hola";


		//var raster2=new Raster(text);

/*

*/
// Move the active layer to the center of the view:
//project.activeLayer.position = view.center;

/*
    // Create a Paper.js Path to draw a line into it:
    var path = new Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    var start = new Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note the plus operator on Point objects.
    // PaperScript does that for us, and much more!
    path.lineTo(start + [ 100, -50 ]);
*/


img1 = new Image();

img1.src = "imagenes/z_06223l11010.jpg";

var raster = new Raster(img1);


function extractDataFromImage(data,image){

	//Prepare matrix
	
	print(data.length);

	for (var y = 0; y < raster.height; y++) {
	    for(var x = 0; x < raster.width; x++) {
	  	      
	      	var position = new Point(x+10, y+10) * gridSize
	        var text = new PointText(position);
			var color = raster.getPixel(x, y);
			text.content="   "+Math.round(color.red*100)+"    ";
	    }
	}

}

//utils=new Utils();

//print(utils.a);

/*
var generate = require('underscore').compile([ 
    '- each file in files', 
    '  .file #{file}', 
].join('\n')); 
*/

//module.exports = require('./underscore');

_.each([1, 2, 3], println);

b=new Neurona();

print(b.size);

arrayUno=[0,1];

//arrayUno[1];


utils.doInArray(arrayUno,function(x){
	return x + 1;
})

utils.add(arrayUno,4)

utils.add(arrayUno,5)

print(arrayUno)


