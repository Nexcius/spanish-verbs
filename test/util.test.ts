import { normalizeString } from '../src/util.js';
import { expect } from 'chai';

describe("Util tests", function() {
    describe("normalizeString()", function() {
        it("should correctly generate base forms", function() {
            expect(normalizeString("áéíóúüñ")).to.equal("aeiouun")
        })

        it("should handle upper and lower case", function() {
            expect(normalizeString("ÁÉÍÓÚÜÑ áéíóúüñ")).to.equal("aeiouun aeiouun")
        })
    })
})
