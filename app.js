//CLASS
class Bus {

    Constuctor (name, stops, colour, monFriTimes, friTimes) {
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
var awapuni = new Bus ("Awapuni",
                       awapuniStops,
                       "#f69238",
                       awapuniTimesMonFri,
                       awapuniTimesFriOnly,
                       awapuniTimesSat,
                       awapuniTimesSun)

var rugby = new Bus ("Rugby",
                     rugbyStops,
                     "#009e57",
                     rugbyTimesMonFri,
                     rubgyTimesFri,
                     rugbyTimesSat,
                     rugbyTimesSun)

var highbury = new Bus ("Highbury",
                        highburyStops,
                        "#00aeef",
                        highburyTimesMonFri,
                        highburyFridayEveningTimes)

var takaro = new Bus ("Takaro",
                      takaroStops,
                      "#ee1b2d",
                      takaroTimesMonFri,
                      takaroTimesFri,
                      takaroTimesSat,
                      takaroTimesSun)

var cloverlea = new Bus ("Cloverlea",
                         cloverleaStops,
                         "#873c96",
                         cloverleaTimesMonFri,
                         cloverleaTimesFriOnly,
                         cloverleaTimesSat,
                         cloverleaTimesSun)

var milson = new Bus ("Milson",
                      milsonStops,
                      "#ef59a1",
                      milsonTimesMonFri,
                      milsonTimesFri,
                      milsonTimesSat,
                      milsonTimesSun)

var rhodes = new Bus ("Rhodes",
                      rhodesStops,
                      "#0153a0",
                      rhodesTimesMonFri,
                      '')

var roslyn = new Bus ("Roslyn",
                      roslynStops,
                      "#c6870e",
                      roslynTimesMonFri,
                      roslynTimesFriOnly)

var brightwater = new Bus ("Brightwater",
                           brightwaterStops,
                           "#fbb555",
                           brightwaterTimesMonFri,
                           brightwaterTimesFri )

var fernlea = new Bus ("Fernlea",
                       fernleaStops,
                       "#008b98",
                       fernleaTimesMonFri,
                       fernleaTimesFri)

var heights = new Bus ("Heights",
                       heightsStops,
                       "#f0563b",
                       heightsTimesMonFri,
                       heightsTimesFri)


//JQUERY STUFF
$(document).ready(function(){



});
