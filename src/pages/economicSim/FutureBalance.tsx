/* ./src/pages/economicSim/FutureBalance.tsx */
import React from 'react';
import { Card, Typography } from 'antd';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureBalanceProps {
    incomes: number[];
    expenses: number[];
}

const FutureBalance: React.FC<FutureBalanceProps> = ({ incomes, expenses }) => {
    const totalIncome = incomes.reduce((acc, income) => acc + income, 0);
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense, 0);
    const balance = totalIncome - totalExpenses;

    return (
        <Card className={styles.card}>
            <Title level={4}>מאזן עתידי</Title>
            <div className={styles.total}>
                <Title level={5}>סה"כ הכנסות: {totalIncome} ש"ח</Title>
                <Title level={5}>סה"כ הוצאות: {totalExpenses} ש"ח</Title>
                <Title level={5}>יתרה: {balance} ש"ח</Title>
            </div>
        </Card>
    );
};

export default FutureBalance;
