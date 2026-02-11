const expect = require('chai').expect;
const mylib = require('../mylib')

describe('mylib expect tests', function() {

    before(function() {
        console.log('\n Starting the tests for mylib...\n');
    });

    after(function() {
        console.log('\n Testing complete')
    });

   
    it('Should add two numbers correctly', function() {
        const result = mylib.add(2,3);
        expect(result).to.equal(5);
    });

    it('should substract two numbers correctly', function() {
        const result = mylib.subtract(10, 3);
        expect(result).to.equal(7);
    });

    it('should multiply two numbers correctly', function() {
        const result = mylib.multiply(4, 8);
        expect(result).to.equal(32);
    });

    it('should divide two numbers correctly', function() {
        const result = mylib. divide(30, 6);
        expect(result).to.equal(5);
    });

    it('should throw an error when dividing by zero', function() {
        expect(() => mylib.divide(10, 0)).to.throw("Cannot divide by zero");
    });



});