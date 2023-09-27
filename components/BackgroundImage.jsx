import React, { useEffect, useContext } from 'react';
import { ImageBackground } from 'react-native';
import { AppContext } from './ContextWrapper';

import styles from '../App.scss';

function BackgroundImage(props) {
    // ------------------------------------------------------------------------------------------

    // SETUP

    const context = useContext(AppContext);

    useEffect(() => {
        console.log(context.preferences.backgroundImage);
    }, []);

    // ------------------------------------------------------------------------------------------

    // RENDER

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={
                context.preferences.backgroundImage
                    ? { uri: context.preferences.backgroundImage }
                    : require('../assets/backgrounds/images.jpeg')
            }
            resizeMode="cover"
        >
            {props.children}
        </ImageBackground>
    );
}

export default BackgroundImage;
