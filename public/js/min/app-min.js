if($(document).ready(function(){var e=$("#navigation-menu"),t=$("#js-mobile-menu");$(t).on("click",function(t){t.preventDefault(),e.slideToggle(function(){e.is(":hidden")&&e.removeAttr("style")})})}),$(document).ready(function(){$.validate()}),$(document).ready(function(){$(".dropdown-button").click(function(){$(".menu").toggleClass("show-menu")})}),$(document).ready(function(){$(".accordion-tabs").each(function(){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()}),$(".accordion-tabs").on("click","li > a",function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var t=$(this).closest(".accordion-tabs");t.find(".is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),t.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})}),$(".js-accordion-trigger").bind("click",function(e){jQuery(this).parent().find(".accordion-content").slideToggle("fast"),jQuery(this).parent().toggleClass("is-closed"),e.preventDefault()}),$(".button-generate-cash-forecast").bind("click",function(){$(".button-generate-cash-forecast").hide();var e=$(".revenueInput").map(function(){return this.value}).get();e.join(","),jQuery.each(e,function(e,t){$("#revenueValue").append("<td> "+t+"</td>")});var t=$(".profitInput").map(function(){return this.value}).get();t.join(","),jQuery.each(t,function(e,t){$("#profitValue").append("<td> "+t+"</td>")});var a=$(".employeeInput").map(function(){return this.value}).get();a.join(","),jQuery.each(a,function(e,t){$("#employeeValue").append("<td> "+t+"</td>")}),$("#budget").show();var o={labels:["År 1","År 2","År 3"],datasets:[{label:"Revenue",fillColor:"rgba(172,194,132,0.4)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointStrokeColor:"#9DB86D",pointHighlightFill:"#FFF",data:e},{label:"Profit",fillColor:"rgba(194,132,172,0.4)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointStrokeColor:"#B86D9D",pointHighlightFill:"#FFF",data:t}]},i={responsive:!0,maintainAspectRatio:!0,pointHitDetectionRadius:20,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},n=$("#cashForecast").get(0).getContext("2d");new Chart(n).Line(o,i)}),$("body").hasClass("find-investor-summary")){var revenue=$(".revenueInput").map(function(){return this.value}).get(),profit=$(".profitInput").map(function(){return this.value}).get(),cashForecastSummaryData={labels:["År 1","År 2","År 3"],datasets:[{label:"Revenue",fillColor:"rgba(172,194,132,0.4)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointStrokeColor:"#9DB86D",pointHighlightFill:"#FFF",data:revenue},{label:"Profit",fillColor:"rgba(194,132,172,0.4)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointStrokeColor:"#B86D9D",pointHighlightFill:"#FFF",data:profit}]},cashForecastSummaryOptions={responsive:!0,maintainAspectRatio:!0,pointHitDetectionRadius:20,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},cashForecastSummary=$("#cashForecastSummary").get(0).getContext("2d");new Chart(cashForecastSummary).Line(cashForecastSummaryData,cashForecastSummaryOptions)}$("#editSummary").bind("click",function(){$(".summary-row").toggle(),$(".summary-cash-forecast").toggle(),$(".edit-row").toggle()}),$(document).ready(function(){$("#salesCarousel").owlCarousel({singleItem:!0,autoHeight:!0})});