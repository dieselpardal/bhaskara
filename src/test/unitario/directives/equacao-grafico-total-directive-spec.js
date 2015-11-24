describe('Diretivo de Equacao de Gafico Total', function () {
  beforeEach(module('myApp'));
  it('Verificar se o endereco de Grafico Total esta localizado.',
       inject(function(equacaoGraficoTotalDirective) {
         //console.log(JSON.stringify(equacaoDirective));
         expect(equacaoGraficoTotalDirective[0].templateUrl).toBe("resources/partials/equacao-grafico-total.html");
         }));
});
