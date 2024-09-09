 
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')

const randomColor = () =>{
    const hex = "0123456789ABCDEF"
     let color = "#"
     
      for(let i=0; i<6; i++){
        const randomNumber = Math.floor(Math.random() * 16)
        
        color += hex[randomNumber]
      }
      return color
}
let intervalId
const startChangeColor = () =>{
    const bodyColor = () =>{
        document.body.style.backgroundColor = randomColor()
    }
    if(!intervalId){
   intervalId = setInterval(bodyColor, 1000)
    }
    startButton.setAttribute('disabled', '')
    stopButton.removeAttribute('disabled')
}
const stopChangeColor = () =>{
    clearInterval(intervalId)
    intervalId = null
   startButton.removeAttribute('disabled')
    stopButton.setAttribute('disabled','')
}
startButton.addEventListener('click',startChangeColor);
stopButton.addEventListener('click',stopChangeColor)

