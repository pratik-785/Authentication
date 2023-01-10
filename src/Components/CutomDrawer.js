import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../Navigations/AuthProvider'
const CustomDrawer = (props) => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#FFAA33" }} >
                <View style={{ paddingHorizontal: 16, paddingVertical: 30 }}>
                    <Image
                        source={{ uri: "https://w7.pngwing.com/pngs/870/211/png-transparent-iphone-world-emoji-day-man-iphone-electronics-face-head.png" }}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text style={{ color: '#ffff', fontSize: 16, fontWeight: '700', fontFamily: 'Rubik-Italic-VariableFont_wght' }}>Pratik Gadge</Text>
                </View>
                <View style={{ backgroundColor: '#fff', paddingTop: 12 }} >
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: '700' }} >Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => logout()} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 5, fontWeight: '600' }} >Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})