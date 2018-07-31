/* Write a JavaScript program to calculate the area and perimeter of a
rectangle. Rectangle should be an object with properties width and
height and methods getArea() and getPerimeter(); */

let rectangle = {
 width: 15,
 height: 5,
 getArea: function() {return this.width * this.height;},
 getPerimeter: function() {return 2*(this.width + this.height);} 
 } 
 console.log(`Rectangle area - ${rectangle.getArea()}`);
 console.log(`Rectangle perimeter - ${rectangle.getPerimeter()}`);
 



 