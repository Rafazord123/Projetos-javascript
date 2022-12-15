 
// function getMaiorNum(){
//     if(num1 > num2){
//         return num1;
//     }else if (num2 > num1){

//         return num2;
//     }else {
//         console.log('Os dois números tem o mesmo valor/O valor está incorreto')
//     }
// }
// console.log(getMaiorNum(num1,num2));


// Mesmo codigo so que de maneira mais curta

const maiorNumero = (num1, num2) => num1 > num2 ? num1 : num2;
console.log(maiorNumero(150,100));