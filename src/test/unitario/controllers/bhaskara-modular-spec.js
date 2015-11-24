describe("Meu App", function () {

    beforeEach(module('myApp'));
    it('Verificar se meu app for definido.', function () {
        expect(myApp).toBeDefined();
    });
});
