/* ./src/pages/logout/ReviewAndLogout.tsx */
import React, {useState} from 'react';
import { Layout, Row, Col, Typography, Button, Modal } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import DynamicLayout from '../../components/ui/layouts/DynamicBackgroundLayout';
import styles from './css/ReviewAndLogout.module.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const ReviewAndLogout: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleLogout = () => {
        // Implement one of the logout options
        // Redirect to the home page
        // window.location.href = '/';

        // Redirect to "google.com"
        // window.location.href = 'https://www.google.com';

        // Close the active tab
        window.close();
    };

    return (
        <DynamicLayout className={styles.layout}>
            <Header className={styles.header}>
                <Title level={3} className={styles.title}>סקירה וסיום</Title>
            </Header>
            <Content className={styles.content}>
                <Row justify="center" gutter={16}>
                    <Col>
                        <Button type="primary" onClick={showModal}>סקירה כללית</Button>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={handleLogout}>יציאה</Button>
                    </Col>
                </Row>
                <Modal title="Review Summary" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>תוכן הסקירה יופיע כאן.</p>
                </Modal>
            </Content>
            <StepsBar />
            <Footer className={styles.footer}>
                ©2024 NextVision
            </Footer>
        </DynamicLayout>
    );
};

export default ReviewAndLogout;
