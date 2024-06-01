/* ./src/pages/economicSim/CurrentBalance.tsx */
import React, { useState, useEffect } from 'react';
import { Card, Typography, Row, Col } from 'antd';
import styles from './css/AccountBalance.module.css';


const { Title } = Typography;

const CurrentBalance: React.FC<{ incomes: number[], expenses: number[] }> = ({ incomes, expenses }) => {
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
        <Row gutter={16} className={styles.totalCurrentBalance}>
            <Col span={8}>
                <Card className={styles.incomeAmount}>
                    <Title level={4}>סה"כ הכנסות</Title>
                    <p>{incomeTotal} ש"ח</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card className={styles.totalBalance}>
                    <Title level={4}>סה"כ יתרה</Title>
                    <p>{balanceTotal} ש"ח</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card className={styles.expensesAmount}>
                    <Title level={4}>סה"כ הוצאות</Title>
                    <p>{expenseTotal} ש"ח</p>
                </Card>
            </Col>
        </Row>
    );
};

export default CurrentBalance;
