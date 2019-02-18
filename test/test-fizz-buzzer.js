const expect = require('chai').expect;

const fizzbuzzer = require('../fizzBuzzer');

describe('fizzbuzzer',function(){
    it('Should output fizz for numbers divisible by 3 and buzz for numbers divisible by 5 and fizz-buzz for numbers divisible by 3 and 5', function(){
        const normalCases = [
            {a: 3, expected: 'fizz'},
            {a: 5, expected: 'buzz'},
            {a: 15, expected: 'fizz-buzz'}
        ];

        normalCases.forEach(function(input){
            const answer = fizzbuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });

        const badInputs = [
            {a: 'x'},
            {a: null}
        ];
        badInputs.forEach(function(input){
            expect(function(){
                fizzbuzzer(input.a)
            }).to.throw(Error)
        });
    });
});



