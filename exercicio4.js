const idade = -10;
if(idade < 0){
    console.log("Número inválido");
}
else if (idade >= 0 && idade < 13){
    console.log("Criança");
}
else if (idade >= 13 && idade < 18){
    console.log("Adolescente");
}
else if (idade >= 18 && idade < 65){
    console.log("Adulto");
}
else{
    console.log("Idoso");
}