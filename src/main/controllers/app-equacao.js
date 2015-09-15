var myApp = angular.module('myApp', []);
myApp.controller('BhaskaraController', function BhaskaraController($scope) {
    $scope.a =  padraoA;
    $scope.b =  padraoB;
    $scope.c =  padraoC;
    $scope.resultar = function () {
      $scope.x1 = operacaoPositivo(bhaskara( numero_positivo,$scope.a, $scope.b, $scope.c));
      $scope.x2 = operacaoPositivo(bhaskara( numero_negativo,$scope.a, $scope.b, $scope.c));
    }
    $scope.mostraOperacaoNumero = function($numero) {
      if($numero == 0) return "" ;
      else
        { if ($numero >0 ) return "+" + $numero;
      else return $numero;
        }
    }
});

myApp.controller('BhaskaraGraficoController', function BhaskaraGraficoController($scope) {

    $scope.inicio_a = inicioA;
    $scope.inicio_b = inicioB;
    $scope.inicio_c = inicioC;

    $scope.final_a = finalA;
    $scope.final_b = finalB;
    $scope.final_c = finalC;
    var margin = {top: 0, right: 0, bottom: 0, left: 0};
    var svg =d3.select(document.getElementById('div1')).append("svg")
         .attr("width", largura)
         .attr("height", altura)
         .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    $scope.gerarGrafico = function () {
      var responder1 = [];
      var responder2 = [];
      limpaQuadro(svg,0,0,largura,altura,"yellow");
      for(var passoA=$scope.inicio_a; passoA<=$scope.final_a;passoA++) {
        for(var passoB=$scope.inicio_b; passoB<=$scope.final_b;passoB++) {
          for(var passoC=$scope.inicio_c; passoC<=$scope.final_c;passoC++) {
            xx1 = bhaskara( numero_positivo,passoA, passoB, passoC);
            xx2 = bhaskara( numero_negativo,passoA, passoB, passoC);
            circuloPinta(svg,xx1 * escala,xx2 * escala ,raio,"red");
          }
        }
      }
    }
});
myApp.directive('equacao', function() {
    return {
      templateUrl: 'resources/partials/equacao.html'
    };
});

myApp.directive('equacaoteste', function() {
      return {
        templateUrl: '../test/equacaoTeste.html'
      };
});
myApp.directive('equacaografico', function() {
      return {
        templateUrl: 'resources/partials/equacaoGrafico.html'
      };
});
