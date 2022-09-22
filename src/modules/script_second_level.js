import {resultSecondLevel} from './script'
import {render, initConfetti} from './script_confetti'

let secondLevel = document.querySelector('.second-level')

function animationOnOpening2(){
    secondLevel.classList.add('displayStartWindowBlock')
}



let counterSecondLevel = 0;



let correctAnswer = document.querySelector('#correct-answer')

function getAnswer(event){
    if(event.target.closest('.correct-answer')){
        counterSecondLevel++;
        localStorage.setItem('counterSecondLevel', counterSecondLevel)
        correctAnswer.classList.add('rotate_style')
        canvas.classList.add('confetti_show')
        resultSecondLevel()
        setTimeout(function(){
            initConfetti();
            render();  
            setTimeout(function(){
                window.location.href = './start.html'
            }, 7000)
        }, 1000)
    }
    else if(event.target.closest('.wrong-answer')){
        event.target.closest('.wrong-answer').querySelector('.wrong-answer-rotate').classList.toggle('rotate_style')
    }
}
 

export {animationOnOpening2, getAnswer}