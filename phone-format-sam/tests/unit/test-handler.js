'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const event = { PHONE : '1234567890' }
        const result = await app.lambdaHandler(event, context)
        console.log(`Result is ${result}`)
        console.log(`Result body is ${result.body}`)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("123-456-7890");
        // expect(response.location).to.be.an("string");
    });
});
