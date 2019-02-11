

$(document).ready(function(){

  "use strict";

  $('#info').click(function(){
    $('#info_box').toggleClass('open');     /* виїжджаюча інформація з правого верхнього кута */
  });
  
  

  $('.pr_bar').each(function(){
    let width = $(this).data('skill');
    $(this).css('width', width + '%');      /* діаграма умінь */
  });

  $('#menu_btn').click(function(){
    $('#main_nav').toggleClass('open');     /* Menu на смартфонах */
  });



  $('.colum_post').isotope({
    itemSelector: '.box_post',
    layoutMode: 'fitRows'
  });
  $('.blog_menu ul li').click(function(){
    $('.blog_menu ul li').removeClass('active');          /* Фільтер блогу */
    $(this).addClass('active'); 

    var selector = $(this).attr('data-filter');
    $('.colum_post').isotope({
      filter: selector
    });
    return false;
  });

  

    
  
 









  
});