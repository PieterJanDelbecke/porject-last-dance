const mySet = new Set()

mySet.add(1)
mySet.add(2)
mySet.add([3,4,5])
mySet.delete(2)

console.log([...mySet])