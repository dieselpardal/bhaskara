myApp.controller('BhaskaraGraficoTotalController', function BhaskaraGraficoTotalController($scope, constantesFactory, bhaskaraService, graficoService) {

    $scope.inicioA = constantesFactory.inicioA;
    $scope.inicioB = constantesFactory.inicioB;
    $scope.inicioC = constantesFactory.inicioC;

    $scope.finalA = constantesFactory.finalA;
    $scope.finalB = constantesFactory.finalB;
    $scope.finalC = constantesFactory.finalC;

    var margin = {top: 0, right: 0, bottom: 0, left: 0};

    var svg = d3.select(document.getElementById('telaTotal')).append('svg')
         .attr('width', constantesFactory.largura)
         .attr('height', constantesFactory.altura)
         .append('g')
         .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    $scope.gerarGrafico = function () {
      var responder1 = [];
      var responder2 = [];
      graficoService.limpaQuadro(svg,0,0,constantesFactory.largura,constantesFactory.altura,constantesFactory.corDeTela,'gold');
      for(var passoA=$scope.inicioA; passoA<=$scope.finalA;passoA++) {
        for(var passoB=$scope.inicioB; passoB<=$scope.finalB;passoB++) {
          for(var passoC=$scope.inicioC; passoC<=$scope.finalC;passoC++) {
            if ( passoA !== 0) {
              xx1 = bhaskaraService.calcularBhaskara( constantesFactory.numeroPositivo,passoA, passoB, passoC);
              xx2 = bhaskaraService.calcularBhaskara( constantesFactory.numeroNegativo,passoA, passoB, passoC);
              graficoService.circuloCentral(svg,xx1 * constantesFactory.escala,xx2 * constantesFactory.escala ,constantesFactory.raio,constantesFactory.corDeCirculo);
              }
          }
        }
      }
    };
});
