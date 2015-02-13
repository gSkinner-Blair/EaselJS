(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.redBox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Av2JsIAAzXIftAAIAATXg");
	this.shape.setTransform(101.5,62);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203,124);


(lib.blueBox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AskGPIAAsdIZJAAIAAMdg");
	this.shape.setTransform(80.5,40);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161,80);


// stage content:
(lib.flashskew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener("enterframe", Frame);
		
		function Frame(){
			blue.x++;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// Layer 1
	this.instance = new lib.redBox();
	this.instance.setTransform(290.5,96,1,1,0,0,0,101.5,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:2.24,skewX:63.4},29).to({scaleY:1,skewX:0},30).wait(1));

	// Layer 2
	this.blue = new lib.blueBox();
	this.blue.setTransform(193,269.5,1,1,0,0,0,80.5,40);

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(387.5,234,279.5,275.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;