import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('window').height;

const ProductList = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const API_URL = "https://fakestoreapi.com/products";
        const response = await fetch(API_URL)
        const result = await response.json()
        setData(result)
        setLoad(false)
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
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
        <View>
            {load ?
                <View style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                    <ActivityIndicator size={40} color={"red"} />
                </View>
                :
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    keyExtractor={(item) => item.id}
                />

            }
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: "50%",
        backgroundColor: '#fff',
        margin: 1,
        padding: 14
    }
})