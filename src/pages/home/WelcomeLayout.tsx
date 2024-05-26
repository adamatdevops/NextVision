// import React, { useEffect } from 'react'; 1
// import { Layout } from 'antd'; 2
// import styles from './css/WelcomeLayout.module.css';  3 // Add custom styles for this layout if needed

// const { Header, Footer, Content } = Layout; 4
// const { Title, Paragraph } = Typography;

// interface LayoutComponentProps {
//     children: React.ReactNode;
// } 5

const WelcomeLayout: React.FC<LayoutComponentProps> = ({ children }) => {
    useEffect(() => {
        const setBgImage = () => {
            const width = window.innerWidth;
            let bgImage = '';

            if (width >= 3840) {
                bgImage = '../assets/img/gettingStarted/desktop/desktop-tractor-3840.jpeg';
            } else if (width >= 2560) {
                bgImage = '../assets/img/gettingStarted/desktop/desktop-tractor-2560.jpeg';
            } else if (width >= 1920) {
                bgImage = '../assets/img/gettingStarted/desktop/desktop-tractor-1920.jpeg';
            } else if (width >= 1440) {
                bgImage = '../assets/img/gettingStarted/desktop/desktop-tractor-1440.jpeg';
            } else if (width >= 1366) {
                bgImage = '../assets/img/gettingStarted/desktop/desktop-tractor-1366.jpeg';
            } else if (width >= 1024) {
                bgImage = '../assets/img/gettingStarted/tablet/tablet-tractor-1024.jpeg';
            } else if (width >= 768) {
                bgImage = '../assets/img/gettingStarted/tablet/tablet-tractor-800.jpeg';
            } else if (width >= 576) {
                bgImage = '../assets/img/gettingStarted/tablet/tablet-tractor-800.jpeg';
            } else if (width >= 414) {
                bgImage = '../assets/img/gettingStarted/mobile/mobile-tractor-414.jpeg';
            } else if (width >= 390) {
                bgImage = '../assets/img/gettingStarted/mobile/mobile-tractor-390.jpeg';
            } else {
                bgImage = '../assets/img/gettingStarted/mobile/mobile-tractor-375.jpeg';
            }

            document.querySelector(`.${styles.layout}`)?.setAttribute(
                'style',
                `background-image: url(${bgImage});
                background-size: cover;
                background-position: center;`
            );
        };

        setBgImage();
        window.addEventListener('resize', setBgImage);

        return () => window.removeEventListener('resize', setBgImage);
    }, []);

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                ברוכים הבאים לאפליקציה שלנו
            </Header>
            <Content className={styles.content}>
                {children}
            </Content>
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
        </Layout>
    );
};

export default WelcomeLayout;
