describe('Os servicos dos graficos de Bhaskara.', function () {
  beforeEach(module('myApp'));
   beforeEach(inject(function($injector) {
     graficoService = $injector.get('graficoService');
   }));
   var margem = {top: 0, right: 0, bottom: 0, left: 0};
   svg = d3.select(document.getElementById('telaLinha')).append('svg')
        .attr('width', 800)
        .attr('height', 600)
        .append('g')
        .attr('transform', 'translate(' + margem.left + ',' + margem .top + ')');

        beforeEach(function() {
            grafico = {
                    circulo:graficoService.circulo,
                    circuloCentral :graficoService.circuloCentral ,
                    linha :graficoService.linha ,
                    linhaCentral:graficoService.linhaCentral,
                    reta:graficoService.reta,
                    cruzQuadro:graficoService.cruzQuadro,
                    tela:graficoService.tela,
                    grid:graficoService.grid,
                    limpaQuadro:graficoService.limpaQuadro
            };

     spyOn(grafico, "circulo");
     spyOn(grafico, "circuloCentral");
     spyOn(grafico, "linha");
     spyOn(grafico, "linhaCentral");
     spyOn(grafico, "reta");
     spyOn(grafico, "cruzQuadro");
     spyOn(grafico, "tela");
     spyOn(grafico, "grid");
     spyOn(grafico, "limpaQuadro");
     grafico.circulo(svg,800,600,10,'red');
     grafico.circuloCentral(svg,800,600,10,'red');
     grafico.linha(svg,0,0,100,100,'red');
     grafico.linhaCentral(svg,-100,-100,100,100,'red');
     grafico.reta(svg,0,0,10,5,'red');
     grafico.cruzQuadro(svg,0,0,10,5,'red');
     grafico.tela(svg);
     grafico.grid(svg);
     grafico.limpaQuadro(svg,0,0,10,5,'red');
 });
    it("Fazer um grafico de circulo deve aparecer (svg,800,600,10,'red').", function() {
      expect(grafico.circulo).toHaveBeenCalledWith(svg,800,600,10,'red');
    });
    it("Fazer um grafico de circuloCentral deve aparecer (svg,800,600,10,'red').", function() {
      expect(grafico.circuloCentral).toHaveBeenCalledWith(svg,800,600,10,'red');
    });
    it("Fazer um grafico de linha deve aparecer (svg,0,0,100,100,'red').", function() {
      expect(grafico.linha).toHaveBeenCalledWith(svg,0,0,100,100,'red');
    });
    it("Fazer um grafico de linhaCentral deve aparecer (svg,-100,-100,100,100,'red').", function() {
      expect(grafico.linhaCentral).toHaveBeenCalledWith(svg,-100,-100,100,100,'red');
    });
    it("Fazer um grafico de reta deve aparecer (svg,0,0,10,5,'red').", function() {
      expect(grafico.reta).toHaveBeenCalledWith(svg,0,0,10,5,'red');
    });
    it("Fazer um grafico de cruzQuadro deve aparecer (svg,0,0,10,5,'red').", function() {
      expect(grafico.cruzQuadro).toHaveBeenCalledWith(svg,0,0,10,5,'red');
    });
    it("Fazer um grafico de tela deve aparecer (svg).", function() {
      expect(grafico.tela).toHaveBeenCalledWith(svg);
    });
    it("Fazer um grafico de grid deve aparecer (svg).", function() {
      expect(grafico.grid).toHaveBeenCalledWith(svg);
    });
    it("Fazer um grafico de limpaQuadro deve aparecer (svg,0,0,10,5,'red').", function() {
      expect(grafico.limpaQuadro).toHaveBeenCalledWith(svg,0,0,10,5,'red');
    });

});
