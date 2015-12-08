describe('Caso o sinal A', function() {
     beforeEach(module('myApp'));
   it('Verificar a operação de número um seja sinal de positivo e não apareceu numero um para incluir a quadrática de valor.',
      inject(function(sinalAFilter) {
        expect(sinalAFilter(1)).toBe('+' + 'xˆ2' );
        }));

   it('Verificar a operação de número menos um seja sinal de negativo e não apareceu numero um para incluir a quadrática de valor.',
        inject(function(sinalAFilter) {
          expect(sinalAFilter(-1)).toBe('-' + 'xˆ2' );
          }));

   it('Verificar a operação de número zero não está aparecido.',
          inject(function(sinalAFilter) {
            expect(sinalAFilter(0)).toBe('');
          }));
});
