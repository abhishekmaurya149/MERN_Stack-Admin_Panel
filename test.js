const arr = ['apple','mango', 'grapes', 'banana','cherry'];
const sortedArray = getSorted(arr);

 function getSorted(data){
    return data.sort();
}

console.log("New Sorted array :" + sortedArray);
console.log("Array :" + arr);