myApp.service('bhaskaraService', function (constantesFactory) {

  this.calcularBhaskara = function (sinal, a, b, c) {
    return calcularBhaskaraCompleto(sinal, a, b, c);
  };

  this.calcularDelta = function (a, b, c) {
    return calcularDelta( a, b, c);
  };

 this.operacaoPositivo = function (numero) {
      if (numero >0 ){
        return '+' + numero;
      } else {
              return '' + numero;
          }
  };

 this.operacaoSemUm = function (numero) {
    switch(numero) {
       case  1: return '+';
       case  0: return '';
       case -1: return '-';
      default: if (numero >1 ){
                return '+' + numero;
            }
        }
  };

  this.isInvalido = function (numero) {
          return (angular.isUndefined(numero) || numero === constantesFactory.anular ||  numero === null);
  };
});
