let numbers = [7, 19, 21, 23, 11, 29, 17, 2];

// Estrutura de repetição usando forEatch
numbers.forEach(num => {
    if (num % 2 === 0){
        console.log("O número", num, "é par");
    }
    else{
         console.log("O número", num, "é ímpar");
    }
});