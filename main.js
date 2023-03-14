// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartThis = document.querySelectorAll(".like-glyph")

heartThis.forEach = (heart) => heart.addEventlistener('click', clickIt)


clickIt = (event) => {
mimicServerCall()
.then(list => {
  if(list && event.target.innerHTML === EMPTY_HEART){
    event.target.className = 'activated-heart'
    event.target.innerHTML = FULL_HEART
  }else if (list || e.target.innerHTML === FULL_HEART){
    event.target.className = 'like-glyph'
    event.target.innerHTML = EMPTY_HEART
  }
})
.catch(function(error){
  const modal = document.querySelector('div#modal')
  modal.className = ''
  const p = document.querySelector(['p#modal-message'])
  p.innerHTML = error
  setTimeout(function () {
    return modal.className = 'hidden'
  }, 3000)
})
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
