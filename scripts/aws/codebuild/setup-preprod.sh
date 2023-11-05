#!/bin/bash

## Keep CodeBuild at ap-east-1 for now
## create-stack is for first time use only
## aws --region ap-east-1 cloudformation create-stack \

#### PR Validation

aws --region ap-east-1 cloudformation update-stack \
--stack-name abo-events-ui-pr-validation \
--template-body file://triggers/pull-request.yml \
--tags \
Key=ApplicationID,Value=APP3151073 \
Key=Environment,Value=DEV \
--parameters \
ParameterKey=ProjectName,ParameterValue="abo-events-ui-pr-validation" \
ParameterKey=RepositoryUrl,ParameterValue=https://github.com/AmwayACS/abo-events-ui \
ParameterKey=Environment,ParameterValue=DEV \
ParameterKey=BuildSpecPath,ParameterValue=codebuild/pull-request.yml \
ParameterKey=ServiceRole,ParameterValue=abo-events-code-build-role \
ParameterKey=Repository,ParameterValue=abo-events-ui


#### DEV

aws --region ap-east-1 cloudformation update-stack \
--stack-name abo-events-ui-deploy-dev \
--template-body file://triggers/branch.yml \
--tags \
Key=ApplicationID,Value=APP3151073 \
Key=Environment,Value=DEV \
--parameters \
ParameterKey=ProjectName,ParameterValue="abo-events-ui-deploy-dev" \
ParameterKey=RepositoryUrl,ParameterValue=https://github.com/AmwayACS/abo-events-ui \
ParameterKey=Environment,ParameterValue=DEV \
ParameterKey=BuildSpecPath,ParameterValue=codebuild/deploy-dev.yml \
ParameterKey=CodeBuildDesc,ParameterValue="ABO Events UI DEV build job" \
ParameterKey=Repository,ParameterValue=abo-events-ui \
ParameterKey=BranchName,ParameterValue=main \
ParameterKey=ServiceRole,ParameterValue=abo-events-code-build-role


#### QA

aws --region ap-east-1 cloudformation update-stack \
--stack-name abo-events-ui-deploy-qa \
--template-body file://triggers/tag.yml \
--tags \
Key=ApplicationID,Value=APP3151073 \
Key=Environment,Value=QA \
--parameters \
ParameterKey=ProjectName,ParameterValue="abo-events-ui-deploy-qa" \
ParameterKey=RepositoryUrl,ParameterValue=https://github.com/AmwayACS/abo-events-ui \
ParameterKey=Environment,ParameterValue=QA \
ParameterKey=BuildSpecPath,ParameterValue=codebuild/deploy-qa.yml \
ParameterKey=CodeBuildDesc,ParameterValue="ABO Events UI QA build job" \
ParameterKey=Repository,ParameterValue=abo-events-ui \
ParameterKey=ServiceRole,ParameterValue=abo-events-code-build-role
