// src/pages/home/GettingStarted.tsx
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Layout, Flex, Button, Card, Modal } from 'antd';
import { Link } from 'react-router-dom';
import styles from './css/GettingStarted.module.css';

const { Header, Content, Footer } = Layout;
// const { Title, Paragraph } = Typography;

interface LayoutComponentProps {
    children: React.ReactNode;
}

// function handleResize(this: Window, ev: UIEvent) {
//     throw new Error("Function not implemented.");
// }

const GettingStarted: React.FC<LayoutComponentProps> = () => {

    const [backgroundImage, setBackgroundImage] = useState('./assets/img/vibrant/background-01-2560x1770.jpeg');

    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let bgImage = '';

            if (width >= 3840) {
                bgImage = './img/vibrant/background-01-3840x2560.jpeg';
            } else if (width >= 2560) {
                bgImage = './img/vibrant/background-01-2560x1770.jpeg';
            } else if (width >= 1920) {
                bgImage = './img/vibrant/background-01-1920x1280.jpeg';
            } else if (width >= 1440) {
                bgImage = './img/vibrant/background-01-1440x960.jpeg';
            } else if (width >= 1366) {
                bgImage = './img/vibrant/background-01-1366x900.jpeg';
            } else if (width >= 1024) {
                bgImage = './img/vibrant/background-01-1024.jpeg';
            } else if (width >= 768) {
                bgImage = './img/vibrant/background-01-768.jpeg';
            } else if (width >= 576) {
                bgImage = './img/vibrant/background-01-576.jpeg';
            } else if (width >= 414) {
                bgImage = './img/vibrant/background-01-414.jpeg';
            } else if (width >= 390) {
                bgImage = './img/vibrant/background-01-390.jpeg';
            } else {
                bgImage = './img/vibrant/background-01-1440x960.jpeg';
            }

            setBackgroundImage(bgImage);
            console.log('backgroundImage:', backgroundImage);
        };

        handleResize(); // Set initial background image
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Layout className={styles.layout} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header className={styles.header}>ברוכים הבאים לאפליקציה שלנו</Header>
            <Content className={styles.content}>
                <Card className={styles.card}>
                    <Flex gap="small" vertical>
                        <Flex wrap gap="small">
                            {/* Your content goes here */}
                            <div className={styles.buttonContainer}>
                                <Link to="/social-data">
                                    <Button type="primary" size="large" className={styles.button}>
                                        כניסה
                                    </Button>
                                </Link>
                                <Button type="primary" size="large" className={styles.button} onClick={showModal}>
                                    מהו הסימולטור שלנו
                                </Button>
                            </div>
                        </Flex>
                    </Flex>
                </Card>
            </Content>
            <Footer className={styles.footer}>
                ©2024 NextVision
            </Footer>
            <Modal
                title="מהו הסימולטור שלנו"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="אישור"
                cancelText="ביטול"
            >
                <p>
                    הסימולטור שלנו נועד לספק לך כלי ידידותי להבנת מצבך הכלכלי ולתכנון פיננסי עתידי.
                    בעזרת הסימולטור תוכל להזין הכנסות והוצאות נוכחיות ועתידיות,
                    ולראות את ההשפעה של התרחישים השונים על מצבך הכלכלי הכולל.
                </p>
                <p>
                    הסימולטור מתוכנן בצורה קלה לשימוש, ומאפשר לך להזין נתונים אישיים
                    ולראות תחזיות כלכליות בהתבסס על אותם נתונים. המטרה שלנו היא
                    לסייע לך בקבלת החלטות פיננסיות מושכלות ולהתכונן לעתיד טוב יותר.
                </p>
            </Modal>
        </Layout>
    );
};

export default GettingStarted;