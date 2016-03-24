var links = require('/Users/divyagupta/Workspace/tajawal-QA_protractor/tests/links.js');

var MyAccount = function() {

    this.getmyAccount = function () {
        browser.get(links.home);
        browser.waitForAngular();
    };

    this.usericon = element(By.css('i.fa.fa-user.login-icon'));
    this.email = element(By.model('user.email'));
    this.password = element(By.model('user.password')) ;
    this.loginbutton = element(By.css('button[ng-click="login(form)"]'));
    this.welcomename = element(By.binding(' getCurrentUser().FirstName '));

    this.profilebutton = element(By.css('button[ui-sref="myaccount.profile"]'));
    this.billingbutton = element(By.css('button[ui-sref="myaccount.billing"]'));
    this.travelersbutton = element(By.css('button[ui-sref="myaccount.traveller"]'));
    this.bookingsbutton = element(By.css('button[ui-sref="myaccount.booking"]'));
   // this.logoutbutton = element(By.css('.tj-header__umenu')).$(element(By.css('button[ng-click="logout()"]')));
    this.logoutbutton = element(By.css('button[ng-click="logout()"]'));


    /****My Account page objects*****/
    this.profilelink = element(By.linkText('Profile'));
    this.billinglink = element(By.linkText('Billing'));
    this.travelerslink = element(By.linkText('Travellers'));
    this.bookingslink = element(By.linkText('Bookings'));

    /****My Profile : Account Info ****/
    this.useremail = element(By.model('user.email')) ;
    this.usertitle = element(By.model('user.Title')) ;
    this.userFname = element(By.model('user.FirstName'));
    this.userLname = element(By.model('user.LastName'));

    /**** My Profile : Contact Information ****/
    this.contacttitle = element(By.model('contact.Title'));
    this.contactFname = element(By.model('contact.FirstName'));
    this.contactLname = element(By.model('contact.LastName'));
    this.contactPhone = element(By.model('contact.Phone'));
    this.contactEmail = element(By.model('contact.Email'));

    /****  My Profile : Subscribe to our list ****/
    this.listsforsubscription = element(By.css('div[ng-repeat="(listIndex, list) in newsletter"]'));
    this.flightlistdailysubscribe = element(By.model('subscriptions[listIndex]'));

    this.savechangesprofilebutton = element(By.buttonText('Save changes'));

    /**** My Profile : Change your passsword ****/
    this.currentPassword = element(By.model('user.oldPassword'));
    this.newPassword = element(By.model('user.newPassword'));
    this.changepasswordButton = element(By.buttonText('Change password'));

    this.errormessageonProfile = element(By.binding('alert.msg'));

    /*** My Billing ****/
    this.billtitle = element(By.model('billing.Title'));
    this.billFname = element(By.model('billing.FirstName'));
    this.billLname = element(By.model('billing.LastName'));
    this.billaddress1 = element(By.model('billing.Address1'));
    this.billaddress2 = element(By.model('billing.Address2'));
    this.billcity = element(By.model('billing.City'));
    this.billcountry = element(By.model('billing.CountryId'));
    this.billphone = element(By.model('billing.Phone'));
    this.billcompanyBilling = element(By.model('isCompanyBilling'));
    this.billcompanyName = element(By.model('billing.CompanyName'));
    this.billcompanyVATno = element(By.model('billing.CompanyVatNumber'));

    this.saveChangesbillbutton = element(By.buttonText('Save changes'));

    /*****  My Travelers *****/
    this.addtravelerbutton = element(By.linkText('Add traveller')) ;
    this.backbutton = element(By.linkText('Back'));
    this.deletebutton = element(By.linkText('Delete'));
    this.travelertitle = element(By.model('traveller.Title'));
    this.travelerFname = element(By.model('traveller.FirstName'));
    this.travelermiddlename = element(By.model('traveller.MiddleName'));
    this.travelerLname = element(By.model('traveller.LastName'));
    this.travelerIDnumber = element(By.model('traveller.IdNumber'));
    this.travelerIDExpirydate = element(By.model('traveller.IdExpiryDate'));
    this.travelercountryofIssue = element(By.model('traveller.IdCountryId'));
    this.travelerNationality = element(By.model('traveller.CountryId'));
    this.travelerIDType = element(By.model('traveller.IdType'));
    this.travelerGender = element(By.model('traveller.Gender'));
    this.travelerBirthdate = element(By.model('traveller.BirthDate'));

    this.submittravelerbutton = element(By.buttonText('Submit'));


    /****** My Bookings *****/


};
module.exports = MyAccount;

