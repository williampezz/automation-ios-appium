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
  "duration": 20142549754,
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
  "name": "que eu escreva as informações do usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_eu_escreva_as_informações_do_usuário()"
});
formatter.result({
  "duration": 1400952026,
  "status": "passed"
});
});