import React, { useRef } from 'react';
import { TouchableHighlight, TextInput, Keyboard, View } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, Input } from '@rneui/themed';

import styles from '../App.scss';
import { Button } from '@rneui/base';

function Home({ listData, setListData, setCurrentView }) {
    // ------------------------------------------------------------------------------------------

    // SETUP VARS

    const [textInput, setTextInput] = useState('');
    const textInputRef = useRef();

    // ------------------------------------------------------------------------------------------

    // FORM INPUTS

    const handleButtonPress = () => {
        if (textInput === '') return;

        let data = [...listData];
        data.unshift({ content: textInput });
        setListData(data);
        Keyboard.dismiss();
        setTextInput('');
    };

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <>
            <View style={styles.container}>
                <Text h1>Task Reminder</Text>
                <Text>Please input a new task to be added to the list. Or click on the view button.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTextInput}
                    value={textInput}
                    multiline
                    placeholder="Add reminder"
                    keyboardType="default"
                    ref={textInputRef}
                />

                <Button style={styles.button} onPress={handleButtonPress} title="Press Me" />

                <Button
                    style={styles.button}
                    icon={<Icon name="list" size={16} color="#fff" />}
                    onPress={() => alert('click')}
                    title="Hello"
                    titleProps={{}}
                    titleStyle={{ marginHorizontal: 5 }}
                />

                <TouchableHighlight
                    style={styles.button}
                    onPress={handleButtonPress}
                    underlayColor="rgb(180, 106, 23)"
                    title="Press Me"
                    RippleConfig={{ android_ripple: true }}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button2}
                    onPress={() => setCurrentView('list')}
                    underlayColor="rgb(32, 200, 200)"
                    title="Press Me"
                >
                    <Text style={styles.buttonText}>View List</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}

export default Home;
