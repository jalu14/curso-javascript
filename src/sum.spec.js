const expect = require('expect.js');
const sum = require('./sum');

describe('sum.js', function () {
    describe('sum', function () {
        it('tiene que sumar correctamente', function () {
            var resultado = sum(2, 3);
            expect(resultado).to.be(5);
        });

        it('acepta numeros negativos', function () {
            var resultado = sum(2, -3);
            expect(resultado).to.be(-1);
        });

        it('solo acepta números', function () {
            try {
            var resultado = sum(2, 'a');
            } catch (e) {
                expect(e).to.be.an(Error);
            }
        });
    });
});