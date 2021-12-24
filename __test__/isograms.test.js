const isIsogram = require('../src/Isograms');

describe('test isograms function', ()=> {
    test('it should return true if the word has no repeated letters and if it has, return false',()=>{
        expect(isIsogram()).not.toBeUndefined();
        expect(isIsogram('Dermatoglyphics')).toBeTruthy();
        expect(isIsogram('isogram')).toBeTruthy();
        expect(isIsogram('aba')).toBeFalsy();
        expect(isIsogram('moOse')).toBeFalsy();
        expect(isIsogram('isIsogram')).toBeFalsy();
        expect(isIsogram('')).toBeTruthy();
    })
});