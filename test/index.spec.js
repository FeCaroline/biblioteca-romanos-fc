const chai = require('chai');
const index = require('../index');
const intToRoman = index.intToRoman;
const romanToInt = index.romanToInt;
// const expect = chai.expect;
const assert = chai.assert;

describe('intToRoman()', () =>{

  it('Deve retornar I para  o conteudo (1) ', () => {
      // expect(intToRoman(1)).to.equal('I');
      assert.equal(intToRoman(1),'I');
  });

//   it('Deve retornar X para  o conteudo (10) ', () => {
//       expect(intToRoman(10)).to.equal('X');
//   });
//
//   it('Deve retornar MM para  o conteudo (2000) ', () => {
//       expect(intToRoman(2000)).to.equal('MM');
//   });
//
//   it('Deve retornar CCCXCVII para  o conteudo (397) ', () => {
//       expect(intToRoman(397)).to.equal('CCCXCVII');
//   });
//
//   it('Deve retornar V̅ para  o conteudo (5000) ', () => {
//       expect(intToRoman(5000)).to.equal('V̅');
//   });
//
// })
//
// describe('romanToInt()', () =>{
//
//   it('Deve retornar 1 para  o conteudo (I) ', () => {
//       expect(romanToInt('I')).to.deep.equal(1);
//   });
//
//   it('Deve retornar 2 para  o conteudo (ii) ', () => {
//       expect(romanToInt('ii')).to.equal(2);
//   });
//
//   it('Deve retornar 10 para  o conteudo (X) ', () => {
//       expect(romanToInt('X')).to.equal(10);
//   });
//
//   it('Deve retornar 2000 para  o conteudo (MM) ', () => {
//       expect(romanToInt('MM')).to.equal(2000);
//   });
//
//   it('Deve retornar 397 para  o conteudo (CCCXCVII) ', () => {
//       expect(romanToInt('CCCXCVII')).to.equal(397);
//   });
//
//   it('Deve retornar 5000 para  o conteudo ("V̅") ', () => {
//       expect(romanToInt('V̅')).to.equal(5000);
//   });

})
