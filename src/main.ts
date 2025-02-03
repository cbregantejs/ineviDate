import './style.css'
import cinamonroll from './cinamonroll.gif';


const btnNo = document.querySelector<HTMLButtonElement>('#noBtn')!;

btnNo.addEventListener('mouseenter', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - btnNo.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - btnNo.offsetHeight));
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
});

const btnYes = document.querySelector<HTMLButtonElement>('#yes')!;
btnYes.addEventListener('click', () => {
    const celebration = document.createElement('div');
    celebration.classList.add('celebration');
    const img = document.createElement('img');
    img.src = cinamonroll;
    celebration.appendChild(img);

    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = 'Lo supe desde el principio 💕';
    }
    document.querySelector('contaier-button')?.remove();
    document.querySelector('.contaier-button')?.remove();
    
    const app = document.getElementById('app');
    app?.appendChild(celebration);

    celebration.animate([
      { transform: 'scale(0)' },
      { transform: 'scale(1)' }
    ], {
      duration: 2000,
      easing: 'ease-out'
    });
  });