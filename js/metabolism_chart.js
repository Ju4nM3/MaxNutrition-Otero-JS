const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: [labels[0], labels[1], labels[2], labels[3], labels[4]],
        datasets: [{
            label: 'X',
            data: [dataArray[0], dataArray[1], dataArray[2], dataArray[3], dataArray[4]],
            borderColor: [
                'rgb(93, 67, 153, 0.5)'
            ],
            backgroundColor: [
                'rgb(255, 0, 0, 0.5)',
                'rgb(83, 255, 200, 0.5)',
                'rgb(255, 255, 0, 0.5)',
                'rgb(255, 255, 255, 0.5)',
                'rgb(93, 67, 153, 0.5)'
            ]
        }]
    }
})