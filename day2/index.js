setInterval(setClock, 1000)//runs setclock methid every 1000seconds



const hourHand = document.getElementsByClassName('hand hour')
console.log(hourHand);
const minuteHand = document.getElementsByClassName('hand minute')
const secondHand = document.getElementsByClassName('hand second')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand[0], secondsRatio)
    setRotation(minuteHand[0], minutesRatio)
    setRotation(hourHand[0], hoursRatio)
  }
  

  
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }
  
  setClock()