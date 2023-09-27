import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { AppContext } from './ContextWrapper';

function Funt() {
    return (
        <>
            <Text>Funt</Text>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../assets/backgrounds/images.jpeg')}
                resizeMode="cover"
            ></ImageBackground>
        </>
    );
}

export default Funt;
