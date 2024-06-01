// src/pages/home/GettingStarted.tsx
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Layout, Flex, Button } from 'antd';
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
    // const navigate = useNavigate();

    // const handleGetStarted = () => {
    //     navigate('/home');
    // };

    const [backgroundImage, setBackgroundImage] = useState(
        './assets/img/gettingStarted/desktop/desktop-tractor-1920.jpeg'
    );

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let bgImage = '';

            if (width >= 3840) {
                bgImage = './assets/img/gettingStarted/desktop/desktop-tractor-3840.jpeg';
            } else if (width >= 2560) {
                bgImage = './assets/img/gettingStarted/desktop/desktop-tractor-2560.jpeg';
            } else if (width >= 1920) {
                bgImage = './assets/img/gettingStarted/desktop/desktop-tractor-1920.jpeg';
            } else if (width >= 1440) {
                bgImage = './assets/img/gettingStarted/desktop/desktop-tractor-1440.jpeg';
            } else if (width >= 1366) {
                bgImage = './assets/img/gettingStarted/desktop/desktop-tractor-1366.jpeg';
            } else if (width >= 1024) {
                bgImage = './assets/img/gettingStarted/tablet/tablet-tractor-1024.jpeg';
            } else if (width >= 768) {
                bgImage = './assets/img/gettingStarted/tablet/tablet-tractor-800.jpeg';
            } else if (width >= 576) {
                bgImage = './assets/img/gettingStarted/tablet/tablet-tractor-800.jpeg';
            } else if (width >= 414) {
                bgImage = './assets/img/gettingStarted/mobile/mobile-tractor-414.jpeg';
            } else if (width >= 390) {
                bgImage = './assets/img/gettingStarted/mobile/mobile-tractor-390.jpeg';
            } else {
                bgImage = './assets/img/gettingStarted/mobile/mobile-tractor-375.jpeg';
            }

            setBackgroundImage(bgImage);
        };

        handleResize(); // Set initial background image
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout className={styles.layout} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header className={styles.header}>ברוכים הבאים לאפליקציה שלנו</Header>
            <Content className={styles.content}>
                <Flex gap="small" vertical>
                    <Flex wrap gap="small">
                        {/* Your content goes here */}
                        <Link to="/social-data">
                            <Button type="primary" size="large">
                                בוא נתחיל
                            </Button>
                            <Button type="primary" size="large">
                                מהו הסימולטור שלנו
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Content>
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

export default GettingStarted;