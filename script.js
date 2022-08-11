// Day 7 Loops - Inclass

var diceRoll = function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  return diceNumber;
};

// array function (2 inputs from the user)
// 1st input -> number of dice
// 2nd input -> userguess

//while loop version
var results = []; // results = [winCounter, lossCounter]

var winMsg = "Win!";
var lossMsg = "Loss :(";
var modeCounter = 0;
var numOfDice = 0;

var inputNumOfDice = function (input) {
  numOfDice = input;
  modeCounter += 1;
  return `You have chosen to roll ${numOfDice} dice. <br><br> Please enter your guess.`;
}; // return the number of dice and display msg for 2nd mode

var winOrLoss = function (userGuess) {
  var i = 0;
  var diceRollResult = 0;

  // while (i < numOfDice) {
  //   diceRollResult = diceRoll();
  //   console.log("i", i);
  //   console.log("diceRollResult", diceRollResult);
  //   console.log("***********");
  //   if (userGuess == diceRollResult) {
  //     results[0] += 1;
  //     return winMsg;
  //   }
  //   i += 1;
  // }

  for (var i = 0; i < numOfDice; i++) {
    diceRollResult = diceRoll();
    console.log("i", i);
    console.log("diceRollResult", diceRollResult);
    console.log("***********");
    if (userGuess == diceRollResult) {
      results[0] += 1;
      return winMsg;
    }
  }
  results[1] += 1;
  return lossMsg;
};

/* main function
mode 0: user to input number of dice they wish to roll
mode 1: user to input guess, return the result
*/

var main = function (input) {
  if (modeCounter == 0) {
    return inputNumOfDice(input);
  } else if (modeCounter == 1) {
    return winOrLoss(input);
  }
};
