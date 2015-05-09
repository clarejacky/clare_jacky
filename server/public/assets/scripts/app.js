var htmldata;

$(document).ready(function(){

    $.get('views/resume.html', function (data) {
        htmldata = data;
        $(".resumeDiv").append(htmldata).hide();

    });

    $.getJSON('assets/data/data.json', function (data) {
        console.log(data);
        $(".contactDiv").append(data.name+"</br>");
        $(".contactDiv").append(data.email+"</br>");
        $(".contactDiv").append(data.phoneNumber);


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