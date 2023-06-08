import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
render()

function render() {
  document.getElementById('card').innerHTML = currentDog.getDogHtml()
}