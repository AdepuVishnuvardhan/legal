import React from 'react';
import ProfileDetails from '../components/PersonalProfile/ProfileDetails';
import LegalProperties from '../components/PersonalProfile/LegalProperties';

const PersonalProfile = () => {
    return (
        <div>
            <h1>Personal Profile</h1>
            <ProfileDetails />
            <LegalProperties />
        </div>
    );
};

export default PersonalProfile;
