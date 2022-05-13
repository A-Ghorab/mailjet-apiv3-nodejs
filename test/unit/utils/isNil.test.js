/*external modules*/
import chai from 'chai';
/*lib*/
/*utils*/
import { isNil } from '../../../lib/utils/index.js';
/*helpers*/
/*other*/

const expect = chai.expect;

describe('Unit utils/isNil', () => {

  it('should be return true for nil types', () => {
    [
      null,
      undefined
    ].forEach(type => {
      expect(isNil(type)).to.be.true;
    });
  });

  it('should be return false for all not nil types', () => {
    [
      5,
      BigInt(5),
      'string',
      Symbol('sym'),
      false,
      true,
      {},
    ].forEach(type => {
      expect(isNil(type)).to.be.false;
    });
  });

});