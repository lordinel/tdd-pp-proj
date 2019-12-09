const {calculateSum} = require('./sample');

describe('Sample test', () => {
  it('should calculate sum of two numbers', () => {
    expect(calculateSum(2, 2)).to.equal(4);
  });
});
