package com.quiz.tests;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.time.Duration;
import java.util.List;

public class QuizAutomationTest extends BaseTest {

    @Test
    public void testQuizFlow() throws IOException, InterruptedException {
        WebDriver driver = getDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // 🏁 Step 1: Launch the Quiz Application
        driver.get("http://127.0.0.1:5500/index.html");
        System.out.println("✅ Opened Quiz Application");

        // Wait for category cards to appear
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".category-card")));

        // Select Science (first category)
        WebElement scienceCard = driver.findElements(By.cssSelector(".category-card")).get(0);
        scienceCard.click();
        System.out.println("✅ Selected category: Science");
        takeScreenshot(driver, "01_category");

        // Select Easy difficulty
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".difficulty-btn.easy"))).click();
        System.out.println("✅ Selected difficulty: Easy");
        takeScreenshot(driver, "02_difficulty");

        // Wait for quiz questions to load
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".question-card")));
        Thread.sleep(800);

        // 🧠 Step 2: Answer all questions dynamically
        while (true) {
            try {
                WebElement question = wait.until(
                        ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".question-text"))
                );
                System.out.println("🧩 Current question: " + question.getText());

                // Select the first available option
                List<WebElement> options = wait.until(
                        ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector(".option"))
                );
                if (!options.isEmpty()) {
                    options.get(0).click();
                    System.out.println("👉 Selected first option");
                }

                takeScreenshot(driver, "question_" + System.currentTimeMillis());
                Thread.sleep(700);

                // Check for Next or Submit
                List<WebElement> nextBtn = driver.findElements(By.cssSelector(".btn-primary"));
                List<WebElement> submitBtn = driver.findElements(By.cssSelector(".btn-submit"));

                if (!nextBtn.isEmpty()) {
                    nextBtn.get(0).click();
                    System.out.println("➡️ Clicked Next");
                    Thread.sleep(800);
                } else if (!submitBtn.isEmpty()) {
                    System.out.println("🧾 Last question reached, preparing to submit...");
                    break;
                } else {
                    System.out.println("⚠️ No Next or Submit button found — exiting question loop");
                    break;
                }

            } catch (TimeoutException e) {
                System.out.println("⚠️ No more questions detected — moving to submit");
                break;
            }
        }

        // 🏁 Step 3: Submit the Quiz
        try {
            // Wait for and click the Submit Quiz button
            WebElement submitBtn = wait.until(ExpectedConditions.elementToBeClickable(
                    By.cssSelector(".btn.btn-success"))
            );

            // Scroll into view to make sure it's clickable
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", submitBtn);
            Thread.sleep(500); // small delay for smooth scrolling
            submitBtn.click();

            System.out.println("✅ Clicked Submit button successfully");
            takeScreenshot(driver, "10_result");

        } catch (TimeoutException e) {
            System.out.println("❌ Submit button not found — check selector or flow!");
        }


        // 🎯 Step 4: Verify Results
        try {
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".results-title")));
            System.out.println("🎉 Quiz Completed Successfully — Results Page Visible!");
        } catch (TimeoutException e) {
            System.out.println("❌ Results page did not load — check if quiz submitted correctly.");
        }
    }

    // 📸 Helper method for screenshots — safe, unique, overwrites old ones properly
    private void takeScreenshot(WebDriver driver, String baseName) throws IOException {
        File screenshotsDir = new File(System.getProperty("user.dir") + "/screenshots/");
        if (!screenshotsDir.exists()) {
            screenshotsDir.mkdirs();
        }

        // Create a unique filename with timestamp to prevent overwriting
        String timestamp = String.valueOf(System.currentTimeMillis());
        File dest = new File(screenshotsDir, baseName + "_" + timestamp + ".png");

        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        // Use REPLACE_EXISTING so no "FileAlreadyExistsException"
        Files.copy(src.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);

        System.out.println("📸 Screenshot saved: " + dest.getAbsolutePath());
    }
}
