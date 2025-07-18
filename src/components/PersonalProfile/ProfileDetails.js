import React, { useState } from 'react';
import './ProfileDetails.css';

const ProfileDetails = () => {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    return (
        <div className="profile-container">
            <h2>Profile Details</h2>
            
            {/* Profile Picture */}
            <div className="profile-pic-section">
                <img
                    src="https://via.placeholder.com/100" // Replace with user image if available
                    alt="Profile"
                    className="profile-pic"
                />
                <button className="upload-btn">Upload Picture</button>
            </div>

            {/* Profile Form */}
            <form className="profile-form">
                <input 
                    type="text" 
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input 
                    type="email" 
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input 
                    type="tel" 
                    name="phone"
                    value={details.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
            </form>
        </div>
    );
};

export default ProfileDetails;
