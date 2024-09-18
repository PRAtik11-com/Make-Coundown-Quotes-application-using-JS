let hrs = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let answerand = document.getElementById('quotes')

let arr1 = [
  "Rather than a staid gold wedding band, some grooms-to-be are choosing bands made from unorthodox materials like a used Jack Daniel’s cask or a dinosaur bone.",
  "Male-oriented jewelry is bucking the trend and providing men with a vast array of styles that include 21st century furnishes.",
  "If you and your partner, like many couples around the world, have bonded through a mutual obsession for DC, then these might just make for a perfectly nerdy twist on your I do’s.",
  "Manly Bands celebrates every type of man by offering couples the option to choose the ring that suits their man best, and even customize something totally unique!",
  "The formerly nondescript rings symbolizing our love for our partners can now symbolize our love for our favorite superheroes too.",
]

setInterval(function () {
  let time = new Date()
  hrs.innerHTML = (time.getHours() + (time.getHours() < 10 ? '0' : '')) 
  min.innerHTML = (time.getMinutes() + (time.getMinutes() < 10 ? '0' : ''))
  sec.innerHTML = (time.getSeconds() + (time.getSeconds() < 10 ? '0' : ''))
  
  let answ = Math.floor(Math.random() * arr1.length)
  answerand.innerHTML = arr1[answ]
}, 1000)
