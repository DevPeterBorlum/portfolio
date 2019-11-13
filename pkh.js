// Felter  og knap selekteres

const button = document.querySelector('#btn');
const felter = document.querySelectorAll('.felt');
const indsæt = document.querySelector('#indsæt');
const talInd = document.querySelector('#talInd');


// funktion som blader et tilfældigt array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// laves random farver, numre og sendes til felterne
function generate() {
    
    let bgColor = [ "green", "yellow", "blue", "red"];
    let numbers = [];
    let current = 0;

    // array fyldes med værdier
    for (let i = 0; i <4; i++) {
        for (let j = 0; j < 10; j++) {

            numbers.push(current);
            current++
            
        }   
        current = 0;
    }

    // array blandes
    shuffleArray(numbers);

    // felterrne får initiel værdi og farve
     felter.forEach(felt => {

         felt.style.backgroundColor = bgColor[Math.floor(Math.random()*4)];
         felt.innerHTML = numbers.pop();

     });
    }

    // udfør funktionen, når knappen klikkes

button.addEventListener('click', () =>{

    generate() 
});

// felter gøre klikbare og værdi tildeles felt med check

felter.forEach(felt => {
    felt.addEventListener('click', () => {

        if (talInd.value >= 0 && talInd.value < 10 && talInd.value != '') {
            
            felt.innerHTML = talInd.value;
            talInd.value = '';

        }else{
            alert('Ikke tilladt værdi');
            talInd.value = '';
        }
       
    });
});

    // felterne får initiel værdi når siden loades 

window.onload = () => { 

    generate();
 }


