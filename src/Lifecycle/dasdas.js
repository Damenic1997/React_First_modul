var arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.length);




function getArr(arr1) {

    var arr2 = [];
    for (let i=arr1.length; i>0; i--) {

        arr2.push(i);
    }


    return arr2;


}

console.log(getArr(arr1))