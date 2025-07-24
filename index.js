let a = 10
const b = "10"

console.log(a === b)
console.log(a == b)
console.log(a !== b)

//= vira atribuição de valor
//=== valida não so o conteudo mas tambem o tipo de dado
//== fala apenas o conteudo mas não tipo de dado
//!== fala se é diferente 

console.log(a != b && typeof a == 'String')

//&& operador logico, exemplo perguntar se a é maior que b sendo as duas condiçoes verdadeiras ao mesmo tempo usado para comparar os dados

//( typeof a == 'String' ) isso vai perguntar se as duas afirmaçoes fazendo elas serem comparadas e se são verdadeiras ou não 


//---------------------------------------------------------------------------------------------------------------------------



let cor = "verde"

if (cor === 'verde') {
    console.log('siga')
                     }
 else('Pare')

 //if/else significa se ou senão dando o exemplo do semafaro para interpretar melhor

 //----------------------------------------------------------------------------------------------------------------------

let n = 7;

for(let i = 0; i<=10; i++) {

    console.log(` ${i} x ${n} = ${i * n} `);
}
 // este é um laço de repetiçao e as crases sçao utilizadas para  Escrever strings com múltiplas linhas e Precisa colocar variáveis ou expressões dentro do texto
 
for(let i = 0; i<=10; i++) {

    console.log(` ${i} x ${n} = ${i * n} `);
    console.log(i + " X " + n + " = " + (i * n ));
}
//+ serve para concatenar ou em outras palavras juntar as informaçoes no console.log



//-------------------------------------------------------------------------------------------------------------------------


function somar(x1, x2){
  return x1 + x2;
}

let resultado = somar(1, 2)
console.log(resultado)

// aqui foi criado uma função de soma e logo apos pedi o return para vir o resultado e logo após com variavel resultado puxei o dado final 

function calc(x1, x2, operador){
    return eval(` ${x1} ${operador} ${x2}`);

}

let resultadocalc = calc(1,2, "x")

console.log(resultadocalc);

//aqui está uma funçao que utiliza o eval que serve para avaliar uma expressão em forma de string como código executável

(Function(X1, X2, operadorA)){

    return eval(`${x1} ${x2} ${operadorA}`)
};(1,2,"*")

//esta é uma funçao anonima que pode ser chamada apenas após a criação dela 


let calcc = (x1, x2, operador) => {

    return eval(` ${x1} ${operador} ${x2}`)
}

//aqui está uma função arrow onde 

 

