import { FlatList, Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Row from '../../../Components/Row';
import ProductList from '../ProductList';
import Header from '../../../Components/Header';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('window').height;

const Home = () => {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
            <Header />
            <Row />
            <ProductList />
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})