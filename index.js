function maskify(cc){
     const arr = cc.split("")
     const length = arr.length
     const newArr = arr.map((i, index) =>{
          if(index >length -5){
               return i
          } else {
               return '#'
          }
     })
     return newArr.join("")
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))