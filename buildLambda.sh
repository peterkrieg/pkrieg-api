#!/bin/bash

# Note:  this uses default aws profile - if issues in future, might need to reinvestigate this

LAMBDA_FUNCTION_NAME="testFunction"


cd ./lambda

echo "zipping up lambda code"

zip -r test.zip *

aws lambda update-function-code --function-name $LAMBDA_FUNCTION_NAME --zip-file fileb://test.zip
