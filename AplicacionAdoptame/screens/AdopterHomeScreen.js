import React, { useEffect, useState } from 'react';
import { api2, api3 } from '../config/api';

const AdopterHomeScreen = ({ navigation }) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await api2.get('/pets');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);
};
export default AdopterHomeScreen;