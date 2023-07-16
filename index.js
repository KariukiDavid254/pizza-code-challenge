function filterdArray(arr,elem) {
 let newArr=[];
 //only change the code below this line
for (let i = 0; i < arr.length; i++) {
if (arr[i].indexOf(elem) === -1 ){
newArr.push(arr[i]); }}


 //Only change the code above this line
 return newArr;
    
}


 console.log(filterdArray([[3,2,3],[1,6,3],[3,13,26],[19,3,9]],3));