import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import LoginScreen from "../screens/LoginScreen";
import AdminNavigator from "./AdminNavigator";
import AdopterNavigator from "./AdopterNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
        {user ? (
            user.role === "admin" ? <AdminNavigator /> : <AdopterNavigator />
        ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        )}
    </NavigationContainer>
    );
};

export default function App() {
    return (
        <AuthProvider>
        <MainNavigator />
        </AuthProvider>
    );
}