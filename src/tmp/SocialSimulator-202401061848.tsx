/* ./src/pages/socialSim/SocialSimulator.tsx */
import React, { useState } from 'react';
import { Layout, Form, Ca } from 'antd';
import MemberStatus from '../../components/ui/select/MemberStatus'; // Add this import statement
import PartnerCommunityStatus from '../../components/ui/select/PartnerCommunityStatus';
import ChildrenSelect from '../../components/ui/select/ChildrenSelect';
import NumberOfChildrenSelect from '../../components/ui/select/NumberOfChildrenSelect';
import ChildrenStatusTable from '../../components/ui/tables/ChildrenStatusTable';
import StepsBar from "../../components/ui/stepper/StepsBar";
import Seniority from '../../components/ui/select/Seniority';
import ApartmentSquareFootage from '../../components/ui/select/ApartmentSquareFootage';
import styles from './css/SocialSimulator.module.css';

import { useGlobalState } from '../../GlobalStateProvider';


// interface SocialSimulatorProps {}

const { Header, Content, Footer } = Layout;

const SocialSimulator: React.FC = () => {
// const SocialSimulator: React.FC<SocialSimulatorProps> = () => {
    const { state, setFamilyStatus, setPartnerCommunityStatus } = useGlobalState();

    // const [familyStatus, setFamilyStatus] = useState<string | null>(null);
    // const [partnerCommunityStatus, setPartnerCommunityStatus] = useState<string | null>(null);
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
            <Header className={styles.header}>סימולטור מודל ההתחדשות</Header>
            <Content className={styles.content}>
                <Card>

                </Card>
                <h1>מידע אישי</h1>
                <Form layout="vertical" className={styles.form}>
                    <div className={styles.formRow}>
                        <MemberStatus status={state.familyStatus} onStatusChange={handleFamilyStatusChange} />
                        <Seniority onSeniorityChange={() => { }} label="ותק" />
                    </div>
                    {state.familyStatus === 'married' && (
                        <div className={styles.formRow}>
                            <PartnerCommunityStatus status={state.partnerCommunityStatus} onStatusChange={handlePartnerCommunityStatusChange} />
                            <div className={styles.partnerSeniorityWrapper}>
                                <Seniority
                                    onSeniorityChange={() => { }}
                                    label="ותק של השותף"
                                    disabled={state.partnerCommunityStatus !== 'community-member'}
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        <ApartmentSquareFootage onSquareFootageChange={() => { }} />
                    </div>
                    <ChildrenSelect onChildrenChange={handleChildrenChange} />
                    {hasChildren === 'yes' && (
                        <>
                            <NumberOfChildrenSelect onNumberChange={handleNumberOfChildrenChange} />
                            {numberOfChildren !== null && <ChildrenStatusTable numberOfChildren={numberOfChildren} />}
                        </>
                    )}
                </Form>

            </Content>
            <StepsBar />
            <Footer className={styles.footer}>
                NextVision©2024 v2.3.341
            </Footer>
        </Layout>
    );
};

export default SocialSimulator;