
var filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/leaderboard_test.csv";

$(document).ready(function() {
    // read the csv file in data folder
    // Papa.parse(filepath, {
    // header: true,
    // download: true,
    // complete: function(results) {
    //     var data = results.data;
    //     console.log(data);
    //     // create a table
    //     var table = $("#leaderboard").DataTable({
    //         data: data,
    //         columns: [
    //             { data: "name" },
    //             { data: "score" }
    //         ]   
    //     });
    // }
    // });

    $('#crowd_leaderboard').DataTable({
        ajax: '../data/leaderboard_test.txt',
        // columns: [
        //     {
        //         data: 'model',
        //     },
        //     {
        //         data: 'F1',
        //     },
        //     {
        //         data: 'Precision',
        //     },
        //     {
        //         data: 'Recall',
        //     },
        //     {
        //         data: 'Accuracy',
        //     },
        //     {
        //         data: 'F11',
        //     },
        //     {
        //         data: 'Precision1',
        //     },
        //     {
        //         data: 'Recall1',
        //     },
        //     {
        //         data: 'Accuracy1',
        //     },
        //     {
        //         data: 'F12',
        //     },
        //     {
        //         data: 'Precision2',
        //     },
        //     {
        //         data: 'Recall2',
        //     },
        //     {
        //         data: 'Accuracy2',
        //     },
        // ],
    });
});