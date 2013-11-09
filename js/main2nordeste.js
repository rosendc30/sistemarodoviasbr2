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
        renderTo: 'chart_3nordeste',
        type: 'column',
        height: 350,
     },
     title: {
        text: 'ACIDENTES POR ESTADO'
     },
     xAxis: {
        categories: ['ESTADOS']
     },
     yAxis: {
        title: {
           text: 'QUANTIDADES'
        }
     },
     series: [{      
        name: 'MA',
        data: [10706]
     },{      
        name: 'SE',
        data: [2745]
     },{      
        name: 'CE',
        data: [8025]
     },{      
        name: 'PI',
        data: [7713]
     },{      
        name: 'RN',
        data: [8496]
     },{      
        name: 'PB',
        data: [7487]
     },{      
        name: 'PE',
        data: [12725]
     },{
        name: 'AL',
        data: [12725]
     },{
        name: 'AL',
        data: [5308]
     },{
        name: 'BA',
        data: [21932]
     }]
    });

    // Second chart initialization (pie chart)
    chart4 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_4nordeste',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 350,
        },
        title: {
            text: 'Percentual de acidentes descriminados por sexo do condutor'
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
            name: 'Compara acidentes entre homens e mulheres',
            data: [
                ['Homens', 100000],
                ['Mulheres', 200000],
                
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});