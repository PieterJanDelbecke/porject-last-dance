function getMiddle(s){
    const length = s.length
    const half = Math.floor(length/2)
    if (length % 2 === 0){
        return s.slice(half-1, half+1)
    } else {
        return s.charAt(half)
    }
}


console.log("test: ", getMiddle("test"))
console.log("testing: ", getMiddle("testing"))
