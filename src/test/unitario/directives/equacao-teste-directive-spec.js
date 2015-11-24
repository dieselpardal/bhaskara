describe('Diretivo de Teste de Equacao', function () {
  beforeEach(module('myApp'));
  it('Verificar se o endereco de Teste esta localizado.',
       inject(function(equacaoTesteDirective) {
         //console.log(JSON.stringify(equacaoDirective));
         expect(equacaoTesteDirective[0].templateUrl).toBe("../test/equacao-teste.html");
         }));
});
