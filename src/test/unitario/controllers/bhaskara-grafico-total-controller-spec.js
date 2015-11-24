describe('Controlador de Grafico de Total ', function () {

  var $rootScope, $scope, $controller;
  beforeEach(module('myApp'));
  beforeEach(inject(function($injector) {
         $rootScope = $injector.get('$rootScope');
         $scope = $rootScope.$new();
         constantesFactory = $injector.get('constantesFactory');
         $controller = $injector.get('$controller');
         $controller('BhaskaraGraficoTotalController', {
                     $scope: $scope
         });
   }));
   var margem = {top: 0, right: 0, bottom: 0, left: 0};
   
   it('Verificar os variaveis de Inicio e Final de equação.',function() {
     expect($scope.inicioA).toBe(constantesFactory.inicioA);
     expect($scope.inicioB).toBe(constantesFactory.inicioB);
     expect($scope.inicioC).toBe(constantesFactory.inicioC);

     expect($scope.finalA).toBe(constantesFactory.finalA);
     expect($scope.finalB).toBe(constantesFactory.finalB);
     expect($scope.finalC).toBe(constantesFactory.finalC);
     });

  it('Verificar os tipos de margem.',function() {
    expect(margem.top).toBe(0);
    expect(margem.right).toBe(0);
    expect(margem.bottom).toBe(0);
    expect(margem.left).toBe(0);
    });

  it('Verificar visual de grafico esta definido.',function() {
      expect(svg).toBeDefined();
    });

  it('Verificar a gerar o grafico seja definido.',function() {
    expect($scope.gerarGrafico).toBeDefined();
    });
});
