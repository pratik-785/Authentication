import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/AuthStack/LoginScreen';
import SignUpScreen from '../Screens/AuthStack/SignUpScreen';
import SplashScreen from '../Screens/AuthStack/SplashScreen';
import Otp from '../Screens/AuthStack/Otp';
import Gated from '../Screens/AuthStack/Gated';
import PhoneNumber from '../Screens/AuthStack/PhoneNumber';

const Stack = createStackNavigator();

// In this stack only the authentication screen are available
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="PhoneNumber"
                component={PhoneNumber}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Otp"
                component={Otp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Gated"
                component={Gated}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;