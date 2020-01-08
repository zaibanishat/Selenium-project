package org.gic.lms;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( 
		 features="C:\\Users\\yasee\\eclipse-workspace\\learning-management\\src\\test\\java\\org\\gic\\lms\\courses\\features"
		 ,glue= {"org\\gic\\lms\\courses\\stepDefination"},
		 format= {"pretty","html:reports/test-report"}, tags="@SmokeTest")
		 public class LMSRunner {

}
