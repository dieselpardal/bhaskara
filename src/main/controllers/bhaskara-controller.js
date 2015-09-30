myApp.controller('BhaskaraController', function BhaskaraController($scope) {

    var anular = 0;

    $scope.a =  padraoA;
    $scope.b =  padraoB;
    $scope.c =  padraoC;

    $scope.resultar = function () {
      $scope.x1 = operacaoPositivo(bhaskara(numeroPositivo,$scope.a, $scope.b, $scope.c));
      $scope.x2 = operacaoPositivo(bhaskara(numeroNegativo,$scope.a, $scope.b, $scope.c));
    }

    $scope.mostraOperacaoNumero = function(numero) {
      if(numero == anular) {
        return "" ;
      } else {
        if (numero > anular) {
          return "+" + numero;
        } else {
          return numero;
        }
      }
    };
}
);
