import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
import { LineChart } from 'react-native-chart-kit';

import styles from '../App.scss';

function BezierGraph({ title, arrayKey, dataSet }) {
    // ------------------------------------------------------------------------------------------

    // VARS

    const [graphValues, setGraphValues] = useState([0]);
    const [graphLabels, setGraphLabels] = useState([]);
    const [totalResults, setTotalResults] = useState(14);

    // ------------------------------------------------------------------------------------------

    // DATA

    useEffect(() => {
        const tempData = [];
        const tempLabels = [];
        let resultsToDisplay = totalResults;

        const dataSetLength = dataSet.length;
        console.log('dataSet: ', dataSet);
        if (dataSetLength < totalResults) resultsToDisplay = dataSetLength;

        for (let i = 0; i < resultsToDisplay; i++) {
            tempData.push(parseInt(dataSet[i][arrayKey]));
            tempLabels.push('' + (resultsToDisplay - i));
        }
        tempData.reverse();
        setGraphValues([...tempData]);
        setGraphLabels([...tempLabels]);
    }, [dataSet]);

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <View style={styles.graph_container}>
            <Text style={styles.textLarge}>{title}</Text>
            <LineChart
                data={{
                    labels: graphLabels,
                    datasets: [
                        {
                            data: graphValues,
                        },
                        {
                            data: [10],
                            withDots: false,
                        },
                        {
                            data: [-10],
                            withDots: false,
                        },
                    ],
                }}
                width={screenWidth < 500 ? screenWidth - 40 : 500}
                height={220}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                fromZero={true}
                verticalLabelRotation={0}
                bezier={true}
                segments={4}
                style={{
                    borderRadius: 8,
                }}
                chartConfig={{
                    backgroundColor: '',
                    backgroundGradientFrom: '#000',
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: '#000',
                    backgroundGradientToOpacity: 0,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {},
                    propsForBackgroundLines: {
                        strokeWidth: '1',
                        stroke: 'rgba(255, 255, 255, 0.1)',
                        strokeDasharray: '',
                        style: 'solid',
                    },
                    propsForDots: {
                        r: '2',
                        strokeWidth: '1',
                        stroke: '#fff',
                    },
                    propsForLabels: {
                        margingTop: 20,
                        paddingRight: 20,
                    },
                }}
            />
        </View>
    );
}

export default BezierGraph;
