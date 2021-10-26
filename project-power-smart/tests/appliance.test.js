import 'react-native';
import React from 'react';
import appliancePage from '../components/AppliancePage'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(
        <appliancePage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});