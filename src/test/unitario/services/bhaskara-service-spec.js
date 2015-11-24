describe('Os servicos de Bhaskara.', function () {
  beforeEach(module('myApp'));
   beforeEach(inject(function($injector) {
     bhaskaraService = $injector.get('bhaskaraService');
   }));

    it('A equacao xˆ2+5x-6 = 0 deve ser x1 = 1 e x2 = -6.', function() {
      expect(bhaskaraService.calcularBhaskara(1,1,5,-6)).toBe(1);
      expect(bhaskaraService.calcularBhaskara(-1,1,5,-6)).toBe(-6);
    });

    it('A funcao de operacao Positivo de -1, 0 e 1 devem ser -1, 0 e +1 respectivamente.', function() {
      expect(bhaskaraService.operacaoPositivo(-1)).toBe('-1');
      expect(bhaskaraService.operacaoPositivo(0)).toBe('0');
      expect(bhaskaraService.operacaoPositivo(1)).toBe('+1');
    });

    it("A funcao de operacaoSemUm de -1, 0, 1 e 2 devem ser '-', '', '+' e '+2' respectivamente.", function() {
      expect(bhaskaraService.operacaoSemUm(-1)).toBe('-');
      expect(bhaskaraService.operacaoSemUm(0)).toBe('');
      expect(bhaskaraService.operacaoSemUm(1)).toBe('+');
      expect(bhaskaraService.operacaoSemUm(2)).toBe('+2');
    });

    it('O numero de null nao deve validar.', function() {
      expect(bhaskaraService.isInvalido(null)).toBe(true);
    });
});
