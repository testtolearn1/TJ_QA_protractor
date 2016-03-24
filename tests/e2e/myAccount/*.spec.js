var MyAccount = require('./myAccount.po.js');

describe("MyAccount", function(){

    var myAccount = new MyAccount();

    beforeEach(function(){
        myAccount.getmyAccount();
        browser.waitForAngular();
        myAccount.usericon.click();
        myAccount.email.sendKeys("divya.gupta@tajawal.com");
        myAccount.password.sendKeys("tajawal");
        myAccount.loginbutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
        expect(myAccount.profilebutton.isPresent()).toBe(true);
        expect(myAccount.logoutbutton.isPresent()).toBe(true);
    });


    //it("should show a welcome text with name on successful login for the user", function () {
    //    expect(myAccount.welcomename.getText()).toContain("Divya26Nov!");
    //    myAccount.logoutbutton.click();
    //    browser.waitForAngular();
    //    browser.driver.sleep(10000);
    //});


    it("should click Profile and enter all the profile details and save it ", function(){
        myAccount.profilebutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
        //expect(browser.url).toContain("https://www-dev.tajawal.com/myaccount/profile");
        expect(myAccount.useremail).toEqual("divya.gupta@tajawal.com");

        /***** Enter account info *****/
        myAccount.usertitle.$('[value="Ms"]').click();
        myAccount.userFname.sendKeys("DivyaAuto1");
        myAccount.userLname.sendKeys("GuptaAuto1");

        /***** Enter contact Information ******/
        myAccount.contacttitle.$('[value="Ms"]').click();
        myAccount.contactFname.sendKeys("DivContact");
        myAccount.contactLname.sendKeys("GupContact");
        myAccount.contactPhone.sendKeys("971517271561");
        myAccount.contactEmail.sendKeys("divya.gupta@tajawal.com");

        browser.driver.sleep(10000);


        /****** subscribe to flight list daily basis ***/
        //myAccount.flightlistdailysubscribe.$('[value="daily"]').click();
        //by.id('flight-daily-frequency')

        myAccount.savechangesprofilebutton.click();
        browser.driver.sleep(10000);
        expect(myAccount.errormessageonProfile).toContain("Contact information updated successfully");

        browser.driver.sleep(10000);

        /***** Logout once the changes are saved *****/
        myAccount.usericon.click();
        myAccount.logoutbutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
       // expect(browser.url).toContain("https://www-dev.tajawal.com");
    });



    it("should click Billing and enter all the billing details and save it ", function(){
        myAccount.billingbutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
        expect(browser.url).toContain("https://www-dev.tajawal.com/myaccount/billing");

        /******* Enter Billing details ******/
        myAccount.billtitle.$('[value="Ms"]').click();
        myAccount.billFname.sendKeys("DivyaAuto1");
        myAccount.billLname.sendKeys("GuptaAuto1");
        myAccount.billaddress1.sendKeys("Al Quoz");
        myAccount.billaddress2.sendKeys("Near FGB");
        myAccount.billcity.sendKeys("Dubai");
        myAccount.billcountry.sendKeys("UAE");
        myAccount.billphone.sendKeys("971528292872");
        myAccount.billcompanyBilling.click();
        myAccount.billcompanyName.sendKeys("Tajawal LLC");
        myAccount.billcompanyVATno.sendKeys("V12345");

        myAccount.saveChangesbillbutton.click();
        browser.driver.sleep(1000);
        expect(myAccount.errormessageonProfile).toContain("Billing updated successfully");

        /***** Logout once the changes are saved *****/
        myAccount.usericon.click();
        myAccount.logoutbutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
        expect(browser.url).toContain("https://www-dev.tajawal.com");
    });


    //todo
    it("should click Travelers and add and delete travelers on the form", function(){
        myAccount.travelersbutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
        expect(browser.url).toContain("https://www-dev.tajawal.com/myaccount/travellers");

        /******* Add First traveler and his details ******/
        myAccount.addtravelerbutton.click();

        myAccount.travelertitle.$('[value="Ms"]').click();
        myAccount.travelerFname.sendKeys("DivTraveler1");
        myAccount.travelermiddlename.sendKeys("VikTraveler1");
        myAccount.travelerLname.sendKeys("GupTraveler1");
        myAccount.travelerIDnumber.sendKeys("G12345678");

        myAccount.travelerIDExpirydate.click();
        myAccount.travelerIDExpirydate.all(element(By.binding('title'))).click() ;
        element(By.binding('title')).click();
        element(By.buttonText('2020')).click();
        element(By.buttonText('November')).click();
        element(By.buttonText('24')).click();


        myAccount.travelercountryofIssue.$('[value="AE"]').click();
        myAccount.travelerNationality.$('[value="AE"]').click();
        myAccount.travelerIDType.$('[value="Passport"]').click();
        myAccount.travelerGender.$('[value="M"]').click();

        myAccount.travelerBirthdate.click();
        myAccount.travelerBirthdate.all(element(by.binding('title'))).click();
        element(By.binding('title')).click();
        element(By.css('.glyphicon.glyphicon-chevron-left')).click();
        element(By.id('datepicker-2507-8550-5')).click();
        element(By.id('datepicker-2507-8550-4')).click();
        element(By.buttonText('21')).click();

        myAccount.submittravelerbutton.click();
        browser.driver.sleep(1000);
        expect(myAccount.errormessageonProfile).toContain("Billing updated successfully");


       /******* Add Second traveler and his details ******/
        myAccount.addtravelerbutton.click();

        myAccount.travelertitle.$('[value="Ms"]').click();
        myAccount.travelerFname.sendKeys("DivTraveler1");
        myAccount.travelermiddlename.sendKeys("VikTraveler1");
        myAccount.travelerLname.sendKeys("GupTraveler1");
        myAccount.travelerIDnumber.sendKeys("G12345678");

        myAccount.travelerIDExpirydate.click();
        myAccount.travelerIDExpirydate.all(element(By.binding('title'))).click() ;
        element(By.binding('title')).click();
        element(By.buttonText('2020')).click();
        element(By.buttonText('November')).click();
        element(By.buttonText('24')).click();


        myAccount.travelercountryofIssue.$('[value="AE"]').click();
        myAccount.travelerNationality.$('[value="AE"]').click();
        myAccount.travelerIDType.$('[value="Passport"]').click();
        myAccount.travelerGender.$('[value="M"]').click();

        myAccount.travelerBirthdate.click();
        myAccount.travelerBirthdate.all(element(by.binding('title'))).click();
        element(By.binding('title')).click();
        element(By.css('.glyphicon.glyphicon-chevron-left')).click();
        element(By.id('datepicker-2507-8550-5')).click();
        element(By.id('datepicker-2507-8550-4')).click();
        element(By.buttonText('21')).click();

        myAccount.submittravelerbutton.click();
        browser.driver.sleep(1000);
        expect(myAccount.errormessageonProfile).toContain("Billing updated successfully");


        /******* Delete Second traveler and his details ******/
        //todo


        /***** Logout once the changes are saved *****/
        myAccount.usericon.click();
        myAccount.logoutbutton.click();
        browser.waitForAngular();
        browser.driver.sleep(10000);
        expect(browser.url).toContain("https://www-dev.tajawal.com");
    });

    //todo
    /*** Booking check on My Account ****/


    /******** This should be the last test of the suite ********/
    it("should check the name saved/changed in Profile section reflects back with Welcome on header", function(){
        expect(myAccount.welcomename.isPresent()).toBe(true);
        expect(myAccount.welcomename).toContain("DivyaAuto1");
        expect(myAccount.welcomename).toContain("Divya25Nov");
        browser.waitForAngular();
        browser.driver.sleep(10000);
    });


});