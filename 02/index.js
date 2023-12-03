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

const numberNames = [
  {
    name: "one",
    number: 1
  },
  {
    name: "two",
    number: 2
  },
  {
    name: "three",
    number: 3
  },
  {
    name: "four",
    number: 4
  },
  {
    name: "five",
    number: 5
  },
  {
    name: "six",
    number: 6
  },
  {
    name: "seven",
    number: 7
  },
  {
    name: "eight",
    number: 8
  },
  {
    name: "nine",
    number: 9
  }]

function run(str) {
  let lines = str.split("\n")
  let numbers = lines.map((line) => {
    // if (hasWords(line)) {
    //   return processMixTypes(line)
    // } else {
    //   return processNumbersOnly(line)
    // }
    return processMixTypes(line)
  })
  
  lines.map((e,i)=> [e, numbers[i]]).forEach((e) => console.log(e))

  return numbers.reduce((acc, curr) => acc + curr, 0)
}

function processNumbersOnly(line) {

  let firstNum = null
  let lastNum = null

  for (let char of line) {
    let parsedChar = parseInt(char)
    if (isNaN(parsedChar)) continue
    if (firstNum === null) firstNum = char
    lastNum = char
  }

  let twoDigit = parseInt(firstNum + lastNum)
  return twoDigit
}

function processMixTypes(str) {
  let firstNum = null
  let lastNum = null

  //make a cursor iterate over the string
  for (let cursorPos = 0; cursorPos < str.length + 1; cursorPos++) {

    let currentValue = str[cursorPos]

    if (!isNaN(parseInt(currentValue))) {
      if (firstNum === null) firstNum = currentValue
      lastNum = currentValue
      continue
    }

    for (let windowSize = 2; windowSize < 6; windowSize++) {
      let endPosition = cursorPos + windowSize
      if (endPosition > str.length + 1) continue
      
      let currentWindow = str.slice(cursorPos, endPosition)
      // console.log(currentWindow)
      let matches = numberNames.filter((word) => word.name === currentWindow)
      if (matches[0]) {
        let number = matches[0].number
        lastNum = String(number)
        
        if (firstNum === null) firstNum = String(number)
        cursorPos = endPosition - 2

      }
    }

  }
  //at the cursor, grow a window starting at size 1 to size 5
  //if the window is size one, check if the value is an integer
  //if the window is size two to size five, check if the window is equal to a numberName value, if it is, convert that to the integer, and retain it. then, move the cursor to the next position after the window.
    let twoDigit = parseInt(firstNum + lastNum)
    return twoDigit
}


function hasWords(str) {
  return numberNames
    .map((n)=>n.name)
    .some((numberName) => str.includes(numberName))
}

// console.log(run(exampleText))
// console.log(run("fktwone4ninennnjdccftwothreetwo"))
// console.log(run("8ninefivegzk7ftqbceightwogfv"))
console.log(run(puzzleInput))

