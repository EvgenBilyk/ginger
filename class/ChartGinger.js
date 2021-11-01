class ChartGinger {
    constructor(lineA, lineB) {
        this.lineA = lineA;
        this.lineB = lineB;
    }


    render(weightLine, fontSizeLabel, weightPoint, canvasSize) {
        const data = {
            labels: [
                'Паранойя',
                'Садизм',
                'Мания',
                'Истерия',
                'Шизоидность',
                'Мазохизм',
                'Депрессия',
                'Обсессивность'
            ],

            datasets: [
                {
                    labelColor: 'rgb(255, 99, 132)',
                    lineTension: 0.3,
                    label: 'Линия А',
                    data: this.lineA,
                    fill: true,
                    borderColor: 'rgb(255, 99, 132)',
                    pointBorderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(240, 136, 136, 0.2)',
                    borderWidth: weightLine,
                    pointBorderWidth: weightPoint,
                    pointBackgroundColor: 'rgb(255, 99, 132)',

                }, {
                    labelColor: 'rgba(54, 162, 235, 0.2)',
                    lineTension: 0.3,
                    label: 'Линия Б',
                    data: this.lineB,
                    fill: true,
                    borderColor: 'rgb(54, 162, 235)',
                    pointBorderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(39, 183, 240, 0.2',
                    borderWidth: weightLine,
                    pointBorderWidth: weightPoint,
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                },
                // {
                //     lineTension: 0.5,
                //     label: 'Нижняя черта',
                //     data: [3, 3, 3, 3, 3, 3, 3, 3],
                //     fill: false,
                //     borderColor: 'rgb(181, 201, 1)',
                //     pointBorderColor: 'rgb(181, 201, 1)',
                //     borderWidth: 2,
                //     pointBorderWidth: 0.2,
                // },
                // {
                //     lineTension: 0.4,
                //     label: 'Верхняя черта',
                //     data: [10, 10, 10, 10, 10, 10, 10, 10],
                //     fill: false,
                //     backgroundColor: 'rgba(73, 240, 39, 0.1)',
                //     borderColor: 'rgba(0, 0, 0, 0.9)',
                //     pointBackgroundColor: 'rgba(0, 0, 0, 0.9)',
                //     pointBorderColor: 'rgba(0, 0, 0, 0.9)',
                //     borderWidth: 3,
                //     pointBorderWidth: 0.2,
                // },
            ],
        };


        let ctx = document.getElementById('myChart').getContext('2d');
        ctx.canvas.parentNode.style.height = canvasSize;
        ctx.canvas.parentNode.style.width = canvasSize;

        var myChart = new Chart(ctx, {
            type: 'radar',
            scales: {
                myScale: {
                    axis: 'r'
                }
            },
            data: data,
            options: {
                animations: {
                    tension: {
                        duration: 3000,
                        easing: 'easeInQuad',
                        from: 0.8,
                        to: 0.3,
                        loop: false
                    }
                },
                elements: {
                    line: {
                        borderWidth: 6
                    },
                    label: {
                        color: 'rgb(144, 163, 179)',
                        font: '12'
                    },
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgba(80, 80, 80, 0.699)'
                        },
                        title: {
                            display: true,
                            text: `Время проведения теста: ${moment().format('HH:mm Дата: DD.MM.YYYY')}`,
                            color: 'rgba(80, 80, 80, 0.699)',
                            fullSize: false,
                            font: { weight: 'bold' },
                            padding: '15'
                        }
                    },
                    subtitle: {
                        display: true,
                        text: 'Диаграмма Гингера',
                        font: {
                            weight: 'bold',
                            size: 18
                        },
                    }
                },
                scales: {
                    r: {
                        weight: 3,
                        max: 10,
                        min: 0,
                        ticks: {
                            stepSize: 1,
                            z: 1,
                            backdropColor: 'transporant',
                            color: 'rgb(123, 123, 136)',
                            showLabelBackdrop: false,
                            // font: {
                            //     size: '10'
                            // }
                        },
                        pointLabels: {
                            color: 'rgba(10, 100, 50, 0.699)',
                            font: {
                                weight: '500',
                                size: fontSizeLabel,
                                family: 'FreeMono, monospace'
                            },
                        },
                        grid: {
                            color: 'rgb(151, 144, 49)',
                        }
                    },
                }
            },
        });
    }
}