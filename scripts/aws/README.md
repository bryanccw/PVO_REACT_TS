# Setting up in AWS

This project is hosted via AWS CloudFront, with the static content stored in AWS S3.
CI/CD is currently handled by AWS CodeBuild alone.

## S3

V2 related static files is placed in [S3 > abo-events-ui-shared](https://s3.console.aws.amazon.com/s3/buckets/abo-events-ui-shared?region=ap-east-1&tab=objects). If setting up for the very first time:

1. Create new S3 bucket named `abo-events-ui-shared`
2. In the bucket, create new folder `{env}` (`dev | qa | prod`, lower case for cross platform)
3. Take note of the folder / bucket, will be needed on CloudFront create origin step

## CloudFront

1. Create / locate CloudFront distribution for the CDN
2. Create a new Origin for new path, if needed ([CloudFront Distribution > Origins](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=ap-east-1#/distributions/E1I8P37T6NL3GX/origins))
   - Origins is tied to S3 bucket, static content is placed here (files from `build/` folder after running `npm run build`)
   - Refer to S3 section for S3 related steps
   - Optional: add path (S3 bucket path) to point to folder inside S3 bucket
   - Replace origin name to a meaningful name, name from AWS is very difficult to relate
   - S3 bucket step: choose `yes use OAI` to prevent exposing S3 content to public
   - Optional: S3 bucket click `Yes, update the bucket policy` to automatically insert OAI user into S3 bucket permission
   - Refer to step 7 to append missing S3 permission
3. Optional: For Single Page Application - add a new CloudFront function (cloudfront.js) to handle HTTP request re-write ([CloudFront functions](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=ap-east-1#/functions))
4. Create a new Behavior for new path, if needed ([CloudFront Distribution > Behaviors](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home?region=ap-east-1#/distributions/E1I8P37T6NL3GX/behaviors))
   - Point to the new origin created at step 2.
   - Optional: At `Function associations`, associate CloudFront function created during step 3 to "Viewer request"
     - This is to always redirect request to Single Page App `index.html` and prevent HTTP 404 from CloudFront
     - HTTP 404 is handled in the SPA instead, via react-router
5. Take note of the CloudFront distribution ID (for example, `E1I8P37T6NL3GX`), it is needed to invalidate CDN. The content is cached by CloudFront CDN (24 hours, by default)
6. Update the distribution ID at `codebuild/deploy-{env}.yml`
7. Update permission at S3 bucket (click bucket -> edit -> permission tab)

This is an example of permissions required at S3:

```
{
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Principal": {
                // ARN example of a CloudFront OAI, auto generated if click "create OAI / update bucket" when create origins
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E3OO6M3YV1TCOV"
            },
            "Action": [
                "s3:GetObject*",
                "s3:GetBucket*",
                "s3:List*"
            ],
            "Resource": [
                "arn:aws:s3:::abo-events-ui-shared",
                "arn:aws:s3:::abo-events-ui-shared/*"
            ]
        }
    ]
}
```

## IAM Roles

In order for CodeBuild to execute all the build tasks, an IAM account with all the access is required.

1. Run the shell script in `scripts/aws/iam/setup-iam-roles.sh` to setup IAM account

> If setting up for the very first time, replace `update-stack` to `create-stack`

## CodeBuild

After setting up the IAM role, run the script located at `scripts/aws/codebuild/setup-{env}.sh` to setup CodeBuild

> Similarly, replace `update-stack` to `create-stack` if setup for the very first time
