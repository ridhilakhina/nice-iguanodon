let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(710, 600);
  stroke(255);
  angleMode(DEGREES);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  describe('Functioning pink clock on a grey background.');
}

function draw() {
  background(230);

  translate(width / 2, height / 2);

   noStroke();
  fill(244, 122, 158);
  ellipse(110, 210, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(0, 0, clockDiameter, clockDiameter);

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(255);

  // Second hand
  push();
  rotate(secondAngle);
  strokeWeight(1);
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(12);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand
  push();
  strokeWeight(4);
  rotate(hourAngle);
  line(0, 0, 0, -hoursRadius);
  pop();

  push();
  strokeWeight(2);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();
}