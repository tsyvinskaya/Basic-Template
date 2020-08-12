// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });
  window.onload=function(){
    $('.owl-carousel').owlCarousel({
       
        loop:true,
        items:5,
        navText: ['+',
        '+'],
    });
    $(".next_button").click(function(){
        owl.trigger("next.owl.carousel");
      });
       
      $(".prev_button").click(function(){
        owl.trigger("prev.owl.carousel");
      });

  }