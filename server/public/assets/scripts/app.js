var htmldata;

$(document).ready(function(){
    $(".resume").on("click", function(){

        $.get('views/resume.html', function (data) {
            htmldata = data;
            (".resumeDiv").append(htmldata);

        });

    });


});