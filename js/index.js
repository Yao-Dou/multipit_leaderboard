
// var filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/leaderboard_test.csv";
var loose_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/loose_identification_performance.json";
var strict_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/strict_identification_performance.json";
var gen_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/generation_performance.json";
var gen_metric_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit_leaderboard/master/data/generation_metrics.json";

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

    var table = $('#loose_iden_leaderboard').DataTable({
        ajax: loose_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
            },
            {
                data: 'Model',
                orderable: false
            },
            {
                data: 'Date',
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
                data: 'F1',
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
        order: [[6, 'dsc']]
    });

    $('#strict_iden_leaderboard').DataTable({
        ajax: strict_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
            },
            {
                data: 'Model',
                orderable: false
            },
            {
                data: 'Date',
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
                data: 'F1',
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
        order: [[6, 'dsc']]
    });

    $('#gen_leaderboard').DataTable({
        ajax: gen_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
            },
            {
                data: 'Model',
                orderable: false
            },
            {
                data: 'Date',
            },
            {
                data: 'BERT-iBLEU',
            },
            {
                data: 'Self-BLEU',
            },
            {
                data: 'BERT-Score',
            },
            {
                data: 'BLEU',
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
        order: [[3, 'dsc']]
    });

    $('#gen_metrics').DataTable({
        ajax: gen_metric_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
            },
            {
                data: 'Metric',
                orderable: false
            },
            {
                data: 'Referenceless',
            },
            {
                data: 'Fluency Correlation',
            },
            {
                data: 'Semantic Similarity Correlation',
            },
            {
                data: 'Diversity Correlation',
            },
            {
                data: 'Overall Correlation',
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
        order: [[5, 'dsc']]
    });

    $('#search-box').keyup(function(){
        table.search($(this).val()).draw() ;
    })

    // get the position of the
});