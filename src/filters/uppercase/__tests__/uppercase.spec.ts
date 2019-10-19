import uppercase from '../uppercase';

describe('Uppercase Filter', () => {
    it('Returns a string starting with an uppercase', () => {
        expect(uppercase('test string')).toEqual('Test string');
    });
});
