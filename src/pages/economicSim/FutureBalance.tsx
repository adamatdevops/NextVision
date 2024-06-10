/* ./src/pages/economicSim/FutureBalance.tsx */
import React, { useState, useEffect } from 'react';
import { Card, Typography, Row, Col } from 'antd';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureBalanceProps {
    incomes: number[];
    expenses: number[];
}

// const FutureBalance: React.FC<FutureBalanceProps> = ({ incomes, expenses }) => {
//     const totalIncome = incomes.reduce((acc, income) => acc + income, 0);
//     const totalExpenses = expenses.reduce((acc, expense) => acc + expense, 0);
//     const balance = totalIncome - totalExpenses;
const FutureBalance: React.FC<{ incomes: number[], expenses: number[] }> = ({ incomes, expenses }) => {
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [balanceTotal, setBalanceTotal] = useState(0);

    useEffect(() => {
        const totalIncomes = incomes.reduce((total, income) => total + income, 0);
        const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);
        setIncomeTotal(totalIncomes);
        setExpenseTotal(totalExpenses);
        setBalanceTotal(totalIncomes - totalExpenses);
    }, [incomes, expenses]);

    return (
        // <Card className={styles.card}>
        //     <Title level={4}>מאזן עתידי</Title>
        //     <div className={styles.total}>
        //         <Title level={5}>סה"כ הכנסות: {totalIncome} ש"ח</Title>
        //         <Title level={5}>סה"כ הוצאות: {totalExpenses} ש"ח</Title>
        //         <Title level={5}>יתרה: {balance} ש"ח</Title>
        //     </div>
        // </Card>
        <Row gutter={16} className={styles.totalCurrentBalance}>
            <Col span={8}>
                <Card className={styles.incomeAmount}>
                    <p>סה״כ הכנסות: {incomeTotal} ש"ח</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card className={styles.totalBalance}>
                    <p>סה״כ יתרה: {balanceTotal} ש"ח</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card className={styles.expensesAmount}>
                    <p>סה״כ הוצאות: {expenseTotal} ש"ח</p>
                </Card>
            </Col>
        </Row>
    );
};

export default FutureBalance;
