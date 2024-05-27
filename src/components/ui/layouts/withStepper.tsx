/* To integrate the vertical stepper into each page without using a shared layout component, we can create a higher-order component(HOC) that will wrap around the content of each page where the stepper is required */

import React from 'react';
import { Layout } from 'antd';
import VerticalStepper from '../proggress/VerticalStepper';
import styles from './css/withStepper.module.css';

const { Header, Content, Footer, Sider } = Layout;

const withStepper = (WrappedComponent: React.FC) => {
    return (props: any) => (
        <Layout className={styles.layout}>
            <Sider width={200} className={styles.sider}>
                <VerticalStepper />
            </Sider>
            <Layout>
                <Header className={styles.header}>האפליקציה שלנו</Header>
                <Content className={styles.content}>
                    <WrappedComponent {...props} />
                </Content>
                <Footer className={styles.footer}>
                    ©2023 האפליקציה שלנו
                </Footer>
            </Layout>
        </Layout>
    );
};

export default withStepper;
