import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const GeoLocalisation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        error: null
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            error: null // Réinitialiser l'erreur si la géolocalisation réussit
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            coordinates: { lat: "", lng: "" }, // Réinitialiser les coordonnées en cas d'erreur
            error
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocalisation non supportée"
            });
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            
        }
    }, []);

    return location;
};

export default GeoLocalisation;
