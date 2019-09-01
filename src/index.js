import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

function App() {
    const request = require('request');
    
    const relayOnConst = relayOn => { request.post('http://10.0.0.8:3000/api/relay').form({ state: true }) };
    const relayOffConst = relayOff => { request.post('http://10.0.0.8:3000/api/relay').form({ state: false }) };

    return (
        request.post('http://10.0.0.8:3000/api/relay').form({ id: Math.floor(Math.random() * 10) }),
        
        <>
            <button onClick={relayOnConst}>ON</button>
            <button onClick={relayOffConst}>OFF</button>
        </>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);
