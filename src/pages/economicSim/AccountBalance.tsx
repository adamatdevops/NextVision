/* ./src/pages/economicSim/AccountBalance.tsx */
import React, { useState } from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import CurrentIncomes from './CurrentIncomes';
import CurrentExpenses from './CurrentExpenses';
import FutureIncomes from './FutureIncomes'; // New component for future incomes
import FutureExpenses from './FutureExpenses'; // New component for future expenses
import CurrentBalance from './CurrentBalance';
import FutureBalance from './FutureBalance'; // New component for future balance
import styles from './css/AccountBalance.module.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const AccountBalance: React.FC = () => {
    const [incomes, setIncomes] = useState<number[]>([]);
    const [expenses, setExpenses] = useState<number[]>([]);
    const [futureIncomes, setFutureIncomes] = useState<number[]>([]);
    const [futureExpenses, setFutureExpenses] = useState<number[]>([]);

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>מאזן חשבון</Header>
                {/* <Title level={2}>מאזן חשבון</Title> */}
            <Content className={styles.content}>
                <Row gutter={16}>
                    {/* Current Column */}
                    <Col span={12}>
                        <Row>
                            <Card className={styles.cardAccountBalance}>
                                    <p>מודל שיתופי</p>
                            </Card>
                        </Row>
                        <Row>
                            <Col span={12} className={styles.columnGeneral}>
                                <CurrentIncomes setIncomes={setIncomes} />
                                </Col>
                            <Col span={12} className={styles.columnGeneral}>
                                <CurrentExpenses setExpenses={setExpenses} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <CurrentBalance incomes={incomes} expenses={expenses} />
                            </Col>
                        </Row>
                    </Col>
                    {/* </Card> */}
                    {/* <Card title="מודל מתחדש"> */}
                        {/* Future Column */}
                    <Col span={12}>
                        <Row>
                            <Card className={styles.cardAccountBalance}>
                                <p>מודל מתחדש</p>
                            </Card>
                        </Row>
                        <Row>
                            <Col span={12} className={styles.columnGeneral}>
                                <FutureIncomes setIncomes={setFutureIncomes}/>
                            </Col >
                            <Col span={12} className={styles.columnGeneral}>
                                <FutureExpenses setExpenses={setFutureExpenses} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FutureBalance incomes={futureIncomes} expenses={futureExpenses} />
                            </Col>
                        </Row>
                    </Col>
                    {/* </Card> */}
                </Row>
            </Content>
            <StepsBar />
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

export default AccountBalance;