var link = require('/Users/divyagupta/Workspace/tajawal-QA_protractor/tests/links.js');

var LoginPage = function(){

    //this.getUrllogin =  function(){
    //    browser.get(link.login);
    //    console.log(link.login);
    //};

    this.getUrlhome =  function(){
        browser.get(link.home);
        console.log(link.home);
    };

    this.email = element(By.model('user.email'));
    this.password = element(By.model('user.password'));
    this.loginbutton = element(By.css('button[type="submit"]'));
    this.createacc1 = element(By.css('a[href="/signup"]'));
    this.twitter = element(By.linkText('Connect with twitter'));
    this.facebook = element(By.linkText('Connect with Facebook'));
    this.google = element(By.linkText('Connect with Google+'));
    this.createacc = element(By.linkText('Create account')) ;
    this.forgotPassword = element(By.linkText('Forgot my password')) ;
    this.tajawallogo = element(By.css('.tj-header__logo__img'));

    /******Login on home page header****/
    this.userloginicononhome = element(By.css('i.fa.fa-user.login-icon'));
    this.emailonheader = element(By.css('input[name="umail"]'));
    this.passwordonheader = element(By.css('input[type="password"]'));
    this.signInonHeader = element(By.css('button[ng-click="login(form)"]'));
    this.signUponHeader = element(By.css('a[href="/signup"]'));


    /**** Header options ***/
    this.langselector = element(By.binding('langConfig.selectedLang.name'));
    this.currencyselector = element(By.binding('currConfig.selectedCurr.abreviation'));

    /****  Footer options ****/


    //todo
    this.facebookloginonhomeheader = element(By.css('button.tj-btn.tj-btn--blue'));


};

module.exports = LoginPage;