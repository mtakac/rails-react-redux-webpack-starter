import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'store/store';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Root from 'components/root';
import ComponentA from 'components/component-a';
import ComponentB from 'components/component-b';

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route component={Root}>
				<Route path="/" component={ComponentA} />
				<Route path="/component-b" component={ComponentB} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
