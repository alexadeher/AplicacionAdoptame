import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const AdopterHomeScreen = ({ navigation }) => {
    const [mascotas, setMascotas] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        fetchMascotas();
    }, []);

    const fetchMascotas = async () => {
        try {
            const dogRes = await fetch("https://dog.ceo/api/breeds/image/random");
            const catRes = await fetch("https://api.thecatapi.com/v1/images/search");
            const dogData = await dogRes.json();
            const catData = await catRes.json();

            setMascotas([
                { id: 1, nombre: "Firulais", tipo: "Perro", raza: "Labrador", imagen: dogData.message },
                { id: 2, nombre: "Michito", tipo: "Gato", raza: "Siames", imagen: catData[0].url },
            ]);
        } catch (error) {
        console.error("Error al obtener mascotas", error);
        }
    };

    const agregarAFavoritos = (mascota) => {
        setFavoritos([...favoritos, mascota]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mascotas Disponibles</Text>
            <TextInput
                style={styles.input}
                placeholder="Filtrar por raza o tamaño"
                value={filtro}
                onChangeText={setFiltro}
            />
            <FlatList
                data={mascotas.filter((m) => m.raza.includes(filtro))}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.imagen }} style={styles.image} />
                    <Text>{item.nombre} ({item.raza})</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detalles", { mascota: item })}>
                        <Text style={styles.buttonText}>Ver Detalles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFav} onPress={() => agregarAFavoritos(item)}>
                        <Text style={styles.buttonText}>Agregar a Favoritos</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: "#f5f5f5" 
    },
    title: { 
        fontSize: 24, 
        color: "#FFA62B",
        fontWeight: "bold", 
        marginBottom: 10 
    },
    card: { 
        padding: 10, 
        backgroundColor: "#FFFFFF", 
        marginVertical: 5, 
        borderRadius: 5, 
        alignItems: "center" 
    },
    image: { 
        width: 100, 
        height: 100, 
        borderRadius: 10 
    },
    input: { 
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        marginVertical: 8,
        fontSize: 16,
        color: "#333",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
    },
    button: { 
        marginTop: 10, 
        backgroundColor: "#16697A", 
        padding: 10, 
        borderRadius: 5, 
        alignItems: "center", 
        width: "80%" 
    },
    buttonFav: { 
        marginTop: 10, 
        backgroundColor: "#FFAE3E", 
        padding: 10, 
        borderRadius: 5, 
        alignItems: "center", 
        width: "80%" 
    },
    buttonText: { 
        color: "#FFFFFF", 
        fontWeight: "bold" 
    },
});

export default AdopterHomeScreen;
