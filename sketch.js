function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  
  translate(200,200)
  rotate(-90)
  
  let hr = hour()
  let min = minute()
  let sec = second()

  strokeWeight(8)
  stroke("#FFEBCD")
  noFill()
  let end1 = map(sec,0,60,0,360)
  arc(0,0,250,250,0,end1)

  push()
  rotate(end1)
  strokeWeight(6)
  stroke("#FFEBCD")
  line(0,0,100,0)
  pop()

  stroke("#DEB887")
  let end2 = map(min,0,60,0,360)
  arc(0,0,290,290,0,end2)

  push()
  strokeWeight(6)
  rotate(end2)
  stroke("#DEB887")
  line(0,0,80,0)
  pop()

  stroke("#DAA520")
  let end3 = map(hr%12,0,12,0,360)
  arc(0,0,330,330,0,end3)

  push()
  strokeWeight(6)
  rotate(end3)
  stroke("#DAA520")
  line(0,0,60,0)
  pop()

  //fill(255)
  //noStroke()
  //text(hr + ":" + min + ":" + sec, 10,200)
}