#!/bin/bash

# Note:  this uses default aws profile - if issues in future, might need to reinvestigate this

# LAMBDA_FUNCTION_NAME="testFunction"
LAMBDA_FUNCTION_NAME="googleVaultMatters"


#  CHANGE THIS BASED ON WHICH FUNCTION USED
cd ./lambda/google_vault_matters

echo "zipping up lambda code for lambda function: \"$LAMBDA_FUNCTION_NAME\""

zip -r test.zip *

aws lambda update-function-code --function-name $LAMBDA_FUNCTION_NAME --zip-file fileb://test.zip
