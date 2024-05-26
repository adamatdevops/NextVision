// src/pages/economicSim/AccountBalance.tsx

import React from 'react';
import { useGlobalState } from '../../context';

const AccountBalance = () => {
    const { state } = useGlobalState();

    return (
        <div style={{ textAlign: 'right' }}>
            <h1>סיכום חשבון</h1>
            <p>יתרה נוכחית: ${state.accountStatus.balance}</p>
            <p>סה"כ הכנסות: ${state.accountStatus.totalIncome}</p>
            <p>סה"כ הוצאות: ${state.accountStatus.totalExpenses}</p>
            {/* Add functionality to edit financial details */}
        </div>
    );
};

export default AccountBalance;
