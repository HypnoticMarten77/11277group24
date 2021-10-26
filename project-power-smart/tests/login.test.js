import 'react-native';
import React from 'react';
import loginPage from '../components/LoginPage'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <loginPage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});