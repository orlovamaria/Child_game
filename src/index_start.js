import { animationOnOpeningStart } from './modules/script_start'
import {transitionToTheFirstLevel} from './modules/script_start'
import { transitionToTheSecondLevel } from './modules/script_start'
import { transitionToTheThirdLevel } from './modules/script_start'
import {resultFirstLevel} from './modules/script'
import { resultSecondLevel } from './modules/script'
import { colorCake1 } from './modules/script'
import { getPrize } from './modules/script'
import { getUsersList } from './modules/script_getUsersList'
import { bodyOpen } from './modules/script'

import './scss/style.css'


    bodyOpen()
    animationOnOpeningStart()
    resultFirstLevel()
    resultSecondLevel()
    colorCake1()
    getPrize()
    getUsersList()
    let firstLevelStart = document.querySelector('.first-level-start');
    firstLevelStart.addEventListener('click', transitionToTheFirstLevel)
    
    
    let secondLevelStart = document.querySelector('.second-level-start');
    secondLevelStart.addEventListener('click', transitionToTheSecondLevel)
    
    let thirdLevelStart = document.querySelector('.third-level-start');
    thirdLevelStart.addEventListener('click', transitionToTheThirdLevel)
    


