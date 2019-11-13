// Træningsskema:
 //Grib Knapper
const mandag = document.querySelector('#mandag');
const tirsadg = document.querySelector('#tirsdag');
const onsdag = document.querySelector('#onsdag');
const torsdag = document.querySelector('#torsdag');
const fredag = document.querySelector('#fredag');

// Grib Skemaer
const tMandag = document.querySelector('#t-mandag');
const tTirsdag = document.querySelector('#t-tirsdag');
const tOnsdag = document.querySelector('#t-onsdag');
const tTorsdag = document.querySelector('#t-torsdag');
const tFredag = document.querySelector('#t-fredag');



// Dag skiftes 

function ChangeDay(dag){
    dag.style.display = "block";
    const tDage = [tMandag, tTirsdag, tOnsdag, tTorsdag, tFredag];
    tDage.forEach(d => {
      if (d != dag) {
          d.style.display = "none";
      }
    });
}

// Hver knap gives en evenlistener, som selekterer den givne dag
function addClick(){
    const dage = [mandag, tirsdag, onsdag, torsdag, fredag];
    dage.forEach(d => {
        d.addEventListener('click', () =>{
            let table;
            if (d == mandag) {
              table = tMandag;
            }else if (d == tirsadg) {
                table = tTirsdag;
            }else if (d == onsdag) {
                table = tOnsdag;
            }else if (d == torsdag) {
                table = tTorsdag;
            }else{
                table = tFredag;
            }
            ChangeDay(table);
        })
    });
}

addClick();