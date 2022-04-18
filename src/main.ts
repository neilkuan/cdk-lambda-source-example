import { App, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaPython from '@aws-cdk/aws-lambda-python-alpha';
import { Construct } from 'constructs';
import * as path from 'path';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Lambda Base Python Runtime
    new lambdaPython.PythonFunction(this, 'Lambda1', {
      runtime: lambda.Runtime.PYTHON_3_9,
      entry: path.join(__dirname, '../funs/lambda1'),
      index: 'app.py',
      handler: 'handler',
    });
    
    // Lambda Container Runtime
    new lambda.DockerImageFunction(this, 'Lambda2', {
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../funs/lambda2')),
      architecture: lambda.Architecture.ARM_64,
    });

    
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'my-stack-dev', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

app.synth();