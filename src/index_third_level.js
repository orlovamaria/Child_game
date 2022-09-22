import {animationOnOpening3} from './modules/script_third_level'
import {resultFirstLevel} from './modules/script'
import { resultSecondLevel } from './modules/script'
import { colorCake1 } from './modules/script'
import { getUsersList } from './modules/script_getUsersList'
import { checkDrawLine } from './modules/script_third_level'
import { mouseMoveLine } from './modules/script_third_level'
import { checkResultThirdLevel } from './modules/script_third_level'
import { bodyOpen } from './modules/script'

import './scss/style.css'


    bodyOpen()
    animationOnOpening3()
    resultFirstLevel()
    resultSecondLevel()
    colorCake1()
    getUsersList()
    let canvas3 = document.getElementById('canvas3')
    canvas3.addEventListener('mousedown', checkDrawLine)
    canvas3.addEventListener('mousemove', mouseMoveLine)
    
    let buttonDone = document.querySelector('.demo-round')
    buttonDone.addEventListener('click', checkResultThirdLevel)


