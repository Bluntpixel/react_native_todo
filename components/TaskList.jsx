import React from 'react';
import { TouchableHighlight, Text, FlatList, View, Image } from 'react-native';

import styles from '../App.scss';

function TaskList({ listData, setListData, setCurrentView }) {
    // ------------------------------------------------------------------------------------------

    // HANDLE DELETE

    const handleDelete = (index) => {
        let data = [...listData];
        data.splice(index, 1);
        setListData([...data]);
    };

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={listData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.list_item}>
                            <View style={styles.list_text_block}>
                                <Text style={styles.list_item_text}>
                                    {item.date
                                        ? new Date(item.date)
                                              .toDateString()
                                              .substring(0, new Date(item.date).toDateString().length - 0)
                                        : new Date(Date.now() - 1000 * 60 * 60 * 24).toDateString()}
                                </Text>
                                <Text style={styles.list_item_text_title}>{item.content}</Text>
                                <Text style={styles.list_item_text}>sliderValue1: {item.sliderValue1}</Text>
                                <Text style={styles.list_item_text}>sliderValue2: {item.sliderValue2}</Text>
                                <Text style={styles.list_item_text}>sliderValue3: {item.sliderValue3}</Text>
                            </View>
                            <TouchableHighlight onPress={() => handleDelete(index)}>
                                <Image
                                    style={styles.list_item_icon}
                                    source={require('../assets/trash-can-solid.png')}
                                />
                            </TouchableHighlight>
                        </View>
                    )}
                />
                <TouchableHighlight
                    style={styles.button2}
                    onPress={() => setCurrentView('home')}
                    underlayColor="rgb(32, 200, 200)"
                    title="Press Me"
                >
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}

export default TaskList;
