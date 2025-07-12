  function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }



const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      const totalSlides = this.slides.length - this.loopedSlides * 2;
      const progress = ((this.realIndex % totalSlides) / (totalSlides - 1)) * 100;
      document.getElementById("progressBar").style.width = progress + "%";
    }
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Manual navigation
document.querySelector(".prev").addEventListener("click", () => swiper.slidePrev());
document.querySelector(".next").addEventListener("click", () => swiper.slideNext());


const swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      const totalSlides = this.slides.length - this.loopedSlides * 2;
      const progress = ((this.realIndex % totalSlides) / (totalSlides - 1)) * 100;
      document.getElementById("progressBar-2").style.width = progress + "%";
    }
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Manual nav controls for EXTERIORS
document.querySelector(".prev-2").addEventListener("click", () => swiper2.slidePrev());
document.querySelector(".next-2").addEventListener("click", () => swiper2.slideNext());

