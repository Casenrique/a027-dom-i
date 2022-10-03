//Exercício 1

const frutas = ["laranja", "limão", "uva"];

const laranja = document.getElementById("fruta-1")
laranja.innerHTML += frutas[0]

const limao = document.getElementById("fruta-2")
limao.innerHTML += frutas[1]

const uva = document.getElementById("fruta-3")
uva.innerHTML += frutas[2]

// let adicionando = null

// const adicionaFruta = () => {
//     for (let i = 0; i < frutas.length; i++)
//         adicionando = document.getElementById(`frutas-${i}`)
//         adicionando.innerHTML += frutas[i]
// }

// adicionaFruta()

//Acredito que dê para fazer uma função variando o índice [i]

//Exercício 2 Exercício 3

const frutaAdicionada = () => {
    let entradaFruta = document.getElementById("fruta");
    console.log(entradaFruta.value)
    frutas.push(entradaFruta.value)
    console.log(frutas)
    const frutaUsuario = document.getElementById("fruta-4")
    frutaUsuario.innerHTML += entradaFruta.value
    entradaFruta.value = ""
}

