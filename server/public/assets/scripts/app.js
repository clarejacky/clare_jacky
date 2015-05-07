var htmldata;

$(document).ready(function(){
    $(".resume").on("click", function(){
        $(".area").empty();
        $.get('views/resume.html', function (data) {
            htmldata = data;
            $(".resumeDiv").append(htmldata);

        });

    });

    $(".contact").on("click", function(){
        $(".area").empty();
        $.get('views/contact.html', function (data) {
            htmldata = data;
            $(".contactDiv").append(htmldata);

        });

    });



});