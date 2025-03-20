import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const AdopterDetailsScreen = ({ route, navigation }) => {
    const { mascota } = route.params;

    const handleAdoptar = () => {
        alert(`Solicitud de adopción enviada para ${mascota.nombre}`);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: mascota.imagen }} style={styles.image} />
            <Text style={styles.title}>{mascota.nombre}</Text>
            <Text style={styles.subtitle}>Raza: {mascota.raza}</Text>
            <Text style={styles.subtitle}>Tipo: {mascota.tipo}</Text>
            <TouchableOpacity style={styles.button} onPress={handleAdoptar}>
                <Text style={styles.buttonText}>Adoptar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: "center", 
        padding: 20 
    },
    image: { 
        width: 200, 
        height: 200, 
        borderRadius: 10, 
        marginBottom: 10 
    },
    title: { 
        fontSize: 24, 
        fontWeight: "bold",
        color: "#FFA62B" 
    },
    subtitle: { 
        fontSize: 18, 
        marginBottom: 10 
    },
    button: { 
        marginTop: 10, 
        backgroundColor: "#16697A", 
        padding: 12, 
        borderRadius: 5, 
        alignItems: "center", 
        width: "80%" 
    },
    buttonText: { 
        color: "#FFFFFF", 
        fontSize: 18, 
        fontWeight: "bold", 
        textAlign: "center" 
    },
});

export default AdopterDetailsScreen;
