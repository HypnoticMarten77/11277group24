import 'react-native';
import React from 'react';
import homePage from '../components/HomePage'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <homePage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});