import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { AppContext } from './ContextWrapper';

import styles from '../App.scss';

function EmojiSelector({ setMoodSelect }) {
    // ------------------------------------------------------------------------------------------

    // SETUP VARS

    const context = useContext(AppContext);
    const [selectedIconIndex, setSelectedIconIndex] = useState();

    // ------------------------------------------------------------------------------------------

    // HANDLE SELECTION

    const handlePress = (index, icon) => {
        setSelectedIconIndex(index);
        setMoodSelect(icon);
    };

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <>
            <View style={styles.emoji_selector}>
                {context.emotionsArray.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress(index, item.icon)}>
                        <Text>
                            <FontAwesomeIcon
                                style={index === selectedIconIndex ? styles.emoji_icon_selected : styles.emoji_icon}
                                icon={item.icon}
                                size={31}
                            />
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
}

export default EmojiSelector;
