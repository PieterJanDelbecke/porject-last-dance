function isSquare(arr){
     return (!arr.length)? undefined : arr.every(i => Number.isInteger(Math.sqrt(i)))
}

console.log(isSquare([1,4,9,16,25,36]))
console.log(isSquare([1,2,3,4,5,6]))
console.log(isSquare([]))

// console.log(Math.sqrt(26))
