// Da riordinare


// Adding hide stuff to head
const head = document.getElementsByTagName('head')[0];
if (!document.getElementsByTagName('style')[0]) {
  head.innerHTML += `<style></style>`
}
const style = document.getElementsByTagName('style')[0];
const hide = `.hiding{
  animation-name: hide;
  animation-timing-function: linear;
}
.hidden{display: none}

@keyframes hide {
  100% {
     opacity: 0;
  }
}`
style.innerText += hide;



const amici = {
  primo: document.getElementsByTagName('span')[0],
  secondo: document.getElementById('secondo'),
  terzo: document.getElementById('terzo'),
  quarto: document.getElementById('quarto')
}

hider(amici.quarto, 3000, ()  => { 
  amici.primo.innerHTML = 'Eravamo tre amici al bar, uno si è impiegato in una banca <i class="fas fa-money-check-alt"></i>';
  hider(amici.terzo, 3000, () => {
    amici.primo.innerHTML  = 'Eravamo due amici al bar, uno è andato con la donna al mare <i class="fas fa-umbrella-beach"></i>';
    hider(amici.secondo, 3000, () => {
      amici.primo.innerHTML  = 'Son rimasto io da solo al bar <i class="fas fa-wine-bottle"></i><i class="fas fa-wine-bottle"></i><i class="fas fa-wine-bottle"></i>';
    })
  })})

function hider(element, timing=0, action) {
  
  element.style.animationDuration =  `${timing/1000}s`;

  element.classList.add('hiding');
  setTimeout(() => {
    element.classList.add('hidden');
    element.classList.remove('hiding');
    if (action) {
      action()    

    }
  }, timing)
}




