const { awscdk } = require("projen");
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.20.0",
  defaultReleaseBranch: "main",
  name: "cdk-lambda-source-example",
  deps: [
    '@aws-cdk/aws-lambda-python-alpha@2.20.0-alpha.0'
  ],
});
project.synth();