import React, { useState } from "react";
import { View, Text, FlatList, Image, Button, StyleSheet } from "react-native";

const AdopterHighlightScreen = () => {
  const [favoritos, setFavoritos] = useState([]);

  const eliminarDeFavoritos = (id) => {
    setFavoritos(favoritos.filter((mascota) => mascota.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mascotas Favoritas</Text>
      {favoritos.length === 0 ? (
        <Text>No tienes mascotas favoritas aún.</Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.image} />
              <Text>{item.nombre} ({item.raza})</Text>
              <Button title="Eliminar" onPress={() => eliminarDeFavoritos(item.id)} color="red" />
            </View>
          )}
        />
      )}
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
});

export default AdopterHighlightScreen;
