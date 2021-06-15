import React from 'react';
import {SimpleHeader} from '@app/components/header';
import Chart from 'chart.js';
import {BasicCard, DropdownCard} from '@app/components/cards';
import {LineChart} from '@app/components/charts/line';
import {DonutChart} from '@app/components/charts/donut';
import {BarChart} from '@app/components/charts/bar';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


function formatNumber(number, decimals, decPoint, thousandsSep) {
    number = (number + '').replace(',', '').replace(' ', '');
    let n = !isFinite(+number) ? 0 : +number;
    let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
    let dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
    let s = '';
    let toFixedFix = function(nn, precc) {
            let k = Math.pow(10, precc);
            return '' + Math.round(nn * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function barCharCallback(chartRef) {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "Revenue",
                backgroundColor: "#4e73df",
                hoverBackgroundColor: "#2e59d9",
                borderColor: "#4e73df",
                data: [4215, 5312, 6251, 7841, 9821, 14984],
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'month'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    },
                    maxBarThickness: 25,
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return '$' + formatNumber(value);
                        }
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
                callbacks: {
                    label: function(tooltipItem, chart) {
                        let datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ': $' + formatNumber(tooltipItem.yLabel);
                    }
                }
            },
        }
    });
}

function earningsChartCallback(chartRef) {
    const myChartRef = chartRef.current.getContext("2d");
    new Chart(myChartRef, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Earnings",
                lineTension: 0.3,
                backgroundColor: "rgba(78, 115, 223, 0.05)",
                borderColor: "rgba(78, 115, 223, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(78, 115, 223, 1)",
                pointBorderColor: "rgba(78, 115, 223, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
                pointHoverBorderColor: "rgba(78, 115, 223, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
            }],
        },
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 25,
                    top: 25,
                    bottom: 0
                }
            },
            scales: {
                xAxes: [{
                    time: {
                        unit: 'date'
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 7
                    }
                }],
                yAxes: [{
                    ticks: {
                        maxTicksLimit: 5,
                        padding: 10,
                        // Include a dollar sign in the ticks
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
            },
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                titleMarginBottom: 10,
                titleFontColor: '#6e707e',
                titleFontSize: 14,
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                intersect: false,
                mode: 'index',
                caretPadding: 10,
                callbacks: {
                    label: function (tooltipItem, chart) {
                        let datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                        return datasetLabel + ':' + tooltipItem.yLabel;
                    }
                }
            }
        }
    });
}

function revenueChartsCallback(chartRef) {
    const myPieChart = chartRef.current.getContext("2d");
    new Chart(myPieChart, {
        type: 'doughnut',
        data: {
            labels: ["Direct", "Referral", "Social"],
            datasets: [{
                data: [55, 30, 15],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });
}

function ChartPage() {
    let earningsChartRef = React.createRef();
    let revenueChartRef = React.createRef();
    let barChartRef = React.createRef();
    return (
        <div>
            <SimpleHeader>Charts</SimpleHeader>
            <p>
                Chart.js is a third party plugin that is used to generate the charts in this theme.
                The charts below have been customized - for further customization options, please visit the <a
                target="_blank" href="https://www.chartjs.org/docs/latest/" rel="noreferrer">official Chart.js
                documentation</a>.
            </p>

            <div className="row">

                <div className="col-xl-8 col-lg-7">
                    <BasicCard title="Earnings Overview">
                        <LineChart callback={earningsChartCallback} chartId="earningChart" chartRef={earningsChartRef}/>
                        <hr />
                        Styling for the area chart can be found in the <code>/src/components/charts/line.js</code> file.
                    </BasicCard>

                    <BasicCard title="Bar Chart">
                        <BarChart callback={barCharCallback} chartId="barChartExample" chartRef={barChartRef}>
                            <hr/>
                            Styling for the bar chart can be found in the<code>/src/components/charts/bar.js</code> file.
                        </BarChart>
                    </BasicCard>
                </div>

                <div className="col-xl-4 col-lg-5">
                    <DropdownCard cardHeader="Revenue Sources" items={[{link: '/action', title: 'Action', type: 'link'},
                        {link: '/action', title: 'Another Action', type: 'link'}, {type: 'divider'},
                        {link: '/action', title: 'Something else', type: 'link'}]} dropdownHeader="Dropdown Header">
                        <DonutChart callback={revenueChartsCallback} chartId="revueChart" chartRef={revenueChartRef}/>
                        <hr/>
                        Styling for the bar chart can be found in the <code>/src/components/charts/donut.js</code> file.
                    </DropdownCard>
                </div>

            </div>
        </div>

    );
}

export default ChartPage;
