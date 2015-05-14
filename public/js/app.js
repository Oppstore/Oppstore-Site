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

// Scenario 1 function for revenue, profit and employees
function scen1(userEconomyInput) {
  var progYear1 = userEconomyInput[2] + ( userEconomyInput[2] - userEconomyInput[0] ) / 3;
  var progYear2 = progYear1 + progYear1 - userEconomyInput[2];
  var progYear3 = progYear2 + progYear2 - progYear1;
  userEconomyInput.push(Math.round(progYear1), Math.round(progYear2), Math.round(progYear3));
}

// Scenario 2 function for revenue/profit and employees
function scen2Economy(userEconomyInput, userInflationInput) {
  var progYear1 = userEconomyInput[2] + userEconomyInput[2] * userInflationInput;
  var progYear2 = progYear1 + progYear1 * userInflationInput;
  var progYear3 = userEconomyInput[3] + userEconomyInput[3] - userEconomyInput[2] /* * 1 + userInflationInput */;
  userEconomyInput.push(Math.round(progYear1), Math.round(progYear2), Math.round(progYear3));
}

function scen2Employees(userEmployeeInput, userInflationInput) {
  var progYear1 = userEmployeeInput[2] * ( 1 + userInflationInput );
  var progYear2 = progYear1 * ( 1 + userInflationInput );
  var progYear3 = progYear2 * ( 1 + userInflationInput );
  userEmployeeInput.push(Math.round(progYear1), Math.round(progYear2), Math.round(progYear3));
}

// Scenario 3 function for revenue/profit and employees
function scen3Economy(userEconomyInput, userInflationInput) {
  var inputAverage = ( userEconomyInput[0] + userEconomyInput[1] + userEconomyInput[2] ) / 3; // average of the first 3 years
  var progYear1 = inputAverage + ( inputAverage * userInflationInput );
  var progYear2 = progYear1 + progYear1 * userInflationInput;
  var progYear3 = progYear2 + progYear2 * userInflationInput;
  userEconomyInput.push(Math.round(progYear1), Math.round(progYear2), Math.round(progYear3));
}

function scen3Employees(userEmployeeInput, userInflationInput) {
  var inputTotal = userEmployeeInput[0] + userEmployeeInput[1] + userEmployeeInput[2]; // Total of the first 3 years
  var progYear1 = Math.round( ( inputTotal / 3 ) * ( 1 + userInflationInput ) );
  var progYear2 = Math.round( ( ( inputTotal + userEmployeeInput[3] ) / 4 ) * ( 1 + userInflationInput ) );
  var progYear3 = Math.round( ( ( inputTotal + userEmployeeInput[3] + userEmployeeInput[4] ) / 5 ) * ( 1 + userInflationInput ) );
  userEmployeeInput.push(Math.round(progYear1), Math.round(progYear2), Math.round(progYear3));
}

function displayValues(arrayName, idName1, idName2, idName3, idName4) {

  var prev = arrayName.slice(0, 3);
  var scen1 = arrayName.slice(3, 6);
  var scen2 = arrayName.slice(6, 9);
  var scen3 = arrayName.slice(9, 12);

  for (var arrayLoop = 0; arrayLoop < 3; arrayLoop++) {
    $(idName1).append('<td>' + prev[arrayLoop] + '</td>');
    $(idName2).append('<td>' + scen1[arrayLoop] + '</td>');
    $(idName3).append('<td>' + scen2[arrayLoop] + '</td>');
    $(idName4).append('<td>' + scen3[arrayLoop] + '</td>');
  }

}

/* *** Cash forecast chart *** */
$('.button-generate-cash-forecast').bind('click', function() {

    // Hide button after it has been pressed
    $('.button-generate-cash-forecast').hide();

    /* *** Employees salary and inflation *** */
    var averageSalary = parseFloat( $("#employeesSalary").val() );
    var inflation = parseFloat( $("#inflation").val() / 100 );
    /* *** Employees salary and inflation *** */

    /* *** Revenue array and calculation *** */
    var revenue = $(".revenueInput").map(function() {
        return parseFloat(this.value);
    }).get();
    (revenue.join(","));

    // Run array through function
    scen1(revenue);
    scen2Economy(revenue, inflation);
    scen3Economy(revenue, inflation);
    /* *** Revenue array and calculation end *** */

    /* *** Profit array and calculation *** */
    var profit = $(".profitInput").map(function() {
        return parseFloat(this.value);
    }).get();
    (profit.join(","));

    // Run array through function
    scen1(profit);
    scen2Economy(profit, inflation);
    scen3Economy(profit, inflation);

    /* *** Profit array and calculation end *** */

    /* *** Employees array and calculation *** */
    var employees = $(".employeeInput").map(function() {
        return parseFloat(this.value);
    }).get();
    (employees.join(","));

    // Run array through function
    scen1(employees);
    scen2Employees(employees, inflation);
    scen3Employees(employees, inflation);

    /* *** Employees array and calculation end *** */

    /* *** Arrays and loop for calculating costs and percentages etc *** */

    // Create empty arrays
    var profitPercentage = [];
    var employeesCost = [];
    var employeesCostPercentage = [];
    var othersCost = [];
    var othersCostPercentage = [];

    for (var calcLoop = 0; calcLoop < 12; calcLoop++) {
      // Profit as percentage of revenue
      var profitPercentageLoop = Math.round( (profit[calcLoop] / revenue[calcLoop]) * 100) + "%";
      profitPercentage.push(profitPercentageLoop);
      // Employee cost
      var employeesCostLoop = Math.round( employees[calcLoop] * 12.2 * 1.4 * averageSalary );
      employeesCost.push(employeesCostLoop);
      // Employee cost as percentage of revenue
      var employeesCostPercentageLoop = Math.round( (employeesCost[calcLoop] / revenue[calcLoop]) * 100) + "%";
      employeesCostPercentage.push(employeesCostPercentageLoop);
      // Others cost
      var othersCostLoop = Math.round( revenue[calcLoop] - profit[calcLoop] - employeesCost[calcLoop] );
      othersCost.push(othersCostLoop);
      // Others cost as percentage of revenue
      var othersPercentageCostLoop = Math.round( (othersCost[calcLoop] / revenue[calcLoop]) * 100) + "%";
      othersCostPercentage.push(othersPercentageCostLoop);
    }

    displayValues(revenue, "#revenuePrev", "#revenueScen1", "#revenueScen2", "#revenueScen3");
    displayValues(profit, "#profitPrev", "#profitScen1", "#profitScen2", "#profitScen3");
    displayValues(employees, "#employeesPrev", "#employeesScen1", "#employeesScen2", "#employeesScen3");
    displayValues(profitPercentage, "#profitPercentagePrev", "#profitPercentageScen1", "#profitPercentageScen2", "#profitPercentageScen3");
    displayValues(employeesCost, "#employeesCostPrev", "#employeesCostScen1", "#employeesCostScen2", "#employeesCostScen3");
    displayValues(employeesCostPercentage, "#employeesCostPercentagePrev", "#employeesCostPercentageScen1", "#employeesCostPercentageScen2", "#employeesCostPercentageScen3");
    displayValues(othersCost, "#othersCostPrev", "#othersCostScen1", "#othersCostScen2", "#othersCostScen3");
    displayValues(othersCostPercentage, "#othersCostPercentagePrev", "#othersCostPercentageScen1", "#othersCostPercentageScen2", "#othersCostPercentageScen3");

    // Create array for previous years
    var scen1Revenue = revenue.slice(3, 6);
    var scen2Revenue = revenue.slice(6, 9);
    var scen3Revenue = revenue.slice(9, 12);

    var scen1Profit = profit.slice(3, 6);
    var scen2Profit = profit.slice(6, 9);
    var scen3Profit = profit.slice(9, 12);

    var scen1EmployeesCost = employeesCost.slice(3, 6);
    var scen2EmployeesCost = employeesCost.slice(6, 9);
    var scen3EmployeesCost = employeesCost.slice(9, 12);

    /* *** Arrays and loop for calculating costs and percentages etc *** */


    $('#budget').show();

    var revenuePrognisisData = {
      labels: ["År 1", "År 2", "År 3"],
      datasets: [{
        label: "Scenario 1",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#ACC26D",
        pointColor: "#ACC26D",
        pointHighlightFill: "#FFF",
        data: scen1Revenue
      },
      {
        label: "Scenario 2",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#C26DAC",
        pointColor: "#C26DAC",
        pointHighlightFill: "#FFF",
        data: scen2Revenue
      },
      {
        label: "Scenario 3",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#f39c12",
        pointColor: "#f39c12",
        pointHighlightFill: "#FFF",
        data: scen3Revenue
      }]
    };

    var profitPrognisisData = {
      labels: ["År 1", "År 2", "År 3"],
      datasets: [{
        label: "Scenario 1",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#ACC26D",
        pointColor: "#ACC26D",
        pointHighlightFill: "#FFF",
        data: scen1Profit
      },
      {
        label: "Scenario 2",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#C26DAC",
        pointColor: "#C26DAC",
        pointHighlightFill: "#FFF",
        data: scen2Profit
      },
      {
        label: "Scenario 3",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#f39c12",
        pointColor: "#f39c12",
        pointHighlightFill: "#FFF",
        data: scen3Profit
      }]
    };

    var employeesCostPrognosisData = {
      labels: ["År 1", "År 2", "År 3"],
      datasets: [{
        label: "Scenario 1",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#ACC26D",
        pointColor: "#ACC26D",
        pointHighlightFill: "#FFF",
        data: scen1EmployeesCost
      },
      {
        label: "Scenario 2",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#C26DAC",
        pointColor: "#C26DAC",
        pointHighlightFill: "#FFF",
        data: scen2EmployeesCost
      },
      {
        label: "Scenario 3",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#f39c12",
        pointColor: "#f39c12",
        pointHighlightFill: "#FFF",
        data: scen3EmployeesCost
      }]
    };

    var cashPrognosisOptions = {
        responsive: true,
        maintainAspectRatio: true,
        pointHitDetectionRadius: 20,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };

    var revenuePrognosis = $("#revenuePrognosis").get(0).getContext("2d");
    new Chart(revenuePrognosis).Line(revenuePrognisisData, cashPrognosisOptions);

    var profitPrognosis = $("#profitPrognosis").get(0).getContext("2d");
    new Chart(profitPrognosis).Line(profitPrognisisData, cashPrognosisOptions);

    var employeesCostPrognosis = $("#employeesCostPrognosis").get(0).getContext("2d");
    new Chart(employeesCostPrognosis).Line(employeesCostPrognosisData, cashPrognosisOptions);
});

if ($("body").hasClass("find-investor-summary")) {

    /* *** Employees salary and inflation *** */
    var averageSalary = parseFloat( $("#employeesSalary").val() );
    var inflation = parseFloat( $("#inflation").val() / 100 );
    /* *** Employees salary and inflation *** */

    /* *** Revenue array and calculation *** */
    var revenue = $(".revenueInput").map(function() {
        return parseFloat(this.value);
    }).get();
    (revenue.join(","));

    // Run array through function
    scen1(revenue);
    scen2Economy(revenue, inflation);
    scen3Economy(revenue, inflation);
    /* *** Revenue array and calculation end *** */

    /* *** Profit array and calculation *** */
    var profit = $(".profitInput").map(function() {
        return parseFloat(this.value);
    }).get();
    (profit.join(","));

    // Run array through function
    scen1(profit);
    scen2Economy(profit, inflation);
    scen3Economy(profit, inflation);

    /* *** Profit array and calculation end *** */

    /* *** Employees array and calculation *** */
    var employees = $(".employeeInput").map(function() {
        return parseFloat(this.value);
    }).get();
    (employees.join(","));

    // Run array through function
    scen1(employees);
    scen2Employees(employees, inflation);
    scen3Employees(employees, inflation);

    /* *** Employees array and calculation end *** */

    /* *** Arrays and loop for calculating costs and percentages etc *** */

    // Create empty arrays
    var profitPercentage = [];
    var employeesCost = [];
    var employeesCostPercentage = [];
    var othersCost = [];
    var othersCostPercentage = [];

    for (var calcLoop = 0; calcLoop < 12; calcLoop++) {
      // Profit as percentage of revenue
      var profitPercentageLoop = Math.round( (profit[calcLoop] / revenue[calcLoop]) * 100) + "%";
      profitPercentage.push(profitPercentageLoop);
      // Employee cost
      var employeesCostLoop = Math.round( employees[calcLoop] * 12.2 * 1.4 * averageSalary );
      employeesCost.push(employeesCostLoop);
      // Employee cost as percentage of revenue
      var employeesCostPercentageLoop = Math.round( (employeesCost[calcLoop] / revenue[calcLoop]) * 100) + "%";
      employeesCostPercentage.push(employeesCostPercentageLoop);
      // Others cost
      var othersCostLoop = Math.round( revenue[calcLoop] - profit[calcLoop] - employeesCost[calcLoop] );
      othersCost.push(othersCostLoop);
      // Others cost as percentage of revenue
      var othersPercentageCostLoop = Math.round( (othersCost[calcLoop] / revenue[calcLoop]) * 100) + "%";
      othersCostPercentage.push(othersPercentageCostLoop);
    }

    displayValues(revenue, "#revenuePrev", "#revenueScen1", "#revenueScen2", "#revenueScen3");
    displayValues(profit, "#profitPrev", "#profitScen1", "#profitScen2", "#profitScen3");
    displayValues(employees, "#employeesPrev", "#employeesScen1", "#employeesScen2", "#employeesScen3");
    displayValues(profitPercentage, "#profitPercentagePrev", "#profitPercentageScen1", "#profitPercentageScen2", "#profitPercentageScen3");
    displayValues(employeesCost, "#employeesCostPrev", "#employeesCostScen1", "#employeesCostScen2", "#employeesCostScen3");
    displayValues(employeesCostPercentage, "#employeesCostPercentagePrev", "#employeesCostPercentageScen1", "#employeesCostPercentageScen2", "#employeesCostPercentageScen3");
    displayValues(othersCost, "#othersCostPrev", "#othersCostScen1", "#othersCostScen2", "#othersCostScen3");
    displayValues(othersCostPercentage, "#othersCostPercentagePrev", "#othersCostPercentageScen1", "#othersCostPercentageScen2", "#othersCostPercentageScen3");

    // Create array for previous years
    var scen1Revenue = revenue.slice(3, 6);
    var scen2Revenue = revenue.slice(6, 9);
    var scen3Revenue = revenue.slice(9, 12);

    var scen1Profit = profit.slice(3, 6);
    var scen2Profit = profit.slice(6, 9);
    var scen3Profit = profit.slice(9, 12);

    var scen1EmployeesCost = employeesCost.slice(3, 6);
    var scen2EmployeesCost = employeesCost.slice(6, 9);
    var scen3EmployeesCost = employeesCost.slice(9, 12);

    /* *** Arrays and loop for calculating costs and percentages etc *** */


    $('#budget').show();

    var revenuePrognisisData = {
      labels: ["År 1", "År 2", "År 3"],
      datasets: [{
        label: "Scenario 1",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#ACC26D",
        pointColor: "#ACC26D",
        pointHighlightFill: "#FFF",
        data: scen1Revenue
      },
      {
        label: "Scenario 2",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#C26DAC",
        pointColor: "#C26DAC",
        pointHighlightFill: "#FFF",
        data: scen2Revenue
      },
      {
        label: "Scenario 3",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#f39c12",
        pointColor: "#f39c12",
        pointHighlightFill: "#FFF",
        data: scen3Revenue
      }]
    };

    var profitPrognisisData = {
      labels: ["År 1", "År 2", "År 3"],
      datasets: [{
        label: "Scenario 1",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#ACC26D",
        pointColor: "#ACC26D",
        pointHighlightFill: "#FFF",
        data: scen1Profit
      },
      {
        label: "Scenario 2",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#C26DAC",
        pointColor: "#C26DAC",
        pointHighlightFill: "#FFF",
        data: scen2Profit
      },
      {
        label: "Scenario 3",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#f39c12",
        pointColor: "#f39c12",
        pointHighlightFill: "#FFF",
        data: scen3Profit
      }]
    };

    var employeesCostPrognosisData = {
      labels: ["År 1", "År 2", "År 3"],
      datasets: [{
        label: "Scenario 1",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#ACC26D",
        pointColor: "#ACC26D",
        pointHighlightFill: "#FFF",
        data: scen1EmployeesCost
      },
      {
        label: "Scenario 2",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#C26DAC",
        pointColor: "#C26DAC",
        pointHighlightFill: "#FFF",
        data: scen2EmployeesCost
      },
      {
        label: "Scenario 3",
        fillColor: "rgba(0,0,0,0.0)",
        strokeColor: "#f39c12",
        pointColor: "#f39c12",
        pointHighlightFill: "#FFF",
        data: scen3EmployeesCost
      }]
    };

    var cashPrognosisOptions = {
        responsive: true,
        maintainAspectRatio: true,
        pointHitDetectionRadius: 20,
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };

    var revenuePrognosis = $("#revenuePrognosis").get(0).getContext("2d");
    new Chart(revenuePrognosis).Line(revenuePrognisisData, cashPrognosisOptions);

    var profitPrognosis = $("#profitPrognosis").get(0).getContext("2d");
    new Chart(profitPrognosis).Line(profitPrognisisData, cashPrognosisOptions);

    var employeesCostPrognosis = $("#employeesCostPrognosis").get(0).getContext("2d");
    new Chart(employeesCostPrognosis).Line(employeesCostPrognosisData, cashPrognosisOptions);


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

/* *** Form submission *** */

$(document).ready(function() { 

    $('#formSubmit').click(function() {

      // copy company name
      $('#ItemName').val($('#CAT_Custom_587952_327').val());

      // copy company description
      $('#ItemDescription').val($('#CAT_Custom_588822_327').val());

      // copy company localzation 
      $('#CAT_Custom_6').val($('#CAT_Custom_588820_327').val());

      // copy company sector 
      $('#CAT_Custom_7').val($('#CAT_Custom_588821_327').val());

      // copy company url
      $('#CAT_Custom_5').val($('#WebAddress').val());

      // copy company email
      $('#CAT_Custom_3').val($('#CAT_Custom_588830_327').val());

      // copy company logo
      $('#CAT_Custom_4').val($('#CAT_Custom_588838_327').val());

      $('#profileSubmit').submit();
        $('#profileSettings').ajaxSubmit();
        return false; 
    });

});
/* *** Form submission end *** */