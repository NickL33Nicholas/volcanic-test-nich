$(document).ready(function(){

    $('.testingClass').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite:true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite:true,
            }
          },

          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite:true,
            }


          }
        ] 
    });




    $('.card-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        responsive: [


          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite:true,
            }
          },

          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite:true,
            }
          },

          
          {
            breakpoint: 766,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite:true,
            }


          }
        ] 
        
        // infinite:true,
        
    });










});












// ]