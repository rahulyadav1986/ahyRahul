$(document).ready(function(){

jQuery('#carousel-example-generic').carousel({
  interval: 3000,
});
jQuery('#testi-slider').owlCarousel({
  loop: true,
  margin: 10,  
  autoplay: true,
  dots: true,
  pagination:true,
  navigation:true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
jQuery('.tm-owl-caro').owlCarousel({
  loop: true,
  margin: 10,  
  autoplay: true,
  dots: true,
  pagination:true,
  navigation:true,
  items: 1,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
jQuery('.tm-our-clients-carousel').owlCarousel({
  loop: true,
  margin: 30,  
  autoplay: true,
  dots: true,
  pagination:true,
  navigation:true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
});
});
/*  gallery */
$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

            if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
        }
          $(this).addClass("active");
        });
});
/*  end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});






    