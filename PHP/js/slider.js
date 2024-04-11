const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let CurrentSlide = 0;
let time = 0

function hideSlide(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlide(){
    slider[CurrentSlide].classList.add('on')
}

function nextSlide(){
    hideSlide()
    if(CurrentSlide === slider.length -1){
        CurrentSlide = 0
    } else {
        CurrentSlide++
    }
    showSlide()
    time = 0;
}

function prevslide(){
    hideSlide()
    if(CurrentSlide === 0){
        CurrentSlide = slider.length -1
    } else {
        CurrentSlide--
    }
    showSlide()
    time = 0;
}

setInterval(countdown,1000)

function countdown(){
  time++
  if(time === 15){
    nextSlide();
    time = 0;
  }
}

nextSlide
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevslide)