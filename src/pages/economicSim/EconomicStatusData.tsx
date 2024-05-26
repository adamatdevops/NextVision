// src/pages/economicSim/EconomicStatusData.tsx

import React, { useState } from 'react';
import { useGlobalState } from '../../context';

const EconomicStatusData = () => {
    const { state, dispatch } = useGlobalState();
    const [income, setIncome] = useState('');
    const [outcome, setOutcome] = useState('');

    const handleAddIncome = () => {
        dispatch({ type: 'SET_INCOME', payload: [...state.incomes, income] });
        setIncome('');
    };

    const handleAddOutcome = () => {
        dispatch({ type: 'SET_OUTCOME', payload: [...state.outcomes, outcome] });
        setOutcome('');
    };

    return (
        <div style={{ textAlign: 'right' }}>
            <h1>הכנסות והוצאות</h1>
            <div>
                <input
                    type="text"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="הוסף הכנסה"
                />
                <button onClick={handleAddIncome}>הוסף הכנסה</button>
            </div>
            <div>
                <input
                    type="text"
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    placeholder="הוסף הוצאה"
                />
                <button onClick={handleAddOutcome}>הוסף הוצאה</button>
            </div>
            {/* Display incomes and outcomes */}
        </div>
    );
};

export default EconomicStatusData;
