var num = 12
var obj = {key: "value"}
var arr = [1, "fattima", true, {key:"value 2"}, "the answer", "the last value"]
var uneditedObj = '{"address": "Abuja nigeria"}'
var editedObj = JSON.parse(uneditedObj)
console.log(editedObj["address"])
arr.push("policeman")
arr[1]="west"
obj["key"] = "new value"
//var strObj = JSON.stringify(obj)
//console.log(strObj)



//LOOPS

console.log(arr.length)
for (var item = 0; item<arr.length; item++){
    if (arr[item]=="the answer"){
        console.log(item)
    }
    else{
        console.log(arr[item] + " is not the number")
    }
    
//    console.log(arr[item])
}

//if (num==18){
//    console.log("correct number")
//}
//else if (num == 16 || num == 12){
//    console.log("wrong number")
//}
//else if (num== 0){
//    console.log("The number is zero")
//}
//else{
//    console.log("The number is not correct")
//}
