import React from 'react';

import {ButtonHeader} from '@app/components/header';
import {BasicCard, DropdownCard, EmptyCard, SmallCard} from '@app/components/cards';
import {LineChart} from '@app/components/charts/line';


import Chart from 'chart.js';
import {DonutChart} from '@app/components/charts/donut';

import illusImg from '@app/assets/img/undraw_posting_photo.svg';

Chart.defaults.global.defaultFontFamily = 'Nunito';
Chart.defaults.global.defaultFontColor = '#858796';


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

function Dashboard() {
    let earningsChartRef = React.createRef();
    let revenueChartRef = React.createRef();
    return (
        <div>
            <ButtonHeader link="/generate" buttonContent="Generate Report">Dashboard</ButtonHeader>
            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Earnings (Monthly)" icon="fas fa-calendar fa-2x text-gray-300"
                               status="border-left-primary" statusText="text-primary">$40,000</SmallCard>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Earnings (Annual)" icon="fas fa-calendar fa-2x text-gray-300"
                               status="border-left-success" statusText="text-success">$215,000</SmallCard>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Tasks" icon="fas fa-clipboard-list fa-2x text-gray-300"
                               status="border-left-info" statusText="text-info" extraConten={
                                   <div className="progress-bar bg-info" role="progressbar"
                                        style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100"/>}>50%</SmallCard>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <SmallCard cardHeader="Pending Requests" icon="fas fa-comments fa-2x text-gray-300"
                               status="border-left-warning" statusText="text-warning">18</SmallCard>
                </div>
            </div>

            <div className="row">

                <div className="col-xl-8 col-lg-7">
                    <BasicCard title="Earnings Overview">
                        <LineChart callback={earningsChartCallback} chartId="earningChart" chartRef={earningsChartRef}/>
                        <hr />
                        Styling for the area chart can be found in the <code>/Components/Charts/Line/Index.js</code> file.
                    </BasicCard>
                </div>


                <div className="col-xl-4 col-lg-5">

                    <DropdownCard cardHeader="Revenue Sources" items={[{link: '/action', title: 'Action', type: 'link'},
                        {link: '/action', title: 'Another Action', type: 'link'}, {type: 'divider'},
                        {link: '/action', title: 'Something else', type: 'link'}]} dropdownHeader="Dropdown Header">
                        <DonutChart callback={revenueChartsCallback} chartId="revueChart" chartRef={revenueChartRef}/>
                        <div className="mt-4 text-center small">
                            <span className="mr-2">
                                <i className="fas fa-circle text-primary"/> Direct
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-success"/> Social
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-info"/> Referral
                            </span>
                        </div>
                    </DropdownCard>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-6 mb-4">

                    <BasicCard cardHeader="Projects">
                        <h4 className="small font-weight-bold">Server Migration <span
                            className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}}
                                 aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <span
                            className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}}
                                 aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <span
                            className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <span
                            className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}}
                                 aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <span
                            className="float-right">Complete!</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
                                 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                        </div>
                    </BasicCard>

                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-primary" textColour="text-white">Primary <div className="text-white-50 small">#4e73df</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-success" textColour="text-white">Success <div className="text-white-50 small">#1cc88a</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-info" textColour="text-white">Info <div className="text-white-50 small">#36b9cc</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-warning" textColour="text-white">Warning <div className="text-white-50 small">#f6c23e</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-danger" textColour="text-white">Danger <div className="text-white-50 small">#e74a3b</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-secondary" textColour="text-white">Secondary <div className="text-white-50 small">#858796</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-light" textColour="text-black">Light <div className="text-black-50 small">#f8f9fc</div></EmptyCard>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <EmptyCard colour="bg-dark" textColour="text-white">Dark <div className="text-white-50 small">#5a5c69</div></EmptyCard>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 mb-4">

                    <BasicCard cardHeader="Illustration">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={illusImg} alt="..."/>
                        </div>
                        <p>Add some quality, svg illustrations to your project courtesy of <a
                            rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                            constantly updated collection of beautiful svg images that you can use
                            completely free and without attribution!</p>
                        <a rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw &rarr;</a>
                    </BasicCard>

                    <BasicCard cardHeader="Development Approach">
                        <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                            CSS bloat and poor page performance. Custom CSS classNamees are used to create
                            custom components and custom utility classNames.</p>
                        <p className="mb-0">Before working with this theme, you should become familiar with the
                            Bootstrap framework, especially the utility classNames.</p>
                    </BasicCard>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
