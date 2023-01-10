import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const SplashScreen = props => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            });
        }, 2000);
    }, []);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#3fbbfa',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Image
                source={require('../../Assets/fitness.gif')}
                style={{ height: "50%", width: "100%" }}
            />
        </View>
    );
};

export default SplashScreen;
