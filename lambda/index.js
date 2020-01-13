/* eslint-disable indent */
const corsHeaders = {
	'Access-Control-Allow-Origin': '*', // Required for CORS support to work
	'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
};

const allProjects = require('./projects.json')
	// if want to test max of 50 projects
	// .slice(0, 50);

function wait (msToWait) {
	return new Promise(resolve => setTimeout(resolve, msToWait));
}

exports.handler = async (event, context) => {
	// num to return at a time
	const numProjectsToReturn = 20;

	const queryStringParameters = event.queryStringParameters || {};

	// searchTerm, offset passed in as url parameters
	const offset = +queryStringParameters.offset || 0;
	const { searchTerm = '' } = queryStringParameters;

	const filteredProjects = allProjects.filter(doesProjectMatchSearchTerm);
	const projectsToReturn = filteredProjects.slice(offset, offset + numProjectsToReturn);

	// number of all UNFILTERED projects that can be returned to user
	const totalNumProjects = allProjects.length;


	function doesProjectMatchSearchTerm (project) {
		// this is terribly unoptimized, if no search term it stil loops through everything
		if (!searchTerm) return true;

		return project.name.toLowerCase().includes(searchTerm.toLowerCase());
	}

	const responseBody = {
		totalNumProjects,
		projects: projectsToReturn,
		// numProjects: filteredProjects.length,
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

