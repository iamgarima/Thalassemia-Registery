import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

const Index = () => {
  return (
    <Routes />
  )
}

ReactDOM.render(<Index />, document.getElementById('app'));