describe('Diretivo de Equacao de Grafico de Linha', function () {
  beforeEach(module('myApp'));
  it('Verificar se o endereco de Equacao de Grafico da Linha esta localizado.',
       inject(function(equacaoGraficoLinhaDirective) {
         //console.log(JSON.stringify(equacaoDirective));
         expect(equacaoGraficoLinhaDirective[0].templateUrl).toBe("resources/partials/equacao-grafico-linha.html");
         }));
});
