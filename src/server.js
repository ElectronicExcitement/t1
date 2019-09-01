const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gpio = require('rpi-gpio')

const server = express();
const port = 3000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const gpiop = gpio.promise;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//server.get('/api/:relay', cors(corsOptions), (req, res) => res.send(req.params.relay));
server.post('/api/relay', cors(corsOptions), async (req, res) => {
    await gpiop.setup(16, gpio.DIR_OUT);
    await gpiop.write(16, req.body.state === "1");

    res.send(req.body);
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
