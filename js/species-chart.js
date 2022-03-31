let labels1 = ['Oak', 'Maple', 'Walnut', 'Cherry', 'Birch', 'Poplar'];
let data1 = [30, 30, 10, 10, 10, 10];
let colors1 = ['#B99D5B', '#E3C88B','#2E2104','#A15E0E','#E8D59D','#DBDC97'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1

        }

        ]
    },
    options: {
        plugins: {
            title: {
                text: "Common North American Hardwoods",
                display: true
            },
            legend: {
                display: false
            }
        }
    }

});

let labels2 = ['New Housing', 'Repair and Remodeling', 'Packing and Shipping', 'Non-Residentail', 'Manufacturing'];
let data2 = [30, 20, 10, 10, 10];
let colors2 = ['#B99D5B', '#E3C88B','#2E2104','#A15E0E','#E8D59D'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2

        }

        ]
    },
    options: {
        plugins: {
            title: {
                text: "Primary Lumber Uses",
                display: true
            },
            legend: {
                display: false
            }
        }
    }

});

let labels3 = ['Hardness', 'Crushing Strength', 'Shrinkage', 'Rot Resistance'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
            {
            label: 'Maple',
            fill: true,
            backgroundColor: "rgba(186, 162, 84, 0.2)",
            borderColor: "rgba(186, 162, 84, 1)",
            pointBorderColor: "#ffff",
            pointBackgroundColor: "rgba(186, 162, 84, 1)",
            data: [40, 78, 10, 5]
        },
        {
            label: 'Walnut',
            fill: true,
            backgroundColor: "rgba(38, 27, 3, 0.2)",
            borderColor: "rgba(38, 27, 3, 1)",
            pointBorderColor: "#ffff",
            pointBackgroundColor: "rgba(38, 27, 3, 1)",
            data: [60, 27, 20, 35]
        },
        {
            label: 'Cherry',
            fill: true,
            backgroundColor: "rgba(179, 94, 34, 0.2)",
            borderColor: "rgba(179, 94, 34, 1)",
            pointBorderColor: "#ffff",
            pointBackgroundColor: "rgba(179, 94, 34, 1)",
            data: [30, 40, 50, 90]
        }

        ]
    },
    options: {
        plugins: {
            title: {
                text: "Working Characteristics",
                display: true
            },
            legend: {
                display: false
            }
        }
    }

});

let labels4 = ['US', 'China', 'Brazil', 'Honduras', 'Romania'];
let data4 = [30, 20, 10, 10, 10];
let colors4 = ['#0B5DB9', '#C11D0D','#51C10D','#0EE7E7','#E7E00E'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [{
            data: data4,
            backgroundColor: colors4

        }

        ]
    },
    options: {
        plugins: {
            title: {
                text: "Lumber Production by Country",
                display: true
            },
            legend: {
                display: false
            }
        }
    }

});
