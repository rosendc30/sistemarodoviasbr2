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
var chart1, chart2;

// Once DOM (document) is finished loading
$(document).ready(function() {

    // First chart initialization
    chart1 = new Highcharts.Chart({
     chart: {
        renderTo: 'chart_1sudeste',
        type: 'column',
        height: 350,
     },
     title: {
        text: 'Quantidade de Acidentes do periodo entre 2007 e 2013'
     },
     xAxis: {
        categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013']
     },
     yAxis: {
        title: {
           text: ''
        }
     },
     series: [{ name: 'ANO',
        data: [321535, 12905, 6581, 19235, 168389, 50611, 25037]
     }]
    });

    // Second chart initialization (pie chart)
    chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_2sudeste',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 350,
        },
        title: {
            text: 'Tipo de Acidentes'
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
            name: 'Tipos de acidentes',
            data: [
                ['Atropelamento de animal', 241],
 ['Atropelamento de pessoa', 289],
 ['Capotamento', 476],
 ['Colisão com bicicleta', 131],
 ['Colisão com objeto fixo', 607],
 ['Colisão frontal', 337],
 ['Colisão lateral', 1656],
 ['Colisão traseira', 2792],
 ['Incêndio', 382],
 ['Colisão Transversal', 959],
 ['Tombamento', 394],
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});