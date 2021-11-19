import 'react-native';
import React from 'react';
import loginPage from '../components/newUserPage'

import renderer from 'react-test-renderer'
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
it('renders correctly', () => {
    const tree = renderer.create(
        <loginPage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
