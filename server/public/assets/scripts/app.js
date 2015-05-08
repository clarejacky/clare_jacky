var htmldata;

$(document).ready(function(){

    $.get('views/resume.html', function (data) {
        htmldata = data;
        $(".resumeDiv").append(htmldata).hide();

    });

    $.get('views/contact.html', function (data) {
        htmldata = data;
        $(".contactDiv").append(htmldata).hide();

    });

    $(".resume").on("click", function(){
        $(".resumeDiv").siblings().hide();
        $(".resumeDiv").show();

    });

    $(".contact").on("click", function(){
        $(".contactDiv").siblings().hide();
        $(".contactDiv").show();


    });

    $(".header").on("click", function (){
        location.reload();
    });



});