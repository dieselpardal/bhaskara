myApp.filter('sinalC',
  function(bhaskaraService) {
    return function (numero) {
      if(bhaskaraService.isInvalido(numero)) {
        return '' ;
      } else {
              return bhaskaraService.operacaoPositivo(numero);
              }
    };
  });
