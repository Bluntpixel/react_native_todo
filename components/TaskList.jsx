import React from 'react';
import { TouchableHighlight, Text, FlatList, Pressable, Image } from 'react-native';

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
            <FlatList
                style={styles.list}
                data={listData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Pressable style={styles.list_item}>
                        <Text style={styles.list_item_text}>{item.content}</Text>
                        <TouchableHighlight onPress={() => handleDelete(index)}>
                            <Image style={styles.list_item_icon} source={require('../assets/trash-can-solid.png')} />
                        </TouchableHighlight>
                    </Pressable>
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
        </>
    );
}

export default TaskList;
