import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import CustomAppBar from "../components/CustomAppBar";
import AdopterHomeScreen from "../screens/AdopterHomeScreen";
import AdopterDetailsScreen from "../screens/AdopterDetailsScreen";
import AdopterHighlightScreen from "../screens/AdopterHighlightScreen";
import AdopterProfileScreen from "../screens/AdopterProfileScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Inicio y Detalles
function AdopterStack() {
    return (
        <Stack.Navigator
        screenOptions={({ route }) => ({
            header: ({ navigation }) => (
            <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Inicio"} />
            ),
        })}
        >
        <Stack.Screen name="Inicio" component={AdopterHomeScreen} />
        <Stack.Screen name="Detalles" component={AdopterDetailsScreen} />
        </Stack.Navigator>
    );
    }

// Favoritos
function HighlightStack() {
    return (
        <Stack.Navigator
        screenOptions={({ route }) => ({
            header: ({ navigation }) => (
            <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Favoritos"} />
            ),
        })}
        >
        <Stack.Screen name="Favoritos" component={AdopterHighlightScreen} />
        </Stack.Navigator>
    );
}

// Perfil
function ProfileStack() {
    return (
        <Stack.Navigator
        screenOptions={({ route }) => ({
            header: ({ navigation }) => (
            <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Perfil"} />
            ),
        })}
        >
        <Stack.Screen name="Perfil" component={AdopterProfileScreen} />
        </Stack.Navigator>
    );
}

// Menú lateral
export default function CustomerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveTintColor: "#82C0CC" }}>
        <Drawer.Screen name="Adopter" component={AdopterStack} options={{ title: "Inicio" }} />
        <Drawer.Screen name="Highlight" component={HighlightStack} options={{ title: "Favoritos" }} />
        <Drawer.Screen name="Profile" component={ProfileStack} options={{ title: "Perfil" }} />
        </Drawer.Navigator>
    );
}
