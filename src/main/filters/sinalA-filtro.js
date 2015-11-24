myApp.filter('sinalA',
  function(bhaskaraService) {
    return function (numero) {
      if(bhaskaraService.isInvalido(numero)) {
        return '' ;
      } else {
              return bhaskaraService.operacaoSemUm(numero) + 'xˆ2';
              }
    };
  });
