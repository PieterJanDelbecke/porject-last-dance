const tabs = new Map()
tabs.set("one", { name: "Main", fields: new Map(), data: new Map()})

tabs.get("one").fields.set("fieldOne", { name: "fieldName", isHidden: false, order: 0})

myTemp = tabs.get("one").fields.get("fieldOne")
console.log(myTemp) 
tabs.get("one").fields.set("fieldOne", {...myTemp, options: new Map()})
tabs.get("one").fields.get("fieldOne").options.set("id1", {color: "red", name: "new"})

myOptions = tabs.get("one").fields.get("fieldOne").options.get("id1")
console.log(myOptions)
