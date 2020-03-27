const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Genereate Unique ID', () => {
    it('shound generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
})