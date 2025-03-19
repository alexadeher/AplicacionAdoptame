import React, { useContext, useEffect, useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const AdminProfileScreen = () => {
    const { logout } = useContext(AuthContext);
    const { theme, toggleTheme } = useTheme();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://reqres.in/api/users/5')
        .then((response) => response.json())
        .then((data) => {
            setUser(data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error al obtener el usuario:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
        <View style={[styles.loadingContainer, { backgroundColor: theme.background }]}>
            <ActivityIndicator size='large' color={theme.buttonBackground} />
            <Text style={{ color: theme.textColor }}>Cargando perfil...</Text>
        </View>
        );
    }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={styles.title}>Usuario</Text>
                <TouchableOpacity onPress={toggleTheme}>
                    <Feather name="moon" size={24} color={theme.textColor} />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: user.avatar }} style={styles.profileImage} />
            <View style={styles.form}>
                <Text style={[styles.textInput, { color: theme.textColor }]}>Nombre:</Text>
                <View style={styles.inputContainer}>
                    <Feather name='user' style={styles.icon} />
                    <TextInput value={user.first_name} editable={false} style={styles.input}/>
                </View>
                <Text style={[styles.textInput, { color: theme.textColor }]}>Apellido:</Text>
                <View style={styles.inputContainer}>
                    <Feather name='user' style={styles.icon} />
                    <TextInput value={user.last_name} editable={false} style={styles.input}/>
                </View>
                <Text style={[styles.textInput, { color: theme.textColor }]}>Correo:</Text>
                <View style={styles.inputContainer}>
                    <Feather name='mail' style={styles.icon} />
                    <TextInput value={user.email} editable={false} keyboardType='email-address' style={styles.input}/>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
      flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4A306D'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  form: {
    width: '90%',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  textInput: {
    color: '#1D3042',
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5,
    paddingLeft: 5,
  },
  icon: {
    fontSize: 22,
    color: '#BA92B9',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E8D7F1',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#764C89',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default AdminProfileScreen;
