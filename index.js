
let score = 0;

//console.log("how many legs does a cow have?");
const Question = prompt(`how many legs does a cow have? 
  [1] 1 
  [2] 2 
  [3] 3 
  [4] 4`);
const answer = Number(Question);
if(Number.isNan(answer)){
  alert("your answer must be a number");
}
else if(answer>=1 && answer<=4){
  alert(`your answer was ${answer}`);
  if(answer=== 4){
    alert("Correct");
    score++;
  }
  else{
    alert("Incorrect");
  }

}else{
  alert("answer must be between 1 and 4");
  
}
 
Question = prompt(`how many states are in the united states?
  [1] 50 
  [2] 52  
  [3] 51
  [4] 69 `);
answer = Number(Question);

alert(`your answer was ${answer}`);

if(Number.isNan(answer)){
  alert("your answer must be a number");
}
else if(answer>=1 && answer<=4){
  alert(`your answer was ${answer}`);
  if(answer=== 1){
    alert("Correct");
    score++;
  }

}else{
  alert("answer must be between 1 and 4");
  //score--;
}
//answer = prompt("");
Question = prompt(` what is the longest international border?
  [1] The United States and Canada
  [2] China and Russia
  [3] United States and Mexico
  [4] The United Kingdom and Ireland`);
answer = Number(Question);
alert(`your answer was ${answer}`);

if(Number.isNan(answer)){
  alert("your answer must be a number");
}
else if(answer>=1 && answer<=4){
  alert(`your answer was ${answer}`);
  if(answer=== 1){
    alert("Correct");
    score++;
  }

}else{
  alert("answer must be between 1 and 4");
  //score--;
}
alert(`your score was ${score}`);
if(score===3){
  alert("You answered everything correctly!");

}
else if(score===0){
  alert("you got everything wrong!");
}
else{
  alert("You did ok!");
}


