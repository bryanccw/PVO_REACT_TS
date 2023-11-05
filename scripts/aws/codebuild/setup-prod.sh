###### Update PROD Environment Build Job
## create-stack is for first time use only
## aws --region ap-east-1 cloudformation create-stack \

aws --region us-east-1 cloudformation update-stack \
--stack-name abo-events-ui-deploy-prod \
--template-body file://triggers/manual-trigger.yml \
--tags \
Key=ApplicationID,Value=APP3151073 \
Key=Environment,Value=PROD \
--parameters \
ParameterKey=ProjectName,ParameterValue=abo-events-ui-deploy-prod \
ParameterKey=ServiceRole,ParameterValue=abo-events-code-build-role \
ParameterKey=RepositoryUrl,ParameterValue=https://github.com/AmwayACS/abo-events-ui \
ParameterKey=Environment,ParameterValue=PROD \
ParameterKey=BuildSpecPath,ParameterValue=codebuild/deploy-prod.yml \
ParameterKey=CodeBuildDesc,ParameterValue="Events Admin UI Production build job" \
ParameterKey=Repository,ParameterValue=abo-events-ui
