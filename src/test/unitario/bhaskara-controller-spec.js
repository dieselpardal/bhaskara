describe('Teste de Bhaskara - Controler', function () {

    var scope, controller, location;

    beforeEach(function ($rootScope, $inject) {
        scope = $rootScope;
        controller = $inject.get('BhaskaraController');
    });

    describe('resultar', function () {

        beforeEach(function () {
            scope.a = 1;
            scope.b = 5;
            scope.c = -6;
        });

        it('deve calcular o resultado de x1 e x2', function () {
            scope.resultar();
            expect(scope.x1).toEqual("+1");
            expect(scope.x2).toEqual("-6");
        });
    });


    describe('mostraOperacaoNumero', function () {
        it("Veriricar o operacao de numero de 2 seja +2.", function() {
        expect(operacaoPositivo(2)).toBe("+2");

        });
    });


});

/*
   beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();       //como eu injeto o scope no teste?
       controller =   $controller('BhaskaraController', {$scope: scope});  //como eu injeto o controller BhaskaraController?
    });




*/