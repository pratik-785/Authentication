import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import BottomTab from './BottomTab';
import CustomDrawer from '../Components/CutomDrawer';
import Profile from '../Screens/AppStack/Profile';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerLabelStyle: { marginLeft: -25 },
                drawerActiveBackgroundColor: '#FFAA33',
                drawerActiveTintColor: '#fff'
            }}
        >
            <Drawer.Screen
                name="Home"
                component={BottomTab}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    )
                }} />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerIcon: ({ color }) => (
                        <AntDesign name="user" size={22} color={color} />
                    )
                }} />

        </Drawer.Navigator>

    )
}

export default AppStack;

const styles = StyleSheet.create({});