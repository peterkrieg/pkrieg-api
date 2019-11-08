const corsHeaders = {
	'Access-Control-Allow-Origin': '*', // Required for CORS support to work
	'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
};

const projects = require('./projects.json');

exports.handler = async (event, context) => {
	console.log(JSON.stringify(event));
	console.log(event);

	const { queryStringParameters } = event;

	// searchTerm passed in as url param
	const searchTerm = queryStringParameters && queryStringParameters.searchTerm;

	const response = {
		isBase64Encoded: false,
		statusCode: 200,
		headers: corsHeaders,
		body: JSON.stringify({ searchTerm, ...projects }),
	};


	return response;
};

