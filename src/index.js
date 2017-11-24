import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
    render() {
        return (
            <div><h1>Starting out a new React project I see.</h1></div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('app')
);
