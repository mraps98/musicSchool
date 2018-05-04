$(document).ready(function(){
    
    var instruments = ["Guitar","Piano","Drums","Flute","Clarinet","Sitar","Tabla"];

    function initialize(){
        $(".col").hide();
        $(".instrumentSelectingView").show();
        fillUpInstrumentList();
    }

    function fillUpInstrumentList(){
        $("#instrumentsList").empty();
        for (var i = 0; i < instruments.length; i++){
            $("#instrumentsList").append("<li class=\"instrumentList\" value=" + i  + ">" + instruments[i] + "</li>");
        }
    }
    
    $(document).on('click',".instrumentList", function(){
        $(".instrumentList").removeClass("clicked");
        $(this).addClass("clicked");
        var i = $(this).attr('value');
        $("#classesList").empty();
        $("#classesList").append("<li class=\"classList\">Beginner " + instruments[i] + "</li><li class=\"classList\">Intermeddiate " + instruments[i] + "</li><li class=\"classList\">Advanced " + instruments[i] + "</li>");
        $(".classSelectingView").show();
    });

    $(document).on('click',".classList", function(){
        $(".classList").removeClass("clicked");
        $(this).addClass("clicked");
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

    initialize();
});