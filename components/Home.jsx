import React, { useRef, useContext, useEffect } from 'react';
import { TouchableHighlight, Text, TextInput, Keyboard, View } from 'react-native';
import { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import AnimatedView from './AnimatedView';

import EmojiSelector from './EmojiSelector';

import { AppContext } from './ContextWrapper';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from '../App.scss';

function Home({ navigation }) {
    // ------------------------------------------------------------------------------------------

    // SETUP VARS

    const context = useContext(AppContext);
    const [moodSelect, setMoodSelect] = useState('');
    const [textInput, setTextInput] = useState('');
    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);
    const [sliderValue3, setSliderValue3] = useState(0);
    const textInputRef = useRef();

    // ------------------------------------------------------------------------------------------

    // FORM INPUTS

    const handleButtonPress = () => {
        if (moodSelect === '') return;
        if (textInput === '') return;

        let data = [...context.listData];

        const newDataItem = {
            date: new Date(),
            mood: moodSelect,
            content: textInput,
            sliderValue1: sliderValue1,
            sliderValue2: sliderValue2,
            sliderValue3: sliderValue3,
        };

        data.unshift(newDataItem);
        context.setListData(data);
        Keyboard.dismiss();
        setTextInput('');
        navigation.navigate('Event List');
    };

    useEffect(() => {
        //console.log('moodSelect: ', moodSelect);
    }, [moodSelect]);

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            <View style={styles.container}>
                <Text style={styles.textLarge}>How are things today?</Text>

                <View style={styles.well}>
                    <EmojiSelector setMoodSelect={setMoodSelect} />
                </View>

                <View style={styles.well}>
                    <Text style={styles.textBody}>General anxiety level: {sliderValue1} </Text>
                    <View style={styles.slider_row}>
                        <Text>
                            <FontAwesomeIcon style={styles.slider_icon} icon={'fa-heart-pulse'} size={28} />
                        </Text>
                        <View style={styles.slider_outer}>
                            <Slider
                                style={styles.slider_outer}
                                value={sliderValue1}
                                thumbStyle={styles.slider_thumb}
                                trackStyle={styles.slider_track}
                                onValueChange={setSliderValue1}
                                minimumValue={-10}
                                maximumValue={10}
                                minimumTrackTintColor={'white'}
                                step={1}
                                trackClickable={true}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.well}>
                    <Text style={styles.textBody}>How are the meds working? {sliderValue2}</Text>
                    <View style={styles.slider_row}>
                        <Text>
                            <FontAwesomeIcon style={styles.slider_icon} icon={'fa-pills'} size={28} />
                        </Text>
                        <View style={styles.slider_outer}>
                            <Slider
                                style={styles.slider}
                                value={sliderValue2}
                                thumbStyle={styles.slider_thumb}
                                trackStyle={styles.slider_track}
                                onValueChange={setSliderValue2}
                                minimumValue={-10}
                                maximumValue={10}
                                minimumTrackTintColor={'white'}
                                step={1}
                                trackClickable={true}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.well}>
                    <Text style={styles.textBody}>How was your sleep? {sliderValue3}</Text>
                    <View style={styles.slider_row}>
                        <Text>
                            <FontAwesomeIcon style={styles.slider_icon} icon={'fa-bed'} size={28} />
                        </Text>
                        <View style={styles.slider_outer}>
                            <Slider
                                style={styles.slider}
                                value={sliderValue3}
                                thumbStyle={styles.slider_thumb}
                                trackStyle={styles.slider_track}
                                onValueChange={setSliderValue3}
                                minimumValue={-10}
                                maximumValue={10}
                                minimumTrackTintColor={'white'}
                                step={1}
                                trackClickable={true}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.well}>
                    <Text style={styles.textBody}>Give a general description:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTextInput}
                        value={textInput}
                        multiline={false}
                        placeholder="Add reminder"
                        keyboardType="default"
                        ref={textInputRef}
                    />
                </View>

                <TouchableHighlight
                    style={[styles.button, styles.submit_btn]}
                    onPress={handleButtonPress}
                    underlayColor="rgb(180, 106, 23)"
                    title="Press Me"
                    RippleConfig={{ android_ripple: true }}
                    elevation={1}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>

                {/* <TouchableHighlight
                    style={styles.button2}
                    onPress={() => navigation.navigate('Event List')}
                    underlayColor="rgb(32, 200, 200)"
                    title="Press Me"
                    elevation={1}
                >
                    <Text style={styles.buttonText}>View List</Text>
                </TouchableHighlight> */}
            </View>
        </AnimatedView>
    );
}

export default Home;

// https://snack.expo.dev/@miblanchard/@miblanchard-react-native-slider
