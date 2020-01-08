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
  "duration": 17031233200,
  "status": "passed"
});
formatter.match({
  "location": "EnumaCoursesArchive.Login()"
});
formatter.result({
  "duration": 8139347900,
  "status": "passed"
});
formatter.match({
  "location": "EnumaCoursesArchive.clicks_on_Free_access_type_course_in_the_Course_dropdown()"
});
formatter.result({
  "duration": 17697901600,
  "status": "passed"
});
formatter.match({
  "location": "EnumaCoursesArchive.ThenAllthecoursesshouldbedisplayed()"
});
formatter.result({
  "duration": 147975400,
  "status": "passed"
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
  "duration": 15243227200,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.Login()"
});
formatter.result({
  "duration": 8034428700,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.OtherPaidType()"
});
formatter.result({
  "duration": 16019490000,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.PageDisplay()"
});
formatter.result({
  "duration": 4027315900,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherPaidType.HeaderDisplay()"
});
formatter.result({
  "duration": 17816905300,
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
  "duration": 15171948100,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.Login()"
});
formatter.result({
  "duration": 7965326800,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.FreeAccess()"
});
formatter.result({
  "duration": 10134730400,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.PageDisplay()"
});
formatter.result({
  "duration": 5049350900,
  "status": "passed"
});
formatter.match({
  "location": "EnumaFreeAceessType.Headerdetails()"
});
formatter.result({
  "duration": 3758757000,
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
  "duration": 19323467500,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.Login()"
});
formatter.result({
  "duration": 8404078300,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.OtherFreeType()"
});
formatter.result({
  "duration": 17614864300,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.PageDisplay()"
});
formatter.result({
  "duration": 4057250300,
  "status": "passed"
});
formatter.match({
  "location": "EnumaOtherFreeType.HeaderDisplay()"
});
formatter.result({
  "duration": 19602728600,
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
  "duration": 18960740400,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.Login()"
});
formatter.result({
  "duration": 8386305600,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.PaidType()"
});
formatter.result({
  "duration": 15789772900,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.PageDisplay()"
});
formatter.result({
  "duration": 4024954700,
  "status": "passed"
});
formatter.match({
  "location": "EnumaPaidType.HeaderDisplay()"
});
formatter.result({
  "duration": 19844156100,
  "status": "passed"
});
});