var ReviewPage = require('./reviewPage.po.js');
var ListingPage = require('../listingPage/listingPage.po.js');
var fs = require('fs');

describe("Review page", function () {

    var reviewPage = new ReviewPage();
    var listingPage = new ListingPage();


    beforeEach(function(done){
        browser.ignoreSynchronization = true;
        reviewPage.geturlListingRoundTrip();
        browser.waitForAngular();

        setTimeout(function () {
            console.log('inside timeout');
            done();
        }, 40000)

        console.log("Going to open file!");
        fs.open('input.txt', 'r+', function(err, fd) {
            if (err) {
                return console.error(err);
            }
            console.log("File opened successfully!");
        });
    });



    it("should check for selected flight details as the one on listing page : Round trip flight ", function(){
        /****/


            element(By.model('config.filters')).click();
        listingPage.searchFlightrowByAll.get(0).element(By.linkText('Show details')).click().then(function(){
            browser.waitForAngular();
            browser.driver.sleep(2000);
            element(By.linkText('Flight Itinerary')).click();
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(LegIndex, Leg) in Flight.Leg track by LegIndex')).count().then(console.log);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex')).count().then(console.log);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex').row(0)).count().then(console.log);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex').row(1)).count().then(console.log);

            /*** Leg Outgoing Segment 1 ******/
                var elem_1leg_1sector = element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex').row(0));

            /** By binding should have one arg only ****/
                elem_1leg_1sector.all(By.binding(' getAirlineName(Segment.Carrier)')).getText().then(function (textairline) {
                    var airlinename = textairline;
                    console.log("The airline name for outbound Segment is " + airlinename);
                });
                elem_1leg_1sector.all(By.binding(" Segment.Origin.Code ")).getText().then(function (textseg1origin) {
                    var seg1origin = textseg1origin;
                    console.log("The origin code for outbound Segment origin is " + seg1origin);
                });
                elem_1leg_1sector.all(By.binding(" Segment.Destination.Code ")).getText().then(function (textseg1dest) {
                    var seg1dest = textseg1dest;
                    console.log("The origin code for outbound Segment destination is " + seg1dest);
                });

            /*** Leg Outgoing Segment 2 ******/
                var elem_1leg_2sector = element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex').row(1));

                /** By binding should have one arg only ****/
                elem_1leg_2sector.all(By.binding(' getAirlineName(Segment.Carrier)')).getText().then(function (textairline) {
                    var airlinename = textairline;
                    console.log("The airline name for outbound Segment is " + airlinename);
                });
                elem_1leg_2sector.all(By.binding(" Segment.Origin.Code ")).getText().then(function (textseg1origin) {
                    var seg1origin = textseg1origin;
                    //fs.writeFile('input.txt', seg1origin ,  function(err) {
                    //    if (err) {
                    //        return console.error(err);
                    //    }
                    //});
                    console.log("The origin code for outbound Segment origin is " + seg1origin);

                });
                elem_1leg_1sector.all(By.binding(" Segment.Destination.Code ")).getText().then(function (textseg1dest) {
                    var seg1dest = textseg1dest;
                    console.log("The origin code for outbound Segment destination is " + seg1dest);
                    finalsegdest = function(seg1dest){
                        fs.writeFile('input.txt','seg1dest', function(err){
                            if(err) throw err;
                        });
                        fs.save();
                    };
                });

            //fs.writeFile('input.txt', 'Flight Data',  function(err) {
            //    if (err) {
            //        return console.error(err);
            //    }
            //    console.log("Data written successfully!");
            //    console.log("Let's read newly written data");
                fs.readFile('input.txt', function (err, data) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("Asynchronous read: " + data.toString());
                });
            //});

        });
    });

    it("should check for various flight details and components on the review page : One way flight", function(){

        //listingPage.searchFlightrowByAll.get(0).all(By.binding('getAirlineName(Leg.Carrier)')).getText().then(function (text) {
        //        elemairlinename = text;
        //    });
//todo
        var airl = listingPage.storeairlinename(0);
        console.log("My airline"+ airl);

    }, 40000);


    it("Should check for the fare rules functionality", function(){
        reviewPage.farerules.click();
    });


    it("should  enter passenger information and contact information", function(){
        reviewPage.gender.$('[value="M"]').click();
        reviewPage.firstname.clear.sendKeys("First A");
        reviewPage.middlename.clear.sendKeys("Mid A");
        reviewPage.lastname.clear.sendKeys("Last A");
        reviewPage.email.clear.sendKeys("");
        reviewPage.birthday.clear.sendKeys();
        reviewPage.birthmonth.clear.sendKeys();
        reviewPage.birthyear.clear.sendKeys();
        reviewPage.passportcountry.$('[value="AE"]').click();
        reviewPage.idType.$('[value="Passport"]').click();
        reviewPage.idNumber.clear.sendKeys("E091230");
        reviewPage.passportexpirydate.clear.sendKeys("2018-12-27");
        reviewPage.continuetoPaymentButton.click();
    });

    it("should enter payment details", function(){
        reviewPage.cardholdername.clear.sendKeys("Mohamed Meabed");
        reviewPage.cardholderstreetadd1.clear.sendKeys("Street 0");
        reviewPage.cardholderstreetadd2.clear.sendKeys("Street 1");
        reviewPage.cardholderphone.clear.sendKeys("0655123111");
        reviewPage.cardholdercity.clear.sendKeys("Dubai");
        reviewPage.cardholderstate.clear.sendKeys("Dubai State");
        reviewPage.cardholderzipcode.clear.sendKeys("90001");
        reviewPage.cardholdercountry.$('[value="AE"]').click();
        reviewPage.creditcardnumber.clear.sendKeys("5610591081018250");
        reviewPage.cardexpirationmonth.clear.sendKeys("12");
        reviewPage.cardexpirationyear.clear.sendKeys("16");
        reviewPage.cardCVV.clear.sendKeys("169");
        reviewPage.paynowbutton.click();
    });


});