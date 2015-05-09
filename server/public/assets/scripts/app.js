var beyonce = require('beyonce');

var htmldata;


//function dataJson(){
//    $.ajax({
//        url: '/.assets/data',
//        data: JSON.stringify(),
//        success: function(response) {
//            $('.contact').append(response);
//        }
//    });
//    console.log(response);
//}

$(document).ready(function(){

function htmlData() {
    $.get('views/resume.html', function (data) {
        htmldata = data;
        $(".resumeDiv").append(htmldata).hide();

    });
}



    $(".resume").on("click", function(){
        $(".resumeDiv").siblings().hide();
        htmlData();
        $(".resumeDiv").show();

    });

    //$(".contact").on("click", function(){
    //    dataJson();
    //    console.log("Hello");
    //
    //});

    $(".projects").on("click", function(){
        beyonce();
    });

    $(".header").on("click", function (){
        location.reload();
    });



});