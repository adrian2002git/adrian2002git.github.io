$(document).ready(function() {
    var oddsArray = null;
    function getOddsArray(currentlevel) {
        // Assuming the JSON data is stored in a variable called 'jsonData'
        $.getJSON("../odds.json", function(data) {
            $.each(data.level_odds, function() {
                var levelobj = $(this);
                //console.log(currentlevel);
                if(parseInt(levelobj[0]['level']) === parseInt(currentlevel)){
                    console.log("ok!");
                    oddsArray = levelobj[0]['odds'];
                    return oddsArray;
                }
            });
        });
    }
    function modifyShop() {
            var currentlevel = $("#CurrentLevel").val();
            var oddsArray = getOddsArray(currentlevel);
            console.log(oddsArray);
    }


    modifyShop();
    console.log("ready");
    });