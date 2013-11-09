/**
 *
 * Active Charts using Highcharts demonstration
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Script Tutorials
 * http://www.script-tutorials.com/
 */

// Change Chart type function
function ChangeChartType(chart, series, newType) {
    newType = newType.toLowerCase();
    for (var i = 0; i < series.length; i++) {
        var srs = series[0];
        try {
            srs.chart.addSeries({
                type: newType,
                stack: srs.stack,
                yaxis: srs.yaxis,
                name: srs.name,
                color: srs.color,
                data: srs.options.data
            },
            false);
            series[0].remove();
        } catch (e) {
        }
    }
}

// Two charts definition
var chart3, chart4;

// Once DOM (document) is finished loading
$(document).ready(function() {

    // First chart initialization
    chart3 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_3norte',
        type: 'column',
        height: 350,
     },
     title: {
        text: 'Quantidade de acidentes por estado da Região Norte no periodo de 2007 a 2013'
     },
     xAxis: {
        categories: ['ESTADOS']
     },
     yAxis: {
        title: {
           text: 'Quantidade'
        }
     },
     series: [{      
        name: 'AC',
        data: [1351]
     },{
        name: 'RM',
        data: [1370]
     },{
        name: 'RO',
        data: [6420]
     },{
        name: 'RR',
        data: [1597]
     },{
        name: 'TO',
        data: [6029]
     },{
        name: 'PA',
        data: [5081]
     },{
        name: 'AP',
        data: [1135]
     }]
    });

    // Second chart initialization (pie chart)
    chart4 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_4norte',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 350,
        },
        title: {
            text: 'Compara acidentes entre homens e mulheres'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage}%</b>',
            percentageDecimals: 1
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
         series: [{
         type: 'pie',
            name: '',
            data: [
                ['Homens', 15322],
                ['Mulheres', 7661],
                
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});