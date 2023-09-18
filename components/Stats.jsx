import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import AnimatedView from './AnimatedView';
import { Dimensions } from 'react-native';

import BezierGraph from './BezierGraph';
import ContributionMap from './ContributionMap';

import { AppContext } from './ContextWrapper';

import styles from '../App.scss';
import { SafeAreaView } from 'react-native-safe-area-context';

function Stats() {
    // ------------------------------------------------------------------------------------------

    // VARS

    const context = useContext(AppContext);

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.scroll_view}>
                    <Text style={styles.textLarge}>The last 7 days</Text>
                    <ContributionMap title={'Frequency'} arrayKey={'date'} dataSet={context.listData} />
                    <BezierGraph title={'Anxiety Levels'} arrayKey={'sliderValue1'} dataSet={context.listData} />
                    <BezierGraph title={'Meds Effieciency'} arrayKey={'sliderValue2'} dataSet={context.listData} />
                    <BezierGraph title={'Sleep rating'} arrayKey={'sliderValue3'} dataSet={context.listData} />
                </ScrollView>
            </SafeAreaView>
        </AnimatedView>
    );
}

export default Stats;
