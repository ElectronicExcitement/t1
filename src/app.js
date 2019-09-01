const request = require('request');

request('http://10.0.0.8:3000/api/relay', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body.id && body.success); // Print the HTML for the Google homepage.
});

request.post('http://10.0.0.8:3000/api/relay').form({ id: Math.random(), success: Boolean() });
