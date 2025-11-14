

function toggleMode() {
  const html = document.documentElement
 html.classList.toggle('light')

  //versão alternativa abaixo

  //if(html.classList.contains("light")){
  //html.classList.remove("light"){
  //else{
  //html.classList.add("light")
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adiiconar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //se tiver sem light mode, manter a imagem normal
}
