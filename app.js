//CLASS
class Bus {

    Bus (name, stops, colour, monFriTimes, friTimes) {
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;

    }

    getStops(route) {
        var stops = '';
        for (var i = 0; i < route.length; i++) {
            stops += "<li>" =route[i] + "</li><br/>"      }
    }
    return stops
}



//OBJECTS
var awapuni = new Bus ("Awapuni", awapuniStops, "#f69238", awapuniTimesMonFri, awapuniTimesFriOnly)

var rugby = new Bus ("Rugby", rugbyStops, "#009e57", rugbyTimesMonFri, rubgyTimesFri  )

//JQUERY STUFF
$(document).ready(function(){



});
