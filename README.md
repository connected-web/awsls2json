# awsls2json

Converts the output of the aws cli command `aws s3 ls` to JSON format.

Reference:

- <http://docs.aws.amazon.com/cli/latest/reference/s3/ls.html>

## Usage

convert.js:

```javascript
const fs = require('fs');
const awsls2json = require('./awsls2json');

const filelist = fs.readFileSync('filelist.txt', 'utf8');
const json = awsls2json(filelist);

console.log('Result', json);
```

From the command line, or CI:

```sh
aws s3 ls s3://my-bucket-path/target-folder > filelist.txt
node convert.js
```

## Example Input

```sh
PRE eab12b4/
PRE ff3d347/
PRE unminified/
2016-11-09 16:13:02          8 latest-regression-candidate
```

## Example Output

```json
[{
    "pre": "PRE",
    "folder": "eab12b4/"
},{
    "pre": "PRE",
    "folder": "ff3d347/"
}, {
    "pre": "PRE",
    "folder": "unminified/"
}, {
    "date": "2016-11-09",
    "time": "16:13:02",
    "size": "8",
    "file": "latest-regression-candidate"
}]

```

## Changelog

### Version 1.0.1
- Add support for folders

### Version 1.0.0
- Initial release, with support for a files in a folder
