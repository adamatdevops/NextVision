// src/pages/socialSim/SocialSimulator.tsx
import React from 'react';
import { Layout, Form, Input, Button, Select, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import styles from './css/SocialSimulator.module.css';
import withStepper from '../../components/ui/layouts/withStepper'; /* apply this HOC to each page that requires the vertical stepper */

const { Header, Content, Footer } = Layout;
const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const SocialSimulator: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>ברוכים הבאים לעמוד הבית שלנו</Header>
            <Content className={styles.content}>
                <h1>עמוד הבית</h1>
                <Form
                    form={form}
                    name="SocialSimulatorForm"
                    layout="vertical"
                    onFinish={onFinish}
                    className={styles.form}
                >
                    {/* Text Field */}
                    <Form.Item
                        name="username"
                        label="שם משתמש"
                        rules={[{ required: true, message: 'נא להזין שם משתמש' }]}
                    >
                        <Input placeholder="הזן שם משתמש" />
                    </Form.Item>

                    {/* Dropdown Option */}
                    <Form.Item
                        name="Social Status"
                        label="סטטוס"
                        rules={[{ required: true, message: 'נא לבחור סוג חשבון' }]}
                    >
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            defaultValue="חבר"
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            onChange={handleChange}
                            options={[
                                {
                                    label: <span>חברות</span>,
                                    title: 'חברות',
                                    options: [
                                        { label: <span>חבר</span>, value: 'חבר' },
                                        { label: <span>חברה</span>, value: 'חברה' },
                                    ],
                                },
                                {
                                    label: <span>תושבות</span>,
                                    title: 'תושבות',
                                    options: [
                                        { label: <span>תושב</span>, value: 'תושב' },
                                        { label: <span>תושבת</span>, value: 'תושבת' },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>

                    {/* Integer Input */}
                    <Form.Item
                        name="initialBalance"
                        label="יתרה התחלתית"
                        rules={[{ required: true, message: 'נא להזין יתרה התחלתית' }]}
                    >
                        <Input type="number" placeholder="הזן יתרה התחלתית" />
                    </Form.Item>

                    {/* Date Picker */}
                    <Form.Item
                        name="date"
                        label="תאריך"
                        rules={[{ required: true, message: 'נא לבחור תאריך' }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            שלח
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

export default withStepper(SocialSimulator);
