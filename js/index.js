
var filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/leaderboard_test.csv";

$(document).ready(function() {
    // read the csv file in data folder
    Papa.parse(filepath, {
    header: true,
    download: true,
    complete: function(results) {
        var data = results.data;
        console.log(data);
    }
    });
});