function isSquare(arr){
    if(!arr.length) {
        return undefined
    } else {
        let count = 0
        arr.map(i => {
            const sqrt = Math.sqrt(i)
            if (sqrt - Math.floor(sqrt) !== 0) {
                count++
            }
        })
        return (!count) ? true : false 
    }
}

console.log(isSquare([1,4,9,16,25,36]))
console.log(isSquare([1,2,3,4,5,6]))
console.log(isSquare([]))

// console.log(Math.sqrt(26))
