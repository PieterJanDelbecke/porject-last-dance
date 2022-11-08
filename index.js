function isIsogram(str){
     str = str.toLowerCase()
     const str1 = str.split("")
     const mySet= new Set()
     for( i of str1){
          mySet.add(i)
     }
     const str2 = [...mySet].join("")
     return (str === str2)? true : false
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))

