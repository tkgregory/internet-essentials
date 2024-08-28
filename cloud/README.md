## Website deployment to AWS

Deploys an example static website to AWS.

### Pre-requisites

* AWS account ([sign up](https://aws.amazon.com/resources/create-account/))
* Local AWS credentials (run `aws configure` to setup)

### Deploying the site

Install *Serverless Framework*.

`npm i serverless@3.39.0 -g`

(later versions require login)

Deploy to AWS.

`sls deploy --verbose`

### Viewing the site

Point a browser at *WebsiteURL* listed under *Stack Outputs*.