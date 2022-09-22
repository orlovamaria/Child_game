let thirdLevel = document.querySelector('.third-level')

function animationOnOpening3(){
    thirdLevel.classList.add('displayStartWindowBlock')
}

animationOnOpening3()


let canvas3 = document.getElementById('canvas3')
let ctx = canvas3.getContext("2d");

let letterS = new Image();
letterS.src = "../images/canvas3/Frame S.png";
let objLetterS = {
    img: letterS,
    x: 120,
    y: 120,
};

let letterT = new Image();
letterT.src = "../images/canvas3/Frame T.png";
let objLetterT = {
    img: letterT,
    x: 400,
    y: 400,
};

let letterR1 = new Image();
letterR1.src = "../images/canvas3/Frame R1.png";
let objLetterR1 = {
    img: letterR1,
    x: 650,
    y: 200,
};

let letterA = new Image();
letterA.src = "../images/canvas3/Frame A.png";
let objLetterA = {
    img: letterA,
    x: 1000,
    y: 400,
};

let letterW = new Image();
letterW.src = "../images/canvas3/Frame W.png";
let objLetterW = {
    img: letterW,
    x: 1150,
    y: 150,
};

let letterB = new Image();
letterB.src = "../images/canvas3/Frame B.png";
let objLetterB = {
    img: letterB,
    x: 1470,
    y: 350,
};

let letterE = new Image();
letterE.src = "../images/canvas3/Frame E.png";
let objLetterE = {
    img: letterE,
    x: 1270,
    y: 650,
};

let letterR2 = new Image();
letterR2.src = "../images/canvas3/Frame R2.png";
let objLetterR2 = {
    img: letterR2,
    x: 670,
    y: 650,
};

let letterR3 = new Image();
letterR3.src = "../images/canvas3/Frame R3.png";
let objLetterR3 = {
    img: letterR3,
    x: 200,
    y: 700,
};

let letterY = new Image();
letterY.src = "../images/canvas3/Frame Y.png";
let objLetterY = {
    img: letterY,
    x: 40,
    y: 400,
};

letterS.onload = function(){
    ctx.drawImage(objLetterS.img, objLetterS.x, objLetterS.y)
}
letterT.onload = function(){
    ctx.drawImage(objLetterT.img, objLetterT.x, objLetterT.y)
}
letterR1.onload = function(){
    ctx.drawImage(objLetterR1.img, objLetterR1.x, objLetterR1.y)
}
letterA.onload = function(){
    ctx.drawImage(objLetterA.img, objLetterA.x, objLetterA.y)
}
letterW.onload = function(){
    ctx.drawImage(objLetterW.img, objLetterW.x, objLetterW.y)
}
letterB.onload = function(){
    ctx.drawImage(objLetterB.img, objLetterB.x, objLetterB.y)
}
letterE.onload = function() {
	ctx.drawImage(objLetterE.img, objLetterE.x, objLetterE.y);
}
letterR2.onload = function() {
	ctx.drawImage(objLetterR2.img, objLetterR2.x, objLetterR2.y);
}
letterR3.onload = function() {
	ctx.drawImage(objLetterR3.img, objLetterR3.x, objLetterR3.y);
}
letterY.onload = function() {
	ctx.drawImage(objLetterY.img, objLetterY.x, objLetterY.y);
}


let lineArr = [];

function isInside(x, y , obj) {
    if(x > obj.x && x < obj.x + obj.img.width) {
        if( y > obj.y && y < obj.y + obj.img.height) {
            return true;
        }
    }

    return false;
}

function getStartObjectByCountEndedLine(countEndedLine) {
    switch (countEndedLine) {
        case 0:{
            return objLetterS;
        }
        case 1: {
            return objLetterT;
        }
        case 2: {
            return objLetterR1;
        }
        case 3: {
            return objLetterA;
        }
        case 4: {
            return objLetterW;
        }
        case 5: {
            return objLetterB;
        }
        case 6: {
            return objLetterE;
        }
        case 7: {
            return objLetterR2;
        }
        case 8: {
            return objLetterR3;
        }
    }
}

function getFinishObjectByCountEndedLine(countEndedLine) {
    switch (countEndedLine) {
        case 0: {
            return objLetterT;
        }
        case 1: {
            return objLetterR1;
        }
        case 2: {
            return objLetterA;
        }
        case 3: {
            return objLetterW;
        }
        case 4: {
            return objLetterB;
        }
        case 5: {
            return objLetterE;
        }
        case 6: {
            return objLetterR2;
        }
        case 7: {
            return objLetterR3;
        }
        case 8: {
            return objLetterY;
        }
    }
}

canvas3.addEventListener('mousedown', function(event){
    var x = event.offsetX;
    var y = event.offsetY;

    //если массив пустой
    if(lineArr.length === 0) {
        if(isInside(x, y, objLetterS)) {
            lineArr.push({
                state: 0,
                startX: x,
                startY: y,
                finishX: -1,
                finishY: -1
            })
        }
        else {
            // добавить звук
        }
    }
    else {
        let enndedLine = lineArr.filter(function(elem){
            if(elem.state === 1){
                return elem;
            }
        })

        switch(lineArr[lineArr.length - 1].state) {
            case 0: {
                lineArr[lineArr.length - 1].finishX = x;
                lineArr[lineArr.length - 1].finishY = y;

                let curObj = getFinishObjectByCountEndedLine(enndedLine.length);

                if(isInside(x, y, curObj)) {
                    lineArr[lineArr.length - 1].state = 1;
                }
                else {
                    lineArr[lineArr.length - 1].state = 2;
                }

                break;
            }
            case 1: {
                let curObj = getStartObjectByCountEndedLine(enndedLine.length);

                if(isInside(x, y, curObj)) {
                    lineArr.push({
                        state: 0,
                        startX: x,
                        startY: y,
                        finishX: -1,
                        finishY: -1
                    })
                }
                else {
                    // добавить звук
                }   

                break;
            }
            case 2: {
                lineArr.pop();

                let curObj = getStartObjectByCountEndedLine(enndedLine.length);

                if(isInside(x, y, curObj)) {
                    lineArr.push({
                        state: 0,
                        startX: x,
                        startY: y,
                        finishX: -1,
                        finishY: -1
                    })
                }
                else {
                    // добавить звук
                } 

                break;
            }
        }
    }

    myDraw(event);
})

canvas3.addEventListener('mousemove', function(event){
    myDraw(event);
})

function myDraw(event) {
    ctx.clearRect(0,0,1700, 800);

    ctx.drawImage(objLetterS.img, objLetterS.x, objLetterS.y);
    ctx.drawImage(objLetterT.img, objLetterT.x, objLetterT.y);
    ctx.drawImage(objLetterR1.img, objLetterR1.x, objLetterR1.y);
    ctx.drawImage(objLetterA.img, objLetterA.x, objLetterA.y);
    ctx.drawImage(objLetterW.img, objLetterW.x, objLetterW.y);
    ctx.drawImage(objLetterB.img, objLetterB.x, objLetterB.y);
    ctx.drawImage(objLetterE.img, objLetterE.x, objLetterE.y);
    ctx.drawImage(objLetterR2.img, objLetterR2.x, objLetterR2.y);
    ctx.drawImage(objLetterR3.img, objLetterR3.x, objLetterR3.y);
    ctx.drawImage(objLetterY.img, objLetterY.x, objLetterY.y);


    var x = event.offsetX;
    var y = event.offsetY;

    lineArr.forEach(elem => {
        ctx.beginPath()

        switch(elem.state) {
            case 0: {
                ctx.strokeStyle = 'blue'
                ctx.lineWidth = '5'
                ctx.moveTo(elem.startX, elem.startY)
                ctx.lineTo(x, y)
                break;
            }
            case 1: {
                ctx.strokeStyle = 'green'
                ctx.lineWidth = '5'
                ctx.moveTo(elem.startX, elem.startY)
                ctx.lineTo(elem.finishX, elem.finishY)
                break;
            }
            case 2: {
                ctx.strokeStyle = 'red'
                ctx.lineWidth = '5'
                ctx.moveTo(elem.startX, elem.startY)
                ctx.lineTo(elem.finishX, elem.finishY)
                break;
            }
        }

        ctx.stroke()
    })
}



// 
const colorCake = localStorage.setItem("color", "orange")
let buttonDone = document.querySelector('.demo-round')
let button_thirdLevel = document.querySelector('#button_thirdLevel')
let buttonSpan_thirdLevel = document.querySelector('#buttonSpan_thirdLevel')
let right_thirdLevel = document.querySelector('.right_thirdLevel')
let try_again_thirdLevel = document.querySelector('.try-again_thirdLevel')

buttonDone.addEventListener('click', function(){
    if(lineArr.length === 9){
        localStorage.setItem('lineArr', JSON.stringify(lineArr))
        button_thirdLevel.classList.toggle('open')
        buttonSpan_thirdLevel.classList.toggle('open')
        right_thirdLevel.style.display = 'block'
        try_again_thirdLevel.style.display = 'none'
        colorCake1()
        setTimeout(function(){
            initConfetti();
            render(); 
            setTimeout(function(){
                window.location.href = '../index/start.html'
            }, 7000)
        },1000)
    }
    else{
        button_thirdLevel.classList.toggle('open')
        buttonSpan_thirdLevel.classList.toggle('open')
        right_thirdLevel.style.display = 'none'
        try_again_thirdLevel.style.display = 'block'
    }
})



