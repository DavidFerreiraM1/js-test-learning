import { expect } from 'chai';
import { paginator } from '../src/main';

describe('Main', function(){
  let returnData = {}

  before('create arraydata', function() {
    let values = [];
    for(let i = 0; i < 100; i++) {
      values.push(i);
    };
    returnData = paginator(values, 15);
  });

  context('Paginator', function() {
    it('should to return object data', () => {
      expect(returnData).to.be.an('object');
    });

    it('should to have least one pagination', () => {
      expect(returnData).to.have.property('1');
    });

    it('should to have more paginations', () => {
      expect(returnData).to.have.property('2');
    });
  });
});
