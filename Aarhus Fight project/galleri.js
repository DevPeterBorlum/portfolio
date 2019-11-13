// Billedslider

const tilbage = document.querySelector('.tilbage');
const frem = document.querySelector('.frem');
const hej = document.querySelector('.hej');
let billedIndex = 0;

tilbage.addEventListener('click', () => {
    billedIndex -= 1;
    if (billedIndex < 0) {
        billedIndex = 4;
    }  
    visSlides(billedIndex);
});

frem.addEventListener('click', () => {
    billedIndex += 1;
    if (billedIndex > 4) {
        billedIndex = 0;
    }
    
    visSlides(billedIndex);
});


visSlides(billedIndex);
function visSlides(n){
    const billeder = document.querySelectorAll('.mineBilleder');
    const text = document.querySelector('.billedNavn');
    
    let caption = ['Konkurrnce', 'Ryste sammen tur', 'Klubfællestræning', 'Undervisning', 'Dan Graduering']


    billeder.forEach(b => {
        b.style.display = 'block';
        if (b != billeder[n]) {
            b.style.display = "none";
        }
            
    })
    text.innerHTML = caption[n];
}


// upload af egne billeder

let image;
const canvas = document.querySelector('.c1');
const fileinput = document.querySelector('.input');
const greyBtn = document.querySelector('.img-btn')
const uploadBtn = document.querySelector('.upload')
const complete = document.querySelector('.complete');

fileinput.addEventListener('change', ()=>{
    upload();
})

function upload(){
    canvas.style.display = 'block';
    complete.style.display = 'none';
    image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

function clearCanvas(){
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

greyBtn.addEventListener('click', ()=> {
    for(let pixel of image.values()){
        let avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    clearCanvas();
    image.drawTo(canvas);
})

// Fake upload

uploadBtn.addEventListener('click',()=>{
    canvas.style.display = 'none';
    complete.style.display = 'block';
})


