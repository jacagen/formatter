'use strict';

const format = require('../../format-phone-number.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('#format-phone-number', () => {

    describe('Already formatted', () => {
        it('Should reject already-formatted number', () => {
            expect(() => format('123-456-7890')).to.throw(RangeError)
        })
    })

    describe('Too short', () => {
        it('Should reject too-short number', () => {
            expect(() => format('14')).to.throw(RangeError)
        })
    })

    describe('Too long', () => {
        it('Should reject too-long number', () => {
            expect(() => format('123456789012345')).to.throw(RangeError)
        })
    })


    describe('Valid', () => {
        it('Should format valid number', () => {
            expect(format('1234567890')).to.equal('123-456-7890')
        })
    })

})
