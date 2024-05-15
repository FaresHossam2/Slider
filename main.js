
// get slider item
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get number of items 
let slidesCount = sliderImages.length;

// set current slide
let currentSlide = 1;

// slide number string 
let slideNumber = document.getElementById("slide-number");


// prev , next btn 
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// handle click on next and  prev btns 
nextBtn.onclick = nextSlide; 
prevBtn.onclick = prevSlide; 


// create ul element 
let paginaation = document.createElement("ul");

//set id on ul element 

paginaation.setAttribute("id","pagination-ul");

// loop on number of slider and make li based on this number
for(let i =1; i <=slidesCount; i++){


    // create li 
    let lis = document.createElement("li");

    lis.setAttribute("data-index" , i);

    // set item content 
    lis.appendChild(document.createTextNode(i));

    // append item to ul list 
    paginaation.appendChild(lis);


}
// add the created ul to page 
document.getElementById("indicators").appendChild(paginaation);

// get new created ul 
let paginationCreatedUl = document.getElementById("pagination-ul");


// get pagination items
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop on all li items 
for(let i = 0 ; i < paginationBullets.length; i++){

    paginationBullets[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute("data-index"));

        checker();

    }


}

// triger checker function 
checker();


// functiin next slide 
function nextSlide(){
    
    if(nextBtn.classList.contains ("disabled")){
        return false
    }
    else{
        //increment slide
    currentSlide ++ ;
    checker();
    }

}

// function prev slide 

function prevSlide(){
    if(prevBtn.classList.contains ("disabled")){
        return false;
    }
    else{
        //increment slide
    currentSlide -- ;
    checker();
    }
}



// checker functio 
function checker(){
    //set slide number
    slideNumber.textContent = (currentSlide) + " / " + (slidesCount);

    removeActive();


    // set active class on current slide 
    sliderImages[currentSlide - 1].classList.add("active");

    // set active class on current pagination item 
    paginationCreatedUl.children[currentSlide - 1].classList.add("active"); 

    // check if current slide is first 
    if(currentSlide == 1 ){
        // add disable class on prrev btn 
        prevBtn.classList.add("disabled")
    }else{
        // remove disable class from prrev btn 
        prevBtn.classList.remove("disabled")
    }
      // check if current slide is last 
      if(currentSlide == slidesCount ){
        // add disable class on next btn 
        nextBtn.classList.add("disabled")
    }else{
        // remove disable class from next btn 
        nextBtn.classList.remove("disabled")
    }
}

 // remove active class from image and bullets  

 function removeActive(){

    sliderImages.forEach(function (img){
        img.classList.remove("active");
    });
    paginationBullets.forEach(function (bullet){
        bullet.classList.remove("active");
    });
 }
