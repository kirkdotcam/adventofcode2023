let inputs = require("./puzzleInput.js")

// console.log(inputs.example)

let totalCubes = {
  "red":12,
  "green":13,
  "blue": 14
}

let total = 0

function run(str){
  let lines = str.split("\n")
  let validGames = lines.filter((line)=> analyzeGame(line))
  return total
}

function analyzeGame(str){

  let [gameStr, gameStates] = str.split(":")
  
  //process game string
  let gameNum = parseInt(gameStr.split(" ")[1])
   
  
  //process gameState
  //data transformation
  let drawnSets = gameStates.split(";")
  drawnSets = drawnSets
    .map((drawnSet)=> {
      let setStrings = drawnSet.split(",")
      setStrings = setStrings
        .map((str)=>str.trim())
        .map((str)=>str.split(" "))
      
      let setObject = {}

      setStrings.forEach((draw)=>{
        setObject[draw[1]] = parseInt(draw[0])
      })

      return setObject

      
    })
  // console.log(drawnSets)

  let anyInvalid = drawnSets.some((set, idx)=>{
    for (let color in set) {
      if (set[color] > totalCubes[color]) return true

    }
    return false
  })
  if (anyInvalid) return false

  total += gameNum
  return true

}

// console.log(run(inputs.example))
console.log(run(inputs.puzzleInput))
