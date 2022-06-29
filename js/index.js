
var filepath = "data/leaderboard_test.csv";

$(document).ready(function() {
    // read the csv file in data folder
    var data;
    Papa.parse(filepath, {
    header: true,
    download: true,
    complete: function(results) {
        console.log('Complete paring', results); 
        data = results.data;
    }
    });

});