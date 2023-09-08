import { StatusBar, ImageBackground, View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { Slider, Text, Icon, Input } from '@rneui/themed';

import Home from './components/Home';
import TaskList from './components/TaskList';

import styles from './App.scss';

export default function App() {
    // ------------------------------------------------------------------------------------------

    // SETUP VARIABLES

    const [curentView, setCurrentView] = useState('home');
    const [listData, setListData] = useState([]);

    const theme = createTheme({
        lightColors: {
            primary: '#e7e7e8',
        },
        darkColors: {
            primary: '#000',
        },
        mode: 'dark',
        components: {
            Input: {
                containerStyle: {},
            },
            Button: {},
        },
    });

    // ------------------------------------------------------------------------------------------

    // GET LIST DATA FROM LOCAL STORAGE

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@storage_Key');
                if (value !== null) {
                    setListData(JSON.parse(value));
                }
            } catch (e) {
                console.log('error reading localstore: ', e);
            }
        };

        getData();
    }, []);

    // ------------------------------------------------------------------------------------------

    // STORE LIST DATA TO LOCAL STORAGE ON CHANGE

    useEffect(() => {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('@storage_Key', JSON.stringify(listData));
            } catch (e) {
                console.log('error: ', e);
            }
        };
        storeData();
    }, [listData]);

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <>
            <SafeAreaProvider>
                <ThemeProvider theme={theme}>
                    <ImageBackground
                        source={require('./assets/pexels-tobias-bjørkli-1819650.jpg')}
                        style={styles.backgroundImage}
                    >
                        {curentView === 'home' && (
                            <Home listData={listData} setListData={setListData} setCurrentView={setCurrentView} />
                        )}
                        {curentView === 'list' && (
                            <TaskList listData={listData} setListData={setListData} setCurrentView={setCurrentView} />
                        )}
                        <StatusBar barStyle="light-content" />
                    </ImageBackground>
                </ThemeProvider>
            </SafeAreaProvider>
        </>
    );
}
