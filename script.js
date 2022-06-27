let solucao = document.querySelector('.solucao')
let butao = document.querySelector('#butao')

let numero1 = document.querySelector('#txt-num1')
let numero2 = document.querySelector('#txt-num2')
let numero3 = document.querySelector('#txt-num3')
let numeros = []


butao.addEventListener('click', () => {
    if (numero1.value.length === 0 || numero2.value.length === 0 || numero3.value.length === 0) {
        alert('[ERRO] campo vazio digite os numeros e tente novamente!')
    } else if (numero1.value === numero2.value || numero2.value === numero3.value || numero1.value === numero3.value) {
        alert('[ERRO] os numeros dos campos não podem ser identicos!')

    } else {
        let num1 = Number(numero1.value)
        let num2 = Number(numero2.value)
        let num3 = Number(numero3.value)
        numeros = [num1, num2, num3]
        let maior = numeros[0]
        let menor = numeros[0]
        let interMedio = numeros[0]
        for (let cont in numeros) {
            if (numeros[cont] > maior) {
                maior = numeros[cont]
            }
            if (numeros[cont] < menor) {
                menor = numeros[cont]
            }
            if (numeros[cont] < maior && numeros[cont] > menor) {
                interMedio = numeros[cont]
            }
        }
        solucao.style.display = 'block'
        solucao.innerHTML = ` <p>O maior numero é: <strong>${maior}</strong></p>`
        solucao.innerHTML += `<p> O menor numero é: <strong>${menor}</strong></p>`
        solucao.innerHTML += ` <p> O numero intermédio é: <strong>${interMedio}</strong></p>`


    }

})