function scen1(e){var o=e[2]+(e[2]-e[0])/3,t=o+o-e[2],s=t+t-o;e.push(Math.round(o),Math.round(t),Math.round(s))}function scen2Economy(e,o){var t=e[2]+e[2]*o,s=t+t*o,n=e[3]+e[3]-e[2];e.push(Math.round(t),Math.round(s),Math.round(n))}function scen2Employees(e,o){var t=e[2]*(1+o),s=t*(1+o),n=s*(1+o);e.push(Math.round(t),Math.round(s),Math.round(n))}function scen3Economy(e,o){var t=(e[0]+e[1]+e[2])/3,s=t+t*o,n=s+s*o,r=n+n*o;e.push(Math.round(s),Math.round(n),Math.round(r))}function scen3Employees(e,o){var t=e[0]+e[1]+e[2],s=Math.round(t/3*(1+o)),n=Math.round((t+e[3])/4*(1+o)),r=Math.round((t+e[3]+e[4])/5*(1+o));e.push(Math.round(s),Math.round(n),Math.round(r))}function displayValues(e,o,t,s,n){for(var r=e.slice(0,3),a=e.slice(3,6),l=e.slice(6,9),i=e.slice(9,12),c=0;3>c;c++)$(o).append("<td>"+r[c]+"</td>"),$(t).append("<td>"+a[c]+"</td>"),$(s).append("<td>"+l[c]+"</td>"),$(n).append("<td>"+i[c]+"</td>")}if($(document).ready(function(){var e=$("#navigation-menu"),o=$("#js-mobile-menu");$(o).on("click",function(o){o.preventDefault(),e.slideToggle(function(){e.is(":hidden")&&e.removeAttr("style")})})}),$(document).ready(function(){$.validate()}),$(document).ready(function(){$(".dropdown-button").click(function(){$(".menu").toggleClass("show-menu")})}),$(document).ready(function(){$(".accordion-tabs").each(function(){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()}),$(".accordion-tabs").on("click","li > a",function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var o=$(this).closest(".accordion-tabs");o.find(".is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),o.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})}),$(".js-accordion-trigger").bind("click",function(e){jQuery(this).parent().find(".accordion-content").slideToggle("fast"),jQuery(this).parent().toggleClass("is-closed"),e.preventDefault()}),$(".button-generate-cash-forecast").bind("click",function(){$(".button-generate-cash-forecast").hide();var e=parseFloat($("#employeesSalary").val()),o=parseFloat($("#inflation").val()/100),t=$(".revenueInput").map(function(){return parseFloat(this.value)}).get();t.join(","),scen1(t),scen2Economy(t,o),scen3Economy(t,o);var s=$(".profitInput").map(function(){return parseFloat(this.value)}).get();s.join(","),scen1(s),scen2Economy(s,o),scen3Economy(s,o);var n=$(".employeeInput").map(function(){return parseFloat(this.value)}).get();n.join(","),scen1(n),scen2Employees(n,o),scen3Employees(n,o);for(var r=[],a=[],l=[],i=[],c=[],p=0;12>p;p++){var C=Math.round(s[p]/t[p]*100)+"%";r.push(C);var u=Math.round(12.2*n[p]*1.4*e);a.push(u);var g=Math.round(a[p]/t[p]*100)+"%";l.push(g);var d=Math.round(t[p]-s[p]-a[p]);i.push(d);var h=Math.round(i[p]/t[p]*100)+"%";c.push(h)}displayValues(t,"#revenuePrev","#revenueScen1","#revenueScen2","#revenueScen3"),displayValues(s,"#profitPrev","#profitScen1","#profitScen2","#profitScen3"),displayValues(n,"#employeesPrev","#employeesScen1","#employeesScen2","#employeesScen3"),displayValues(r,"#profitPercentagePrev","#profitPercentageScen1","#profitPercentageScen2","#profitPercentageScen3"),displayValues(a,"#employeesCostPrev","#employeesCostScen1","#employeesCostScen2","#employeesCostScen3"),displayValues(l,"#employeesCostPercentagePrev","#employeesCostPercentageScen1","#employeesCostPercentageScen2","#employeesCostPercentageScen3"),displayValues(i,"#othersCostPrev","#othersCostScen1","#othersCostScen2","#othersCostScen3"),displayValues(c,"#othersCostPercentagePrev","#othersCostPercentageScen1","#othersCostPercentageScen2","#othersCostPercentageScen3");var f=t.slice(3,6),m=t.slice(6,9),v=t.slice(9,12),y=s.slice(3,6),P=s.slice(6,9),F=s.slice(9,12),S=a.slice(3,6),b=a.slice(6,9),A=a.slice(9,12);$("#budget").show();var D={labels:["År 1","År 2","År 3"],datasets:[{label:"Scenario 1",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointHighlightFill:"#FFF",data:f},{label:"Scenario 2",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointHighlightFill:"#FFF",data:m},{label:"Scenario 3",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#f39c12",pointColor:"#f39c12",pointHighlightFill:"#FFF",data:v}]},L={labels:["År 1","År 2","År 3"],datasets:[{label:"Scenario 1",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointHighlightFill:"#FFF",data:y},{label:"Scenario 2",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointHighlightFill:"#FFF",data:P},{label:"Scenario 3",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#f39c12",pointColor:"#f39c12",pointHighlightFill:"#FFF",data:F}]},M={labels:["År 1","År 2","År 3"],datasets:[{label:"Scenario 1",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointHighlightFill:"#FFF",data:S},{label:"Scenario 2",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointHighlightFill:"#FFF",data:b},{label:"Scenario 3",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#f39c12",pointColor:"#f39c12",pointHighlightFill:"#FFF",data:A}]},_={responsive:!0,maintainAspectRatio:!0,pointHitDetectionRadius:20,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},k=$("#revenuePrognosis").get(0).getContext("2d");new Chart(k).Line(D,_);var E=$("#profitPrognosis").get(0).getContext("2d");new Chart(E).Line(L,_);var H=$("#employeesCostPrognosis").get(0).getContext("2d");new Chart(H).Line(M,_)}),$("body").hasClass("find-investor-summary")){var averageSalary=parseFloat($("#employeesSalary").val()),inflation=parseFloat($("#inflation").val()/100),revenue=$(".revenueInput").map(function(){return parseFloat(this.value)}).get();revenue.join(","),scen1(revenue),scen2Economy(revenue,inflation),scen3Economy(revenue,inflation);var profit=$(".profitInput").map(function(){return parseFloat(this.value)}).get();profit.join(","),scen1(profit),scen2Economy(profit,inflation),scen3Economy(profit,inflation);var employees=$(".employeeInput").map(function(){return parseFloat(this.value)}).get();employees.join(","),scen1(employees),scen2Employees(employees,inflation),scen3Employees(employees,inflation);for(var profitPercentage=[],employeesCost=[],employeesCostPercentage=[],othersCost=[],othersCostPercentage=[],calcLoop=0;12>calcLoop;calcLoop++){var profitPercentageLoop=Math.round(profit[calcLoop]/revenue[calcLoop]*100)+"%";profitPercentage.push(profitPercentageLoop);var employeesCostLoop=Math.round(12.2*employees[calcLoop]*1.4*averageSalary);employeesCost.push(employeesCostLoop);var employeesCostPercentageLoop=Math.round(employeesCost[calcLoop]/revenue[calcLoop]*100)+"%";employeesCostPercentage.push(employeesCostPercentageLoop);var othersCostLoop=Math.round(revenue[calcLoop]-profit[calcLoop]-employeesCost[calcLoop]);othersCost.push(othersCostLoop);var othersPercentageCostLoop=Math.round(othersCost[calcLoop]/revenue[calcLoop]*100)+"%";othersCostPercentage.push(othersPercentageCostLoop)}displayValues(revenue,"#revenuePrev","#revenueScen1","#revenueScen2","#revenueScen3"),displayValues(profit,"#profitPrev","#profitScen1","#profitScen2","#profitScen3"),displayValues(employees,"#employeesPrev","#employeesScen1","#employeesScen2","#employeesScen3"),displayValues(profitPercentage,"#profitPercentagePrev","#profitPercentageScen1","#profitPercentageScen2","#profitPercentageScen3"),displayValues(employeesCost,"#employeesCostPrev","#employeesCostScen1","#employeesCostScen2","#employeesCostScen3"),displayValues(employeesCostPercentage,"#employeesCostPercentagePrev","#employeesCostPercentageScen1","#employeesCostPercentageScen2","#employeesCostPercentageScen3"),displayValues(othersCost,"#othersCostPrev","#othersCostScen1","#othersCostScen2","#othersCostScen3"),displayValues(othersCostPercentage,"#othersCostPercentagePrev","#othersCostPercentageScen1","#othersCostPercentageScen2","#othersCostPercentageScen3");var scen1Revenue=revenue.slice(3,6),scen2Revenue=revenue.slice(6,9),scen3Revenue=revenue.slice(9,12),scen1Profit=profit.slice(3,6),scen2Profit=profit.slice(6,9),scen3Profit=profit.slice(9,12),scen1EmployeesCost=employeesCost.slice(3,6),scen2EmployeesCost=employeesCost.slice(6,9),scen3EmployeesCost=employeesCost.slice(9,12);$("#budget").show();var revenuePrognisisData={labels:["År 1","År 2","År 3"],datasets:[{label:"Scenario 1",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointHighlightFill:"#FFF",data:scen1Revenue},{label:"Scenario 2",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointHighlightFill:"#FFF",data:scen2Revenue},{label:"Scenario 3",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#f39c12",pointColor:"#f39c12",pointHighlightFill:"#FFF",data:scen3Revenue}]},profitPrognisisData={labels:["År 1","År 2","År 3"],datasets:[{label:"Scenario 1",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointHighlightFill:"#FFF",data:scen1Profit},{label:"Scenario 2",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointHighlightFill:"#FFF",data:scen2Profit},{label:"Scenario 3",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#f39c12",pointColor:"#f39c12",pointHighlightFill:"#FFF",data:scen3Profit}]},employeesCostPrognosisData={labels:["År 1","År 2","År 3"],datasets:[{label:"Scenario 1",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#ACC26D",pointColor:"#ACC26D",pointHighlightFill:"#FFF",data:scen1EmployeesCost},{label:"Scenario 2",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#C26DAC",pointColor:"#C26DAC",pointHighlightFill:"#FFF",data:scen2EmployeesCost},{label:"Scenario 3",fillColor:"rgba(0,0,0,0.0)",strokeColor:"#f39c12",pointColor:"#f39c12",pointHighlightFill:"#FFF",data:scen3EmployeesCost}]},cashPrognosisOptions={responsive:!0,maintainAspectRatio:!0,pointHitDetectionRadius:20,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'},revenuePrognosis=$("#revenuePrognosis").get(0).getContext("2d");new Chart(revenuePrognosis).Line(revenuePrognisisData,cashPrognosisOptions);var profitPrognosis=$("#profitPrognosis").get(0).getContext("2d");new Chart(profitPrognosis).Line(profitPrognisisData,cashPrognosisOptions);var employeesCostPrognosis=$("#employeesCostPrognosis").get(0).getContext("2d");new Chart(employeesCostPrognosis).Line(employeesCostPrognosisData,cashPrognosisOptions)}$("#editSummary").bind("click",function(){$(".summary-row").toggle(),$(".summary-cash-forecast").toggle(),$(".edit-row").toggle()}),$(document).ready(function(){$("#salesCarousel").owlCarousel({singleItem:!0,autoHeight:!0})}),$(document).ready(function(){$("#formSubmit").click(function(){return $("#ItemName").val($("#CAT_Custom_587952_327").val()),$("#ItemDescription").val($("#CAT_Custom_588822_327").val()),$("#CAT_Custom_6").val($("#CAT_Custom_588820_327").val()),$("#CAT_Custom_7").val($("#CAT_Custom_588821_327").val()),$("#CAT_Custom_5").val($("#WebAddress").val()),$("#CAT_Custom_3").val($("#CAT_Custom_588830_327").val()),$("#CAT_Custom_4").val($("#CAT_Custom_588838_327").val()),$("#profileSubmit").submit(),$("#profileSettings").ajaxSubmit(),!1})});