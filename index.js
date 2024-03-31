var imgPaths = [
    './assets/bau.png',
    './assets/ca.png',
    './assets/cua.png',
    './assets/ga.png',
    './assets/huou.png',
    './assets/tom.png',
];
//let countBetBau = 0, countBetCua = 0, countBetTom = 0, countBetCa = 0, countBetHuou = 0, countBetGa = 0;
const countObjBet = {
    Bau:  {name:'Bầu', count: 0},
    Cua:  {name:'Cua', count: 0},
    Tom:  {name:'Tôm', count: 0},
    Ca:  {name:'Cá', count: 0},
    Huou:  {name:'Hươu', count: 0},
    Ga:  {name:'Gà', count: 0}
}

const resultBet = {
    imgResult1: 0,
    imgResult2: 0,
    imgResult3: 0
}

const compareResult = {
    Bau:  {name:'Bầu', count: 0},
    Cua:  {name:'Cua', count: 0},
    Tom:  {name:'Tôm', count: 0},
    Ca:  {name:'Cá', count: 0},
    Huou:  {name:'Hươu', count: 0},
    Ga:  {name:'Gà', count: 0}
}

let totalBet = 0, lock = 0;
var imgElement1 = document.getElementById('imgPaths1');
var imgElement2 = document.getElementById('imgPaths2');
var imgElement3 = document.getElementById('imgPaths3');
var imgElement4 = document.getElementById('imgPaths4');
const myBtn = document.getElementById('but-random');

const btnBau = document.getElementById('countBau');
const btnCua = document.getElementById('countCua');
const btnTom = document.getElementById('countTom');
const btnCa = document.getElementById('countCa');
const btnHuou = document.getElementById('countHuou');
const btnGa = document.getElementById('countGa');
const countBetIn1 = document.getElementById('countBet');

function compare(countBet, randomResult){
    for (let key in countBet){
        if (countBet[key].count !==  randomResult[key].count){
            return false;
        }
    }
    return true;
}

function showResult(){

    random(imgElement1, function(){
        for (let key in compareResult) {
            compareResult[key].count = 0;
        }
    });
    random(imgElement2, function(){});
    random(imgElement3, function(){});
    random(imgElement4, function(){
        afterRabdom();
    });
}

function afterRabdom(){
    var stringResult = '';
    for (let key in countObjBet){
            if (countObjBet[key].count !== 0){
            stringResult = stringResult + ' ' + countObjBet[key].name + ' ' +  countObjBet[key].count;
        }
    }

    if (compare(countObjBet,compareResult)) {
        console.log('Bạn đã đoán đúng với kết quả:', stringResult);
    }
    else{
        console.log('Bạn đã đoán sai với kết quả:', stringResult);
    }
}

function random(k, callback){
    let a = 0;
    if (lock === 0){
        const randomImage = setInterval(function(){
            var randomImg = imgPaths[Math.floor(Math.random() * imgPaths.length)];
            k.src = randomImg;   
            lock = 1;
            a += 1;
            if (a == 100){
                clearInterval(randomImage);
                lock = 0;
                callback(k.src); // Gọi callback với kết quả
                switch (randomImg){
                    case './assets/bau.png':
                        compareResult.Bau.count++;
                        break;
                    case './assets/cua.png':
                        compareResult.Cua.count++;
                        break;
                    case './assets/tom.png':
                        compareResult.Tom.count++;
                        break;
                    case './assets/ca.png':
                        compareResult.Ca.count++;
                        break;
                    case './assets/huou.png':
                        compareResult.Huou.count++;
                        break;
                    case './assets/ga.png':
                        compareResult.Ga.count++;
                        break;
                }
            };
        },50)
    }
}


function lockRun(){
    return lock = 0;
}

function total(){
    totalBet += 1;
    return totalBet;
}

function rst(i){
    if (lock === 0){
        totalBet = 0;
        for (let key in countObjBet) {
            countObjBet[key].count = 0;
        }
        i.innerHTML = 0;
    }
}

function rstAll(){
    rst(btnBau);
    rst(btnCua);
    rst(btnTom);
    rst(btnCa);
    rst(btnHuou);
    rst(btnGa);
}

function countUp(a,b){
    a += 1;
    if ((totalBet < 3) && (lock === 0)){
        switch (b){
            case btnBau:
                countObjBet.Bau.count = a;
                b.innerHTML = a;
                break;  
            case btnCua:
                countObjBet.Cua.count = a;
                b.innerHTML = a;
                break;
            case btnTom:
                countObjBet.Tom.count = a;
                b.innerHTML = a;
                break;  
            case btnCa:
                countObjBet.Ca.count = a;
                b.innerHTML = a;
                break;
            case btnHuou:
                countObjBet.Huou.count = a;
                b.innerHTML = a;
                break;  
            case btnGa:
                countObjBet.Ga.count = a;
                b.innerHTML = a;
                break;
        }
    }
}






