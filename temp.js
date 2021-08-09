let obj={}
var a={'name':"syukinmei"}
var b={'age':18}
obj[a]=100
obj[b]=200
console.log(obj)
console.log(obj[a])
console.log(obj[b])
obj['[object Object]']=300
console.log(obj['[object Object]'])
console.log(obj)