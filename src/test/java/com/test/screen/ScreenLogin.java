package com.test.screen;

import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSFindBy;
import org.openqa.selenium.remote.RemoteWebElement;

public class ScreenLogin extends BaseScreen {

    @AndroidFindBy(id = "login_username")
    @iOSFindBy(accessibility = "login_username")
    private RemoteWebElement fieldEmail;

    public void writeEmail(){
        fieldEmail.sendKeys("qazando@gmail.com");
    }
}
