let testParsedMoves = [
  ["nop", +0],
  ["acc", +1],
  ["jmp", +4],
  ["acc", +3],
  ["jmp", -3],
  ["acc", -99],
  ["acc", +1],
  ["jmp", -4],
  ["acc", +6]
]

async function getAllData() {
  let response = await fetch('day8.txt')
  let data = await response.text()

  return data
}

function lines(data) {
  return data.split("\n")
}

function parseMoves(array) {
  let parsedMoves = array.map(move => [move.slice(0,3),parseInt(move.slice(4))])
  //console.log(parsedMoves)
  return parsedMoves
}
//HERE HAVE PARSED MOVES

// parsedMoves: array of instructions: [symbol, offset]
function takeFirstStep(parsedMoves) {
  return takeNextStep([0, 0, parsedMoves])
}

function takeNextStep(array) {
  let count = array[0]
  let position = array[1]
  let parsedMoves = array[2]

  if(parsedMoves[position][0] === "jmp") {
    position = position + parsedMoves[position][1]
    
  }  else if(parsedMoves[position][0] === "acc") {
    count = count + parsedMoves[position][1]
    position = position + 1

  }  else if(parsedMoves[position][0] === "nop") {
    position = position + 1

  }
  return [count, position, parsedMoves]
}

//console.log(takeFirstStep([["jmp",+30]]))


getAllData()
  .then(lines)
  .then(parseMoves)
  .then(takeFirstStep)
  .then(takeNextStep)
  .then(result => console.log(result))
