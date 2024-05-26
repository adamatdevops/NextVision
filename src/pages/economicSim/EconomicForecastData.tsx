// src/pages/economicSim/EconomicForecastData.tsx

import React from 'react';
import { useGlobalState } from '../../context';

const EconomicForecastData = () => {
    const { state } = useGlobalState();

    // Simulate future scenario based on state data

    return (
        <div style={{ textAlign: 'right' }}>
            <h1>תסריט עתידי</h1>
            {/* Display future account predictions */}
        </div>
    );
};

export default EconomicForecastData;
