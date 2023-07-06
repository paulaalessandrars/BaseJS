function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


const pessoa1 = {
    nome: 'Morgane CEO',
    idade: 27,
};

const pessoa2 = {
    nome: 'Caio da Morgane',
    idade: 26,
};

const animal1 = {
    nome: 'Pedro taradão',
    idade: 3,
    raça: 'Caramelo sensual',
};

const animal2 = {
    nome: 'Pimpim charmosa',
    idade: 4,
    raça: 'VIRA LATA FLOCOS',
};

console.log(calculaIdade.call(pessoa2, 30));

console.log(calculaIdade.call(pessoa1, 50));

console.log(calculaIdade.call(animal1, 5));

console.log(calculaIdade.call(animal2, 4));