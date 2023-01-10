import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, Text, View } from "react-native";

import { checkVerification } from "./Verify";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";

const Otp = ({ route, }) => {
    const navigation = useNavigation()
    const { phoneNumber } = route.params;
    const [invalidCode, setInvalidCode] = useState(false);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.prompt}>Enter the code we sent you</Text>
            <Text style={styles.message}>
                {`Your phone (${phoneNumber}) will be used to protect your account each time you log in.`}
            </Text>
            <Button
                title="Edit Phone Number"
                onPress={() => navigation.replace("PhoneNumber")}
            />
            <OTPInputView
                style={{ width: "80%", height: 200 }}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                    checkVerification(phoneNumber, code).then((success) => {
                        if (!success) setInvalidCode(true);
                        success && navigation.replace("Gated");
                    });
                }}
            />
            {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    borderStyleBase: {
        width: 30,
        height: 45,
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        backgroundColor: "red",
        width: 30,
        height: 45,
        borderWidth: 1,
        borderBottomWidth: 1,
        color: "black",
        fontSize: 20,
    },

    underlineStyleHighLighted: {
        backgroundColor: "blue",
        borderColor: "#03DAC6",
        borderWidth: 1
    },

    prompt: {
        fontSize: 24,
        paddingHorizontal: 30,
        paddingBottom: 20,
    },

    message: {
        fontSize: 16,
        paddingHorizontal: 30,
    },

    error: {
        color: "red",
    },
});

export default Otp;
