myApp.controller('BhaskaraController', function BhaskaraController($scope,constantesFactory,bhaskaraService) {

    $scope.a =  constantesFactory.A;
    $scope.b =  constantesFactory.B;
    $scope.c =  constantesFactory.C;

    $scope.resultarBhaskara = function () {
      $scope.x1 = bhaskaraService.calcularBhaskara(constantesFactory.numeroPositivo, $scope.a, $scope.b, $scope.c);
      $scope.x2 = bhaskaraService.calcularBhaskara(constantesFactory.numeroNegativo, $scope.a, $scope.b, $scope.c);
    };
});
