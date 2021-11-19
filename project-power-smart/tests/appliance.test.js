import 'react-native';
import React from 'react';
import appliancePage from '../components/AppliancePage'

import renderer from 'react-test-renderer'
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
it('renders correctly', () => {
    const tree = renderer.create(
        <appliancePage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});