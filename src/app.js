const request = require('request');

/*request('http://10.0.0.8:3000/api/relay/id/:id/success/:success', function (error, response, req) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', req.params.id && req.params.success); // Print the HTML for the Google homepage.
});*/

request.post('http://10.0.0.8:3000/api/relay').form({ id: Math.random() * 10, success: true });
