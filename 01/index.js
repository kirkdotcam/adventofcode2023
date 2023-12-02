let puzzleInput = require("./puzzleInput.js").puzzleInput

let exampleText = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`

function processString(str){
  let lines = str.split("\n")
  let numbers = lines.map((line)=>{
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
  })

  return numbers.reduce((acc, curr)=> acc+curr,0)
}

// console.log(processString(exampleText))
console.log(processString(puzzleInput))

