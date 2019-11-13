const jaNej = document.getElementsByName('jaNej');
let erfaring;

function func(){
    if (jaNej[0].checked) {
        erfaring = jaNej[0].value;
    }else if (jaNej[1].checked) {
        erfaring = jaNej[1].value;
    }
}

const type = document.getElementsByName('type');
let valgType;

function func2(){
    if (type[0].checked) {
        valgType = type[0].value;
    }else if (type[1].checked) {
        valgType = type[1].value;
    }else if (type[2].checked) {
        valgType = type[2].value;
    }else if (type[3].checked) {
        valgType = type[3].value;
    }
}


const kontakt = document.getElementsByName('kontakt');
let kontaktNivaeu;

function func3(){
    if (kontakt[0].checked) {
        kontaktNivaeu = kontakt[0].value;
    }else if (kontakt[1].checked) {
        kontaktNivaeu = kontakt[1].value;
    }else if (kontakt[2].checked) {
        kontaktNivaeu = kontakt[2].value;
    }
}

findKnap = document.querySelector('.ks_chooser');
let visFelt = document.querySelector('.tekst');
let tekst = '';
let kampsport ='';

findKnap.addEventListener('click', ()=> {
    tekst = '';
    if (erfaring === 'ja') {
        tekst += "Øvet ";
    }else if (erfaring === 'nej') {
            tekst += "Begynder ";
    }
    if (kontaktNivaeu === 'hard' && valgType === 'striking') {
        tekst += 'Muay Thai';
    }else if (kontaktNivaeu === 'mellem' && valgType === 'striking') {
        tekst += 'Karate';
    }else if (kontaktNivaeu === 'let' && valgType === 'striking') {
        tekst += 'Taekwondo';
    }else if (valgType === 'wrestling') {
        tekst += 'Wrestling';
    }else if (valgType === 'bjj') {
        tekst += 'Brazilansk Jiu Jitsu';
    }else if (valgType === 'MMA') {
        tekst += 'Mixed Martial Arts';
    }

    if (tekst.length < 9) {
        tekst = ''
    }
    
    visFelt.innerHTML = tekst;

     
if (tekst.includes('Thai')) {
    kampsport = 'mt.txt';
}else if (tekst.includes('Karate')) {
    kampsport = 'karate.txt';
}else if (tekst.includes('Taekwondo')) {
    kampsport = 'taekwondo.txt';
}else if (tekst.includes('Wrestling')) {
    kampsport = 'wrestling.txt';
}else if (tekst.includes('Jiu')) {
    kampsport = 'bjj.txt';
}else if (tekst.includes('Mixed')) {
    kampsport = 'mma.txt';
}

xhr.open('get', kampsport, true)
if (tekst.length > 9) {
    xhr.send();
}  

})

// indsend form
const sumbitKnap = document.querySelector('#submitKnap');
const indsend = document.querySelector('.indsend');

sumbitKnap.addEventListener('click', () => {
    indsend.innerHTML = 'Indsendt!';
})

// hent via XMLHttpReq

const xhr = new XMLHttpRequest();
const ksTekst = document.querySelector('.ksTekst');

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
           ksTekst.innerHTML = xhr.responseText;
        }
        if (xhr.status == 404) {
            alert('File not found');
        }
    }
};







