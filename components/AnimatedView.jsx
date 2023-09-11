import { Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useRef } from 'react';

const AnimatedView = (props, { navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useFocusEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
        return () => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: true,
            }).start();
        };
    });

    return (
        <Animated.View // Special animatable View
            style={{
                flex: 1,
                opacity: fadeAnim, // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

export default AnimatedView;
