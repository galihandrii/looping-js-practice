/*for (let i = 5; i >= -5; i--){
    console.log(i); // print 5 s/d -5
}*/

/*for(let a = 2; a <= 20 ; a += 2){
console.log(a) // print kelipatan 2
}*/
function fizzbuzz(y){
    let result;
    for (let x =1; x <= y; x++){
        if ( x % 3 === 0 && x % 5 === 0){
            result = "fizzbuzz"
          // console.log(result)
        } else if ( x % 3 === 0) {
            result = "fizz"
           // console.log(result)
        } else if ( x % 5 === 0){
            result = "Buzz"
          //  console.log(result)
        } else {
            result = x;
           // console.log(result);
        }
        }
        return result
        
}

const check = fizzbuzz(45);
console.log(check);
