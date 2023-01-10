import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../Screens/AppStack/HomeStack/Home';
import Profile from '../Screens/AppStack/Profile';


const Tab = createBottomTabNavigator();

const BottomTab = () => {

    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: "orange" },
            tabBarInactiveTintColor: '#444',
            tabBarActiveTintColor: "#fff",

        }}>
            <Tab.Screen name='Home1' component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home-outline' color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name='user' color={color} size={size} />
                    )
                }}
            />

        </Tab.Navigator>
    )

}

export default BottomTab;