describe('Os constantes de Bhaskara.', function () {
  beforeEach(module('myApp'));
   beforeEach(inject(function($injector) {
     constantesFactory = $injector.get('constantesFactory');
   }));

    it('A padrão de A deve ser 1.', function() {
      expect(constantesFactory.A).toBe(1);
      });
    it('A padrão de B deve ser 5.', function() {
      expect(constantesFactory.B).toBe(5);
      });
    it('A padrão de C deve ser -6.', function() {
      expect(constantesFactory.C).toBe(-6);
      });
    it('A padrão de inicioA deve ser -5.', function() {
      expect(constantesFactory.inicioA).toBe(-5);
      });
    it('A padrão de inicioB deve ser -20.', function() {
      expect(constantesFactory.inicioB).toBe(-20);
      });
    it('A padrão de inicioC deve ser -10.', function() {
      expect(constantesFactory.inicioC).toBe(-10);
      });
    it('A padrão de finalA deve ser 5.', function() {
      expect(constantesFactory.finalA).toBe(5);
      });
    it('A padrão de finalB deve ser 20.', function() {
      expect(constantesFactory.finalB).toBe(20);
      });
    it('A padrão de finalC deve ser 10.', function() {
      expect(constantesFactory.finalC).toBe(10);
      });
    it('A padrão de escala deve ser 20.', function() {
      expect(constantesFactory.escala).toBe(20);
      });
    it('A padrão de raio deve ser 1.', function() {
      expect(constantesFactory.raio).toBe(1);
      });
    it('A padrão de numeroPositivo deve ser 1.', function() {
      expect(constantesFactory.numeroPositivo).toBe(1);
      });
    it('A padrão de numeroNegativo deve ser -1.', function() {
      expect(constantesFactory.numeroNegativo ).toBe(-1);
      });
    it('A padrão de sinalInexistente deve ser -1.', function() {
      expect(constantesFactory.sinalInexistente ).toBe(-1);
      });
    it('A padrão de anular deve ser 0.', function() {
      expect(constantesFactory.anular).toBe(0);
      });
    it('A padrão de largura deve ser 800.', function() {
      expect(constantesFactory.largura).toBe(800);
      });
    it('A padrão de altura deve ser 600.', function() {
      expect(constantesFactory.altura).toBe(600);
      });
    it('A padrão de centroX deve ser 400.', function() {
      expect(constantesFactory.centroX).toBe(400);
      });
    it('A padrão de centroY deve ser 300.', function() {
      expect(constantesFactory.centroY).toBe(300);
      });
    it("A padrão de corTela deve ser 'black'.", function() {
      expect(constantesFactory.corTela).toBe('black');
      });
    it("A padrão de corDeTela deve ser 'yellow'.", function() {
      expect(constantesFactory.corDeTela).toBe('yellow');
      });
    it("A padrão de corDeCirculo deve ser 'blue'.", function() {
      expect(constantesFactory.corDeCirculo).toBe('blue');
      });
    it("A padrão de corVermelho deve ser 'red'.", function() {
      expect(constantesFactory.corVermelho).toBe('red');
      });
    it("A padrão de corOuro deve ser 'gold'.", function() {
      expect(constantesFactory.corOuro).toBe('gold');
      });
});
