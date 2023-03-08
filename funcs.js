function isFive(num) {
  // Your code here
  if (num === 5) return true
  return false
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') throw new Error('only numbers')
  if (number % 2 === 0) return false
  return true
}

function myRange(min, max, step = 1) {
  // Your code here
  let array = []

  for (let i = min; i <= max; i += step) {
    array.push(i)
  }

  return array
}


module.exports = { isFive, isOdd, myRange };