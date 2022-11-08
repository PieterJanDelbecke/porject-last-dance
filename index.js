function isIsogram(str){
     return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("bbb"))

