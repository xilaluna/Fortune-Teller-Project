$("button").click(function(){
    var year = $(".birthYear").val();
    year = Math.abs(year - 2050);
    $(".yearResults").text(year);
    var favNumber =$(".favoriteNumber").val();
    favNumber +=" million";
    $(".numberResults").text(favNumber);
    var adjective_V =$(".adjective").val();
    $(".adjectiveResults").text(adjective_V);
    $(".results").fadeIn(2000);
});