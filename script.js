import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

render()

function render() {
  document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

document.addEventListener('click', (e) => {
  const badge = document.querySelector('.badge-wraper')

  if (e.target.dataset.accept) {
    return badge.innerHTML = `
          <img src="images/badge-like.png" id="like-img" class="like-img" alt="">
      `

  } else if (e.target.dataset.reject) {
    return badge.innerHTML = `
        <img src="images/badge-nope.png" id="like-img" class="like-img" alt="">
      `
  }

})