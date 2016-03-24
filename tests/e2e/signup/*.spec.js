/**
 * Created by divyagupta on 10/4/15.
 */
var Signup = require('./signup.po.js');
//var webdriver = require('/Users/divyagupta/Workspace/tajawal-QA/node_modules/protractor/node_modules/selenium-webdriver');

describe('signup',function() {

    var signup = new Signup();

    beforeEach(function(){
        signup.getUrlSignup();
    });


    it("SU1 :Verify the name field on the Sign Up page and its length and type",function(){
        expect(signup.name.isPresent()).toBe(true);
    });

    it("SU 2 :Verify the email field on the Sign Up page and its length and type", function(){
        expect(signup.email.isPresent()).toBe(true);
    });

    it("SU3 : Verify the password field on the Sign Up page and its length and type", function(){
        expect(signup.password.isPresent()).toBe(true);
    });

    //todo
    it("SU4 : Verify that the password and verify password field should show encrypted chararcters", function(){
    });

    it("SU5 : Verify that the email field does not accepts a string which is not in valid email format aa@aa.aa", function(){
        signup.email.sendKeys("#$@aaa@aa.com");
        expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).isPresent()).toBe(true);
        expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).getInnerHtml()).toContain("Doesn't look like a valid email.");
    });

    it("SU6 : Verfiy the SignUp page contains option as Login with Facebook, Google+,Twitter", function() {
        expect(signup.facebook.isPresent()).toBe(true);
        expect(signup.google.isPresent()).toBe(true);
        expect(signup.twitter.isPresent()).toBe(true);
    });

    it("SU7 : Verify that SignUp page contains Create an account and I have an account (Login) buttons/links",function(){
        expect(signup.createaccountbutton.isPresent()).toBe(true);
        expect(signup.haveanaccount.isPresent()).toBe(true);
    });

    it("UAT-SU-1 : SignUp:Successful", function() {
        signup.name.sendKeys("Divya");
        signup.email.sendKeys("xyz@aa.com");
        signup.password.sendKeys("abc");
        signup.verifypassword.sendKeys("abc");
        signup.createaccountbutton.click();
        browser.driver.sleep(10000);
        browser.waitForAngular();
        expect(element(By.model('Leg.Origin')).isPresent()).toBe(true);
    });

    it('UAT-SU-2 :should check signup unsuccessful on entering email in incorrect format', function(){
        signup.name.sendKeys("Divya");
        signup.email.sendKeys("divya.gupta");
        signup.password.sendKeys("abc@123");
        signup.verifypassword.sendKeys("abc@123");
        signup.createaccountbutton.click();
        expect(element(By.css('p[ng-show="form.email.$error.email && submitted"]')).getInnerHtml()).toContain("Doesn't look like a valid email.");
    });

    //todo
    it('UAT-SU-4 : should check for signup unsuccessful on entering password mismatch', function(){
        signup.name.sendKeys("Divya");
        signup.email.sendKeys("divya.gupta@tajawal.com");
        signup.password.sendKeys("abc@123");
        signup.verifypassword.sendKeys("efd@123");
        signup.createaccountbutton.click();
        expect(element(By.css('p[ng-show="(form.passwordverify.$error.minlength || form.passwordverify.$error.required) && submitted"]')).getInnerHtml()).toContain("Password must be at least 3 characters.");
        console.log("B-17 Bug reported");
    });

    it('UAT-SU-5 : should check for signup unsuccessful on entering already existing username ', function(){
        signup.name.sendKeys("Divya");
        signup.email.sendKeys("divya.gupta@tajawal.com");
        signup.password.sendKeys("abc@123");
        signup.verifypassword.sendKeys("abc@123");
        signup.createaccountbutton.click();
        expect(element(By.css('p[ng-show="form.email.$error.mongoose"]')).getInnerHtml()).toContain("The specified email address is already in use.");
    });

    it("UAT-SU-6 : should check that signup Unsuccessful, blank fields", function(){
         signup.createaccountbutton.click();
        expect(element(By.css('p[ng-show="form.name.$error.required && submitted"]')).getInnerHtml()).toContain("A name is required");
        expect(element(By.css('p[ng-show="form.email.$error.required && submitted"]')).getInnerHtml()).toContain("What's your email address?");
        expect(element(By.css('p[ng-show="(form.password.$error.minlength || form.password.$error.required) && submitted"]')).getInnerHtml()).toContain("Password must be at least 3 characters.");
        expect(element(By.css('p[ng-show="(form.passwordverify.$error.minlength || form.passwordverify.$error.required) && submitted"]')).getInnerHtml()).toContain("Password must be at least 3 characters.");
    });

    //todo
    it('UAT-SU-7 : should signup using FB connect', function(){
        pending('Force Skip FB connect functionality not fully implemented on the tested build');
        signup.facebook.click();
        console.log("to be tested once implemented");
    });

    //todo
    it("UAT-SU-8 : should check that SignUp :Unsuccessful , when FB account is revoked ", function(){
        pending('Force Skip FB connect functionality not fully implemented on the tested build');
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-SU-9 : should signup using Google+ connect', function(){
        pending('Force Skip G+ connect functionality not fully implemented on the tested build');
        signup.google.click();
        console.log("to be tested once implemented");
    });

    //todo
    it("UAT-SU-10 : should check that SignUp :Unsuccessful , when Google+ account is revoked ", function(){
        pending('Force Skip G+ connect functionality not fully implemented on the tested build');
        console.log("to be tested once implemented");
    });

    //todo
    it('UAT-SU-11 : should signup using twitter connect', function(){
        pending('Force Skip twitter connect functionality not fully implemented on the tested build');
        signup.twitter.click();
        console.log("to be tested once implemented");
    });

    //todo
    it("UAT-SU-12 : should check that SignUp :Unsuccessful , when twitter account is revoked ", function(){
        pending('Force Skip twitter connect functionality not fully implemented on the tested build');
        console.log("to be tested once implemented");
    });

    //todo
    it("UAT-SU-13 : Error handling in case of unsuccessful signup attempt via FB, twitter, G+", function(){
        pending('Force Skip FB, G+, twitter connect functionality not fully implemented on the tested build');
        console.log("to be tested once implemented");
    });


    it('UAT-SU-14 : should redirect to login page on clicking I have an account', function(){
        signup.haveanaccount.click();
        expect(browser.getCurrentUrl()).toEqual("http://www-dev.tajawal.com/login");
    });


    it('UAT-SU-15 : Go back to home', function(){
        signup.logoimage.click();
        expect(browser.getCurrentUrl()).toEqual("http://www-dev.tajawal.com/");
    });

});

