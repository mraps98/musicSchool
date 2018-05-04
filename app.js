$(document).ready(function(){
    
    var instruments = ["Guitar","Piano","Drums","Flute","Clarinet","Sitar","Tabla"];
    var instrumentChosen, levelChosen;

    function initialize(){
        $(".col").hide();
        $(".instrumentSelectingView").show();
        fillUpInstrumentList();
    }

    function fillUpInstrumentList(){
        $("#instrumentsList").empty();
        for (var i = 0; i < instruments.length; i++){
            $("#instrumentsList").append("<li value=\"" + instruments[i] + "\" class=\"instrumentList\">" + instruments[i] + "</li>");
        }
    }
    
    $(document).on('click',".instrumentList", function(){
        $(".instrumentList").removeClass("clicked");
        $(this).addClass("clicked");
        var i = $(this).attr('value');
        $("#classesList").empty();
        $("#classesList").append("<li value=\"Beginner\" class=\"classList\">Beginner " + i + "</li><li value=\"Intermediate\" class=\"classList\">Intermediate " + i + "</li><li value=\"Advanced\" class=\"classList\">Advanced " + i + "</li>");
        $(".classSelectingView").show();
        instrumentChosen = i;
    });

    $(document).on('click',".classList", function(){
        $(".classList").removeClass("clicked");
        $(this).addClass("clicked");
        $(".studentInformationView").show();
        $("#nameInput").show();
        levelChosen = $(this).attr("value");
    });

    $("input").on('input',function(){
        var item = $(this).attr("data-toggle");
        $(item).show();
    });

    $("#goToPayment").on('click',function(){
        var name = $("#nameInputBox").val();
        var age = $("#ageInputBox").val();
        var xp = $("#xpInputBox").val();
        var email = $("#emailInputBox").val();
        var mobile = $("#mobileInputBox").val();
        $("#nameOutput").html(name);
        $("#ageOutput").html(age);
        $("#xpOutput").html(xp);
        $("#emailOutput").html(email);
        $("#mobileOutput").html(mobile);
        $("#classOutput").html(levelChosen + " " + instrumentChosen);
        $(".paymentMethodView").show();
    });

    initialize();
});