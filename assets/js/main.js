let curPos = 0; 
let slides = document.getElementsByClassName('slide-img');
let nbtn = document.getElementById('next');
let pbtn = document.getElementById('prev');

var slideContainer = document.getElementById("slide-container");
var slide = slideContainer.getElementsByTagName("img");

for (var i = 0; i < slide.length; i++) {
  slide[i].addEventListener("click", function() {
    (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
    this.classList.add('active');
    if(curPos != 0 || curPos % 3 == 1) {
        document.getElementsByClassName('slider-content')[0].scrollLeft += 200;
    }
    curPos++;
  });
} 

nbtn.addEventListener("click", ()=>{
    console.log('next');
    slides.item(curPos).classList.remove('active');
    slides.item(curPos+1).classList.add('active');
    if(curPos != 0 || curPos % 3 == 1) {
        document.getElementsByClassName('slider-content')[0].scrollLeft += 200;
    }
    curPos++;
});

pbtn.addEventListener("click", ()=>{
    console.log('prev');
    slides.item(curPos).classList.remove('active');
    slides.item(curPos-1).classList.add('active');
    let leftPos = document.getElementsByClassName('active')[0].offsetLeft;
    let sliderPos = document.getElementsByClassName('slider-content')[0].scrollLeft;
    let diff = leftPos - sliderWidth/3;
    if(curPos != 0 || curPos % 3 == 1) {
        document.getElementsByClassName('slider-content')[0].scrollLeft -= 200;
    }
    curPos--;
});


// DELETE THESE VARIABLES BELOW
// DEV PURPOSES ONLY

// get left position of active element
let leftPos = document.getElementsByClassName('active')[0].offsetLeft;
// get scroll position of horizontal slider 
let sliderPos = document.getElementsByClassName('slider-content')[0].scrollLeft;
// get width of slider div
let sliderWidth = document.getElementsByClassName('slider-content')[0].offsetWidth;

// FIND THE TOTAL AVAILABLE SCROLL AREA IN HORIZONTAL SCROLL BAR

let maxScroll = slideContainer.scrollWidth;

console.log(maxScroll);

// DIVIDE NUMBER OF ITEMS IN CONTAINER BY THE AVAILABLE HORIZONTAL SCROLL AREA

let slideItems = slide.length;

console.log(slideItems);

// DETERMINE POSTION OF EACH SLIDE WITHIN SCROLL AREA 

let slidePos; 