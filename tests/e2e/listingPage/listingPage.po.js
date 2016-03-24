var link = require('/Users/divyagupta/Workspace/tajawal-QA_protractor/tests/links.js');
var webdriver = require('/Users/divyagupta/Workspace/tajawal-QA_protractor/node_modules/protractor/node_modules/selenium-webdriver');

var ListingPage = function(){

    this.geturllisting = function(){
        browser.get(link.listingPage_onwway, 40000);
        browser.waitForAngular();
    };

    this.pagination = element(By.binding('page.text'));

    this.searchFlightrowByAll = element.all(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex'));
    this.searchFlightrow = element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex'));

    this.searchLegrowByAll = element.all(By.repeater('(LegIndex, Leg) in Flight.Leg track by LegIndex'));
    this.searchLegrow = element(By.repeater('(LegIndex, Leg) in Flight.Leg track by LegIndex'));

    this.flightSegmentsdetailsByAll = element.all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex'));
    this.flightSegmentsdetails = element(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex'));

    this.bookbutton = element(By.css('button[ng-click="getFareQuote(Flight.AirTripId)"]'));


    /**** This is flight itienary deatils for each segment  */
    this.flightItinerary = element(By.linkText('Flight Itinerary'));


    //this.farerules = element(By.linkText('Fare rules'));
    this.farerules = element(By.cssContainingText('.ng-scope','Fare rules'));


    //this.baggageInfo = element(By.linkText('Baggage Information'));
    this.baggageInfo = element(By.cssContainingText('.ng-scope','Baggage Information'));
    /***** baggage allowance text *********/
    this.baggagaeallowance = element(By.binding(' Segment.Baggage.Free.Text '));


    /*******  filter sliders   ********/
    this.pricefilter = element(By.css('div[ng-if="Filter.Price"]'));
    this.flighttimefilter = element(By.repeater('TimeLeg in Filter.Time track by $index'));
    this.airlinecheckboxes = element(By.repeater('AirlineLeg in Filter.Airline track by $index'));
    this.stopscheckboxesByAll = element.all(By.repeater('FlightStop in Filter.Stop track by $index'));
    this.stopcheckbox = element(By.model('FlightStop.Selected'));
   // this.airportscheckboxesarray = element(By.repeater('AirportLeg in Filter.Airport track by $index'));
    this.airportfilterdestnation = element.all(By.repeater('AirportFilter in AirportLeg.Destination track by $index'));
    this.airportfilterorigin = element.all(By.repeater('AirportFilter in AirportLeg.Origin track by $index'));
    this.airportcheckboxsingle = element(By.model('AirportFilter.Selected'));


    /******* sorting options ( to be loacted using bindings) *******/
    this.sort = element(By.model('config.filters'));
    this.sortoptionsdropdown = function(){
        return element.all(By.css('select[ng-model="config.filters"] option'));
    };

    //this.sortarrival = element(By.linkText('Sort Arrival'));
    //this.sortdeparture = element(By.linkText('Sort Departure'));
    //this.sortduration = element(By.linkText('Sort Duration'));
    //this.sortprice = element(By.linkText('Sort Price'));
    //this.changesearch = element(By.linkText('Change Search'));
    //this.dirdesc = element(By.linkText('DIR: DESC'));

    /**** Currency in header *********/
    this.language = element(By.binding('langConfig.selectedLang.name'));
    this.currency = element(By.binding('currConfig.selectedCurr.abreviation'));
    this.langdropdownselector = element(By.model('langConfig.selectedLang'));
    this.currencydropdownselector = element(By.model('currConfig.selectedCurr'));

    /*** currency code on listing *****/
    this.currencyonSearchResult = element(By.binding('$root.currencyLocaleCode'));
    this.fareamountSearchresult = element(By.binding('Flight.Info.Price.Total | tjconvert:currencyCode | number:0'));


    /*****   fare details for the result set on listing page ****/
    this.airlinename = element(By.binding('getAirlineName(Leg.Carrier)'));

    this.storeairlinename = function(flightindex) {
        console.log("My  flightindex "+ flightindex);
        this.searchFlightrowByAll.get(flightindex).all(By.binding('getAirlineName(Leg.Carrier)')).getText().then(function (text) {
         return text;
        });
    };

    this.departuretime = element(By.binding('Leg.DepartureTime'));
    this.storelegdeparturetime = this.searchFlightrowByAll.get(0).all(By.binding('Leg.DepartureTime')).getText().then(function(text){
         return text;
    });

    this.arrivaltime = element(By.binding('Leg.ArrivalTime'));
    this.storelegarrivaltime = this.searchFlightrowByAll.get(0).all(By.binding('Leg.ArrivalTime')).getText().then(function(text){
        return text;
    });

    this.sourcecode = element(By.binding('Leg.Path[0]'));
    this.storelegsourcecode = this.searchFlightrowByAll.get(0).all(By.binding('Leg.Path[0]')).getText().then(function(text){
        return text;
    });

    this.destinationcode = element(By.binding('lastElement(Leg.Path)'));
    this.storelegdestinationcode = this.searchFlightrowByAll.get(0).all(By.binding('lastElement(Leg.Path)')).getText().then(function(text){
        return text;
    });

    this.flightduration = function() {
        this.searchFlightrowByAll.get(0).all(By.binding('Leg.FlyTime')).getText().then(function (text) {
            return text;
        });
    };


    this.legstops = element(By.binding(' Leg.Stops '));
    this.storelegstops = this.searchFlightrowByAll.get(0).all(By.binding(' Leg.Stops ')).getText().then(function(text){
        return text;
    });


};
module.exports=ListingPage;