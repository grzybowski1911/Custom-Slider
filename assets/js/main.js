// the only thing I can think of is to animate the width of the container housing the image
// however animating the width of elements is discouraged. 
// probably going to abandon this 


let curPos = 0; 
let slides = document.getElementsByClassName('slide-img');
let nbtn = document.getElementById('next');
let pbtn = document.getElementById('prev');

var slideContainer = document.getElementById("slide-container");
var slide = slideContainer.getElementsByTagName("img");

let sliderScroll;

window.addEventListener('load', ()=>{
    if (window.innerWidth < 980) {
        //sliderScroll = 100;
        sliderScroll = 75;
    } else {
        //sliderScroll = 200;
        sliderScroll = 0; 
    }
});

//window.addEventListener('resize', ()=>{
//    if (window.innerWidth < 980) {
//        sliderScroll = 100;
//    } else {
//        sliderScroll = 200;
//    }
//});

for (var i = 0; i < slide.length; i++) {
  slide[i].addEventListener("click", function() {
    (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
    this.classList.add('active');
    if(curPos != 0 || curPos % 3 == 1) {
        document.getElementsByClassName('slider-content')[0].scrollLeft += sliderScroll;
    }
    curPos++;
  });
} 

nbtn.addEventListener("click", ()=>{
    sliderScroll = 200;
    slides.item(curPos).classList.remove('active');
    slides.item(curPos+1).classList.add('active');
    if(curPos != 0 || curPos % 3 == 1) {
        document.getElementsByClassName('slider-content')[0].scrollLeft += sliderScroll;
    }
    curPos++;
});

pbtn.addEventListener("click", ()=>{
    slides.item(curPos).classList.remove('active');
    slides.item(curPos-1).classList.add('active');
    if(curPos != 0 || curPos % 3 == 1) {
        document.getElementsByClassName('slider-content')[0].scrollLeft -= sliderScroll;
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
// this should determine at what rate the slideScroll variable should move the scroll bar at
let slideItems = slide.length;

console.log(slideItems);

console.log(maxScroll / slideItems);

// DETERMINE POSTION OF EACH SLIDE WITHIN SCROLL AREA 

let slidePos; 