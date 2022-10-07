function carregar(){

var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()

msg.innerHTML = (`Agora são ${hora}:${min}:${sec}`)

if (min < 10) {
  min = msg.innerHTML = `Agora são ${hora}:0${min}:${sec}` 
} else if(sec < 10){

  sec = msg.innerHTML = `Agora são ${hora}:${min}:0${sec}` 
}

if(hora >= 0 && hora < 12){
//BOM DIA!!
  foto.src ="manha.jpg"
  document.body.style.background = '#39546c'
  document.querySelector("#msg").style.background = '#1a354a'
  document.querySelector("#msg").style.color = 'white'

}else if(hora >= 12 && hora < 18){
//BOA TARDE!!

  foto.src ="fototarde.jpg"
  document.body.style.background = '#89896f'
  document.querySelector("#msg").style.background = '#6d5843'
  document.querySelector("#msg").style.color = 'white'


}else{
  //BOA NOITE!!

  foto.src ="noite.jpg"
  document.body.style.background = '#121f24'
  document.querySelector('#msg').style.background = "#06151a"
  document.querySelector('#msg').style.color = 'white'

}

}

function realTime(){
  setInterval( carregar,1000)

}