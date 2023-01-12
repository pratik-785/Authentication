import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

import { AuthContext } from '../../Navigations/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';
import { Formik } from 'formik';

const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required('Email Address is required'),
    password: Yup.string()
        .min(6)
        .required('Password is required')
    // .matches(/ ^[A-Z]+$/, 'Must contain 6 characters, at least one uppercase letter')
});

const LoginScreen = ({ navigation }) => {

    const [secure, setSecure] = useState(true);

    const { login } = useContext(AuthContext);

    return (
        <Formik initialValues={{
            email: '',
            password: '',
        }}
            validationSchema={loginValidationSchema}
            onSubmit={values => login({ email: (values.email) }, { password: (values.password) })}
        >
            {({ values, errors, touched, handleSubmit, handleChange, isValid, setFieldTouched }) => (
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
                                labelValue={values.email}
                                placeholder="Email or Phone Number"
                                keyboardShouldPersistTaps={false}
                                onChangeText={handleChange('email')}
                                onBlur={() => setFieldTouched('email')}
                                style={styles.emailInput}
                            />
                            {touched.email && errors.email && (<Text style={{ color: 'red', fontWeight: '800' }}>{errors.email}</Text>)}
                        </View>

                        {/* Password input */}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                autoCapitalize={false}
                                autoCorrect={false}
                                labelValue={values.password}
                                secureTextEntry={secure ? true : false}
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched('password')}
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
                        {touched.password && errors.password && <Text style={{ fontSize: 13, color: '#fff', fontWeight: '800' }}>{errors.password}</Text>}

                        {/* Login up button */}
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={[styles.signInButton, { backgroundColor: isValid ? 'red' : 'orange', }]}>
                            <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
                        </TouchableOpacity>

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
            )}
        </Formik>
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


// {email == "" && password == "" ?
// <TouchableOpacity activeOpacity={0.5} style={[styles.signInButton, { backgroundColor: 'red', opacity: 0.5 }]}>
//     <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
// </TouchableOpacity>
// :
// <TouchableOpacity
//     onPress={() => handleLogin()}
//     style={styles.signInButton}>
//     <Text style={{ color: '#fff', fontWeight: '700' }}>Login</Text>
// </TouchableOpacity>}