
$('#btn-plus').click(function(){
    var qty= $('#quantity').val();
    qty++;
    $('#quantity').val(qty);
})

$('#btn-minus').click(function(){
    var qty= $('#quantity').val();
    if (qty<=1){
        qty=1;
    }
    else
    {
        qty--;
    }
    $('#quantity').val(qty);
})

$("#btn-filter").click(function(){
    $('.sidebar').toggle('slide');
})
$('#btn-close').click(function(){
    $('.sidebar').toggle('close');
})
$("#btn-signin").click(function(){
  $('.modal-content').toggle('slide');
})

var img1 = $(".img1-new-pr").height();
    $(".pr-img-new-pr").height(img1);
document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  }) 
  var sync1 = $(".slider");
  var sync2 = $(".navigation-thumbs");
  
  var thumbnailItemClass = '.owl-item';
  
  var slides = sync1.owlCarousel({
      video:true,
    startPosition: 12,
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    nav: false,
    dots: true
  }).on('changed.owl.carousel', syncPosition);
  
  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;
  
    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }
  
    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;
  
  
    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);
  
    thumbnailCurrentItem.addClass('synced');
  
    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }   
  }
  
  var thumbs = sync2.owlCarousel({
    startPosition: 12,
    items:4,
    loop:false,
    margin:10,
    autoplay:false,
    nav: false,
    dots: false,
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });



$(document).ready(function(){
    var img1 = $(".img1").height();
    $(".pr-img").height(img1);

    var img1 = $(".img-offer").height();
    $(".pr-img-offer").height(img1);

    var img2 = $(".img1-new-pr").height();
    $(".pr-img-new-pr").height(img2);

  $('#category').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 4
          }
      }
  });
  $('#discount').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#blog').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
});

$(function() {
    $('.owl-carousel.testimonial-carousel').owlCarousel({
      nav: true,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      dots: false,
      loop:true,
      responsive: {
        0: {
          items: 1,
        },
        750: {
          items: 2,
        },
        992:
        {
            items:3
        }
      }
    });
  });

  $('#brand').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
});

$(document).ready(function () {
  $("#slider").ezPlus({
      gallery: 'gallery_01',
      cursor: 'pointer',
      galleryActiveClass: "active",
      imageCrossfade: true,
      loadingIcon: "https://www.elevateweb.co.uk/spinner.gif"
  });

  $("#slider").bind("click", function () {
      var ez = $('#slider').data('ezPlus');
      ez.closeAll(); // Hide the lens, tint, and window
      $.fancyboxPlus(ez.getGalleryList());
      return false;
  });
});

// Apply zoom effect to images
$('.zoom_04').ezPlus({
  zoomType: 'lens',
  lensShape: 'square',
  lensSize: 300
});

// Slide functionality for product images
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

