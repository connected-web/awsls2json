const expect = require('chai').expect;
const filelist = require('fs').readFileSync(__dirname + '/fixtures/filelist.txt', 'utf8');

const convert = require('../index');
const expected = require('./fixtures/filelist.json');

describe('Convert', () => {
  it('should convert aws ls s3 output into JSON', () => {
    const actual = convert(filelist);
    expect(actual).to.deep.equal(expected);
  });
});
