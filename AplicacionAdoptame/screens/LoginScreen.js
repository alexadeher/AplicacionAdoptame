import { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Feather } from '@expo/vector-icons';

const LoginScreen = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
        resizeMode='cover'>
            <View style={styles.overlay}>
                <Text style={styles.title}>Refugio Feliz</Text>
                <Text style={styles.textInput}>Usuario:</Text>
                <View style={styles.inputContainer}>
                <Feather name='user' style={styles.icon} />
                <TextInput 
                    placeholder='Usuario'
                    autoCapitalize='none'
                    onChangeText={(text) => setUsername(text.trim().toLowerCase())}
                    style={styles.input}
                />
                </View>
                <Text style={styles.textInput}>Contraseña:</Text>
                <View style={styles.inputContainer}>
                    <Feather name='lock' style={styles.icon} />
                    <TextInput 
                        placeholder='Contraseña'
                        secureTextEntry
                        onChangeText={setPassword}
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => login(username, password)}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFA62B',
        marginBottom: 20,
    },
    textInput: {
        color: '#16697A',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        paddingHorizontal: 10,
        width: '100%',
        height: 50,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    icon: {
        fontSize: 22,
        color: '#489FB5',
        marginRight: 10
    },
    button: {
        backgroundColor: '#FFAE3E',
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#EDE7E3',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
