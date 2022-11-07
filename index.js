function findShort(s){
     const arr = s.split(" ").map(i => i.length)
     return Math.min(...arr)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))