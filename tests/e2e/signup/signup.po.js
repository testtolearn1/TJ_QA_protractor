var link = require('/Users/divyagupta/Workspace/tajawal-QA_protractor/tests/links.js');
//var webdriver = require('/Users/divyagupta/Workspace/tajawal-QA/node_modules/protractor/node_modules/selenium-webdriver');

var Signup = function(){

    this.getUrlSignup=function(){
        browser.get(link.signup);
        console.log(link.signup);
    };

    this.name = element(By.model('user.name'));
    this.email = element(By.model('user.email'));
    this.password = element(By.model('user.password'));
    this.verifypassword = element(By.model('user.passwordVerify'));
  //this.signupbutton = element(By.buttonText('Sign up'));
    this.createaccountbutton = element(By.css('button[type="submit"]'));
    this.haveanaccount = element(By.linkText('I have an account'));
    this.facebook = element(By.linkText('Connect with Facebook'));
    this.google = element(By.linkText('Connect with Google+'));
    this.twitter = element(By.linkText('Connect with twitter'));


    this.logoimage = element(By.css('.tj-header__logo__img'));
};

module.exports = Signup ;