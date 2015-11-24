myApp.factory('constantesFactory', function() {
  var largura = 800;
  var altura = 600;

    return {
        A:  1,
        B:  5,
        C: -6,
        inicioA  :-5,
        inicioB  :-20,
        inicioC  :-10,

        finalA  : 5,
        finalB  : 20,
        finalC  : 10,

        escala :20,
        raio  : 1,

        numeroPositivo  : 1,
        numeroNegativo  :-1,

        sinalInexistente  : -1,
        anular  : 0,

        largura : largura,
        altura  : altura,
        centroX : (largura / 2),
        centroY : (altura/ 2),

        corTela      : 'black',
        corDeTela    : 'yellow',
        corDeCirculo : 'blue',
        corVermelho  : 'red',
        corOuro      : 'gold',
    };
});
