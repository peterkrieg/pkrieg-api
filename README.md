# Pkrieg-Api

Eventually, I'd like to have an api for mock stuff - something like https://api.peterkrieg.com.

For now, it is only hooked up in api gateway, under my personal AWS account.  This allows me to update lambda functions which are triggered by api gateway.

## Updating Lambda Function
To update a lambda function, run the `./buildLambda.sh` script.  This will only run with one lambda function at the moment, but in future I could expand it.


## Common Pitfalls With Api Gateway / Lamba
Getting gateway to work can be a real headache..

### Api Gateway
* Create api, making sure to check `Use Lambda Proxy Integration`.  This integration is necessary in order for lambda to receive forwarded info from api gateway, such as url params, request body, etc.
* Every time you make any changes, remember to `Deploy Api` or nothing will update.. this can be frustrating.



### Lambda
* Create a lambda
* Run the `buildLambda.sh` to update the lambda code - this is nearly instantaneous
* Need to make sure the response is in following format:

```json
	"isBase64Encoded": false,
	"statusCode": 200,
	"headers": { "headerName": "headerValue" },
	"body": Json.stringify({ ... }),
```

If anything is slightly off, api gateway won't know how to handle the response from lambda (it expects that format) and will return 502 errors. This article has some more info:  https://aws.amazon.com/premiumsupport/knowledge-center/malformed-502-api-gateway/

* console.logging in lambda will log over to cloudwatch


