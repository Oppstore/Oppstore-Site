$(document).ready(function(){var e=$("#navigation-menu"),t=$("#js-mobile-menu");$(t).on("click",function(t){t.preventDefault(),e.slideToggle(function(){e.is(":hidden")&&e.removeAttr("style")})})}),$(document).ready(function(){$(".dropdown-button").click(function(){$(".menu").toggleClass("show-menu")})}),$(document).ready(function(){$(".accordion-tabs").each(function(e){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()}),$(".accordion-tabs").on("click","li > a",function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var t=$(this).closest(".accordion-tabs");t.find(".is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),t.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})}),$(".js-accordion-trigger").bind("click",function(e){jQuery(this).parent().find(".accordion-content").slideToggle("fast"),jQuery(this).parent().toggleClass("is-closed"),e.preventDefault()});var cashForecastData={labels:["År 1","År 2","År 3"],datasets:[{label:"Revenue",fillColor:"rgba(172,194,132,0.4)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointStrokeColor:"#9DB86D",pointHighlightFill:"#FFF",data:[3234890,4589234,6348849]},{label:"Profit",fillColor:"rgba(194,132,172,0.4)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointStrokeColor:"#B86D9D",pointHighlightFill:"#FFF",data:[944126,1523894,1254932]}]},cashForecastOptions={responsive:!0,maintainAspectRatio:!0,pointHitDetectionRadius:20,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},cashForecast=$("#cashForecast").get(0).getContext("2d");new Chart(cashForecast).Line(cashForecastData,cashForecastOptions);