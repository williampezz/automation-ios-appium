package com.test.steps;

import com.test.screen.ScreenLogin;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Quando;

public class LoginSteps {

    ScreenLogin login = new ScreenLogin();

    @Dado("^que eu escreva as informações do usuário com \"([^\"]*)\"$$")
    public void que_eu_escreva_as_informações_do_usuário_com(String email) {
            login.writeEmail(email);

    }

    @Quando("^escrever os dados da senha com \"([^\"]*)\"$")
    public void escrever_os_dados_da_senha_com(String senha) throws Throwable {
            login.writePass(senha);
    }

}