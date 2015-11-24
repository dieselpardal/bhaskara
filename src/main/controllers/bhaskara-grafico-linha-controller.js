myApp.controller('BhaskaraGraficoLinhaController', function BhaskaraGraficoLinhaController($scope,constantesFactory,bhaskaraService,graficoService) {

    $scope.valorA = constantesFactory.A;
    $scope.valorB = constantesFactory.B;
    $scope.valorC = constantesFactory.C;

    var margem = {top: 0, right: 0, bottom: 0, left: 0};
    var svg = d3.select(document.getElementById('telaLinha')).append('svg')
         .attr('width', constantesFactory.largura)
         .attr('height', constantesFactory.altura)
         .append('g')
         .attr('transform', 'translate(' + margem.left + ',' + margem .top + ')');

    $scope.gerarGrafico = function () {
      var responder1 = [];
      var responder2 = [];
      var ponto = 0;
      var anteriorX = 0;
      var anteriorY = 0;
      graficoService.limpaQuadro(svg,0,0,constantesFactory.largura,constantesFactory.altura,constantesFactory.corDeTela,'gold');
      escalaX = constantesFactory.largura / 2;
      escalaY = constantesFactory.altura / 2;
      for(var x=-escalaX; x<=escalaX;x++) {
            resultar = $scope.valorA * ( x * x ) + $scope.valorB * x + $scope.valorC;
            if ( ponto === 0 ){
              graficoService.circuloCentral(svg,x,-resultar ,constantesFactory.raio,constantesFactory.corDeCirculo);
              ponto = 1;
              }
            else{
              graficoService.linhaCentral(svg,anteriorX,anteriorY,x,-resultar,constantesFactory.corDeCirculo );
              }
            anteriorX = x;
            anteriorY = -resultar;
      }
    };
});
