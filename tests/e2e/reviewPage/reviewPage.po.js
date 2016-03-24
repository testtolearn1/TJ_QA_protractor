var link = require('/Users/divyagupta/Workspace/tajawal-QA_protractor/tests/links.js');
var ReviewPage = function () {

    this.geturlReview = function () {
        browser.get(link.review_page, 20000);
    };

    this.geturlListingRoundTrip = function () {
        browser.get(link.listingPage_roundtrip, 20000);
    };


    this.flightdetailsheading = element(By.repeater('(LegIndex, Leg) in Quote.Flight.Leg track by LegIndex'));
    this.flightsegmentdetails = element(By.repeater('(SegmentIndex, Segment) in Leg.Segment track by SegmentIndex'));
    this.numberofpaxes = element(By.css(By.id('numberOfPax')));
    this.numberoftickets = element(By.id('numberOfTickets'));
    this.farerules = element(By.buttonText('FareRules'));
    this.continuetopaxinfobutton = element(By.css('button[ng-click="goToPassengerSection(QuoteId)"]'));
    //this.backtopaxinfo = element();

    /****** Flight details ******/
    this.segmentOriginCode = element(By.binding(' Segment.Origin.Code '));
    this.segmentDestinationCode = element(By.binding(' Segment.Destination.Code '));



    /*** Passenger Information ****/

    /***** Contact details *****/
    this.sameAsFirstAdultCheckbox = element(By.css('.checkbox.same-entry-adult')).element(By.css('input[type="checkbox"]'));
    this.title = element(By.model('Contact.Title'));
    this.contactfname = element(By.model('Contact.FirstName'));
    this.contactlname = element(By.model('Contact.LastName'));
    this.contactemail = element(By.model('Contact.Email'));
    this.countrydialcode = element(By.model('Contact.CountryCode'));
    this.contactnumber = element(By.model('Contact.PhoneNumber'));
    this.contactcountrydialcode = element(By.binding('Contact.CountryCode.DialCode'));

    /*** Adult ***/

    this.gender = element(By.model('Pax[PaxIndex].Title'));
    this.firstname = element(By.model('Pax[PaxIndex].FirstName'));
    this.middlename = element(By.model('Pax[PaxIndex].MiddleName'));
    this.lastname = element(By.model('Pax[PaxIndex].LastName'));
    this.email = element(By.model('Email'));
    /*** DOB ***/
    this.DOB = element(By.model('Pax[PaxIndex].BirthDate'));
    this.birthday = element(By.model('Pax[PaxIndex].BirthDate.Day'));
    this.birthmonth = element(By.model('Pax[PaxIndex].BirthDate.Month'));
    this.birthyear = element(By.model('Pax[PaxIndex].BirthDate.Year'));

    this.nationality = element(By.model('Pax[PaxIndex].CountryId'));
    this.identityType = element(By.model('Pax[PaxIndex].IdType'));
    this.countryofIdIssue = element(By.model('Pax[PaxIndex].IdentityCountryId'));
    this.passportnumber = element(By.model('Pax[PaxIndex].IdNumber'));
    this.passportexpirydate = element(By.model('Pax[PaxIndex].IdExpiryDate'));

    this.continuetoPaymentButton = element(By.css('button[ng-click="sellSeat(Quote.TripId)"]'));


    /**** Payment Information ******/
    this.cardholdername = element(By.model('Payment.Card.Name'));
    this.creditcardnumber = element(By.model('Payment.Card.Number'));
    this.cardexpirationmonth = element(By.model('Payment.Card.ExpiryMonth'));
    this.cardexpirationyear = element(By.model('Payment.Card.ExpiryYear'));
    this.cardCVV = element(By.model('Payment.Card.CVV'));

    this.cardholderstreetadd1 = element(By.model('BillingAddress.Street1'));
    this.cardholderstreetadd2 = element(By.model('BillingAddress.Street2'));
    this.cardholdercity = element(By.model('BillingAddress.City'));
    this.cardholderpostalcode = element(By.model('BillingAddress.PostalCode'));
    this.cardholdercountry = element(By.model('BillingAddress.CountryId'));
    this.contactNumber = element(By.model('BillingAddress.PhoneNumber'));

    this.paynowbutton = element(By.buttonText('Pay Now'));


};

module.exports=ReviewPage;