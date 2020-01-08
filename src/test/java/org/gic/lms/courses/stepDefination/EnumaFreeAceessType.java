package org.gic.lms.courses.stepDefination;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public final class EnumaFreeAceessType extends Base {
	
	@Given("^User enters the url into the chrome browser$")
	public void BrowserLaunch() throws Throwable {
		
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

	
	@When("^enters the credentials to login$")
	public void Login() throws Throwable {
		driver.findElement(By.xpath("//a[text()='Login']")).click();
		driver.findElement(By.xpath("//input[@id='thim_login']")).sendKeys("testing");
		driver.findElement(By.xpath("//input[@id='thim_pass']")).sendKeys("pxkP3RtPe(X8cWIrlzV)5plu");
		driver.findElement(By.xpath("//input[@id='wp-submit']")).click();
		System.out.println("Login successfully");
		Thread.sleep(7000);

	}

	
			@And("^clicks on Free access type course in the Course dropdown\\.$")
			public void FreeAccess() throws Throwable {
				driver.findElement(By.xpath("//li[@id='menu-item-8148']"));
			    
				Actions action = new Actions(driver);
				WebElement btn = driver.findElement(By.xpath("//li[@id='menu-item-8148']"));
				action.moveToElement(btn).perform();
				System.out.println("courses successfully");
				Thread.sleep(5000);
				driver.findElement(By.xpath("//li[@id='menu-item-8143']")).click();
			
							}

			@Then("^Free Access type page should be displayed$")
			public void PageDisplay() throws Throwable {
				Assert.assertTrue(driver.getTitle().contains("Introduction LearnPress – LMS plugin"));
				System.out.println("Free access successfully");
				Thread.sleep(5000);
			
			}

			@And("^Should display all the details of the Description , curriculum ,instructors and review$")
			public void Headerdetails() throws Throwable {
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("window.scrollBy(0,1000)");
				boolean DescriptionEnabled = driver.findElement(By.xpath("//span[text()='Description']")).isEnabled();
				if (DescriptionEnabled == true) {
					WebElement DescriptionHeader = driver.findElement(By.xpath("//span[text()='Description']"));
					DescriptionHeader.click();
				}
				System.out.println("Description successfully");
			
				boolean CurriculumEnabled = driver.findElement(By.xpath("//span[text()='Curriculum']")).isEnabled();
				if (CurriculumEnabled == true) {
					WebElement CurriculumHeader = driver.findElement(By.xpath("//span[text()='Curriculum']"));
					CurriculumHeader.click();
				}
				System.out.println("Curriculum successfully");
			
				boolean InstructorsEnabled = driver.findElement(By.xpath("//span[text()='Instructors']")).isEnabled();
				if (InstructorsEnabled == true) {
					WebElement InstructorsHeader = driver.findElement(By.xpath("//span[text()='Instructors']"));
					InstructorsHeader.click();
				}
				System.out.println("instructors successfully");
				boolean ReviewEnabled = driver.findElement(By.xpath("//span[text()='Review']")).isEnabled();
				if (ReviewEnabled == true) {
					WebElement ReviewHeader = driver.findElement(By.xpath("//span[text()='Review']"));
					ReviewHeader.click();
				}
				System.out.println("review successfully");
				driver.close();

			}

		}
       
			