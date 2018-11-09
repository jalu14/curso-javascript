var expect = require('expect.js');
var nts = require('./num-to-string');

describe('num-to-string.js', function () {
    describe('numToStringIfElse', function () {
        it('no tiene que aceptar mayor que 10', function() {
            expect(nts.numToStringIfElse).withArgs(11).to.be.throwError();
        });
        it('no tiene que aceptar menor que 0', function() {
            expect(nts.numToStringIfElse).withArgs(-1).to.be.throwError();
        });
        it('tiene que controlar los decimales', function() {
            var cadena = nts.numToStringIfElse;
            expect(cadena).withArgs(1.2).to.throwError();
            expect(cadena).withArgs(11.10).to.throwError();
        });
        
        it('tiene que devolver la cadena correcta', function() {
            var cadena = nts.numToStringIfElse(5);
            expect(cadena).to.equal('five');
        });
    });

    describe('numToStringSwitch', function () {
        it('no tiene que aceptar mayor que 10', function() {
            expect(nts.numToStringSwitch).withArgs(11).to.be.throwError();
        });
        it('no tiene que aceptar menor que 0', function() {
            expect(nts.numToStringSwitch).withArgs(-1).to.be.throwError();
        });
        it('tiene que controlar los decimales', function() {
            var cadena = nts.numToStringSwitch;
            expect(cadena).withArgs(1.2).to.throwError();
            expect(cadena).withArgs(11.10).to.throwError();
        });

        it('tiene que devolver la cadena correcta', function() {
            var cadena = nts.numToStringSwitch(5);
            expect(cadena).to.equal('five');
        });
    });

    describe('numToStringIfMultipleReturn', function () {
        it('no tiene que aceptar mayor que 10', function() {
            expect(nts.numToStringIfMultipleReturn).withArgs().to.be.throwError();
        });
        it('no tiene que aceptar menor que 0', function() {
            expect(nts.numToStringIfMultipleReturn).withArgs(-1).to.be.throwError();
        });
        it('tiene que controlar los decimales', function() {
            var cadena = nts.numToStringIfMultipleReturn;
            expect(cadena).withArgs(1.2).to.throwError();
            expect(cadena).withArgs(11.10).to.throwError();
        });

        it('tiene que devolver la cadena correcta', function() {
            var cadena = nts.numToStringIfMultipleReturn(5);
            expect(cadena).to.equal('five');
        });
    });
});