/*** JasmineScreenshotReporter not to use ***/
//var JasmineScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
/*** Need to explore HtmlReporter***/
//var HtmlReporter = require('protractor-html-screenshot-reporter');


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //capabilities: {'browserName': 'chrome'},
    multiCapabilities: [
        {
            'browserName': 'firefox'
        },
        {
            'browserName': 'chrome'
        },
        {
            'browserName': 'internet explorer',
            'platform': 'ANY',
            'version': '10'
        },

        //{
        //    'browserName': 'safari'
        //},
    ],

    suites: {
        landingPage: 'tests/e2e/landingPage/*.spec.js',
        signup: 'tests/e2e/signup/**/*spec.js',
        login: 'tests/e2e/login/*.spec.js',
        listingPage: 'tests/e2e/listingPage/*.spec.js',
        testcommands: 'tests/e2e/testspec.js',
        reviewPage: 'tests/e2e/reviewPage/*.spec.js',
        myAccount: 'tests/e2e/myAccount/*.spec.js'
    },

    specs: ['tests/e2e/specs.js'],

    //onPrepare: function() {
    //    jasmine.getEnv().addReporter(new JasmineScreenshotReporter({
    //        dest: '/Users/divyagupta/Workspace/tajawal-QA/protractor-test-result-html',
    //        filename: 'Tajawal-Web-html-v1.0-11November2015.html',
    //        ignoreSkippedSpecs: true,
    //        captureOnlyFailedSpecs: true,
    //        reportOnlyFailedSpecs: false,
    //    }));
    //},

    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '/Users/divyagupta/Workspace/tajawal-QA/protractor-test-result-html',
                screenshotsFolder: '-images',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                filePrefix: 'Tajawal-Web-html-v1.0-11November2015',
                consolidate: true,
                consolidateAll: true
            })
        );
    },

    //onPrepare: function() {
    //    jasmine.getEnv().addReporter(new HtmlReporter({
    //        baseDirectory: '/Users/divyagupta/Workspace/tajawal-QA/protractor-test-result-html',
    //        takeScreenShotsForSkippedSpecs: true,
    //        takeScreenShotsOnlyForFailedSpecs: true,
    //        docTitle: 'Tajawal-Web-html-v1.0-11November2015',
    //        docName: 'Tajawal-Web-html-v1.0-11November2015',
    //        cssOverrideFile: 'css/style.css',
    //        preserveDirectory: true,
    //        pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
    //
    //            var monthMap = {
    //                "1": "Jan",
    //                "2": "Feb",
    //                "3": "Mar",
    //                "4": "Apr",
    //                "5": "May",
    //                "6": "Jun",
    //                "7": "Jul",
    //                "8": "Aug",
    //                "9": "Sep",
    //                "10": "Oct",
    //                "11": "Nov",
    //                "12": "Dec"
    //            };
    //
    //            var currentDate = new Date(),
    //                currentHoursIn24Hour = currentDate.getHours(),
    //                currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
    //                totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()+1]+ '-'+(currentDate.getYear()+1900) +
    //                    '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';
    //
    //            return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
    //        }
    //    }));
    //},

    jasmineNodeOpts: {showColors: true, defaultTimeoutInterval : 60000},
    ignoreSynchronization: true,
    allScriptsTimeout: 60000,
    //getPageTimeout: 30000


};



