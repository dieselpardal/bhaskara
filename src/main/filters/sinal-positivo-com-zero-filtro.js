myApp.filter('sinalPositivoComZero',
  function(bhaskaraService) {
    return function (numero) {
      if(bhaskaraService.isInvalido(numero)) {
        return '0' ;
      } else {
              return bhaskaraService.operacaoPositivo(numero);
              }
    };
  });
