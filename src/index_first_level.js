import {animationOnOpening1} from './modules/script_first_level'
import {dragAndDropFirstTask} from './modules/script_first_level'
import {checkResultFLevel} from './modules/script_first_level'
import { getUsersList } from './modules/script_getUsersList'
import { bodyOpen } from './modules/script'



import './scss/style.css'



    bodyOpen()
    animationOnOpening1()
    let buttonRound = document.querySelector('.demo-round')
    buttonRound.addEventListener('click', checkResultFLevel)
    dragAndDropFirstTask()
    getUsersList()

