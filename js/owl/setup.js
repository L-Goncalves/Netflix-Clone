$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


botaoNext = document.querySelectorAll('.owl-next');
botaoPrev = document.querySelectorAll('.owl-prev');


    carousel =  document.querySelector('.owl-stage');

    carousel.addEventListener("mouseover", event => {
        clearInterval(MoveCarousel)
      });
      carousel.addEventListener("mouseout", event => {
        console.log("Mouse out");
      });



      var MoveCarousel = setInterval(() => {
        
        botaoNext[0].click()
        botaoPrev[1].click()
        botaoNext[2].click()
    }, 1000);
    
    