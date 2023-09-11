import React, { useRef, useContext } from 'react';
import { TouchableHighlight, Text, TextInput, Keyboard, View } from 'react-native';
import { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import AnimatedView from './AnimatedView';

import { AppContext } from './ContextWrapper';

import styles from '../App.scss';

function Home({ navigation }) {
    // ------------------------------------------------------------------------------------------

    // SETUP VARS

    const context = useContext(AppContext);
    const [textInput, setTextInput] = useState('');
    const [sliderValue1, setSliderValue1] = useState(5);
    const [sliderValue2, setSliderValue2] = useState(5);
    const [sliderValue3, setSliderValue3] = useState(5);
    const textInputRef = useRef();

    // ------------------------------------------------------------------------------------------

    // FORM INPUTS

    const handleButtonPress = () => {
        if (textInput === '') return;

        let data = [...context.listData];

        const newDataItem = {
            date: new Date(),
            content: textInput,
            sliderValue1,
            sliderValue2,
            sliderValue3,
        };

        context.setListData(data.unshift(newDataItem));
        Keyboard.dismiss();
        setTextInput('');
    };

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            <View style={styles.container}>
                <Text style={styles.textLarge}>Add an event</Text>
                <View style={styles.well}>
                    <Text style={styles.textBody}>Add some text here.</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTextInput}
                        value={textInput}
                        multiline
                        placeholder="Add reminder"
                        keyboardType="default"
                        ref={textInputRef}
                    />
                </View>
                <View style={styles.well}>
                    <Text style={styles.textBody}>Slider One: {sliderValue1} </Text>
                    <Slider
                        style={styles.slider}
                        value={sliderValue1}
                        thumbStyle={styles.slider_thumb}
                        trackStyle={styles.slider_track}
                        onValueChange={setSliderValue1}
                        minimumValue={0}
                        maximumValue={10}
                        minimumTrackTintColor={'white'}
                        step={1}
                        trackClickable={true}
                    />
                </View>
                <View style={styles.well}>
                    <Text style={styles.textBody}>Slider Two: {sliderValue2}</Text>
                    <Slider
                        style={styles.slider}
                        value={sliderValue2}
                        thumbStyle={styles.slider_thumb}
                        trackStyle={styles.slider_track}
                        onValueChange={setSliderValue2}
                        minimumValue={0}
                        maximumValue={10}
                        minimumTrackTintColor={'white'}
                        step={1}
                        trackClickable={true}
                    />
                </View>
                <View style={styles.well}>
                    <Text style={styles.textBody}>Slider Three: {sliderValue3}</Text>
                    <Slider
                        style={styles.slider}
                        value={sliderValue3}
                        thumbStyle={styles.slider_thumb}
                        trackStyle={styles.slider_track}
                        onValueChange={setSliderValue3}
                        minimumValue={0}
                        maximumValue={10}
                        minimumTrackTintColor={'white'}
                        step={1}
                        trackClickable={true}
                    />
                </View>

                <TouchableHighlight
                    style={styles.button}
                    onPress={handleButtonPress}
                    underlayColor="rgb(180, 106, 23)"
                    title="Press Me"
                    RippleConfig={{ android_ripple: true }}
                    elevation={1}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button2}
                    onPress={() => navigation.navigate('Event List')}
                    underlayColor="rgb(32, 200, 200)"
                    title="Press Me"
                    elevation={1}
                >
                    <Text style={styles.buttonText}>View List</Text>
                </TouchableHighlight>
            </View>
        </AnimatedView>
    );
}

export default Home;
