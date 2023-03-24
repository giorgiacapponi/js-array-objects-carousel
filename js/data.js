const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// devo creare lo slider con le img che scorrono e inserirle dinamicamente
// mi serve un ciclo for per accedere a tutti gl oggetti dell array
    //   qui creo dinamicamnte le img nel dom
    // a tutte aggiungo classe hidden perche si dovra vedere una soltanto
    // lascio una attiva
    const containerLarge=document.querySelector('.container-large');
   
    
   

 images.forEach((element,ind)=>{
    const title = element['title'];
    let index =ind;
    const image = element['image'];
    const text = element['text']
//    devo creare elemento nel dom
const mainSlider =createSlider( image,title,text);
mainSlider.classList.add('img-large')
mainSlider.classList.add('h-100')
mainSlider.classList.add('w-100')
mainSlider.classList.add('hidden')
containerLarge.append(mainSlider)
// console.log(mainSlider);
// creo la parte laterale
const sideIMg= document.querySelector('.right-container');
sideIMg.innerHTML+=`<div class="side-img">
                        <img src="${image}" alt="">
                    </div>`

})



// prendo tutti i div delle img
const divImg =document.getElementsByClassName('img-large')
// metto la prima visibile
let index=0
divImg[index].classList.add('active')
const btnNext = document.getElementById('up-arrow');
const btnPrev = document.getElementById('down-arrow');
// al click passo alla successiva
btnNext.addEventListener('click',next)
btnPrev.addEventListener('click',prev)

// aggiungo funzione autoplay
const autoPlay= setInterval(next,3000);

// img laterali mi servono tutti i div
const sideImg=document.getElementsByClassName('side-img')
for(i=0;i<sideImg.length;i++){
    sideImg[i].addEventListener('click',function(){
    
    

        })
        
}




// /////////////////////////////////////////////////////
//  voglio creare lo slider nel dom
function createSlider(img,name,description){
    const newElement = document.createElement('div')
    newElement.innerHTML=`<img src=${img} alt="">
    <div class="film-title ">
        <h2 >${name}</h2>
        <p class="description">${description}</p>
    </div>`
    
    return newElement
}
// funzione che passa alla foto successiva al click parto da indice 0 attivo
function next(){ 
    if(index>=0 && index<divImg.length -1){
        divImg[index].classList.remove('active')
        index++;
        divImg[index].classList.add('active')
    }else{
        divImg[index].classList.remove('active')
        index=0
        divImg[index].classList.add('active')
    }
}

// funzione che passa alla foto precedente
function prev(){
    if(index>0){
        divImg[index].classList.remove('active')
        index--;
        divImg[index].classList.add('active')
    }else{
        divImg[index].classList.remove('active')
        index=divImg.length -1
        divImg[index].classList.add('active')
    }
}
