describe('Caso o sinal B', function() {
  beforeEach(module('myApp'));
  it('Verificar a operação de número um seja sinal de positivo e não apareceu numero um para incluir o valor.',
     inject(function(sinalBFilter) {
       expect(sinalBFilter(1)).toBe('+' + 'x' );
       }));

  it('Verificar a operação de número menos um seja sinal de negativo e não apareceu numero um para incluir o valor.',
       inject(function(sinalBFilter) {
         expect(sinalBFilter(-1)).toBe('-' + 'x' );
         }));

  it('Verificar a operação de número zero não está aparecido.',
         inject(function(sinalBFilter) {
           expect(sinalBFilter(0)).toBe('');
         }));
});
