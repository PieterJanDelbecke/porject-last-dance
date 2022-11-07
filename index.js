function findShort(s){
     return s.split(" ").map(i => i.length)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))