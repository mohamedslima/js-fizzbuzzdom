for (let i = 1; i <= 100; i++) {
    let result = i;
    if ( (i % 3 === 0) && (i % 5 === 0) ) {
       result = "FizzBuzz";
    } else if ( i % 3 === 0 ) {
        result = "Fizz";
    } else if (i % 5 === 0 ) {
        result = "Buzz";
    } 
    // OUTPUT
    console.log(result);
}

