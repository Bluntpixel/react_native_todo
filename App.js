import { StatusBar, View, SafeAreaView, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faTableList } from '@fortawesome/free-solid-svg-icons/faTableList';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';

import { ContextWrapper } from './components/ContextWrapper';

import Home from './components/Home';
import TaskList from './components/TaskList';
import Stats from './components/Stats';

import styles from './App.scss';

export default function App() {
    // ------------------------------------------------------------------------------------------

    // SETUP VARIABLES

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
                    source={require('./assets/pexels-tobias-bjørkli-1819650.jpg')}
                    resizeMode="cover"
                >
                    <NavigationContainer theme={navTheme}>
                        <Tab.Navigator
                            screenOptions={({ route }) => ({
                                headerShown: true,
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;
                                    if (route.name === 'Home') iconName = focused ? faHouse : faHouse;
                                    if (route.name === 'Event List') iconName = focused ? faTableList : faTableList;
                                    if (route.name === 'Stats') iconName = focused ? faChartLine : faChartLine;

                                    return <FontAwesomeIcon icon={iconName} size={18} color={color} />;
                                },
                                tabBarActiveTintColor: '#4e2b68',
                                tabBarInactiveTintColor: 'gray',
                                headerTransparent: false,
                                headerBlurEffect: 'dark',
                                headerTitleAlign: 'center',
                                animation: 'slide_from_right',
                                statusBarTranslucent: true,
                                headerStyle: {
                                    backgroundColor: '#4e2b68',
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                    fontWeight: 'normal',
                                },
                                unmountOnBlur: false,
                            })}
                        >
                            <Tab.Screen name="Home" component={Home} />
                            <Tab.Screen name="Event List" component={TaskList} />
                            <Tab.Screen name="Stats" component={Stats} />
                        </Tab.Navigator>
                    </NavigationContainer>
                </ImageBackground>
            </ContextWrapper>
        </>
    );
}
