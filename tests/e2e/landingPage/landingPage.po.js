var link = require('/Users/divyagupta/Workspace/xyz-QA_protractor/tests/links.js');
var webdriver = require('/Users/divyagupta/Workspace/xyz-QA_protractor/node_modules/protractor/node_modules/selenium-webdriver');

var LandingPage = function () {

    this.geturllanding = function () {
        browser.get(link.home);
        console.log(link.home);
    };

    this.geturlfares = function () {
        browser.get(link.getfares_multicity);
        console.log(link.getfares_multicity);
    };

    this.origin = element(By.model('Leg.Origin'));
    this.nearbyOrigin = element(By.model('Leg.NearbyOrigin'));
    this.destination = element(By.model('Leg.Destination'));
    this.nearbyDestination = element(By.model('Leg.NearbyDestination'));

    this.dates = element(By.model('Leg.datesObject'));
    //this.nextmonthoftheyear = element(By.css('th.next.available'));
    this.nextmonthoftheyear = element(By.css('i.fa.fa-chevron-right.glyphicon.glyphicon-chevron-right'));
    this.traveldate = element(By.css('td[data-title="r2c3"]'));
    this.traveldate1 = element(By.css('td[data-title="r2c3"]'));


    this.calenderleft = element(By.css('div.calendar.left'));
    this.calenderright = element(By.css('div.calendar.right'));

    this.calendersingle = element(By.css('.daterangepicker.dropdown-menu.single.opensright.show-calendar'));
    this.calendersingletable = element(By.css('.calendar-table'));
    this.datesstart = element(By.name('daterangepicker_start'));
    this.datesend = element(By.name('daterangepicker_end'));

    this.cabin = element(By.model('Cabin'));
    this.cabinselector = element(By.binding('Cabin'));
    this.cabinDropDownItems = function () {
        return element.all(By.css('select[ng-model="Cabin"] option'));
    };

    this.triptypes = element(By.model('flightSearchOptions.code'));
    this.searchType = element.all(By.repeater('item in flightSearchOptions'));
    this.flightsearchtype = element(By.model('flightSearchOptions.code'));

    //this.roundtrip =  element(By.css('input[value="RoundTrip"]'));
    //this.oneway = element(By.css('input[value="Oneway"]'));
    //this.multicity = element(By.css('input[value="Multicity"]'));

    this.directonly = element(By.model('Nonstop'));
    this.airline = element(By.model('Airline'));

    this.travelerTotal = element(By.binding('travelerTotal'));
    this.paxValue = element(By.model('value'));
    this.adultselector = element(By.css('div[value="Adult"]'));
    this.childselector = element(By.css('div[value="Child"]'));
    this.infantselector = element(By.css('div[value="Infant"]'));
    this.addpaxplus = element(By.css('span[ng-click="plus()"]'));
    this.removepaxminus = element(By.css('span[ng-click="minus()"]'));

    /* For multicity */
    this.multicitylegs = element.all(By.repeater('(LegIndex, Leg) in FlightLegs track by $index'));
    //this.multicityselectordropdown = element(By.model('legOptions.count'));
    this.multicityadd = element(By.css('button.btn.tj-fsearch__add-destination'));
    this.multicityremove = element(By.css('button.tj-fsearch__remove-city'));

    //this.searchButton = element(By.css('.tj-btn.tj-btn--yellow'));
    this.searchButton = element(By.css('button[ng-click="searchFlight()"]'));

    this.usernameontop = element(By.binding(' getCurrentUser().name '));
    this.logout = element(By.linkText('Logout'));
    this.settingicon = element(By.css('.glyphicon.glyphicon-cog'));

    //
    //this.datesstart = element(webdriver.by.name('daterangepicker_start'));
    //this.datesend = element(webdriver.by.name('daterangepicker_end'));
    //this.cabin = element(protractor.by.model('Cabin'));
    //this.searchType = element(protractor.by.model('SearchType'));
    //this.directonly = element(protractor.by.model('Nonstop'));
    //this.airline = element(protractor.by.model('Airline'));
    //this.paxValue = element(protractor.by.model('value'));
    //this.searchButton = element(protractor.by.binding('\'Search\' | translate'));
    //this.usernameontop = element(protractor.by.binding(' getCurrentUser().name '));
    //this.logout = element(webdriver.by.byLinkText('Logout'));
    //this.settingicon = element(webdriver.by.css('.glyphicon.glyphicon-cog'));


};

module.exports=LandingPage;
