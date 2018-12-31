var ctx = document.getElementById("scatterChart").getContext("2d");
var canvas = document.getElementById('scatterChart');

var average_data = $.getJSON('epl/data/team_averages.json', function(data) {
    console.log('data',data);
});

console.log(average_data[0].team_averages);

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var bubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: average_data
});



function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;

            }
        }
    }
    rawFile.send(null);
}

