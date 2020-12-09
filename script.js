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
  let moves = [...parsedMoves.slice(0,246), ["nop",233], ...parsedMoves.slice(247)]
  return takeNextStep([0, 0, parsedMoves ,[0], true])
}

function takeNextStep(array) {
  let count = array[0]
  let position = array[1]
  let parsedMoves = array[2]
  let visitedPositions = array[3]
  let shouldContinue = array[4]

  if(!shouldContinue) {
    return count
  } else if(parsedMoves[position][0] === "jmp") {
    position = position + parsedMoves[position][1]
    
  }  else if(parsedMoves[position][0] === "acc") {
    count = count + parsedMoves[position][1]
    position = position + 1

  }  else if(parsedMoves[position][0] === "nop") {
    position = position + 1

  }
  
  if (visitedPositions.includes(position)) {
    shouldContinue === false

  } else visitedPositions.push(position)

  let possibleChanges = visitedPositions.filter(item => (parsedMoves[item][0]!=="acc") )
  
  return [count, position, parsedMoves, visitedPositions,shouldContinue, visitedPositions.slice(-1), possibleChanges.length]
  }

//AT THIS POINT, I KNOW THERE ARE 102 VISITED ITEMS THAT START WITH JMP OR NOP, AND CHANGING ONE OF THEM WILL ESCAPE ME OUT OF THE INFINITE LOOP

//I know that I can create a new array for parsedMoves based on: [...parsedMoves.split(0,n), ["opposite instruction", same number], ...parsedMoves.split(n+1)] and then check it with the chain of functions below

function updateMovesWithChangedItem(position) {
  if (parsedMoves[position][0] === "jmp") {
    let newInstruction === "nop"
  } else let newInstruction === "jmp"

  let moves = [...parsedMoves.split(0,position), [newInstruction, parsedMoves[position][1]], ...parsedMoves.split(position + 1)]

  return moves

}



getAllData()
  .then(lines)
  .then(parseMoves)
  .then(takeFirstStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
    .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
    .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
    .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
    .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
  .then(takeNextStep)
 .then(takeNextStep)

  


 
  .then(result => console.log(result))
