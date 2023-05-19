let startBtn = document.querySelector('.startBtn')
let mainStartBtn = document.querySelector('.mainStart')

let lapBtn = document.querySelector('.lapBtn')

let time = document.querySelector('.time')

let lapsCont = document.querySelector('.lapsContainer')
let m = 0
let s = 0
let ms = 0

let minutes = 0
let seconds = 0
let miliSeconds = 0

let laps = []
let lapPoint = 1

let isStarted = false

startBtn.addEventListener('click', () => {
    if(isStarted === false){
        int = setInterval(displayTime, 10)  
    }
    else{
        clearInterval(int)
    }
    changeStartBtn()
    lapResetCheck()
})

function displayTime () {
    miliSeconds++
    if(miliSeconds >= 60){
        miliSeconds = 0;
        seconds++
    }
    if(seconds >= 60){
        seconds = 0
        minutes++
    }

    m = minutes < 10 ? '0' + minutes : minutes
    s = seconds < 10 ? '0' + seconds : seconds
    ms = miliSeconds < 10 ? '0' + miliSeconds : miliSeconds

    time.innerHTML = `${m}:${s},${ms}`
}

function changeStartBtn() {
    if(isStarted === false) {
        isStarted = true
        
        startBtn.innerHTML = "Stop"
        startBtn.classList.add('stopBtn')
        mainStartBtn.classList.add('mainStop')
    }
    else{
        isStarted = false
        startBtn.innerHTML = "Start"
        startBtn.classList.remove('stopBtn')
        mainStartBtn.classList.remove('mainStop')
    }
}

function lapResetCheck(){
    if(isStarted === false){
        lapBtn.innerHTML = "Reset"
    }
    else{
        lapBtn.innerHTML = "Lap"
    }
}

function displayLaps(){
    lapPoint++
    lapsCont.innerHTML = ""
    if (laps.length > 0){
        laps.map(item => {
            lapsCont.innerHTML += `
                <div class="lap margin__container">
                    <span>Lap ${item.point}</span>
                    <span>${item.time}</span>
                </div>
            `
        })
    }
}

lapBtn.addEventListener('click', () => {
    if (isStarted === false) {
        m = 0
        s = 0
        ms = 0

        minutes = 0
        seconds = 0
        miliSeconds = 0

        lapsCont.innerHTML = ""
        laps = []
        lapPoint = 1
        time.innerHTML = "00:00,00"
    }
    else{
        laps.push(
            {
                point: lapPoint,
                time: m + ":" + s + "," + ms 
            }
        )
        displayLaps()
        console.log(laps)
    }
})
