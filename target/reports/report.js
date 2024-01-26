$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login de Usuario Melhoria de cenário bonito",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 20821679666,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login com sucesso",
  "description": "",
  "id": "login-de-usuario-melhoria-de-cenário-bonito;login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 5,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que eu escreva as informações do usuário com \"qazando@gmail.com\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "escrever os dados da senha com \"123456\"",
  "keyword": "Quando "
});
formatter.match({
  "arguments": [
    {
      "val": "qazando@gmail.com",
      "offset": 46
    }
  ],
  "location": "LoginSteps.que_eu_escreva_as_informações_do_usuário_com(String)"
});
formatter.result({
  "duration": 4433995083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 32
    }
  ],
  "location": "LoginSteps.escrever_os_dados_da_senha_com(String)"
});
formatter.result({
  "duration": 1485015291,
  "status": "passed"
});
});