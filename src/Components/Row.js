import { FlatList, Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('window').height;

const Row = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const API_URL = "https://fakestoreapi.com/products";
        const response = await fetch(API_URL)
        const result = await response.json()
        setData(result)
        console.log(result)
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{ height: 250, width: Width, backgroundColor: '#fff', margin: 1, padding: 14 }}>
                <View style={{ height: '70%' }}>
                    <Image source={{ uri: item.image }} style={{ width: "100%", height: "90%", resizeMode: 'contain' }} />
                </View>
                <View style={{ height: '20%' }}>
                    <Text numberOfLines={1} style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>{item.title}</Text>
                    <Text numberOfLines={2} style={{ fontSize: 12, fontWeight: '600', color: '#000', marginTop: 4 }} >{item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ width: '100%' }}>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Row

const styles = StyleSheet.create({})