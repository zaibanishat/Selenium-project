$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("courses.feature");
formatter.feature({
  "line": 2,
  "name": "Courses",
  "description": "",
  "id": "courses",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Navigate to  Courses Archive",
  "description": "",
  "id": "courses;navigate-to--courses-archive",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User enters the url into the chrome browser4",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enters the credentials to login in homepage of Enuma login.",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on  courses archive in the Courses dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "All the courses should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "EnumaCoursesArchive.BrowserLaunch()"
});
formatter.result({
  "duration": 37065804300,
  "status": "passed"
});
formatter.match({
  "location": "EnumaCoursesArchive.Login()"
});
formatter.result({
  "duration": 8477757300,
  "status": "passed"
});
formatter.match({
  "location": "EnumaCoursesArchive.clicks_on_Free_access_type_course_in_the_Course_dropdown()"
});
formatter.result({
  "duration": 72078005200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-RS0GUF60\u0027, ip: \u0027192.168.0.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\yasee\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64792}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 969382fec67cd8e3739fc3d902e6cffb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat org.gic.lms.courses.stepDefination.EnumaCoursesArchive.clicks_on_Free_access_type_course_in_the_Course_dropdown(EnumaCoursesArchive.java:66)\r\n\tat ✽.And clicks on  courses archive in the Courses dropdown(courses.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EnumaCoursesArchive.ThenAllthecoursesshouldbedisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Navigate to other Paid Type",
  "description": "",
  "id": "courses;navigate-to-other-paid-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User enters the url into the chrome browser2",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enters the credentials to login in homepage of Enuma",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "clicks on other Paid type course in the Courses dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "other Paid type courses page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Should display all the details of the Description , curriculum ,instructors and review in other Paid type courses page",
  "keyword": "And "
});
formatter.match({
  "location": "EnumaOtherPaidType.BrowserLaunch()"
});
formatter.result({
  "duration": 18073717300,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.Login()"
});
formatter.result({
  "duration": 7695978900,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.OtherPaidType()"
});
formatter.result({
  "duration": 19095655100,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.PageDisplay()"
});
formatter.result({
  "duration": 4025104500,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.HeaderDisplay()"
});
formatter.result({
  "duration": 19998974000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Navigate to Free Access type page",
  "description": "",
  "id": "courses;navigate-to-free-access-type-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User enters the url into the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "enters the credentials to login",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "clicks on Free access type course in the Course dropdown.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Free Access type page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Should display all the details of the Description , curriculum ,instructors and review",
  "keyword": "And "
});
formatter.match({
  "location": "EnumaFreeAceessType.BrowserLaunch()"
});
formatter.result({
  "duration": 17297982100,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.Login()"
});
formatter.result({
  "duration": 8445692800,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.FreeAccess()"
});
formatter.result({
  "duration": 12547559400,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.PageDisplay()"
});
formatter.result({
  "duration": 5026771100,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.Headerdetails()"
});
formatter.result({
  "duration": 3700937600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Navigate to other free type page",
  "description": "",
  "id": "courses;navigate-to-other-free-type-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User enters the url into the chrome browser1",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Enters the credentials to login in homepage",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "clicks on other free type course in the Courses dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "other free type courses page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Should display all the details of the Description , curriculum ,instructors and review in other free type page",
  "keyword": "And "
});
formatter.match({
  "location": "EnumaOtherFreeType.BrowserLaunch()"
});
formatter.result({
  "duration": 15327762100,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.Login()"
});
formatter.result({
  "duration": 8434514700,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.OtherFreeType()"
});
formatter.result({
  "duration": 17850281600,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.PageDisplay()"
});
formatter.result({
  "duration": 4049012700,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.HeaderDisplay()"
});
formatter.result({
  "duration": 20065325200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Navigate to  Paid Type courses",
  "description": "",
  "id": "courses;navigate-to--paid-type-courses",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "User enters the url into the chrome browser3",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Enters the credentials to login in homepage of Enuma.",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "clicks on  Paid type course in the Courses dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Paid type courses page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Should display all the details of the Description , curriculum ,instructors and review in  Paid type courses page",
  "keyword": "And "
});
formatter.match({
  "location": "EnumaPaidType.BrowserLaunch()"
});
formatter.result({
  "duration": 24901883400,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.Login()"
});
formatter.result({
  "duration": 8923137600,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.PaidType()"
});
formatter.result({
  "duration": 19097337700,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.PageDisplay()"
});
formatter.result({
  "duration": 4032584700,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.HeaderDisplay()"
});
formatter.result({
  "duration": 17885416700,
  "status": "passed"
});
});