# Pkrieg-Api

Eventually, I'd like to have an api for mock stuff - something like https://api.peterkrieg.com.

For now, it is only hooked up in api gateway, under my personal AWS account.  This allows me to update lambda functions which are triggered by api gateway.

## Updating Lambda Function
To update a lambda function, run the `./buildLambda.sh` script.  This will only run with one lambda function at the moment, but in future I could expand it.

