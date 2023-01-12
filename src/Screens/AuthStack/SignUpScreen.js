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
} from 'react-native';

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

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true)
    const [error, setError] = useState('');

    const { register } = useContext(AuthContext)

    const handleLogin = () => {
        if (password.length < 4) {
            setError('Password length must be 5 and above')
        }
        else {
            register(email, password)
        }
    }

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
                            <Text style={{ fontSize: 26, color: '#fff', fontWeight: '800' }}>Sign Up</Text>
                        </View>

                        <View style={{ marginTop: 40 }}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                labelValue={email}
                                placeholder="Email or Phone Number"
                                keyboardShouldPersistTaps={false}
                                value={email}
                                onChangeText={(e) => {
                                    setEmail(e)
                                }}
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
                                style={styles.passwordInput}
                                value={password}
                                onChangeText={e => setPassword(e)}
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

                        {/* Sign up button */}
                        {email == "" && password == "" ?
                            <TouchableOpacity activeOpacity={0.5} style={[styles.signInButton, { backgroundColor: 'red', opacity: 0.5 }]}>
                                <Text style={{ color: '#fff', fontWeight: '700' }}>Sign Up</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={() => handleLogin()}
                                style={styles.signInButton}>
                                <Text style={{ color: '#fff', fontWeight: '700' }}>Sign Up</Text>
                            </TouchableOpacity>}

                        {/* Already have account Login In */}
                        <View style={{ marginVertical: 20, flexDirection: 'row' }}>
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
        height: 500,
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
