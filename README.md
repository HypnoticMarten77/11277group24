## Table of Contents:
### Introduction
### Installation
### Usage
* #### Using the App
* #### Editing the Project
### Testing 
### Technologies
### FAQ
### Authors
# Introduction

Our application is Project Power Smart, a mobile app for iOS and Android that allows for the user to track their power bill costs over months, insert and view their appliances, learn about daily tips to save energy, and view their location to determine if it is optimal for renewable resources. Our app was made using React Native, a UI software. We used Node.js to set up a JavaScript runtime environment, and Expo, a React framework to run our applications locally on our devices. Our app aims to help users save energy, and with that save money. 

# Installation

First, download [Node.js](https://nodejs.org/en/), and make sure to have a JavaScript IDE available if you want to edit the project, I used [Webstorm](https://www.jetbrains.com/webstorm/).

Next, create a blank folder / directory somewhere and keep track of the location, this is where the project will go.

If you do not have git terminal installed, [download](https://git-scm.com/downloads) a git terminal, such as Git Bash for windows.

Next, navigate to your file directory in your git terminal. In windows, it would look like this:
```bash
cd my-folder 
```

Next, clone the github repository, in your local folder
```bash
git clone https://github.com/HypnoticMarten77/11277group24.git
```

After this, use the normal command line interface for Windows, and navigate to the local project folder. There should be one folder in it, **11277group24**. 

Perform the following steps to go into the React Native project folder, **project-power-smart**
```bash
cd 11277group24
cd project-power-smart
npm install
```

**npm install** will install all dependencies and third party libraries / APIs that do not come with React Native locally that were used in the project. If Node.js is installed correctly, this should function properly. Next, run
```bash
npm start
```

You will be greeted with the message *'expo-cli' is not recognized as an internal or external command, operable program or batch file. This command requires Expo CLI. Do you want to install it globally [Y/n]?* You can choose either Y or n here, and Expo CLI will install on your computer.

Once Expo CLI installs, a new tab will pop-up in your browser, which allows you to run the project locally. The url will likely be something similar to **http://localhost:19002/**. You will see text at the top reading "Metro Bundler", as well as a large QR Code scan near the bottom, which we can use to run the project.

On your phone, download Expo Go from either the App Store or Google Play Store. We will use this to run the project. 

Once Expo Go is installed, you can access the project by opening any QR Reader, and scanning the QR code in the Metro Bundler. This will open the Expo Go app, and open the project. 

For iPhone, to utilize the map getting location function, you need to allow Expo Go to use location while using the app within your settings. To do this. Open Settings, swipe up to reveal the search button, look up Expo Go, and set Location from "Never" to "While Using the App". 

# Usage
## Using the app
Once you open the project in Expo CLI, you will be greeted with the home screen, which has a login with username and password. Entering any valid email will work, and the password has a requirement of at least 8 characters. You can also create a new account by selecting that button below.

Once logged in, you can view each page of the app. Each page has its own information at the top right, letting the user know what the page does. 

The Home Page consists of the page to enter power bill information, choosing between options 6 Months and 1 Year. It has dummy values initially, but the data can be cleared by selecting "Clear Data". Here, you can choose to edit or add new power bill information, or remove the power bill information for that month.

Clicking on the next tab to the right from the Home Page will reveal the tips page, which gives tips to the user based on category (General, Appliances, Electronics, Light Bulbs, etc.). You can choose to cycle through each of the tips using the refresh button at the bottom.

Clicking to the next tab to the right again reveals the appliance list, which is full of appliances once would have in their home. Each appliance can be viewed / edited, showing details on the appliance, as well as if it is energy efficient or energy inefficient. Each entry can be renamed or removed. Entries can also be added at the bottom by selecting "Add Appliance". 

The tab next to the Appliance List is the Suggested Efficient Products page, which consists of Energy Efficient Appliances according to Energy Star's website. They are separated into categories (Washer, Ceiling Fan, Dishwasher, etc.). Clicking through each of them reveals energy efficient name and models of the specific category.

Lastly, the Maps page shows if the current area is optimal for renewable energy. Likely, the screen will start with the text "Loading...", as it takes time to get the user's current location using the expo-location API. Once the location is fetched, it will display if the area is optimal or not for renewable energy, and display examples of renewable energy efficient options. From here, clicking the "Show my Location" reveals on the map the current location of the user. Note, this feature won't work unless location is set to "While Using" or "Always" for iOS.

## Editing the project
To edit the project, first open it within a JavaScript IDE, and navigate to the project-power-smart folder. Our project is organized like this:
```
.
├── assets                  # Fonts and Images used 
├── components              # All Pages within our project (Login, Home, Tips, etc.)
├── node_modules            # Holds all downloaded packages from npm used
├── StyleSheets             # Contains all CSS styling for each of the pages
├── tests                   # Unit testing for each of the pages
├── .gitignore              # Contains files and directories to ignore when using git (mainly node_modules ignored)
├── App.js                  # Starting page of app
└── TabRouter.js            # Bottom tab navigator, routes to different pages (Home, Tips, Appliance, Maps)
```
If we go into the components folder, we get...
```
components
├── AppliancePage.js        # Appliance List
├── EfficientPage.js        # Suggest Efficient Products
├── HomePage.js             # Power Bill Data Entry
├── locationPage.js         # Subcomponent of mapContainer, shows user location
├── LoginPage.js            # Login Page
├── mapContainer.js         # Contains top tab navigator, holds MapPage and locationPage
├── MapPage.js              # Locates user location, tells user if area is optimal for renewable energy
├── newUserPage.js          # Navigated from login page if user selects "Create New User"
└── TipsPage.js             # Tips Page
```

Each of these pages can be edited to change what appears on their respective pages, this is where most of the code editing will happen if you want to change **features** on a page. For instance, adding a new text block to say "Hello CEN3031" could be done by:
```
<Text> Hello CEN3031</Text>
```
Text is wrapped in <Text> components, but inlcuding other features like Button, View, etc. can be used as well, reference the [React Native Docs](https://reactnative.dev/docs/getting-started) to learn more about this.

To **create a new page or remove a new page** in the tab navigator, a few steps must be taken. Firstly, create a new page within the components folder, and make sure to export the page. An example could look like this:

```javascript
import React from "react";

function Test {
   return (
       <View>
          <Text> Hello World </Text>
       </View>
   );
}
export default Test;
``` 
Next, go to  the TabRouter file, import the example function, and add it to the <Tab.Navigator>, following the same format as the other pages. To change the icons and view what icons are available, reference [Simple Line Icons](https://simplelineicons.github.io/), which is what we used for the tab icons.

**If you wish to make changes with styling**, or how the information is displayed on the screen, changing the style sheets will be necessary for this. Changing style sheets in the StyleSheets folder will work for some pages, but others have their own seperate style sheets at the bottom of the page. For example, going to the bottom of *HomePage.js* will show a StyleSheet, *homePageStyles*. An example stylesheet that centers components and increases font size and color and changes background color would look like this:
```css
import {StyleSheet} from "react-native"
const testStyles = StyleSheet.create({
    testBox : {
        alignItems : "center",
        fontSize : 24,
        fontColor : 'white',
        backgroundColor : '#fff',
    }
})
export default testStyles
```
StyleSheets are extremely important for how different components are positioned and how they look, contributing greatly to how the app looks overall. I would recommend reading into React Native docs on [StyleSheets](https://reactnative.dev/docs/stylesheet), as well as brushing up on [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) if you are not familiar. 

## Testing
For testing, everything is done through unit tests in our project. As you can see from the project directory, there are different tests available in the testing folder. All testing is done through Jest, and separated into each of our pages. An example unit test which checks if our tips page renders properly looks like this: 
```javascript
import 'react-native';
import React from 'react';
import dailyTipsPage from '../components/TipsPage'

import renderer from 'react-test-renderer'
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
it('renders correctly', () => {
    const tree = renderer.create(
        <dailyTipsPage/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
```
To implement more unit testing, or to go deeper into end-to-end tests and automated tests, reference the [react native testing docs](https://reactnative.dev/docs/testing-overview). 
## Technologies
#### Expo 1.0.0
#### React Native 0.66
#### Jest 27.3.1
#### Node.js 16.13.0 
We also used many React Native external libraries, which can be found within our package.json file.
### Built With:
#### Javascript
#### HTML
#### CSS

## FAQs
### npm start isn't working for my project
Usually, the main issue is being in the wrong working directory. If you are on windows, type dir in cmd line to double check that you are in **project-power-smart**, and not **11277group24**. If you are in **11277group24**, cd into **project-power-smart**. If this still continues, try opening your folder with the local repository, and deleting the entire node-modules folder. After this, go back to **project-power-smart** and run 
```
npm install
```
### Does this app work with Android?
With how we set up our project, we use specific iOS fonts, specifically Futura-Medium that don't appear on Android. As everyone who worked on this project use iOS devices, we haven't implemented fonts specific for Android. Despite this, the project should still work properly with androids, but with possible warnings with fonts.

### Can I run this app on my computer instead of my phone?
Yes, this will also run on a website, but the formatting is not intended for a web app. It runs much better and as intended on a device, but can also be used using emulators. If you have specific IDEs, you can run an in-app emulator. For Mac's, you can download iOS emulators to test iPhone features, and certain apps like Bluestacks allow for android testing. 

### What external libraries are you using for your app?
All of the external libraries we are using are detailed in the package.json folder. Some notable ones include:

**victory-native ver 35.5.5** for the chart shown on Home Page

**react-nativigation-maps ver 0.29.3** for maps shown in location section of Maps Page

**react-native-table-component ver 1.2.1** for the table shown in the Appliance page and Suggest Efficient Appliance Page

**react-native-vector-icons ver 9.0.0** for the icons in the tab navigator, as well as various icons throughout the project. Specifically, [FontAwesome](https://fontawesome.com/v6.0/icons?s=solid,brands) and [SimpleLineIcons](https://simplelineicons.github.io/) were used.

**react-navigation/bottom-tabs ver 6.0.9** and **react-navigation/material-top-tabs ver 6.0.6** were used for the bottom tab navigator, and the top tab navigator on the maps page.

## Authors
### Bruce Maddux
### Andres Maldonado-Martin
### Heinrich Perez
### Reese Quinn
