var NL = '\n';

// Example aws s3 ls line:
// 2016-09-15 13:51:24        258 a7a7906.json
var fileMatcher = /(\d\d\d\d-\d\d-\d\d)\s+(\d\d:\d\d:\d\d)\s+(\d+)\s+(.*)/;
var folderMatcher = /(PRE)\s+(.*\/)/;

function decodeLine(line) {
  var result = {};

  if (fileMatcher.test(line)) {
    var parts = line.match(fileMatcher);
    result.date = parts[1];
    result.time = parts[2];
    result.size = parts[3];
    result.file = parts[4];
  } else if (folderMatcher.test(line)) {
    var parts = line.match(folderMatcher);
    result.pre = parts[1];
    result.folder = parts[2];
  } else {
    result = false;
  }

  return result;
}

function removeEmpty(a) {
  return a;
}

module.exports = function (input) {
  var lines = input.split(NL);
  return lines.map(decodeLine).filter(removeEmpty);
}
