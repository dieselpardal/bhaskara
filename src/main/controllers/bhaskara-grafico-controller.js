myApp.controller('BhaskaraGraficoController', function BhaskaraGraficoController($scope) {

    $scope.inicioA = inicioA;
    $scope.inicioB = inicioB;
    $scope.inicioC = inicioC;

    $scope.finalA = finalA;
    $scope.finalB = finalB;
    $scope.finalC = finalC;

    var margin = {top: 0, right: 0, bottom: 0, left: 0};

    var svg = d3.select(document.getElementById('telaDeBhaskara')).append("svg")
         .attr("width", largura)
         .attr("height", altura)
         .append("g")
         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    $scope.gerarGrafico = function () {
      var responder1 = [];
      var responder2 = [];

      limpaQuadro(svg,0,0,largura,altura,corDeTela);

      for(var passoA=$scope.inicioA; passoA<=$scope.finalA;passoA++) {
        for(var passoB=$scope.inicioB; passoB<=$scope.finalB;passoB++) {
          for(var passoC=$scope.inicioC; passoC<=$scope.finalC;passoC++) {
            xx1 = bhaskara( numeroPositivo,passoA, passoB, passoC);
            xx2 = bhaskara( numeroNegativo,passoA, passoB, passoC);
            circuloPinta(svg,xx1 * escala,xx2 * escala ,raio,corDeCirculo);
          }
        }
      }
    }
});
