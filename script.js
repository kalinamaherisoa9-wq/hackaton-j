//ScrollUp
const scrollBtn = document.querySelector('.btn--scroll');

if(window.scroll > 300){
  scrollBtn.style.display = block;
}

scrollBtn.addEventListener('click',() => {
  window.scrollY({
    top:0,
    behavior:'smooth',
  })
});