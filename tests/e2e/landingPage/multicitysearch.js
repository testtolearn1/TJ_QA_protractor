var LandingPage = require('./landingPage.po.js');
//var webdriver = require('/Users/divyagupta/Workspace/tajawal-QA/node_modules/protractor/node_modules/selenium-webdriver');

/* This is landing page browser testing */

describe('landingPage Tests', function () {
    var landingPage = new LandingPage();

    beforeEach(function () {
        landingPage.geturllanding();
        browser.waitForAngular();
    });


    it("should do a MultiCity 4 Trip search and booking flow for 2 Adults ,1 Child, 2 infant", function () {
        landingPage.searchType1.count().then(console.log);
        landingPage.searchType1.get(2).click();

        //  landingPage.multicityselectordropdown.$('[value="number:2"]').click();


        console.log("i am in first leg");
        landingPage.multicitylegs.get(0).sendKeys('dubai');
        expect((landingPage.multicitylegs.get(0)).isPresent()).toBe(true);
        var arr = landingPage.multicitylegs.get(0);
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            expect(landingPage.multicitylegs.row(0).arr[0]).toContain()
        }

        var noofdepaturecity = landingPage.multicitylegs.get(0).$$('id="departure"');
        noofdepaturecity.get(0).sendKeys('Dubai');
        noofdepaturecity.get(1).sendKeys('Manila');

        console.log(landingPage.multicitylegs.get(0)).isPresent().toBe(true);

        console.log("Hi.......");

        console.log(landingPage.multicitylegs.get(0).getWebElements("name"));

        expect(landingPage.multicitylegs.get(0).getAttribute('name')).toEqual('depcity').then(function () {
            landingPage.origin.sendKeys('Dubai');
        })

    });
    browser.driver.sleep(1000);

    //landingPage.multicitylegs.row(0);
    //var a = element(By.repeater('(LegIndex, Leg) in FlightLegs track by $index').row(0));
    //var a = landingPage.multicitylegs.row(0).column('origin');
    //console.log(a);

    console.log("I am done");
});

it("check multicity ng-repeat", function () {
    landingPage.searchType1.get(2).click();
    landingPage.multicityselectordropdown.$('[value="number:2"]').click();
    browser.waitForAngular();
    console.log("This is the first :  Returns the DIV for the first row---------OK");


    /*Protractor find element inside a repeater*/
    element.all(By.repeater('(LegIndex, Leg) in FlightLegs track by $index')).then(function ($index) {
        var titleElement = $index[0].element(By.model('Leg.Origin'));
        titleElement.sendKeys('Berlin');
        browser.driver.sleep(1000);
    });


});






