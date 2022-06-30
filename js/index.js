
var filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/leaderboard_test.csv";
var json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/leaderboard_test.json";

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

    var table = $('#crowd_leaderboard').DataTable({
        ajax: json_filepath,
        columns: [
            {
                data: 'model',
            },
            {
                data: 'F1',
            },
            {
                data: 'Precision',
            },
            {
                data: 'Recall',
            },
            {
                data: 'Accuracy',
            },
            {
                data: 'F11',
            },
            {
                data: 'Precision1',
            },
            {
                data: 'Recall1',
            },
            {
                data: 'Accuracy1',
            },
        ],
        columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
          }],
        lengthMenu: [
            [10, 20, -1],
            [10, 20, 'All'],
        ],
        // scrollX: true,
        scrollY: '50vh',
        scrollCollapse: true,
        paging: false,
        searching: true,
        info: false,
        dom: 't',
    });

    $('#search-box').keyup(function(){
        table.search($(this).val()).draw() ;
    })

    // get the position of the
});