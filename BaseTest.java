package com.quiz.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

public class BaseTest {
    private WebDriver driver;

    @BeforeClass
    public void setUp() {
        System.out.println("🧩 Setting up Microsoft Edge WebDriver...");
        try {
            // ✅ Use manually downloaded driver path
            System.setProperty("webdriver.edge.driver",
                    "C:\\Users\\HARSH\\IdeaProjects\\QuizAutomation\\drivers\\msedgedriver.exe");

            driver = new EdgeDriver();
            driver.manage().window().maximize();
            System.out.println("✅ Edge browser launched successfully!");
        } catch (Exception e) {
            System.out.println("❌ Failed to start Edge WebDriver: " + e.getMessage());
            e.printStackTrace();
        }
    }

    @AfterClass
    public void tearDown() {
        if (driver != null) {
            driver.quit();
            System.out.println("🧹 Browser closed successfully.");
        }
    }

    public WebDriver getDriver() {
        return driver;
    }
}
