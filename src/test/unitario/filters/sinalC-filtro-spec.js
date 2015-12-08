describe('Caso o sinal C', function() {
    beforeEach(module('myApp'));
  it('Verificar a operação de número um seja sinal de positivo e não apareceu numero um para incluir a quadrática de valor.',
     inject(function(sinalCFilter) {
       expect(sinalCFilter(1)).toBe('+1' );
       }));

  it('Verificar a operação de número menos um seja sinal de negativo e apareceu numero um.',
       inject(function(sinalCFilter) {
         expect(sinalCFilter(-1)).toBe('-1' );
         }));

  it('Verificar a operação de número zero não está aparecido.',
         inject(function(sinalCFilter) {
           expect(sinalCFilter(0)).toBe('');
         }));
});
