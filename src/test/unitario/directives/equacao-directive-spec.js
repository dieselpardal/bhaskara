describe('Diretivo de Equacao', function () {
  beforeEach(module('myApp'));
  it('Verificar se o endereco de Equacao esta localizado.',
       inject(function(equacaoDirective) {
         //console.log(JSON.stringify(equacaoDirective));
         expect(equacaoDirective[0].templateUrl).toBe("resources/partials/equacao.html");
         }));
});
