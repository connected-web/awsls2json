# awsls2json

Converts the output of the aws cli command `aws s3 ls` to JSON format.

Reference:

- <http://docs.aws.amazon.com/cli/latest/reference/s3/ls.html>

## Usage

convert.js:

```javascript
const fs = require('fs');
const awsls2json = require('./awsls2json');

const filelist = fs.readFileSync('filelist.txt');
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
2016-09-15 08:49:19        248 ae6b938.json
2016-09-15 09:02:05        258 538e9c7.json
2016-09-15 12:40:25        258 932a834.json
2016-09-15 12:47:23        258 1d66964.json
2016-09-15 13:51:24        258 a7a7906.json
```

## Example Output

```json
[
  {
    "date": "2016-09-15",
    "time": "08:49:19",
    "size": "248",
    "filename": "ae6b938.json"
  },
  {
    "date": "2016-09-15",
    "time": "09:02:05",
    "size": "258",
    "filename": "538e9c7.json"
  },
  {
    "date": "2016-09-15",
    "time": "12:40:25",
    "size": "258",
    "filename": "932a834.json"
  },
  {
    "date": "2016-09-15",
    "time": "12:47:23",
    "size": "258",
    "filename": "1d66964.json"
  },
  {
    "date": "2016-09-15",
    "time": "13:51:24",
    "size": "258",
    "filename": "a7a7906.json"
  }
]
```
