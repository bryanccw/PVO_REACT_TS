## Keep CodeBuild at ap-east-1 for now
## create-stack is for first time use only
## aws --region ap-east-1 cloudformation create-stack \
aws --region ap-east-1 cloudformation update-stack \
--tags \
Key=ApplicationID,Value=APP3151073 \
Key=Environment,Value=QA \
--stack-name abo-events-code-build-policy \
--template-body file://iam-roles.yml \
--capabilities CAPABILITY_NAMED_IAM
