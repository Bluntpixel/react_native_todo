import React, { useContext } from 'react';
import { TouchableHighlight, Text, FlatList, View, Image } from 'react-native';
import AnimatedView from './AnimatedView';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { AppContext } from './ContextWrapper';

import styles from '../App.scss';
import { SafeAreaView } from 'react-native-safe-area-context';

function TaskList({}) {
    const context = useContext(AppContext);

    // ------------------------------------------------------------------------------------------

    // HANDLE DELETE

    const handleDelete = (index) => {
        let data = [...context.listData];
        data.splice(index, 1);
        context.setListData([...data]);
    };

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <AnimatedView>
            {/* <SafeAreaView style={styles.main}> */}
            <View style={styles.list_container}>
                <FlatList
                    style={styles.list}
                    contentOffset={{ y: -30 }}
                    data={context.listData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.list_item}>
                            <View style={styles.list_emoji}>
                                <Text>
                                    {item.mood && (
                                        <FontAwesomeIcon style={styles.emoji_icon} icon={item.mood} size={34} />
                                    )}
                                </Text>
                            </View>
                            <View style={styles.list_text_block}>
                                <Text style={styles.list_item_text}>
                                    {item.date
                                        ? new Date(item.date)
                                              .toDateString()
                                              .substring(0, new Date(item.date).toDateString().length - 0)
                                        : new Date(Date.now() - 1000 * 60 * 60 * 24).toDateString()}
                                </Text>
                                <Text style={styles.list_item_text_title}>{item.content}</Text>
                                <Text style={styles.list_item_text}>General anxiety: {item.sliderValue1}</Text>
                                <Text style={styles.list_item_text}>Meds efficiency: {item.sliderValue2}</Text>
                                <Text style={styles.list_item_text}>Sleep rating: {item.sliderValue3}</Text>
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
            </View>
            {/* </SafeAreaView> */}
        </AnimatedView>
    );
}

export default TaskList;
