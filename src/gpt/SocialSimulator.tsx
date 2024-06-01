import React, { useState } from 'react';
import { Layout, Form } from 'antd';
import MemberStatus from '../components/MemberStatus';
import PartnerCommunityStatus from '../components/PartnerCommunityStatus';
import ChildrenSelect from '../components/ChildrenSelect';
import NumberOfChildrenSelect from '../components/NumberOfChildrenSelect';
import ChildrenStatusTable from '../components/ChildrenStatusTable';
import StepsBar from '../components/ui/StepsBar';
import Seniority from '../components/Seniority';
import ApartmentSquareFootage from '../components/ApartmentSquareFootage';
import styles from './SocialSimulator.module.css';

const { Header, Content, Footer } = Layout;

const SocialSimulator: React.FC = () => {
    const [familyStatus, setFamilyStatus] = useState<string | null>(null);
    const [partnerCommunityStatus, setPartnerCommunityStatus] = useState<string | null>(null);
    const [hasChildren, setHasChildren] = useState<string | null>(null);
    const [numberOfChildren, setNumberOfChildren] = useState<number | null>(null);

    const handleFamilyStatusChange = (status: string | null) => {
        setFamilyStatus(status);
    };

    const handlePartnerCommunityStatusChange = (status: string | null) => {
        setPartnerCommunityStatus(status);
    };

    const handleChildrenChange = (value: string) => {
        setHasChildren(value);
    };

    const handleNumberOfChildrenChange = (value: number) => {
        setNumberOfChildren(value);
    };

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>האפליקציה שלנו</Header>
            <Content className={styles.content}>
                <h1>נתונים חברתיים</h1>
                <Form layout="vertical" className={styles.form}>
                    <div className={styles.formRow}>
                        <MemberStatus onStatusChange={handleFamilyStatusChange} />
                        <Seniority onSeniorityChange={() => { }} label="ותק" />
                        <ApartmentSquareFootage onSquareFootageChange={() => { }} />
                    </div>
                    {familyStatus === 'married' && (
                        <div className={styles.formRow}>
                            <PartnerCommunityStatus onStatusChange={handlePartnerCommunityStatusChange} />
                            <div className={styles.partnerSeniorityWrapper}>
                                <Seniority
                                    onSeniorityChange={() => { }}
                                    label="ותק של השותף"
                                    disabled={partnerCommunityStatus !== 'community-member'}
                                />
                            </div>
                        </div>
                    )}
                    <ChildrenSelect onChildrenChange={handleChildrenChange} />
                    {hasChildren === 'yes' && (
                        <>
                            <NumberOfChildrenSelect onNumberChange={handleNumberOfChildrenChange} />
                            {numberOfChildren !== null && <ChildrenStatusTable numberOfChildren={numberOfChildren} />}
                        </>
                    )}
                </Form>
            </Content>
            <Footer className={styles.footer}>
                ©2023 האפליקציה שלנו
            </Footer>
            <StepsBar />
        </Layout>
    );
};

export default SocialSimulator;
