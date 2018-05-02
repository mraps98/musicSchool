$(document).ready(function(){
    
    var instruments = ["Guitar","Piano","Drums","Flute","Clarinet","Sitar","Tabla"];

    function fillUpInstrumentList(){
        for (var i = 0; i < instruments.length; i++){
            $("#instrumentsList").append("<li value='" + i + "' class=\"instrumentName\" >" + instruments[i] + "</li>");
        }
    }    

    fillUpInstrumentList();

    $(".instrumentName").on('click',function(){
        var i = $(this).attr('value');
        $("#classList").empty();
        $("#classList").append("<li>" + "Beginner " + instruments[i] + "</li><li>Intermeddiate " + instruments[i] + "</li><li>Advanced " + instruments[i] + "");
        $(".classSelectingView").show();
    });

    $("#classList").on("click",function(){
        $(".studentInformationView").show();
        $("#nameInput").show();
    });

    $("input").on('input',function(){
        var item = $(this).attr("data-toggle");
        $(item).show();
    });

    $("#goToPayment").on('click',function(){
        $(".paymentMethodView").show();
    });
});