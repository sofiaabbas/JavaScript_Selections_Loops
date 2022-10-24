console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i+=2){
    console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for ( let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }else if (i % 3 == 0){
        console.log("FIZZ");
    }else if (i % 5 == 0){
        console.log("BUZZ");
    }
}

// Exercise 3 Section
//Part 1:
let counter = 1;
do {
    console.log(counter);
    counter+=2;
}while (counter <= 100);



//Part 2
counter = 1;
while (counter <= 100);{
    if (counter % 3 == 0 && counter % 5 == 0){
        console.log("FIZZBUZZ");
    }else if (counter % 3 == 0){
        console.log("FIZZ");
    }else if (counter % 5 == 0){
        console.log("BUZZ");
    }
    counter++
}

//Exercise 4 Section
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100); 
console.log("n" , n);
console.log("value", value);

for(let i = 0; i <= n; i++){
    if (i == value){
        console.log("Found value!");
        break;
    }
    if (i == n){
        console.log("Epic fail");
    }

}

//Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++){
    console.log(i);
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0){
        console.log("FIZZBUZZ");
    }else if (i % fizzDivisor == 0){
        console.log("FIZZ");
    }else if (i % buzzDivisor == 0){
        console.log("BUZZ");
    }
}