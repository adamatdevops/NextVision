// src/pages/home/Home.tsx
import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './css/Home.module.css';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>ברוכים הבאים לעמוד הבית שלנו</Header>
            <Content className={styles.content}>
                <h1>עמוד הבית</h1>
                <p>תוכן ראשי של עמוד הבית</p>
                <Link to="/anotherPage">
                    <Button type="primary" size="large">
                        מעבר לעמוד הבא
                    </Button>
                </Link>
            </Content>
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

export default Home;
