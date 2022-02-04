// tabs
const links = document.querySelectorAll('.top a')
const items = document.querySelectorAll('.item')

links.forEach(function(link, key){
    link.addEventListener('click', function(){
        for(let i = 0; i < links.length; i++){
            links[i].classList.remove('active')
            items[i].classList.remove('active')
        }
        links[key].classList.add('active')
        items[key].classList.add('active')
    })
})

// clock
const numH = document.querySelector('.H span')
const numM = document.querySelector('.M span')
const numS = document.querySelector('.S span')
const arrH = document.querySelector('.arrH')
const arrM = document.querySelector('.arrM')
const arrS = document.querySelector('.arrS')


function clock(){
    const time = new Date
    const hours = time.getHours() 
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    arrS.style.transform = `rotate(${seconds * 6}deg)`
    arrM.style.transform = `rotate(${minutes * 6}deg)`
    arrH.style.transform = `rotate(${hours * 30 + (minutes / 2) }deg)`

    numH.innerHTML = hours<10?`0${hours}`:hours;
    numM.innerHTML = minutes<10?`0${minutes}`:minutes;
    numS.innerHTML = seconds<10?`0${seconds}`:seconds;

 
    setTimeout(function() {
        clock()
    }, 1000);
}clock()

// text
function changeColor(){
    return `#` + Math.round(Math.random() * 16777215).toString(16)
}
function textColor(){
    const text = document.querySelector('.text1').style.color = `${changeColor()}`
    
    setTimeout(() => {
        textColor()
    }, 1000);
}textColor()

const generate = document.querySelector('.generate')
const text2 = document.querySelector('.text2').innerHTML

generate.addEventListener('click', function(){
    generateColor()
})
function generateColor(){
    var b = text2.split("")
    for(let i = 0; i < text2.length; i++){
    b[i]= `<font color=${changeColor()}>` + b[i] + `</font>`;
    }
    var c = '';
    for(let i = 0; i <= b.length-1; i++){
            c+= b[i]
        }
    document.querySelector('.text2').innerHTML = c

    setTimeout(() => {
        generateColor()
    }, 1000);
}

// stopWatch
const stopWatchBtn = document.querySelector('.start')
const stopWatchResult = document.querySelector('.result')
const indicator = document.querySelector('.indicator')
const stopMi = document.querySelector('.numMi span')
const stopS = document.querySelector('.numS span')
const stopM = document.querySelector('.numM span')
const result = document.querySelector('.stopWatch-result')

stopWatchBtn.addEventListener('click', function(){
    if(stopWatchBtn.innerHTML == 'start'){
        stopWatchBtn.innerHTML = 'stop'
        indicator.classList.add('start')
        stopWatch(0, 0, 0, stopWatchBtn)
    }else if(stopWatchBtn.innerHTML == 'stop'){
        stopWatchBtn.innerHTML = 'clear'
        indicator.classList.remove('start')
        indicator.classList.add('stop')
    }else{
        stopWatchBtn.innerHTML = 'start'
        indicator.classList.remove('stop')
        stopMi.innerHTML = '00'
        stopS.innerHTML = '00'
        stopM.innerHTML = '00'
        result.innerHTML = ''
    }
})

stopWatchResult.addEventListener('click', function(){
    result.innerHTML += `<p>${stopM.innerHTML}:${stopS.innerHTML}:${stopMi.innerHTML}</p>` 
})

function stopWatch(mi, s, m, btn){
    if(btn.innerHTML == 'stop'){
        if(mi > 99){
            mi = 0
            if(s == 59){
                s = 0
                stopS.innerHTML = s<10?`0${s}`:s;
                if(m == 59){
                    m = 0
                    stopM.innerHTML = m<10?`0${m}`:m;
                }else{
                    m++
                    stopM.innerHTML = m<10?`0${m}`:m;
                }
            }else{
                s++
                stopS.innerHTML = s<10?`0${s}`:s;
            }
        }else{
            stopMi.innerHTML = mi<10?`0${mi}`:mi;
            mi++
        }
        
          
         
          
        setTimeout(() => {
            stopWatch(mi, s, m, btn)
        }, 10.1);
    }       
}

// taimer
const timerH = document.querySelector('.taimerH input')
const timerM = document.querySelector('.taimerM input')
const timerS = document.querySelector('.taimerS input')
const timerMi = document.querySelector('.taimerMi input')
const timerBtn = document.querySelector('.taimerStart')
const timerStop = document.querySelector('.taimerStop')

timerBtn.addEventListener('click', function(){
    let valueH =  Number(timerH.value)
    let valueM =  Number(timerM.value)
    let valueS =  Number(timerS.value)
    let valueMi  = Number(timerMi.value) 
    if( timerBtn.innerHTML == 'start'){
        timerBtn.innerHTML = 'pause'
        timer(valueH,valueM,valueS,valueMi,timerBtn)
        timerH.disabled = true
        timerM.disabled = true
        timerS.disabled = true
        timerMi.disabled = true
    }else{
        timerBtn.innerHTML = 'start'
    }
})

timerStop.addEventListener('click', function(){
   if(timerBtn.innerHTML == 'pause'){
      timerH.value = ''   
      timerM.value = ''
      timerS.value = ''
      timerMi.value = ''
      timerBtn.innerHTML = 'start'
      timerH.disabled = false
      timerM.disabled = false
      timerS.disabled = false
      timerMi.disabled = false
   }else{
    timerH.value = ''   
    timerM.value = ''
    timerS.value = ''
    timerMi.value = ''
    timerH.disabled = false
    timerM.disabled = false
    timerS.disabled = false
    timerMi.disabled = false
   }
})

function timer(h,m,s,mi,btn){
    if(btn.innerHTML == 'pause'){
        timerMi.value = mi<10?`0${mi}`:mi;
        timerS.value = s<10?`0${s}`:s;
        timerM.value = m<10?`0${m}`:m;
        timerH.value = h<10?`0${h}`:h;
        if(mi == 0){
            mi = 99
            timerS.value = s<10?`0${s}`:s;
            if(s == 0){
                s = 59
                timerS.value = s<10?`0${s}`:s;
                if(m == 0){
                    m = 59
                    timerM.value = m<10?`0${m}`:m;
                    if(h == 0){
                        h = 23
                        timerH.value = h<10?`0${h}`:h;
                    }else{
                        h--
                        timerH.value = h<10?`0${h}`:h;
                    }
                }else{
                    m--
                    timerM.value = m<10?`0${m}`:m;
                }
            }else{
                s--
                timerS.value = s<10?`0${s}`:s;
            }
        }else{
            mi--
            timerMi.value = mi<10?`0${mi}`:mi;
        }
    
        
        if(mi > 0 || s > 0 || m > 0 || h > 0){
            setTimeout(() => {
                timer(h,m,s,mi,btn)
            }, 10.1);
        }else{
            timerH.value = ''   
            timerM.value = ''
            timerS.value = ''
            timerMi.value = ''
            timerBtn.innerHTML = 'start'
            timerH.disabled = false
            timerM.disabled = false
            timerS.disabled = false
            timerMi.disabled = false
        }

    }
}
