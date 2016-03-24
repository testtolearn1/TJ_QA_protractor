var ListingPage = require('./listingPage.po.js');


describe("Listing page", function () {

    var listingpage = new ListingPage();

    beforeEach(function (done) {
        browser.ignoreSynchronization = true;
        listingpage.geturllisting();
        browser.waitForAngular();

        setTimeout(function () {
            console.log('inside timeout');
            done();
        }, 40000)
    });


    //it("check no. of results on a page", function(){
    //    console.log("Counting no. of search results .........................");
    //    browser.driver.sleep(10000);
    //    listingpage.searchFlightrow.count().then(console.log);
    //});


    /********One Way Trip listing *********/

    /**** One way nonstop ******/

    it("should check for flight itinerary/fare/Baggage-info for a one-way nonstop flight------OK", function () {
        browser.driver.sleep(10000);
        listingpage.stopscheckboxesByAll.then(function ($index) {
            var noonestop = $index[1].element(By.model('FlightStop.Selected'));
            noonestop.click();
            browser.waitForAngular();
            var no2stop = $index[2].element(By.model('FlightStop.Selected'));
            no2stop.click();
            browser.waitForAngular();
        });

        /**** One way nonstop Flight Itinerary ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Flight Itinerary')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(LegIndex, Leg) in Flight.Leg track by LegIndex')).count().then(console.log);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex')).count().then(console.log);
        });

        /**** One way nonstop Fare rules *********/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Fare rules')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            expect(element(By.css('.fare-breakup')).isDisplayed()).toBe(true);
        });

        /***** One way nonstop Baggage information *****/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Baggage information')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
        });

    }, 40000);

    /**** One way 1 stop ******/

    it("should check for flight itinerary/fare/Baggage-info for a one-way 1stop flight ------OK", function () {
        browser.driver.sleep(10000);
        listingpage.stopscheckboxesByAll.then(function ($index) {
            var noonestop = $index[0].element(By.model('FlightStop.Selected'));
            noonestop.click();
            browser.waitForAngular();
            var no2stop = $index[2].element(By.model('FlightStop.Selected'));
            no2stop.click();
            browser.waitForAngular();
        });

        /**** One way 1 stop Flight Itinerary ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Flight Itinerary')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(LegIndex, Leg) in Flight.Leg track by LegIndex')).count().then(console.log);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex')).count().then(console.log);
        });

        /**** One way 1 stop Fare Rules ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Fare rules')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            expect(element(By.css('.fare-breakup')).isDisplayed()).toBe(true);

        });

        /**** One way 1 stop Baggage Information ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Baggage information')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
        });
    }, 40000);


    /**** One way 2+ stop ******/

    it("should check for flight itinerary/fare/Baggage-info for a one-way 2+stop flight------OK", function () {
        browser.driver.sleep(10000);
        listingpage.stopscheckboxesByAll.then(function ($index) {
            var noonestop = $index[0].element(By.model('FlightStop.Selected'));
            noonestop.click();
            browser.waitForAngular();
            var no2stop = $index[1].element(By.model('FlightStop.Selected'));
            no2stop.click();
            browser.waitForAngular();
        });

        /**** One way 2+ stop Flight Itinerary ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Flight Itinerary')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(LegIndex, Leg) in Flight.Leg track by LegIndex')).count().then(console.log);
            element(By.repeater('(FlightIndex, Flight) in Fare track by FlightIndex').row(0)).all(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex')).count().then(console.log);
        });

        /**** One way 2+ stop Fare Rules ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Fare rules')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            expect(element(By.css('.fare-breakup')).isDisplayed()).toBe(true);

        });

        /**** One way 2+ stop Baggage Information ******/
        listingpage.searchFlightrowByAll.get(0).element(By.linkText('Baggage information')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
        });

    }, 40000);


    it("should check for flight itinerary for a one-way 1 stop flight", function () {
        browser.driver.sleep(10000);
        listingpage.stopscheckboxesarray.get(0).click();
        browser.waitForAngular();
        listingpage.stopscheckboxesarray.get(2).click();
        browser.waitForAngular();
        listingpage.searchFlightrow.get(0).element(By.linkText('Flight Itinerary')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            expect(listingpage.searchLegrow.length).toBe(1);
            expect(listingpage.flightitinerarySegmentsdetails.length).toBe(2);
        });
    }, 20000);

    it("should check for flight itinerary for a one-way 2 stop flight", function () {
        browser.driver.sleep(10000);
        listingpage.stopscheckboxesarray.get(0).click();
        browser.waitForAngular();
        listingpage.stopscheckboxesarray.get(1).click();
        browser.waitForAngular();
        listingpage.searchFlightrow.get(0).element(By.linkText('Flight Itinerary')).click().then(function () {
            browser.waitForAngular();
            browser.driver.sleep(10000);
            expect(listingpage.searchLegrow.length).toBe(1);
            expect(listingpage.flightitinerarySegmentsdetails.length).toBe(3);
        });
    }, 20000);


    console.log("counting no of segments in the first result ROW .................. ");
    console.log(element(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex')).row(1));


    console.log("counting no of segments in the first result GET .................");
    console.log(listingpage.flightitinerarySegmentsdetails.get(0));

    expect((listingpage.flightitinerarySegmentsdetails.row(0)).isPresent()).toBe(true);
    expect((listingpage.airlinedetails).isPresent()).toBe(true);


    it("should check for the fare rules for a flight ", function () {
        listingpage.farerules.click();
    });

    it("should check for the Baggage information for a flight ", function () {
        listingpage.baggageInfo.click();
    });

    it("should check for book operation for a flight ", function () {
        listingpage.bookbutton.click().then(function () {
            browser.waitForAngular();
            expect((element(By.cssContainingText('.ng-scope', 'Passenger Information'))).isPresent()).toBe(true);
        });
    });

    it("should check for the price filter ", function () {
        expect((listingpage.pricefilter).isPresent()).toBe(true);
        // element(By.css('.handle.low')).Key.scrolling
        element(By.css('.handle.low')).actions().scrollLeft(10);
    });

    it("should check for the origin time filter ", function () {

    });

    it("should check for the destination time filter ", function () {

    });

    it("should check for the stop filter ", function () {

    });

    it("should check for the airlines filter ", function () {

    });

    it("should check for the airports filter ", function () {

    });

    /********Sorting *****/

    it(" should Verify the listing results sorted on arrival time  -----------ok redo", function () {
        expect((listingpage.sort).isPresent()).toBe(true);
        listingpage.sort.$('[value="arrival"]').click().then(function () {
            console.log("I have clicked arrival time filter");
            browser.driver.sleep(20000);
            browser.waitForAngular();

        });
    });

    it("should Verify the listing results sorted on departure time -------ok redo  ", function () {
        expect((listingpage.sort).isPresent()).toBe(true);
        listingpage.sort.$('[value="Departure"]').click().then(function () {
            browser.driver.sleep(20000);
            browser.waitForAngular();

        });
    });

    it("should Verify the listing results sorted on Flight Duration---------ok redo ", function () {
        expect((listingpage.sort).isPresent()).toBe(true);
        listingpage.sort.$('[value="duration"]').click().then(function () {
            browser.driver.sleep(20000);
            browser.waitForAngular();

        });
    });

    it("should Verify the listing results sorted on the Price --------ok redo ", function () {
        expect((listingpage.sort).isPresent()).toBe(true);
        listingpage.sort.$('[value="price"]').click().then(function () {
            browser.driver.sleep(20000);
            browser.waitForAngular();

        });
    });


    it("should Verify on clicking 'Change search' the landing page appears", function () {
        expect((listingpage.changesearch).isPresent()).toBe(true);
        listingpage.changesearch.click().then(function () {
            browser.waitForAngular();
            expect((element(By.model('Leg.Origin'))).isPresent()).toBe(true);
            expect(element(By.cssContainingText('.ng-scope', 'Where would you like to go?')));
        });
    });

    it("should Verify the listing results sorted on DIR: ASC", function () {
        expect((listingpage.dirdesc).isPresent()).toBe(true);
        listingpage.dirdesc.click().then(function () {
            browser.waitForAngular();
        });
    });


    /************  Currency selection and conversion *********/

    it("should select a currency from USD to AED and convert the results into the selected currency", function () {
        listingpage.geturllisting();
        var oldfareamt;
        listingpage.searchFlightrowByAll.get(0).all(By.binding('$root.currencyLocaleCode')).getInnerHtml().then(function (curr) {
            console.log(curr);
        });

        listingpage.searchFlightrowByAll.get(0).all(By.binding('Flight.Info.Price.Total | tjconvert:currencyCode | number:0')).getText().then(function (fareamount) {
            console.log(fareamount);
            oldfareamt = fareamount;
        });

        listingpage.currency.click();
        listingpage.currencydropdownselector.$('[value="AED"]').click().then(function () {
            browser.waitForAngular();
            listingpage.searchFlightrowByAll.get(0).all(By.binding('$root.currencyLocaleCode')).getText().then(function (newcurrcode) {
                expect(newcurrcode).toContain("AED");
            });
        });

        listingpage.searchFlightrowByAll.get(0).all(By.binding('Flight.Info.Price.Total | tjconvert:currencyCode | number:0')).getText().then(function (newfareamount) {
            expect(newfareamount).toContain(oldfareamt * 3.67);
        });

    });
});





