const corsHeaders = {
	"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
	"Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
};



exports.handler = async (event) => {
	try {
		return {
			statusCode: 200,
			headers: corsHeaders,
			body: JSON.stringify({ message: 'hello world' }),
		}

	}
	catch(err) {
		return {
			statusCode: 500,
			headers: corsHeaders,
		}
	}

};
