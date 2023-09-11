import React from 'react';
import { Text, View } from 'react-native';
import AnimatedView from './AnimatedView';

import styles from '../App.scss';

function Stats() {
    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            <View style={styles.container}>
                <Text>Stats</Text>
            </View>
        </AnimatedView>
    );
}

export default Stats;
