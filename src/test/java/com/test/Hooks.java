package com.test;

import cucumber.api.java.Before;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;

public class Hooks {

    private static AppiumDriver<?> driver;

    public static AppiumDriver<?> validateDriver() throws MalformedURLException {

        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("app", "/Users/williampez/Documents/AutomacaoiOSAppium/appium-com-cucumber/apps/LoginExample.app");
        capabilities.setCapability("deviceName", "iPhone 15 Pro");
        capabilities.setCapability("platformName", "iOS");
        capabilities.setCapability("platformVersion", "17.0");
        capabilities.setCapability("automationName", "XCUITest");

        driver = new IOSDriver<>(new URL("http://127.0.0.1:4723/"), capabilities);
        return driver;
    }

    public static AppiumDriver<?> getDriver(){
        return driver;
    }

    public static void quitDriver() {
        if(driver != null) {
            driver.quit();
        }
    }

    @Before
    public static void startProject() throws MalformedURLException {
        if (getDriver() != null){
            getDriver().launchApp();
        } else {
            validateDriver();
        }
    }
}