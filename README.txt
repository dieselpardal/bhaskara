ThoughtWorks

Projeto de Bhaskara 1.0
Programador: Ivan Diesel
Data: 15/09/2015


A seguir estao descritos os passos que devem ser tomados para se ter o ambiente de projeto de Bhaskara 1.0 na ambiente OSX com visualização de biblioteca D3.
Os pacotes mencionados do documento podem ser encontrados na mesma pasta deste arquivo.

1) Instalação de Editor de texto versão Atom.
    Primeiro passo é que instalar uma plataforma de desenvolvimento de editor de texto Atom que permite trabalhar o utilizada o projeto de Bhaskara.

2) Desenvolvimento em AngularJS.
    Não é necessário de instalação pois ja está pacote no projeto.
    Feito isso os caminhos estarao configurados e pode-se iniciar o desenvolvimento.

3) Observação.
    Os codígos de fontes são escritas em português, e as mensagens são escritas em português.

4) Teste Unitário.
    Digite "grunt jasmine" no terminal.

5) Teste de Qualidade de codigos de fonte.
    Digite "grunt jshint" no terminal.

6) Navegar no site de Servidor de Local:
    No navegador: http://0.0.0.0:8282
    No terminal: grunt http-server

7) Descrição de Bhaskara.
    A fórmula de Bhaskara é principalmente usada para resolver equações quadráticas de fórmula geral ax2+bx+c=0, com coeficientes reais, com a≠0 e é dada por:

    x1 = (-b+sqrt(bˆ2-4*a*c))/(2*a);
    x2 = (-b-sqrt(bˆ2-4*a*c))/(2*a);

    A importância da fórmula de Bhaskara é que ela nos permite resolver qualquer problema que envolva equações quadráticas, os quais aparecem em diversas situações importantes, como na Física por exemplo.


Instalacção de grunt
--------------------
No terminal, digitar em seguinte:
1) Instalacao de grunt:
  1.1) npm install -g grunt-cli
  1.2) npm install grunt-contrib-jasmine --save-dev
  1.3) npm install grunt --save-dev
  1.4) npm install grunt-contrib-jshint --save-dev

2) Servidor de Local:
  2.1) npm install grunt-http-server
  2.2) no navegador: http://0.0.0.0:8200
  2.3) no terminal: grunt http-server

3) incluir os dependencias no arquivo package.json na pasta de bhaskara por exemplo:
      {
            "name": "Bhaskara",
            "version": "1.0.0",
            "devDependencies": {
                 "grunt": "~0.4.5",
                 "grunt-contrib-jshint": "~0.10.0",
                 "grunt-contrib-nodeunit": "~0.4.1",
                 "grunt-contrib-uglify": "~0.5.0"
          }
      }
4) Gruntfile: precisa criar um arquivo gruntfile.js na pasta de bhaskara.
5) Incluir as dependencias no arquivo gruntfile. Foi feito.
6) Apos de incluir dos arquivos (package e gruntfile), deve digitar: npm install
7) Para saber mais: http://gruntjs.com/

Instalacao de karma
-------------------------------
No terminal, digitar em seguinte:
1) Instalacao de karma na pasta de Bhaskara:
  1.1) de karma: npm install karma --save-dev
  1.2) de Jasmine: npm install karma-jasmine --save-dev
  1.3) de Coverage: npm install karma karma-coverage --save-dev

2) Configuracao
  O arquivo karma.conf.js esta automaticamenteo de inicializacao de processo de karma.

3) para testas os comandos de karma:
    1.1) npm test
    1.2) Relatório de projeto pelo Coverage.




Boa pratica!
