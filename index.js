const app = "I don't do much."

function Rectangle(sides, width, height){
  this.sides = sides;
  this.width = width;
  this.height = height;
  this.area = function(){
    return this.width * this.height;
  }
  this.permieter = function(){
    return (this.width + this.height) * 2;
  }
}

function Square(sides, length){
  Rectangle.call(this, sides, length, length);
}

var rect = new Rectangle(4,3,5);
var square = new Square(4,2);

rect.area();
square.area();

Rectangle.prototype.internalAngles = 90;
rect.internalAngles;
square.intervalAngles;

//rect will change but square will not as it doesn't inherit from Rectangle prototype


/////////////////////
function Shape(sides, x, y){
  this.sides = sides;
  this.x = x;
  this.y = y;
}

//Rectangle inherit from shape using Object.create with the Shape prototype
function Rectangle(x,y,width,height){
  //call superclass constructor
  Shape.call(this, 4, x, y);

  //set rectangle values
  this.width = width;
  this.height = height;

}

//set Rectangle prototype to an instance of a Shape
Rectangle.prototype = Object.create(Shape.prototype);
//set Rectangle constructor
Rectangle.prototype.constructor = Rectangle;

//extend with Rectangle behvaior
Rectangle.prototype.area = function(){
  return this.width * this.height;
}

Rectangle.prototype.perimeter = function(){
  return (this.width + this.height) * 2;
}
