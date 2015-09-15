describe('Teste da Bhaskara', function () {

 it('Verificar o numero positivo que apareceu o sinal de positivo.', function() {
   expect(operacaoPositivo(2)).toBe("+2");
 });

it('Verificar a delta de bhaskara: a=1, b=5 e c=-6 e a delta resulta 1.', function() {
    var a = 1,
        b = 5,
        c =-6;
    var d = delta(a, b, c);
      expect(d).toBe(7);
    });
    it('Verificar a bhaskara: a=1, b=5 e c=-6 e resultaram x1=+1 e x2=-6.', function() {
        var a = 1,
            b = 5,
            c =-6;
          expect(bhaskara( 1,a,b,c)).toBe(1);
          expect(bhaskara(-1,a,b,c)).toBe(-6);
        });

});
