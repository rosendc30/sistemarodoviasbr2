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
        renderTo: 'chart_1nordeste',
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
            renderTo: 'chart_2nordeste',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height: 350,
        },
        title: {
            text: 'TIPOS DE ACIDENTES'
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
            name: 'Dev #1',
            data: [
                ['Atropelamento de animal', 24127],
 ['Atropelamento de pessoa', 28995],
 ['Capotamento', 47660],
 ['Colisão com bicicleta', 13183],
 ['Colisão com objeto fixo', 60741],
 ['Colisão frontal', 33795],
 ['Colisão lateral', 165602],
 ['Colisão traseira', 279226],
 ['Incêndio', 3821],
 ['Colisão Transversal', 95919],
 ['Tombamento', 39404],
 ['Saída de Pista', 144186],
 ['Derramamento de Carga', 5723]
            ]
         }]
    });

    // Switchers (of the Chart1 type) - onclick handler
    $('.switcher').click(function () {  
        var newType = $(this).attr('id');
        ChangeChartType(chart1, chart1.series, newType);
    });
});