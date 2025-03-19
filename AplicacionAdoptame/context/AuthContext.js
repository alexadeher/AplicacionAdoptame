import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = async (email, password) => {
        try {
            const response = await axios.post("https://reqres.in/api/login", {
                email,
                password,
            });
            if (response.data.token) {
                let role = "user";
                // Identificar al administrador
                if (email === "charles.morris@reqres.in" && password === "secret") {
                    role = "admin"; 
                }
                setUser({ email, token: response.data.token, role });
            } else {
                throw new Error("No se recibió el token de autenticación.");
            }
        } catch (error) {
            console.error("Error al iniciar sesión: ", error); 
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    };
    
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
