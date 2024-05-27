// src/pages/home/Home.tsx
import React from 'react';
import { Layout, Form, Input, Button, Select, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import styles from './css/Home.module.css';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const Home: React.FC = () => {
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
                    name="homeForm"
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
                        name="accountType"
                        label="סוג חשבון"
                        rules={[{ required: true, message: 'נא לבחור סוג חשבון' }]}
                    >
                        <Select placeholder="בחר סוג חשבון">
                            <Option value="personal">אישי</Option>
                            <Option value="business">עסקי</Option>
                        </Select>
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

export default Home;
