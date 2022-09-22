let secondLevel = document.querySelector('.second-level')

function animationOnOpening2(){
    secondLevel.classList.add('displayStartWindowBlock')
}

animationOnOpening2()

let counterSecondLevel = 0;


let blockResultWrapper = document.querySelector('.second-level-blocks-result-wrapper')
let correctAnswer = document.querySelector('#correct-answer')

function getAnswer(event){
    if(event.target.closest('.correct-answer')){
        counterSecondLevel++;
        localStorage.setItem('counterSecondLevel', counterSecondLevel)
        correctAnswer.classList.add('rotate_style')
        canvas.classList.add('confetti_show')
        cakeTwo.classList.add('orange-cake')
        resultSecondLevel()
        setTimeout(function(){
            initConfetti();
            render();  
            setTimeout(function(){
                window.location.href = '../index/start.html'
            }, 7000)
        }, 1000)
    }
    else if(event.target.closest('.wrong-answer')){
        event.target.closest('.wrong-answer').querySelector('.wrong-answer-rotate').classList.toggle('rotate_style')
    }
}

blockResultWrapper.addEventListener('click', getAnswer)

