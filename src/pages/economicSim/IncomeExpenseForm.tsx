import React, { useState } from 'react';
import { Layout, Card, Typography, Form, InputNumber, Button, Row, Col } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import styles from './css/AccountBalance.module.css';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

interface AccountBalanceProps {
    initialBalance: number;
    initialIncome: number;
    initialExpenses: number;
}

const AccountBalance: React.FC<AccountBalanceProps> = () => {
    const [housingExpenses, setHousingExpenses] = useState<number>(0);
    const [transportationExpenses, setTransportationExpenses] = useState<number>(0);
    const [foodExpenses, setFoodExpenses] = useState<number>(0);
    const [otherExpenses, setOtherExpenses] = useState<number>(0);

    const [salaryIncome, setSalaryIncome] = useState<number>(0);
    const [rentalIncome, setRentalIncome] = useState<number>(0);
    const [investmentIncome, setInvestmentIncome] = useState<number>(0);
    const [otherIncome, setOtherIncome] = useState<number>(0);

    const calculateBalance = () => {
        const totalIncome = salaryIncome + rentalIncome + investmentIncome + otherIncome;
        const totalExpenses = housingExpenses + transportationExpenses + foodExpenses + otherExpenses;
        return totalIncome - totalExpenses;
    };

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <Title level={2}>מאזן חשבון</Title>
            </Header>
            <Content className={styles.content}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card className={styles.card}>
                            <Title level={4}>הכנסות</Title>
                            <IncomeSection onSubmit={setSalaryIncome} title="הכנסה משכורת" />
                            <IncomeSection onSubmit={setRentalIncome} title="הכנסה משכירות" />
                            <IncomeSection onSubmit={setInvestmentIncome} title="הכנסה מהשקעות" />
                            <IncomeSection onSubmit={setOtherIncome} title="הכנסות אחרות" />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className={styles.card}>
                            <Title level={4}>הוצאות</Title>
                            <ExpenseSection onSubmit={setHousingExpenses} title="הוצאות דיור" />
                            <ExpenseSection onSubmit={setTransportationExpenses} title="הוצאות תחבורה" />
                            <ExpenseSection onSubmit={setFoodExpenses} title="הוצאות מזון" />
                            <ExpenseSection onSubmit={setOtherExpenses} title="הוצאות אחרות" />
                        </Card>
                    </Col>
                </Row>
                <Card className={styles.summaryCard}>
                    <Title level={4}>סיכום מאזן</Title>
                    <div className={styles.summaryInfo}>
                        <Text>סה"כ מאזן: <span className={styles.totalBalance}>{calculateBalance()}₪</span></Text>
                    </div>
                </Card>
            </Content>
            <StepsBar />
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

interface IncomeExpenseFormProps {
    onSubmit: (income: number, expenses: number) => void;
}

const IncomeExpenseForm: React.FC<IncomeExpenseFormProps> = ({ onSubmit }) => {
    const [income, setIncome] = useState<number | null>(null);
    const [expenses, setExpenses] = useState<number | null>(null);

    const handleSubmit = () => {
        if (income !== null && expenses !== null) {
            onSubmit(income, expenses);
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <Form layout="vertical">
            <Form.Item label="הכנסה חודשית" required>
                <InputNumber
                    value={income}
                    onChange={setIncome}
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="הכנס הכנסה חודשית"
                />
            </Form.Item>
            <Form.Item label="הוצאות חודשיות" required>
                <InputNumber
                    value={expenses}
                    onChange={setExpenses}
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="הכנס הוצאות חודשיות"
                />
            </Form.Item>
            <Button type="primary" onClick={handleSubmit} block>
                שלח
            </Button>
        </Form>
    );
};

interface SectionProps {
    title: string;
    onSubmit: (value: number) => void;
}

const IncomeSection: React.FC<SectionProps> = ({ title, onSubmit }) => {
    const [value, setValue] = useState<number | null>(null);

    const handleSubmit = () => {
        if (value !== null) {
            onSubmit(value);
        } else {
            alert('Please fill in the field.');
        }
    };

    return (
        <Card className={styles.sectionCard}>
            <Title level={4}>{title}</Title>
            <Form layout="vertical">
                <Form.Item label="סכום">
                    <InputNumber
                        value={value}
                        onChange={setValue}
                        min={0}
                        style={{ width: '100%' }}
                        placeholder="הכנס סכום"
                    />
                </Form.Item>
                <Button type="primary" onClick={handleSubmit} block>
                    עדכן
                </Button>
            </Form>
        </Card>
    );
};

const ExpenseSection: React.FC<SectionProps> = ({ title, onSubmit }) => {
    const [value, setValue] = useState<number | null>(null);

    const handleSubmit = () => {
        if (value !== null) {
            onSubmit(value);
        } else {
            alert('Please fill in the field.');
        }
    };

    return (
        <Card className={styles.sectionCard}>
            <Title level={4}>{title}</Title>
            <Form layout="vertical">
                <Form.Item label="סכום">
                    <InputNumber
                        value={value}
                        onChange={setValue}
                        min={0}
                        style={{ width: '100%' }}
                        placeholder="הכנס סכום"
                    />
                </Form.Item>
                <Button type="primary" onClick={handleSubmit} block>
                    עדכן
                </Button>
            </Form>
        </Card>
    );
};

export default AccountBalance;
