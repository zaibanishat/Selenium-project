package org.gic.lms.courses.stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnumaCoursesArchive extends Base {
	WebDriver driver ;
	 //String baseUrl = "http://sethuonline.com/lms";
	 @Given("^User enters the url into the chrome browser4$")
		public void BrowserLaunch() throws Throwable {
			String baseUrl = "http://sethuonline.com/lms";
			//String driverPath = "C:\\\\Imp\\\\chromedriver.exe";
			
			 System.setProperty("webdriver.chrome.driver", driverPath);
			 driver = new ChromeDriver(); 
			 driver.manage().window().maximize();
			 //redirect to your home page
			 driver.get(baseUrl);
			driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
			 Thread.sleep(4000);
	          System.out.println("passed");

		}
	 
	    
		
		@When("^Enters the credentials to login in homepage of Enuma login.$")
		public void Login() throws Throwable {
			driver.findElement(By.xpath("//a[text()='Login']")).click();
			driver.findElement(By.xpath("//input[@id='thim_login']")).sendKeys("testing");
			driver.findElement(By.xpath("//input[@id='thim_pass']")).sendKeys("pxkP3RtPe(X8cWIrlzV)5plu");
			driver.findElement(By.xpath("//input[@id='wp-submit']")).click();
			System.out.println("Login successfully");
			Thread.sleep(7000);

		}

	
		
			
			@And("^clicks on  courses archive in the Courses dropdown$")
			public void clicks_on_Free_access_type_course_in_the_Course_dropdown() throws Throwable {
			       
				driver.findElement(By.xpath("//li[@id='menu-item-8148']"));
				
				Actions action = new Actions(driver);
				WebElement archive = driver.findElement(By.xpath("//li[@id='menu-item-8148']"));
				action.moveToElement(archive).perform();
		        
				System.out.println("courses successfully");
				//driver.manage().timeouts().implicitlyWait(6000, TimeUnit.SECONDS);
				Thread.sleep(10000);
				
				driver.findElement(By.xpath("//li[@id='menu-item-8131']")).click();
				System.out.println("Courses archive successfully");
				Thread.sleep(3000);
			}
			@Then("^All the courses should be displayed$")
			public void ThenAllthecoursesshouldbedisplayed() throws Throwable{
				driver.close();
			}
}
