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
});

/* *** Navigation end *** */

/* *** Dropdown *** */

$(document).ready(function(){
  $(".dropdown-button").click(function(){
    $(".menu").toggleClass("show-menu");
  });  
});

/* *** Dropdown end *** */

/* *** Accordion-tabs *** */

$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

/* *** Accordion-tabs end *** */

/* *** Accordion *** */

$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.accordion-content').slideToggle('fast'); 
 // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-closed');
  e.preventDefault();
});

/* *** Accordion end *** */

/* *** Cash forecast chart *** */

var cashForecastData = {
  labels : ["År 1","År 2","År 3"],
  datasets : [
    {
      label: "Revenue",
      fillColor : "rgba(172,194,132,0.4)",
      strokeColor : "#ACC26D",
      pointColor : "#ACC26D",
      pointStrokeColor : "#9DB86D",
      pointHighlightFill : "#FFF",
      data : [3234890,4589234,6348849]
    },
    {
      label: "Profit",
      fillColor : "rgba(194,132,172,0.4)",
      strokeColor : "#C26DAC",
      pointColor : "#C26DAC",
      pointStrokeColor : "#B86D9D",
      pointHighlightFill : "#FFF",
      data : [944126,1523894,1254932]
    }
  ]
};

var cashForecastOptions = {
  responsive : true,
  maintainAspectRatio : true,
  pointHitDetectionRadius : 20,
  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

var cashForecast = $("#cashForecast").get(0).getContext("2d");
new Chart(cashForecast).Line(cashForecastData, cashForecastOptions);

/* *** Cash forecast chart end *** */