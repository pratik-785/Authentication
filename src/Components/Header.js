import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={{ paddingHorizontal: 8, flexDirection: 'row', width: "100%", height: 50, backgroundColor: 'orange', justifyContent: 'space-between', }}>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Ionicons name='menu-outline' size={38} />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }} >amazon</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})