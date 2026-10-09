
let score = 0;
//const input = 0;
//const input = prompt("How many legs does a cow have");
//let answer;
console.log("how many legs does a cow have?");
const answer = prompt("how many legs does a cow have?");
console.log("a: 1 \n b: 2 \n c: 3 \n d: 4 \n");
//alert(`cows have ${input} legs`);
alert(`your answer was ${answer}`);
if(answer=== "d"){
  console.log("Correct");
  score++;
}
else{
  console.log("Incorrect");
  //score--;
}
//console.log(`your score is ${score}`);  

answer = prompt("how many states are in the united states?");
console.log("a: 50 \n b: 52 \n c: 51 \n d: 69 \n");
alert(`your answer was ${answer}`);
//console.log("First Question");
if(answer==="a"){
  console.log("Correct");
  score++;
}
else{
  console.log("Incorrect");
  //score--;
}
answer = prompt("what is the longest international border?");
console.log("a: The United States and Canada \n b: China and Russia \n c: United States and Mexico \n d: The United Kingdom and Ireland");
alert(`your answer was ${answer}`);
if(answer==="a"){
  console.log("Correct");
  score++;
}
else{
  console.log("Incorrect");
  //score--;
}
console.log(`your score was ${score}`);
if(score===3){
  console.log("You answered everything correctly!");

}
else if(score===0){
  console.log("you got everything wrong!");
}
else{
  console.log("You did ok!");
}


