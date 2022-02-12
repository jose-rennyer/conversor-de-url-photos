let link = document.querySelector("#campo")
let imagem = document.querySelector("#imagem")
function converter(){
    imagem.setAttribute("src", link.value)
}

let url = "https://dog.ceo/api/breeds/image/random"
async function randomdogimage(){
    const requisicao = await fetch(url)
    const imgconvertida = await requisicao.json()
    imagem.setAttribute("src", imgconvertida.message)
    link.value = imgconvertida.message
}
function limpar(){
    link.value = ""
}
