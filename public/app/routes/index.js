import React from 'react';
import {
	Router,
	Route
} from 'react-router';
import App from '../components/App'


const Routes = () => {
	return (
		<Route path="/" component={App}/>
		)
}