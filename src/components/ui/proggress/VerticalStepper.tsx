import React from 'react';
import { Steps } from 'antd';
import { useLocation } from 'react-router-dom';
import styles from './css/VerticalStepper.module.css';

const { Step } = Steps;

const VerticalStepper: React.FC = () => {
    const location = useLocation();

    const currentStep = () => {
        switch (location.pathname) {
            case '/home/social-data':
                return 0;
            case '/home/account-balance':
                return 1;
            default:
                return 0;
        }
    };

    return (
        <div className={styles.stepper}>
            <Steps direction="vertical" current={currentStep()}>
                <Step title="נתונים חברתיים" description="הזן נתונים חברתיים" />
                <Step title="מאזן חשבון" description="בדוק את מאזן החשבון" />
            </Steps>
        </div>
    );
};

export default VerticalStepper;
