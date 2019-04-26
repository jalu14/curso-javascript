const expect = require('expect.js');
const arrayMethods = require('./arrayMethod');

const namesAges = [
    { age: 38, name: 'pau' },
    { age: 30, name: 'alice' },
    { age: 23, name: 'javi' },
    { age: 36, name: 'titu' },
    { age: 31, name: 'jose' },
    { age: 28, name: 'david' },
    { age: 26, name: 'marc' }
];

describe('arrayMethod.js', () => {
    describe('filterBy', () => {
        it('tiene que cargar la función', () => {
            expect(arrayMethods.getEldersFor).to.be.a('function');
            expect(arrayMethods.getEldersFor).to.not.be.a('number');
        });

        it('tiene que dar error por no pasar datos correctos', () => {
            expect(arrayMethods.getEldersFor).withArgs(null, 'asd').to.throwException();
            expect(arrayMethods.getEldersFor).withArgs(5, 5).to.throwException();
            expect(arrayMethods.getEldersFor).withArgs({}, 6).to.throwException();
            expect(arrayMethods.getEldersFor).withArgs([], 'a5').to.throwException();
        });

        it('tiene que devolver una array y tiene ', () => {
            const arrayFiltered = arrayMethods.getEldersFor(namesAges, 37);
            expect(arrayFiltered[0]).to.be('pau');
        });

        it('tiene que devolver un array con 1 dato', () => {
            const arrayFiltered = arrayMethods.getEldersFor(namesAges, 37);
            expect(arrayFiltered).to.have.length(1);
        });

        it('tiene que devolver un array con todos los datos', () => {
            const arrayFiltered = arrayMethods.getEldersFor(namesAges, 0);
            expect(arrayFiltered).to.have.length(namesAges.length);
        });
    });

    describe('getNames', () => {
        it('tiene que cargar la función', () => {
            expect(arrayMethods.getNamesMap).to.be.a('function');
            expect(arrayMethods.getNamesMap).to.not.be.a('number');
        });

        it('tiene que dar error por no pasar datos correctos', () => {
            expect(arrayMethods.getNamesMap).withArgs(null).to.throwException();
            expect(arrayMethods.getNamesMap).withArgs(5).to.throwException();
            expect(arrayMethods.getNamesMap).withArgs({}).to.throwException();
        });

        it('tiene que devolver una array y tiene ', () => {
            const arrayFiltered = arrayMethods.getNamesMap(namesAges);
            expect(arrayFiltered[0]).to.be('pau');
        });

        it('tiene que devolver un array con todos los datos', () => {
            const arrayFiltered = arrayMethods.getNamesMap(namesAges);
            expect(arrayFiltered).to.have.length(namesAges.length);
        });
    });
});