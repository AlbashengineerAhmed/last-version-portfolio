import {reviews} from "./data"
import imageLoaded from "imagesloaded";
import mixitup from "mixitup"
import gsap from "gsap"
import Swiper, { Pagination, Navigation } from "swiper";
// Import the portfolioData array from data.js
import { portfolioData } from './data.js';
const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");

let c = 0;

let barInterval = setInterval(()=>{
  bar.style.width = c + "%";
  counter_num.innerText = c + "%";
  c++;
  if (c === 101) {
    clearInterval(barInterval)
    gsap.to(".loading__bar", {
      duration: 5,
      rotate:"90deg",
      left:"1000%",
    })
    gsap.to(".loading__text,.loading__counter", {
      duration: 0.5,
      opacity:0,
    })
    gsap.to(".loading__box", {
      duration: 1,
      height:"340px",
      width:"340px",
      borderRadius:"50%"
    })
    gsap.to(".loading__svg", {
      duration: 3,
      opacity:1,
      rotate:"360deg"
    })
    gsap.to(".loading__box", {
      delay:2,
      border:"none"
    })
    imageLoaded(document.querySelectorAll("img"),() =>{
      gsap.to(".loading", {
        delay:3,
        duration:4,
        zIndex:1,
        background:"transparent",
        opacity:0.5,
      })
      gsap.to(".loading", {
        delay:5,
        duration:5,
        opacity:0,
      })
      gsap.to(".loading__svg", {
        delay:3,
        duration:100,
        rotate:"360deg",
      })
      gsap.to("header", {
        delay:3,
        duration:1,
        top:"0",
      })
      gsap.to(".socials", {
        delay:3.5,
        duration:1,
        bottom:"10rem",
      })
      gsap.to(".scrollDown", {
        delay:4,
        duration:1,
        bottom:"3rem",
      })
    })

  } 
}, 20); 

// review swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    850: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
    1900: {
      slidesPerView: 4,
    },
    2200: {
      slidesPerView: 5,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper_container = document.querySelector(".swiper-wrapper");

// Function to add slides to Swiper
function addReviewSlide(review) {
  const template = `
    <div class="swiper-slide">
      <div class="review">
        <div class="review__card">
          <div class="review__topborder"></div>
          <div class="review__text">
            <span>${review.review.substring(0, 1)}</span>
            ${review.review.substring(1, review.review.length)}
          </div>
        </div>
        <img src=${review.image} class="review__img" alt="">
        <div class="review__profile">
          <span>${review.name}</span>
          <span>${review.position}</span>
        </div>
      </div>
    </div>
  `;

  swiper_container.innerHTML += template;
}

// Add slides to Swiper
reviews.forEach((review) => {
  addReviewSlide(review);
});

// Update Swiper after adding slides
swiper.update();

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active__work'))
  this.classList.add('active__work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

/*===== Work Popup =====*/
document.addEventListener("click" , (e) => {
  if(e.target.classList.contains("work__button")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement)
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open")
  
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML
}


// Faq script
const questions = [...document.querySelectorAll(".question")];
questions.map((question) =>{
  let q_text = question.querySelector("h3");
  q_text.addEventListener("click", ()=>{
    questions
    .filter((q)=>q !== question)
    .map((q)=>q.classList.remove("open"));
    question.classList.toggle("open");
  });
});
