import React, { useState } from 'react';
import './LegalProperties.css';
const LegalProperties = () => {
    const [properties, setProperties] = useState([]);

    const handleAddProperty = () => {
        const property = prompt("Enter legal property details:");
        if (property) {
            setProperties([...properties, property]);
        }
    };

    return (
        <div>
            <h2>Legal Properties</h2>
            <button onClick={handleAddProperty}>Add Property</button>
            <ul>
                {properties.map((property, index) => (
                    <li key={index}>{property}</li>
                ))}
            </ul>
        </div>
    );
};

export default LegalProperties;
