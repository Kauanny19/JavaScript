const tamanho = 10;

let numeros = [5,14,19,8,20,52,47,2,26,110];

for(let i = 0; i < numeros.length; i++){
    let num = numeros[i];
    if ( num % 2 === 0){
        console.log('O número '+num+' é par');
    }
    else{
        console.log('O número '+num+' é ímpar');
    }
}
