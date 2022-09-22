import { animationOnOpening2 } from './modules/script_second_level'
import {getAnswer} from './modules/script_second_level'
import {resultFirstLevel} from './modules/script'
import { resultSecondLevel } from './modules/script'
import { colorCake1 } from './modules/script'
import { getUsersList } from './modules/script_getUsersList'
import { bodyOpen } from './modules/script'

import './scss/style.css'



    bodyOpen()
    animationOnOpening2()
    resultFirstLevel()
    resultSecondLevel()
    colorCake1()
    getUsersList()
    
    let blockResultWrapper = document.querySelector('.second-level-blocks-result-wrapper')
    blockResultWrapper.addEventListener('click', getAnswer)

