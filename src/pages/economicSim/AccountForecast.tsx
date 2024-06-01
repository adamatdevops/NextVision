/* src/pages/economicSim/AccountForecast.tsx */
import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import CurrentIncomes from './CurrentIncomes';
import CurrentExpenses from './CurrentExpenses';
import CurrentBalance from './CurrentBalance';
import styles from './css/AccountBalance.module.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const AccountBalance: React.FC = () => {
    const [incomes, setIncomes] = useState<number[]>([]);
    const [expenses, setExpenses] = useState<number[]>([]);

    return (
        <Layout className={styles.layout}>
            <Card title="קיבוץ מתחדש">
                <Content className={styles.content}>
                    <Row gutter={28}>
                        <Col span={6}>
                            <CurrentIncomes setIncomes={setIncomes} />
                        </Col>
                        <Col span={6}>
                            <CurrentExpenses setExpenses={setExpenses} />
                        </Col>
                        <Col span={6}>
                            <CurrentIncomes setIncomes={setIncomes} />
                        </Col>
                        <Col span={6}>
                            <CurrentExpenses setExpenses={setExpenses} />
                        </Col>
                    </Row>
                    <CurrentBalance incomes={incomes} expenses={expenses} />
                </Content>
            </Card>
            <StepsBar />
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

export default AccountBalance;
