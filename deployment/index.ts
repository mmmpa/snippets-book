import fs from 'fs';
import path from 'path';
import exec from './exec';

function start () {
  const {
    BUCKET_NAME: bucketName = 'snippets-book',
    FILE_DIR: fileDir = '../.out',
  } = process.env;

  deployment({ bucketName, fileDir }).catch(console.error);
}

async function deployment ({ bucketName, fileDir }) {
  const root = path.join(__dirname);
  const src = path.join(root, fileDir);
  const tmp = path.join(root, 'tmp');

  fs.existsSync(tmp) || fs.mkdirSync(tmp);

  await clearBucket(bucketName);
  await upload(bucketName, src);
}

function build () {
  return exec({}, `yarn build`);
}

function clearBucket (bucketName) {
  return exec({}, `aws s3 rm s3://${bucketName} --recursive`);
}

function clearCache (cloudFrontId) {
  return exec({}, `aws cloudfront create-invalidation --distribution-id ${cloudFrontId} --paths "/*"`);
}

function deleteBucket (bucketName) {
  return exec({}, `aws s3 rb s3://${bucketName} --force`);
}

function put (bucketName, body, src, type, encoding) {
  let command = `aws s3api put-object --bucket ${bucketName} --body ${body} --key ${src}`;

  encoding && (command += ` --content-encoding ${encoding}`);
  type && (command += ` --content-type ${type}`);

  return exec({}, command);
}

function upload (bucketName, fileDir) {
  return exec({}, `aws s3 cp ${fileDir} s3://${bucketName} --recursive`);
}

start();

