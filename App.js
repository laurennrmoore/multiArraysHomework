//Number 1
var myVar = [
            ['a', 'b', 'c', 'd'],
            [1, 2, 3],
            [1, 2, 3, 4, 5 , 10]
        ]


function loop(array){

    for(let i = 0; i < array.length; i++ ){
        for(let j = 0; j < array[i].length; j++){
            console.log(array[i][j]);
        }
    }
}
loop(myVar);






//Number 5

var myVar = [
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    ['a', 'b'],
                    ['html' ,'css', 'javascript']
                ]
            ];


//Number 6 
function checkmaxValue(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log(checkmaxValue(200, 300))





// Create a function that receives two values as arguments.
//  The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type.


function compareStrings(a, b){

    if(typeof(a) == 'string' || typeof(b) == 'string'){
        console.log("Both are string")
        if(a == b) {
            return 'these strings are equal'
        } else {
            return 'these strings are not equal'
        }
    }
    else{
        return "One of them is not string"
    } 
}
console.log(compareStrings("blue", "red"));