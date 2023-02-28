$(document).ready(function() {
    var oddsArray = null;

    function getOddsArray(currentlevel, callback) {
        $.getJSON("../odds.json", function(data) {
            $.each(data.level_odds, function() {
                var levelobj = $(this);
                if (parseInt(levelobj[0]['level']) === parseInt(currentlevel)) {
                    oddsArray = levelobj[0]['odds'];
                    callback(oddsArray);
                }
            });
        });
    }

    function generateChampion(callback) {
        var currentlevel = $("#CurrentLevel").val();
        getOddsArray(currentlevel, function(oddsArray) {
            var cost1odds = oddsArray[0]['percent'];
            var cost2odds = oddsArray[1]['percent'];
            var cost3odds = oddsArray[2]['percent'];
            var cost4odds = oddsArray[3]['percent'];
            var cost5odds = oddsArray[4]['percent'];

            var championArray = [];
            for (var i = 0; i < 5; i++) {
                var random_num = Math.floor(Math.random() * 100);

                if (random_num < cost1odds ) {
                    var champion_tier = 1;
                } else if (random_num < cost1odds + cost2odds) {
                    var champion_tier = 2;
                } else if (random_num < cost1odds + cost2odds + cost3odds) {
                    var champion_tier = 3;
                } else if (random_num < cost1odds + cost2odds + cost3odds + cost4odds) {
                    var champion_tier = 4;
                } else if (random_num < cost1odds + cost2odds + cost3odds + cost4odds + cost5odds) {
                    var champion_tier = 5;
                }
                championArray.push(champion_tier);
            }
            callback(championArray);
        });
    }

    $("#roll").click(function() {
        generateChampion(function(championArray) {
            refreshShop(championArray);
        });
    });

    function refreshShop(championArray) {
        // Use the championArray here
        console.log(championArray);
        $.each(championArray, function( index, value ) {
            console.log( index + ": " + value );
            switch (value){
                case "1":
                    $(".champion-panel").style("background: gray");
                    break;
                case "2":
                    break;
                case "3":
                    break;

                case "4":
                    break;

                case "5":
                    break;

            }
        });
    }
});
