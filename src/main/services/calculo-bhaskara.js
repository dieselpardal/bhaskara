
var sinalInexistente = -1;

calcularBhaskaraCompleto = function (sinal, a, b, c) {
  if (a === 0 ) {
    return calcularBhaskaraUmGrau(b,c);
  } else {
    var d = calcularDelta(a,b,c);
    if (sinal !=sinalInexistente) {
        return (-b + d) / (2 * a );
    } else {
        return (-b - d) / (2 * a );
    }
  }
};

calcularDelta = function  (a, b, c) {
  raiz = ( b * b  ) - 4 * a * c;
  if (raiz>=0) {
    return Math.sqrt( raiz);
  } else {
    return sinalInexistente;
  }
};

calcularBhaskaraUmGrau = function(b, c) {
  if (b === 0 ) {
    return sinalInexistente;
    } else {
      return ( -c ) / b;
    }
};

