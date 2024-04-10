const slider = document.querySelectorAll('slider');
const btnPrev = document.querySelectorAll('prev-button');
const btnNext = document.querySelectorAll('next-button');

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

btnNext.addEventListener('click', () => console.log('clicado'))
btnPrev.addEventListener('click', () => console.log('clicado'))

console.log(slider)