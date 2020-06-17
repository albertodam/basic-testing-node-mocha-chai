const assert = require("chai").assert;
const superheroNameComposer = require("../services/superhero-name-composer.service")

describe('when a user introduce their date of birth', ()=> {
    it('should return correct super hero name', ()=>{
        const expectedName = 'Super Calcetín Mojado'
        const resultName = superheroNameComposer.getSuperName(9,7);
        assert.equal(resultName, expectedName)
    })
})