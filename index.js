import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    render() {
        return <h1 > Hello world ? < /h1>;
    }
}

ReactDOM.render( < Test / > , document.getElementById('root'));