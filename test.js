

for( let sortedArrPosition = 0; sortedArrPosition < arr.length; sortedArrPosition ++ ){
 let lowestIndex = sortedArrPosition

// find lowest index
    for(let i = sortedArrPosition; i<arr.length; i++){
        if( arr[i] < arr[lowestIndex]){
            lowestIndex = i
        }
    }
    // swap
    let temp = arr[sortedArrPosition]
    arr[sortedArrPosition] = arr[lowestIndex]
    arr[lowestIndex] = temp
}
console.log(arr)