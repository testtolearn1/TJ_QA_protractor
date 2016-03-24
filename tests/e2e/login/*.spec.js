var LoginPage = require('./login.po.js');

describe('login page',function() {

    var login = new LoginPage();

    beforeEach(function(){
        login.getUrlhome();
    });


    it('UAT-LO-1 : should check if the registered user with a email id is able to login successfully', function () {
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        login.email.sendKeys('divya.gupta@tajawal.com');
        login.password.sendKeys('abc@123');
        login.loginbutton.click();
        browser.waitForAngular();
        //expect(element(By.model('Leg.Origin')).isPresent()).toBe(true);
    });

    //todo
    it("UAT-LO-2 : Login Unsuccessful, email not registered", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        login.email.sendKeys('di.gupta@tajawal.com');
        login.password.sendKeys('abc@123');
        login.loginbutton.click();
       // expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).getInnerHtml()).toContain("Please enter a valid email.");
    });

    it("UAT-LO-3 : Login Unsuccessful, incorrect email", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        login.email.sendKeys('aaa');
        login.password.sendKeys('aaa');
        login.loginbutton.click();
        expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).getInnerHtml()).toContain("Please enter a valid email.");
    });

    it("UAT-LO-4 : Login Unsuccessful, incorrect email password combination", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        login.email.sendKeys('divya.gupta@tajawal.com');
        login.password.sendKeys('aaa');
        login.loginbutton.click();
       // expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).getInnerHtml()).toContain("This password is not correct.");
    });

    it("UAT-LO-5 : Login Unsuccessful, blank fields", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
       // expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        login.loginbutton.click();
        //expect(element(By.css('p[ng-show="form.email.$error.required && form.password.$error.required && submitted"]')).getInnerHtml()).toContain("Please enter your email and password.");
    });

    it("UAT-LO-6 : Login Redirect to Signup", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        //expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        login.createacc.click();
        //expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/signup");
        expect(element(By.model('user.name')).isPresent()).toBe(true);
    });

    //todo
    it("UAT-LO-7 : Login Forgot my password", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : Login Forgot my password");
        login.forgotPassword.click();
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-LO-8 : should login using FB connect', function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : should login using FB connect");
        login.facebook.click();
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-LO-9 : Login Unsuccessful , when facebook account is revoked  ', function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : Login Unsuccessful , when facebook account is revoked");
        login.facebook.click();
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-LO-10 : should login using Google+ connect', function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : should login using Google+ connect");
        login.google.click();
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-LO-11 : Login Unsuccessful , when Google+ account is revoked  ', function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : Login Unsuccessful , when Google+ account is revoked");
        login.google.click();
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-LO-12 : should login using Twitter connect', function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : should login using Twitter connect");
        login.twitter.click();
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-LO-13 : Login Unsuccessful , when Twitter account is revoked  ', function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending("failed test : Login Unsuccessful , when Twitter account is revoked");
        login.twitter.click();
        console.log("to be tested once implemented");
    });

    //todo
    it("UAT-LO-14 : Login Error handling in case of unsuccessful login attempt via FB, twitter, G+", function(){
        login.userloginicononhome.click();
        login.signInonHeader.click();
        expect(browser.getCurrentUrl()).toContain("http://www-dev.tajawal.com/login");
        pending('Force Skip FB, G+, twitter connect functionality not fully implemented on the tested build');
        console.log("to be tested once implemented");
    });

    //todo
    it("UAT-LO-15 : Login on home page header", function(){
        pending("Failed test B-21  and B-22 : Validation failing for user login from home page haeder");
        login.userloginicononhome.click();
    });

    //todo
    it("UAT-LO-16 :Login Connect using facebook on home page header", function(){
        pending("B-23 : Functionality not implemented in the tested build");
        login.facebookloginonhomeheader.click();
    });

    //todo
    it("UAT-LO-17 : Login Repeat Testcases for login from the homepage header", function(){
        pending("To do after bug fixes");
    });

    it("UAT-LO-18 : Login Go back to home", function(){
        browser.get("http://tjwlweb:tjwlwebpassword@www-dev.tajawal.com/login");
        login.tajawallogo.click();
        expect(browser.getCurrentUrl()).toEqual("http://www-dev.tajawal.com/");
    });

    it("LO1 : Verify the email field on the Sign In page and its length ",function(){
        expect(login.email.isPresent()).toBe(true);
    });

    it("LO2 : Verify the password field on the Sign In page and its length ",function(){
        expect(login.password.isPresent()).toBe(true);
    });

    it("LO3 : Verify that the email field does not accepts a string which is not in valid email format aa@aa.aa ",function(){
        login.email.sendKeys("#$@aaa@aa.com");
        expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).isPresent()).toBe(true);
        expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).getInnerHtml()).toContain("Please enter a valid email.");
    });

    //todo
    it("LO4 : Verify that the password field should show encrypted characters",function(){

    });

    it("LO5 : Verfiy the SignIn page contains option as Login with Facebook, Google+, Twitter", function(){
        expect(login.facebook.isPresent()).toBe(true);
        expect(login.google.isPresent()).toBe(true);
        expect(login.twitter.isPresent()).toBe(true);
    });

    it("LO6 : Verify that Login page contains Create an account and Login and Forgot Password buttons/links",function(){
        expect(login.createacc.isPresent()).toBe(true);
        expect(login.forgotPassword.isPresent()).toBe(true);
    });

    it("LO8 : Verify the header across pages contain language selector, Currency selector and Login options",function(){
        expect(login.tajawallogo.isPresent()).toBe(true);
        expect(login.currencyselector.isPresent()).toBe(true);
        expect(login.langselector.isPresent()).toBe(true);
        expect(login.userloginicononhome.isPresent()).toBe(true);
    });

    //todo
    it("LO9 : Verify the footer across pages contain tajawal logo, About, FAQ, TnC and other details, email subscrption ",function(){
        pending("to be tested once implemented");
    });

    //todo
    it("LO10 : Verify the pages title across website",function(){
        pending("Bug locked");
    });



});



