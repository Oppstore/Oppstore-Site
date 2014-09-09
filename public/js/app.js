/* *** Navigation *** */

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  $('#navigation-menu > li.mobile-nav-link').bind('mouseover', openSubMenu);
  $('#navigation-menu > li.mobile-nav-link').bind('mouseout', closeSubMenu);
  
  function openSubMenu() {
    $(this).find('ul').css('display', 'block');
  }
  
  function closeSubMenu() {
    $(this).find('ul').css('display', 'none');
  }
});

/* *** Navigation End *** */

/* *** Accordion *** */

$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

/* *** Accordion *** */