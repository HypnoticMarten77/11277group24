import 'react-native';
import React from 'react';
import dailyTipsPage from '../components/TipsPage'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <dailyTipsPage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});