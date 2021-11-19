import 'react-native';
import React from 'react';
import loginPage from '../components/LoginPage'
import renderer from 'react-test-renderer'
import {Image, Text} from 'react-native'
import styles from "../StyleSheets/AppStyling";
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
it('renders correctly', () => {
    const tree = renderer.create(
        <loginPage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
it('image is correct', () => {
    const tree = renderer.create(
        <Image style={styles.image} source={require("../assets/powersmart.png")}/>
        ).toJSON();
    expect(tree).toMatchSnapshot();
})