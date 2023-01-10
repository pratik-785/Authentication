import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './Navigation'
import { AuthProvider } from './AuthProvider'

const Index = () => {
    return (
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    )
}

export default Index

const styles = StyleSheet.create({})