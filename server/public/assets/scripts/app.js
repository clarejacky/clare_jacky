var htmldata;

function getData(){
    $.ajax({
        url: '/project',
        success: function(response) {
            $('.project').append(response);

        }
    });
}

$(document).ready(function(){

    $.get('views/resume.html', function (data) {
        htmldata = data;
        $(".resumeDiv").append(htmldata).hide();

    });


    $.getJSON('assets/data/data.json', function (data) {
        console.log(data);
        $(".contactDiv").append(data.name+"</br>").hide();
        $(".contactDiv").append(data.email+"</br>").hide();
        $(".contactDiv").append(data.phoneNumber).hide();


    });

    $(".resume").on("click", function(){
        $(".resumeDiv").siblings().hide();
        $(".resumeDiv").show();

    });

    $(".contact").on("click", function(){
        $(".contactDiv").siblings().hide();
        $(".contactDiv").show();


    });

    $(".projects").on("click", function() {
      getData();

    })

    $(".header").on("click", function (){
        location.reload();
    });



});