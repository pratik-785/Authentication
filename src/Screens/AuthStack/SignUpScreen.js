import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';

import { AuthContext } from '../../Navigations/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Yup from 'yup';
import { Formik } from 'formik';

const loginValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(4, `It's too short`)
        // .name("Please enter your name")
        .required('Name is required')
    ,
    email: Yup.string()
        .email("Please enter valid email")
        .required('Email Address is required'),

    password: Yup.string()
        .min(6)
        .required('Password is required'),
    // .matches(/^[A-Z]+$/, 'Must contain 6 characters, atleast one uppercase letter'),

    confirmPassword: Yup.string()
        .min(6, 'Confirm Password must be 6 characters.')
        .oneOf([Yup.ref('password')], "Your password do not matched.")
        .required('Confirm password is required')
});

const SignUpScreen = ({ navigation }) => {
    const [secure, setSecure] = useState(true);
    const [secureConfirmPass, setSecureConfirmPass] = useState(true);
    const { register } = useContext(AuthContext);

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}
            validationSchema={loginValidationSchema}
            onSubmit={values => register({ email: (values.email) }, { password: (values.password) })}
        >
            {({ values, errors, touched, handleSubmit, handleChange, isValid, setFieldTouched }) => (
                <ImageBackground source={require('../../Assets/background.jpg')} style={styles.mainContainer}>
                    <View style={styles.innerContainer}>
                        <View style={{ marginTop: 50 }}>
                            <Text style={{ fontSize: 26, color: '#fff', fontWeight: '800' }}>Sign Up</Text>
                        </View>

                        {/* Name Input */}
                        <View style={{ marginTop: 30 }}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                labelValue={values.name}
                                placeholder="Enter your name"
                                keyboardShouldPersistTaps={false}
                                onChangeText={handleChange('name')}
                                onBlur={() => setFieldTouched('name')}
                                style={styles.emailInput}
                            />
                            {touched.name && errors.name && (<Text style={{ color: 'red', fontWeight: '800' }}>{errors.name}</Text>)}

                        </View>

                        {/* Email Input */}
                        <View style={{ marginTop: 15, }}>
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

                        {/* Password Input */}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={secure ? true : false}
                                labelValue={values.password}
                                placeholder="Password"
                                keyboardShouldPersistTaps={false}
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
                        {touched.password && errors.password && (<Text style={{ color: 'red', fontWeight: '800' }}>{errors.password}</Text>)}

                        {/* Confirm Password Input */}
                        <View style={styles.passwordContainer}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={secureConfirmPass ? true : false}
                                labelValue={values.confirmPassword}
                                placeholder="Confirm Password"
                                keyboardShouldPersistTaps={false}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={() => setFieldTouched('confirmPassword')}
                                style={styles.passwordInput}
                            />

                            <View style={styles.eyeIcon}>
                                <TouchableOpacity onPress={() => setSecureConfirmPass(!secureConfirmPass)} >
                                    {secureConfirmPass ?
                                        <Ionicons name="md-eye-off-outline" size={20} />
                                        :
                                        <Ionicons name="md-eye-outline" size={20} />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Show error If password not matched */}
                        {touched.confirmPassword && errors.confirmPassword && (<Text style={{ color: 'red', fontWeight: '800' }}>{errors.confirmPassword}</Text>)}


                        {/* Sign up button */}
                        <TouchableOpacity
                            onPress={handleSubmit}
                            disabled={!isValid}
                            style={[styles.signInButton, { opacity: isValid ? 1 : 0.6 }]}>
                            {/* <ActivityIndicator size={20} color={'#fff'} /> */}
                            <Text style={{ color: '#fff', fontWeight: '700' }}>Sign Up</Text>
                        </TouchableOpacity>

                        {/* Already have account Login In */}
                        <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                            <Text style={{ color: '#fff', fontWeight: '700', marginRight: 5 }}>
                                Already on App?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                                <Text style={{ color: 'red', fontWeight: '700', textDecorationLine: 'underline', }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            )}
        </Formik>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', height: '100%', width: '100%'
    },
    innerContainer: {
        height: 520,
        width: 300,
        backgroundColor: '#222',
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: 'rgba(0,0,0,0.6)',
        // padding: 40,
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
        backgroundColor: 'red',
        marginVertical: 20,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    }
});
