$(function(){

  'use strict';

  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop:$(target).offset().top
      },
      800
    );
  });

  let offset = $('#bottom_header').offset();

  $(window).scroll(function(){

    if( $(window).scrollTop() > offset.top ) {
      $('#bottom_header').addClass('fixedNav');
    } else {
      $('#bottom_header').removeClass('fixedNav');
    }

  });



  $('#view_all_gallery').click(function(){

    let cotent = '<div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><a href="img/gallery/gallery71.jpg" data-lightbox="mygallery"><img src="img/gallery/gallery7.jpg" alt="gallery7"></a></div><div class="box_img_gallery"><a href="img/gallery/gallery81.jpg" data-lightbox="mygallery"><img src="img/gallery/gallery8.jpg" alt="gallery8"></a></div><div class="box_img_gallery"><a href="img/gallery/gallery91.jpg" data-lightbox="mygallery"><img src="img/gallery/gallery9.jpg" alt="gallery9"></a></div></div><div class="gallery_line main_flex__nowrap flex__jcontent_between"><div class="box_img_gallery"><a href="img/gallery/gallery101.jpg" data-lightbox="mygallery"><img src="img/gallery/gallery10.jpg" alt="gallery10"></a></div><div class="box_img_gallery"><a href="img/gallery/gallery102.jpg" data-lightbox="mygallery"><img src="img/gallery/gallery11.jpg" alt="gallery11"></a></div><div class="box_img_gallery"><a href="img/gallery/gallery103.jpg" data-lightbox="mygallery"><img src="img/gallery/gallery12.jpg" alt="gallery12"></a></div></div>';
    $('#gallery_box').append(cotent);
    $(this).remove();

  });

  $(function(){
    $('.fadein div:gt(0)').hide();
      setInterval(function(){
        $('.fadein :first-child').fadeOut().next('div').fadeIn().end().appendTo('.fadein');
      }, 3500);
  });

  
  
  
});
