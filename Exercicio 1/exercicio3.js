//Escreva uma funçao que recebe um némero e
// retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número não é divisivel por 3 e 5 = Retorna o o próprio número
//Checar se o número é realmente um número = Retorna o próprio número
// Use a funçao com os números de 0 a 100

function getDivisao(num) {
    if (typeof num !== 'number') {
        return num;
    }else if (num % 3 === 0 && num % 5 === 0) {
        return 'FiizBuzz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else
        return num;
}
console.log( getDivisao(500));
for (let i = 0; i <= 100; i++) {
    console.log(i, getDivisao(i))
}

