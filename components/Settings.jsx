import React, { useState, useContext } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { AppContext } from './ContextWrapper';
import AnimatedView from './AnimatedView';

import { requestPermissionsAsync, allowsNotificationsAsync } from '../utilities/Notifications';

import styles from '../App.scss';

function Settings() {
    // ------------------------------------------------------------------------------------------

    // VARS

    const context = useContext(AppContext);

    // ------------------------------------------------------------------------------------------

    // SET PREFERENCES

    const setPreferences = async (key, value) => {
        const tempPreferences = { ...context.preferences };
        tempPreferences[key] = value;
        console.log('setPreferences: ', tempPreferences);
        context.setPreferences({ ...tempPreferences });
    };

    const logPreferences = () => {
        context.getPreferences();
    };

    // ------------------------------------------------------------------------------------------

    // IMAGE SELECTOR

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const selectedImage = result.assets[0].uri;
            setPreferences('backgroundImage', selectedImage);
        }
    };

    // ------------------------------------------------------------------------------------------

    // NOTIFICATIONS

    const allowNotifications = () => {
        console.log(allowsNotificationsAsync());
    };

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            <View style={styles.container}>
                <View style={styles.well}>
                    <Text style={styles.textLarge}>Settings</Text>

                    <TouchableHighlight
                        style={[styles.button, styles.submit_btn]}
                        onPress={pickImage}
                        underlayColor="rgb(180, 106, 23)"
                        title="Select Image"
                        RippleConfig={{ android_ripple: true }}
                        elevation={1}
                    >
                        <Text style={styles.buttonText}>Select Image</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.button, styles.submit_btn]}
                        onPress={logPreferences}
                        underlayColor="rgb(180, 106, 23)"
                        title="Select Image"
                        RippleConfig={{ android_ripple: true }}
                        elevation={1}
                    >
                        <Text style={styles.buttonText}>Log Preferences</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={[styles.button, styles.submit_btn]}
                        onPress={allowNotifications}
                        underlayColor="rgb(180, 106, 23)"
                        title="Select Image"
                        RippleConfig={{ android_ripple: true }}
                        elevation={1}
                    >
                        <Text style={styles.buttonText}>Allow Notifications</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </AnimatedView>
    );
}

export default Settings;
