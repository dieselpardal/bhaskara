describe('Controlador de Bhaskara', function () {

   var $rootScope, $scope, $controller;
   beforeEach(module('myApp'));
   beforeEach(inject(function($injector) {
          $rootScope = $injector.get('$rootScope');
          $scope = $rootScope.$new();
          constantesFactory = $injector.get('constantesFactory');
          $controller = $injector.get('$controller');
          $controller('BhaskaraController', {
                      $scope: $scope
          });
    }));

  it('Verificar os variaveis de equação.',function() {
    expect($scope.a).toBe(constantesFactory.A);
    expect($scope.b).toBe(constantesFactory.B);
    expect($scope.c).toBe(constantesFactory.C);
  });

  it('Verificar os resultados de equação.',function() {
     $scope.resultarBhaskara();
     expect($scope.x1).toBe(1);
     expect($scope.x2).toBe(-6);
  });
});
