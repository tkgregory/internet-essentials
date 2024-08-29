## Website deployment to AWS

Deploys an example static website to AWS.

### Pre-requisites

* AWS account ([sign up](https://aws.amazon.com/resources/create-account/))
* Local AWS credentials (run `aws configure` to setup)

### Deploying the site

Install *Serverless Framework*.

`npm i serverless@3.39.0 -g`

(later versions require login)

Within this subdirectory, run this command to deploy to AWS.

`sls deploy --verbose`

### Viewing the site

Point a browser at the *WebsiteURL* listed under *Stack Outputs*.

### Cleaning up

Delete all the AWS resources created by this project (may take a few minutes):

`sls remove`