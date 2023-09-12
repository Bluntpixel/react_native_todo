import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
    // ------------------------------------------------------------------------------------

    // STATE, REFS ETC

    const [listData, setListData] = useState([]);

    const emotionsArray = [
        {
            label: 'Angry',
            icon: 'fa-face-angry',
        },
        {
            label: 'Grim',
            icon: 'fa-face-grimace',
        },
        {
            label: 'Crazy',
            icon: 'fa-face-grin-tongue-wink',
        },
        {
            label: 'Meh',
            icon: 'fa-face-meh',
        },
        {
            label: 'Happy',
            icon: 'fa-face-smile',
        },
        {
            label: 'Extatic',
            icon: 'fa-face-grin-stars',
        },
    ];

    // ------------------------------------------------------------------------------------------

    // GET LIST DATA FROM LOCAL STORAGE

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@storage_Key');
                if (value !== null) {
                    setListData(JSON.parse(value));
                    //console.log('AsyncStorage: ', value);
                }
            } catch (e) {
                console.log('error reading localstore: ', e);
            }
        };
        /* AsyncStorage.getAllKeys()
            .then((keys) => AsyncStorage.multiRemove(keys))
            .then(() => console.log('AsyncStorage cleared'));
        AsyncStorage.clear(); */
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

        // console.log('storeData: ', listData);
        storeData();
    }, [listData]);

    // ------------------------------------------------------------------------------------

    // RENDER

    return (
        <AppContext.Provider
            value={{
                listData,
                setListData,
                emotionsArray,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
