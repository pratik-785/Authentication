import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

import { AuthContext } from '../../Navigations/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [secure, setSecure] = useState(true);

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        if (password.length < 4) {
            setError('Password length must be 5 and above')
        }
        else {
            login(email, password)
        }
    }

    return (
        <ImageBackground source={require('../../Assets/background.jpg')} style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <View style={{ marginTop: 60 }}>
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: '800' }}>Log In</Text>
                </View>
                {/* Name input */}
                <View style={{ marginTop: 40 }} >
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        labelValue={email}
                        placeholder="Email or Phone Number"
                        keyboardShouldPersistTaps={false}
                        onChangeText={(e) => setEmail(e)}
                        style={styles.emailInput}
                    />

                </View>

                {/* Password input */}
                <View style={[styles.passwordContainer, { borderBottomColor: error ? 'red' : null, borderBottomWidth: error ? 2 : null, }]}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        labelValue={password}
                        secureTextEntry={secure ? true : false}
                        placeholder="Password"
                        onChangeText={e => setPassword(e)}
                        style={styles.passwordInput}
                    />
                    <View style={styles.eyeIcon}>
                        <TouchableOpacity onPress={() => setSecure(!secure)} >
                            {secure ?
                                <Ionicons name="md-eye-off-outline" size={20} />
                                :
                                <Ionicons name="md-eye-outline" size={20} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontSize: 13, color: '#fff', fontWeight: '800' }}>{error}</Text>

                {/* Login up button */}
                {email == "" && password == "" ?
                    <TouchableOpacity activeOpacity={0.5} style={[styles.signInButton, { backgroundColor: 'red', opacity: 0.5 }]}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                        style={styles.signInButton}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>}

                {/* Already have account Sign Up */}
                <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', fontWeight: '700', marginRight: 5 }}>
                        New to App?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text style={{ textDecorationLine: 'underline', color: 'red', fontWeight: '700' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};


export default LoginScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    innerContainer: {
        height: 500,
        width: 300,
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    emailInput: {
        backgroundColor: '#fff',
        width: 220,
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    passwordInput: {
        backgroundColor: '#fff',
        width: 190,
        marginTop: 15,
        height: 40,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingHorizontal: 10,
    },
    passwordContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', },
    eyeIcon: {
        backgroundColor: '#fff',
        width: 30,
        marginTop: 15,
        height: 40,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
    },
    signInButton: {
        width: 220,
        marginVertical: 20,
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 5,
    }
});
