import react, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    console.log('email>>>>>>>>>>>>>>>>>>', email.email)
                    console.log('passsss>>>>>>>>>>>>>>>>>>', password.password)
                    try {
                        await auth().signInWithEmailAndPassword(email.email, password.password)
                    } catch (e) {
                        console.log(e)
                    }
                },
                register: async (email, password) => {
                    let userEmail = email.email;
                    let userPassword = password.password;
                    try {
                        await auth().createUserWithEmailAndPassword(userEmail, userPassword)
                    } catch (e) {
                        console.log(e)
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (e) {
                        console.log(e)
                    }
                }
            }}
        >
            {children}

        </AuthContext.Provider>
    )
}