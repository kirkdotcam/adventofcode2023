let puzzleInput = require("./puzzleInput.js").puzzleInput

let exampleText = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`

//TODO: convert this to an array of objects that correlates the string numberName with the integer
const numberNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

function run(str){
  let lines = str.split("\n")
  let numbers = lines.map((line)=>{
    if (hasWords(line)){
      return processMixTypes(line)
    } else {
      return processNumbersOnly(line)
    }

  })

  return numbers.reduce((acc, curr)=> acc+curr,0)
}

function processNumbersOnly(line){

    let firstNum = null
    let lastNum = null
    
    for (let char of line ){
      let parsedChar = parseInt(char)
      if (isNaN(parsedChar)) continue
      if (firstNum === null) firstNum = char
      lastNum = char
    }
    
    let twoDigit = parseInt(firstNum + lastNum)
    return twoDigit
}

function processMixTypes(str){
  let firstNum = null
  let lastNum = null

  //make a cursor iterate over the string
  //at the cursor, grow a window starting at size 1 to size 5
  //if the window is size one, check if the value is an integer
  //if the window is size two to size five, check if the window is equal to a numberName value, if it is, convert that to the integer, and retain it. then, move the cursor to the next position after the window.
}

//TODO: after converting the array for numberName to an array of objects, change numberNames here to first map over the array extracting the names only
function hasWords(str) {
  return numberNames.some((numberName) => str.includes(numberName))
}

console.log(run(exampleText))
// console.log(processString(puzzleInput))

