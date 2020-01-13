/* eslint-disable indent */
const corsHeaders = {
	'Access-Control-Allow-Origin': '*', // Required for CORS support to work
	'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
};


function wait (msToWait) {
	return new Promise(resolve => setTimeout(resolve, msToWait));
}

const allMatters = require('./matters.json');

exports.handler = async (event, context) => {
	// num to return at a time
	const numMattersToReturn = 20;

	const queryStringParameters = event.queryStringParameters || {};

	// // searchTerm, offset passed in as url parameters
	const offset = +queryStringParameters.offset || 0;
	// const { searchTerm = '' } = queryStringParameters;

	// const filteredProjects = allProjects.filter(doesProjectMatchSearchTerm);
	const mattersToReturn = allMatters.slice(offset, offset + numMattersToReturn);

	// number of all UNFILTERED projects that can be returned to user
	// const totalNumProjects = allProjects.length;


	const responseBody = {
		matters: mattersToReturn,
	};


	const response = {
		isBase64Encoded: false,
		statusCode: 200,
		headers: corsHeaders,
		body: JSON.stringify(responseBody),
	};

	await wait(400);

	return response;
};

