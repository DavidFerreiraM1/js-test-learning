import { expect } from 'chai';
import { paginator } from '../src/main';

describe('Main', function(){
  let returnData = {}

  const arrayCreator = (length) => {
    let values = [];
    for(let i = 0; i < length; i++) {
      values.push(i);
    };
    return values;
  }

  before('create arraydata', function() {
    returnData = paginator(arrayCreator(100), 15);
  });

  describe('Paginator', function() {
    it('should to return object data', () => {
      expect(returnData).to.be.an('object');
    });

    it('should to have least one pagination', () => {
      expect(returnData).to.have.property('1');
    });

    it('should to have more paginations', () => {
      expect(returnData).to.have.property('2');
    });

    it('should to return only one pagination', () => {
      expect(paginator(arrayCreator(0),15)).not.to.have.property('2');
    });
  });
});
