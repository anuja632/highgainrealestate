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
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
      },
      on: {
        slideChange: function () {
          const progress = ((this.realIndex + 1) / this.slides.length) * 100;
          document.getElementById("progressBar").style.width = progress + "%";
        }
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

    // Manual nav controls
    document.querySelector(".prev").addEventListener("click", () => swiper.slidePrev());
    document.querySelector(".next").addEventListener("click", () => swiper.slideNext());

  $(document).ready(function () {
    $('.aos-img').each(function () {
      $(this).attr('data-aos-original', $(this).attr('data-aos'));
    });

    $('#exteriorCarousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      dots: true,
      navText: [
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      ],
      onTranslated: function () {
        $('.aos-img').each(function () {
          this.removeAttribute('data-aos');
          void this.offsetWidth; // force reflow
          this.setAttribute('data-aos', $(this).data('aos-original'));
        });
        AOS.refreshHard();
      }
    });
  });