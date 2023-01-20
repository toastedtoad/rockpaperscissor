
function preload()
{
}

function setup() {

  createCanvas(500,700)
  
  drawButtons()


}

function rock(){
  drawButtons()
  textSize(20)
  fill("grey")
text("you chose Rock", 150,50)
computorGuess = random(["Rock", "Paper", "Scissor"])
text("they chose " + computorGuess, 150,100)

  if( computorGuess == "Rock"){
    textSize(30)
    fill("black")
    text("you tie", 150, 350)
  }
  else if(computorGuess == "Scissor"){
    textSize(30)
    fill("green")
    text("you win", 150, 350)
  }
  else if(computorGuess == "Paper"){
    textSize(30)
    fill("red")
    text("you lose", 150, 350)
  }
}

function paper(){
  drawButtons()
  textSize(20)
  fill("grey")
text("you chose Paper", 150,50)
computorGuess = random(["Rock", "Paper", "Scissor"])
text("they chose " + computorGuess, 150,100)

  if( computorGuess == "Rock"){
    textSize(30)
    fill("green")
    text("you win", 150, 350)
  }
  else if(computorGuess == "Scissor"){
    textSize(30)
    fill("red")
    text("you lose", 150, 350)
  }
  else if(computorGuess == "Paper"){
    textSize(30)
    fill("black")
    text("you tie", 150, 350)
  }
}

function scissor(){
  drawButtons()
  textSize(20)
  fill("grey")
text("you chose Scissor", 150,50)
computorGuess = random(["Rock", "Paper", "Scissor"])
text("they chose " + computorGuess, 150,100)

  if( computorGuess == "Rock"){
    textSize(30)
    fill("red")
    text("you lose", 150, 350)
  }
  else if(computorGuess == "Scissor"){
    textSize(30)
    fill("black")
    text("you tie", 150, 350)
  }
  else if(computorGuess == "Paper"){
    textSize(30)
    fill("green")
    text("you win", 150, 350)
  }
}

function drawButtons(){
  background("#FCF2F0")

  //btn 1
  button = createImg('rock2.jpg');
  button.position(380,550);
  button.size(80,80);
  button.mouseClicked(rock)

  //  //btn 2
   button2 = createImg('scissor2.jpg');
    button2.position(380,420);
    button2.size(80,80);
   button2.mouseClicked(scissor);
 
  //btn3
   button3 = createImg('paper2.jpeg');
   button3.position(380,290);
   button3.size(80,80);
   button3.mouseClicked(paper);



}

function draw(){


}