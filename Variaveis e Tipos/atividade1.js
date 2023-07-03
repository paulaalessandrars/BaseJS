//ATIVIDADE 1 - VERIFICAR PALINDROMO

//primeira solução:

function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));

//segunda solução:

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght -1 -1]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("omo"))


