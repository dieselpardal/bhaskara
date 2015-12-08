describe('Filtro de conversao de sinal de positivo dos numeros. ', function() {
  beforeEach(module('myApp'));
   it('Verificar o valor 1 seja +1.',
      inject(function(sinalPositivoComZeroFilter) {
        expect(sinalPositivoComZeroFilter(1)).toBe('+1');
        }));

   it('Verificar o valor 0 seja 0.',
      inject(function(sinalPositivoComZeroFilter) {
        expect(sinalPositivoComZeroFilter(0)).toBe('0');
        }));

   it('Verificar o valor -1 seja -1.',
      inject(function(sinalPositivoComZeroFilter) {
        expect(sinalPositivoComZeroFilter(-1)).toBe('-1');
        }));
});
