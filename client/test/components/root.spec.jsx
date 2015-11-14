import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Root from 'components/root';

describe('RootComponent', () => {

	let Component;

	beforeAll(() => {
		Component = ReactTestUtils.renderIntoDocument(<Root />);
	});

	it('should render', () => {
		expect(Component).toBeDefined();
	});

	it('should have the correct title', () => {
		const title = ReactTestUtils.
			findRenderedDOMComponentWithTag(Component, 'h2');

		expect(title.innerText).toBe('Root component');
	});
});
