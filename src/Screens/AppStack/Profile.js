import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik';

const loginValidationSchema = object({
    // age: number().required().positive().integer(),
    email: string().email("Please enter valid email").required('Email Address is required'),
    password: string().min(5, ({ min }) => `Password musty be at least ${min} characters`)
        .required('Password is required'),
});

const Profile = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        // onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Email or Phone Number"
                        keyboardShouldPersistTaps={false}
                        onChangeText={(e) => setEmail(e)}
                        style={styles.emailInput}
                    />
                    <TextInput
                        // autoCapitalize="none"
                        // autoCorrect={false}
                        labelValue={password}
                        // secureTextEntry={secure ? true : false}
                        placeholder="Password"
                        onChangeText={e => setPassword(e)}
                        style={styles.passwordInput}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
}

export default Profile

const styles = StyleSheet.create({
    emailInput: {
        backgroundColor: '#fff',
        width: "100%",
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    passwordInput: {
        backgroundColor: '#fff',
        width: "100%",
        marginTop: 15,
        height: 40,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingHorizontal: 10,
    },
})
