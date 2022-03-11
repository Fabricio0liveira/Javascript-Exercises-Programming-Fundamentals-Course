# Exercícios - Curso Fundamentos de Programação

1. Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.
* Exemplos:
    * cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
    * cumprimentar("Maria") // retornará "Olá, Maria!"

2. Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.

Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e
desconsidere também dias decorridos desde o último aniversário.
* Exemplos: 
    * converterIdadeEmAnosParaDias(25) // retornará 9125
    * converterIdadeEmAnosParaDias(70) // retornará 25550

3. Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.

* Exemplos:
    * calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"

4. Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

* Exemplos:
    * nomeDoMes(1) // retornará "janeiro"  
    * nomeDoMes(4) // retornará "abril"

5. Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
* Exemplos:
    * maiorOuIgual(0, 0) // retornará true
    * maiorOuIgual(0, "0") // retornará false
    * maiorOuIgual(5, 1) // retornará false

6. Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
* Exemplos:
    * inverso(true) // retornará false
    * inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
    * inverso(-2000) // retornará 2000
    * inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"

7. Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e retorne true se
o parâmetro numero (o primeiro) está entre minimo e maximo.
* Exemplos:
    * estaEntre(10, 50, 100) // retornará false
    * estaEntre(16, 10, 160) // retornará true
    * estaEntre(3, 30, 150) // retornará false
    * estaEntre(8, 1, 80) // retornará true

8. Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
    * Exemplo:
        * multiplicar(5, 5) // retornará 25
        * multiplicar(0, 7) // retornará 0

9. Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
    * Exemplos:
        * repetir("código", 2) // retornará ["código", "código"]
        * repetir(7, 3) // retornará [7, 7, 7]

10. Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
    * Exemplos:
        * simboloMais(2) // retornará "++"
        * simboloMais(4) // retornará "++++"

11. Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
* Exemplos:
    * receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
    * receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

12. Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
Exercícios - Curso Fundamentos de Programação 3
* Exemplos:
    * removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

💡 A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.

13. Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
    * Exemplos:
        * filtrarNumeros(["Javascript", 1, "3", "Web", 20]) //retornará [1, 20]
        * filtrarNumeros(["a", "c"]) // retornará []

14. Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
    * Exemplos:
        * objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
        }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
        * objetoParaArray({
        codigo: 11111,
        preco: 12000
        }) // irá retornar [["codigo", 11111], ["preco", 12000]]

15. Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
    * Exemplos:
        * receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
        * receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]