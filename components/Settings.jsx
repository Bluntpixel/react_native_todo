import React from 'react';
import { Text, View } from 'react-native';
import AnimatedView from './AnimatedView';

import styles from '../App.scss';

function Settings() {
    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            <View style={styles.container}>
                <Text style={styles.textLarge}>Settings</Text>
            </View>
        </AnimatedView>
    );
}

export default Settings;
