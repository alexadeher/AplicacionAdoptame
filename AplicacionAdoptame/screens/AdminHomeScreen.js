import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const AdminHomeScreen = () => {
    const [mascotas, setMascotas] = useState([]);
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("Perro");
    const [imagen, setImagen] = useState("");

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
                { id: 1, nombre: "Firulais", tipo: "Perro", imagen: dogData.message },
                { id: 2, nombre: "Michito", tipo: "Gato", imagen: catData[0].url },
            ]);
        } catch (error) {
            console.error("Error al obtener mascotas", error);
        }
    };

    const agregarMascota = () => {
        if (!nombre || !imagen) return;
        const nuevaMascota = { id: Date.now(), nombre, tipo, imagen };
        setMascotas([...mascotas, nuevaMascota]);
        setNombre("");
        setImagen("");
    };

    const eliminarMascota = (id) => {
        setMascotas(mascotas.filter((mascota) => mascota.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Mascotas</Text>
            <FlatList
                data={mascotas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.imagen }} style={styles.image} />
                    <Text>{item.nombre} ({item.tipo})</Text>
                    <TouchableOpacity style={styles.buttonDelete} onPress={() => eliminarMascota(item.id)}>
                        <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
                )}
            />
            <Text style={styles.subtitle}>Agregar nueva mascota</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la mascota"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="URL de imagen"
                value={imagen}
                onChangeText={setImagen}
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={agregarMascota}>
                <Text style={styles.buttonText}>Agregar Mascota</Text>
            </TouchableOpacity>
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
        borderRadius: 5 
    },
    image: { 
        width: 100, 
        height: 100, 
        borderRadius: 10 
    },
    subtitle: { 
        fontSize: 22, 
        color: "#82C0CC",
        fontWeight: "bold", 
        marginBottom: 10 
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
    buttonAdd: { 
        marginTop: 10, 
        backgroundColor: "#FFAE3E", 
        padding: 10, 
        borderRadius: 5, 
        alignItems: "center" 
    },
    buttonDelete: { 
        marginTop: 10, 
        backgroundColor: "#16697A", 
        padding: 10, 
        borderRadius: 5, 
        alignItems: "center" 
    },
    buttonText: { 
        color: "#FFFFFF", 
        fontWeight: "bold" 
    },
});

export default AdminHomeScreen;
