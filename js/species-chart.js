let labels1 = ['Oak', 'Maple', 'Walnut', 'Cherry', 'Birch', 'Poplar'];
let data1 = [30, 30, 10, 10, 10, 10];
let colors1 = ['#B99D5B', '#E3C88B','##2E2104','#A15E0E','#E8D59D','#DBDC97'];

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
        title: {
            text: "What are the most common North American Hardwoods?",
            display: true
        }
    }

});

let labels2 = ['New Housing', 'Repair and Remodeling', 'Packing and Shipping', 'Non-Residentail', 'Manufacturing'];
let data2 = [30, 20, 10, 10, 10];
let colors2 = ['#DB5711', '#86D16D','#6DBAD1','#102462','#010206'];

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
        title: {
            text: "Primary Lumber Uses",
            display: true
        },
        legend: {
            display: false
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
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#ffff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [40, 78, 10, 5]    
        },
        {
            label: 'Walnut',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#ffff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [60, 27, 20, 35]    
        }

        ]
    },
    options: {
        title: {
            text: "Working Characteristics Walnut vs Maple",
            display: true
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
        title: {
            text: "Production by Country",
            display: true
        },
        legend: {
            display: false
        }
    }

});