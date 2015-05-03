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

/* *** Form Validation *** */

$(document).ready(function() {
    
    $.validate();

});

/* *** Form Validation end *** */

/* *** Dropdown *** */

$(document).ready(function(){
  $(".dropdown-button").click(function(){
    $(".menu").toggleClass("show-menu");
  });  
});

/* *** Dropdown end *** */

/* *** Accordion-tabs *** */

$(document).ready(function () {
  $('.accordion-tabs').each(function() {
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
$('.button-generate-cash-forecast').bind('click', function() {

    $('.button-generate-cash-forecast').hide();

    var revenue = $(".revenueInput").map(function() {
        return this.value;
    }).get();
    (revenue.join(","));
    jQuery.each( revenue, function( i, val ) {
      $( "#revenueValue" ).append( "<td> " + val + "</td>" );
    });

    var profit = $(".profitInput").map(function() {
        return this.value;
    }).get();
    (profit.join(","));
    jQuery.each( profit, function( i, val ) {
      $( "#profitValue" ).append( "<td> " + val + "</td>" );
    });

    var employees = $(".employeeInput").map(function() {
        return this.value;
    }).get();
    (employees.join(","));
    jQuery.each( employees, function( i, val ) {
      $( "#employeeValue" ).append( "<td> " + val + "</td>" );
    });

    $('#budget').show();

    var cashForecastData = {
        labels: ["År 1", "År 2", "År 3"],
        datasets: [{
            label: "Revenue",
            fillColor: "rgba(172,194,132,0.4)",
            strokeColor: "#ACC26D",
            pointColor: "#ACC26D",
            pointStrokeColor: "#9DB86D",
            pointHighlightFill: "#FFF",
            data: revenue
        }, {
            label: "Profit",
            fillColor: "rgba(194,132,172,0.4)",
            strokeColor: "#C26DAC",
            pointColor: "#C26DAC",
            pointStrokeColor: "#B86D9D",
            pointHighlightFill: "#FFF",
            data: profit
        }]
    };

    var cashForecastOptions = {
        responsive: true,
        maintainAspectRatio: true,
        pointHitDetectionRadius: 20,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };

    var cashForecast = $("#cashForecast").get(0).getContext("2d");
    new Chart(cashForecast).Line(cashForecastData, cashForecastOptions);
});

if ($("body").hasClass("find-investor-summary")) {

    var revenue = $(".revenueInput").map(function() {
        return this.value;
    }).get();
    var profit = $(".profitInput").map(function() {
        return this.value;
    }).get();

    var cashForecastSummaryData = {
        labels: ["År 1", "År 2", "År 3"],
        datasets: [{
            label: "Revenue",
            fillColor: "rgba(172,194,132,0.4)",
            strokeColor: "#ACC26D",
            pointColor: "#ACC26D",
            pointStrokeColor: "#9DB86D",
            pointHighlightFill: "#FFF",
            data: revenue
        }, {
            label: "Profit",
            fillColor: "rgba(194,132,172,0.4)",
            strokeColor: "#C26DAC",
            pointColor: "#C26DAC",
            pointStrokeColor: "#B86D9D",
            pointHighlightFill: "#FFF",
            data: profit
        }]
    };

    var cashForecastSummaryOptions = {
        responsive: true,
        maintainAspectRatio: true,
        pointHitDetectionRadius: 20,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };

    var cashForecastSummary = $("#cashForecastSummary").get(0).getContext("2d");
    new Chart(cashForecastSummary).Line(cashForecastSummaryData, cashForecastSummaryOptions);

}

/* *** Cash forecast chart end *** */

/* *** Edit contents in "Sök kapital" *** */

$('#editSummary').bind('click', function() {
  $('.summary-row').toggle();
  $('.summary-cash-forecast').toggle();
  $('.edit-row').toggle();
});

/* *** Edit contents in "Sök kapital" end *** */

/* *** Carousel *** */

$(document).ready(function() {
 
  $("#salesCarousel").owlCarousel({
    singleItem : true,
    autoHeight : true
  });
 
});

/* *** Carousel end *** */