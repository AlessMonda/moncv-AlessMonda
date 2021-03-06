import 'bootstrap.native';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './main.css';

import 'jquery-smooth-scroll';
import Chart from 'chart.js';
import 'jquery-gotop';

$(document).ready(() => {
    $('a').smoothScroll();

    $('#goTop').goTop({
        'place': 'right',
        'marginY': '3',
        'marginX': '3'
    });

    $('.progress').each((index, element) => {
        let value = $(element.children).attr('aria-valuenow');
        let remainingValue = $(element.children).attr('aria-valuemax') - value;
        $(element).replaceWith('<canvas id="chart-' + index + '"></canvas>');

        let ctx = $('#chart-' + index);

        //eslint-disable-next-line
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        backgroundColor: ['#3e95cd', '#FFFFFF'],
                        data: [value, remainingValue]
                    }
                ]
            },
            options: {
                tooltips: {
                    enabled: false
                }
            }
        });
    });
});
