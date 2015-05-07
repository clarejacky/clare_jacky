var htmldata;

$(document).ready(function(){
    $(".resume").on("click", function(){
        $(".resume").siblings().empty();
        $.get('views/resume.html', function (data) {
            htmldata = data;
            $(".resumeDiv").append(htmldata);

        });

    });

    $(".contact").on("click", function(){
        $(".contact").siblings().empty();
        $.get('views/contact.html', function (data) {
            htmldata = data;
            $(".contactDiv").append(htmldata);

        });

    });



});