var arr = ["good","bad","ugly", 3, true, false, {"game":"God of war"}, [4,5,6]]
for( var i= 0; i< arr.length; i++){
   console.log(arr[i])
    if (arr[i] == false){
        break;
    }
}
var index2 = 0
while(index2 < arr.length){
    console.log(arr[index2]);
    index2++
}
//for(;;){
//    if(index)
//}