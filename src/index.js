import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import request from 'request';

function App() {
    const relayOn = () => {
        request.post('http://10.0.0.8:3000/api/relay').form({ state: 1 });
    };
    const relayOff = () => {
        request.post('http://10.0.0.8:3000/api/relay').form({ state: 0 });
    };

    return (
        <>
            <button onMouseDown={relayOn} onMouseUp={relayOff}>Go</button>
        </>
    );
}

ReactDOM.render(
    <App />, document.getElementById('app')
);
