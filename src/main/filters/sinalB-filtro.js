myApp.filter('sinalB',
  function(bhaskaraService) {
    return function (numero) {
      if(bhaskaraService.isInvalido(numero)) {
        return '' ;
      } else {
              return bhaskaraService.operacaoSemUm(numero) + 'x';
              }
    };
  });
