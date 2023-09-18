import React, { useEffect, useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { Dimensions } from 'react-native';

import { ContributionGraph } from 'react-native-chart-kit';

import { AppContext } from './ContextWrapper';

import styles from '../App.scss';

function ContributionMap({ title }) {
    // ------------------------------------------------------------------------------------------

    // VARS

    const [graphValues, setGraphValues] = useState([0]);
    const screenWidth = Dimensions.get('window').width;
    const context = useContext(AppContext);

    // ------------------------------------------------------------------------------------------

    // DATA

    useEffect(() => {
        const tempData = [];
        let previousDate = '';
        let count = 0;

        for (let i = 0; i < context.listData.length; i++) {
            let date = context.listData[i].date;
            if (typeof date === 'object') date = date.toDateString();

            count++;
            if (date.substring(0, 10) !== previousDate.substring(0, 10)) {
                const newItem = {
                    date: date,
                    count: count,
                };
                tempData.push(newItem);
                count = 0;
            }
            previousDate = date;
        }

        setGraphValues([...tempData]);
    }, [context.listData]);

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <View style={styles.graph_container}>
            <Text style={styles.textLarge}>{title}</Text>
            <ContributionGraph
                values={graphValues}
                endDate={new Date()}
                numDays={88}
                width={screenWidth - 50}
                height={220}
                chartConfig={{
                    paddingRight: 50,
                    backgroundColor: '',
                    backgroundGradientFrom: '#000',
                    backgroundGradientFromOpacity: 0.8,
                    backgroundGradientTo: '#000',
                    backgroundGradientToOpacity: 0.3,
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity === 0 ? 0 : opacity * 3})`,
                    style: {
                        borderRadius: 8,
                    },
                }}
            ></ContributionGraph>
        </View>
    );
}

export default ContributionMap;
