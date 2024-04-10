const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let CurrentSlide = 0;

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
}

function prevslide(){
    hideSlide()
    if(CurrentSlide === 0){
        CurrentSlide = slider.length -1
    } else {
        CurrentSlide--
    }
    showSlide()
}
nextSlide
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevslide)