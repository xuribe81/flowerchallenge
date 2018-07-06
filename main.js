// Don't worry about this line too much right now. It
// just uses the svg.js library to prepare to draw shapes.
// Do notice that it references the id of the div we made
// in the previous step.
var drawing = SVG('drawing-area');
var drawflower = function(x, y, petalColor, centercolor, stemcolor){ 
var flowerGroup = drawing.group()
.center(x ,y)
.scale(.3)
// Draw a rectangle. The first number is the width,
// the second number is the height.

//var petalColor = '#008080';

drawing
  .rect(40, 400)
  .fill(stemcolor)
  .center(399, 694)
.stroke('#00ffff')

.addTo(flowerGroup);

drawing
.ellipse(150, 350)
.center(570, 470)
.rotate(135)
.fill(petalColor)

.addTo(flowerGroup);

drawing
  .ellipse(150,350)
  .fill(petalColor)
  .center(622, 360)
.rotate(90)

.addTo(flowerGroup);

drawing
  .ellipse(150,350)
  .fill(petalColor)
  .center(175, 300)
.rotate(105)

.addTo(flowerGroup);

drawing
  .ellipse(150,350)
  .fill(petalColor)
  .center(235, 470)
.rotate(220)

.addTo(flowerGroup);

drawing
  .ellipse(150, 350)
  .center(582, 231)
  .rotate(220)
    .fill(petalColor)

.addTo(flowerGroup);

drawing
  .ellipse(150, 350)
  .center(455, 150)
  .rotate(360)
    .fill(petalColor)

.addTo(flowerGroup);

drawing
  .ellipse(150, 350)
  .center(300, 200)
  .rotate(135)
    .fill(petalColor)

.addTo(flowerGroup);

drawing
  .ellipse(150, 350)
  .center(347, 497)
  .rotate(200)
    .fill(petalColor)

.addTo(flowerGroup);

drawing
  .ellipse(150, 350)
  .center(450, 512)
  .rotate(0)
    .fill(petalColor)

.addTo(flowerGroup);

drawing
  .ellipse(200, 200)
  .fill(centercolor)
  .center(400, 320)

.addTo(flowerGroup);
}
drawflower(94,62,'#008080', 'yellow','#996600');
drawflower(294,62,'#008080', 'yellow','#996600');
drawflower(494,62,'#008080', 'yellow','#996600');
drawflower(694,62,'#008080', 'yellow','#996600');
drawflower(894,62,'#008080', 'yellow','#996600');
drawflower(1094,62,'#008080', 'yellow','#996600');
drawflower(94,414,'#008080', 'yellow','#996600');
drawflower(294,414,'#008080', 'yellow','#996600');
drawflower(494,414,'#008080', 'yellow','#996600');
