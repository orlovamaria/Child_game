let startWindow = document.querySelector('.start-window')

function animationOnOpeningStart(){
    startWindow.classList.add('displayStartWindowBlock')
}

animationOnOpeningStart()


let firstLevelStart = document.querySelector('.first-level-start');
let secondLevelStart = document.querySelector('.second-level-start');
let thirdLevelStart = document.querySelector('.third-level-start');

firstLevelStart.addEventListener('click', function(){
    window.location.href = '../index/first_level.html'
})

secondLevelStart.addEventListener('click', function(){
    window.location.href = '../index/second_level.html'
})

thirdLevelStart.addEventListener('click', function(){
    window.location.href = '../index/third_level.html'
})

