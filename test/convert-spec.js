const expect = require('chai').expect;
const convert = require('../index');

describe('Convert', () => {
  it('should convert aws ls s3 output into JSON', () => {
    const filelist = require('fs').readFileSync(__dirname + '/fixtures/filelist.txt', 'utf8');
    const expected = require('./fixtures/filelist.json');

    const actual = convert(filelist);
    expect(actual).to.deep.equal(expected);
  });

  it('should convert aws ls s3 output containing folders into JSON', () => {
    const folderlist = require('fs').readFileSync(__dirname + '/fixtures/folderlist.txt', 'utf8');
    const expected = require('./fixtures/folderlist.json');

    const actual = convert(folderlist);
    expect(actual).to.deep.equal(expected);
  });
});
