var htmldata;

$(document).ready(function(){

    $(".resume").on("click", function(){
        $(".resumeDiv").siblings().empty();
        $.get('views/resume.html', function (data) {
            htmldata = data;
            $(".resumeDiv").append(htmldata);

        });

    });

    $(".contact").on("click", function(){
        $(".contactDiv").siblings().empty();
        $.get('views/contact.html', function (data) {
            htmldata = data;
            $(".contactDiv").append(htmldata);

        });

    });

    $(".header").on("click", function (){
        location.reload();
    });



});