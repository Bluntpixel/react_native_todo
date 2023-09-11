import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
    // ------------------------------------------------------------------------------------

    // STATE, REFS ETC

    const [listData, setListData] = useState([]);

    // ------------------------------------------------------------------------------------------

    // GET LIST DATA FROM LOCAL STORAGE

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@storage_Key');
                if (value !== null) {
                    setListData(JSON.parse(value));
                    console.log(value);
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

    // ------------------------------------------------------------------------------------

    // RENDER

    return (
        <AppContext.Provider
            value={{
                listData,
                setListData,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
