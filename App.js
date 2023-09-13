import { StatusBar, View, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHouse,
    faTableList,
    faChartLine,
    faGear,
    faHeartPulse,
    faPills,
    faBed,
    faUser,
    faFaceGrimace,
    faFaceAngry,
    faFaceGrinTongueWink,
    faFaceMeh,
    faFaceSmile,
    faFaceGrinStars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHouse,
    faTableList,
    faChartLine,
    faGear,
    faHeartPulse,
    faPills,
    faBed,
    faUser,
    faFaceGrimace,
    faFaceAngry,
    faFaceGrinTongueWink,
    faFaceMeh,
    faFaceSmile,
    faFaceGrinStars,
);

import { ContextWrapper } from './components/ContextWrapper';

import Home from './components/Home';
import TaskList from './components/TaskList';
import Stats from './components/Stats';
import Settings from './components/Settings';

import styles from './App.scss';

export default function App() {
    // ------------------------------------------------------------------------------------------

    // SETUP

    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };
    // const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <>
            <ContextWrapper>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={require('./assets/backgrounds/1605113165384013-0.jpg')}
                    resizeMode="cover"
                >
                    <NavigationContainer theme={navTheme}>
                        <Tab.Navigator
                            screenOptions={({ route }) => ({
                                headerShown: false,
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;
                                    if (route.name === 'Home') iconName = focused ? faHouse : faHouse;
                                    if (route.name === 'Event List') iconName = focused ? faTableList : faTableList;
                                    if (route.name === 'Stats') iconName = focused ? faChartLine : faChartLine;
                                    if (route.name === 'Settings') iconName = focused ? faGear : faGear;
                                    return <FontAwesomeIcon icon={iconName} size={22} color={color} />;
                                },
                                tabBarActiveTintColor: '#4e2b68',
                                tabBarInactiveTintColor: '#9b9b9b',
                                headerTransparent: false,
                                headerBlurEffect: 'dark',
                                headerTitleAlign: 'center',
                                animation: 'slide_from_right',
                                statusBarTranslucent: false,
                                headerStyle: {
                                    backgroundColor: '#4e2b68',
                                },
                                headerTintColor: '#ffffff',
                                headerTitleStyle: {
                                    fontWeight: 'normal',
                                },
                                unmountOnBlur: false,
                            })}
                        >
                            <Tab.Screen name="Home" component={Home} />
                            <Tab.Screen name="Event List" component={TaskList} />
                            <Tab.Screen name="Stats" component={Stats} />
                            <Tab.Screen name="Settings" component={Settings} />
                        </Tab.Navigator>
                    </NavigationContainer>
                    <StatusBar barStyle="light-content" />
                </ImageBackground>
            </ContextWrapper>
        </>
    );
}
