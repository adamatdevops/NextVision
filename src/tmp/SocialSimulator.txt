/* ./src/pages/socialSim/SocialSimulator.tsx */
import React, { useState } from 'react';
import { Layout, Card, Typography, Form, Input, Select, InputNumber } from 'antd';
import MemberStatus from '../../components/ui/select/MemberStatus'; // Add this import statement
import PartnerCommunityStatus from '../../components/ui/select/PartnerCommunityStatus';
import ChildrenSelect from '../../components/ui/select/ChildrenSelect';
import NumberOfChildrenSelect from '../../components/ui/select/NumberOfChildrenSelect';
import ChildrenStatusTable from '../../components/ui/tables/ChildrenStatusTable';
import StepsBar from "../../components/ui/stepper/StepsBar";
import Seniority from '../../components/ui/select/Seniority';
import PartnerSeniority from '../../components/ui/select/PartnerSeniority';
import DeceasedSeniority from '../../components/ui/select/DeceasedSeniority';
import ApartmentSquareFootage from '../../components/ui/select/ApartmentSquareFootage';
import MemberAge from '../../components/ui/input/MemberAge';
import MemberPartnerAge from '../../components/ui/input/MemberPartnerAge';
import MemberRetired from '../../components/ui/input/MemberRetired';
import MemberPartnerRetired from '../../components/ui/input/MemberPartnerRetired';
import styles from './css/SocialSimulator.module.css';

import { useGlobalState } from '../../GlobalStateProvider';

// interface SocialSimulatorProps {}

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Option } = Select;

const SocialSimulator: React.FC = () => {
    // const SocialSimulator: React.FC<SocialSimulatorProps> = () => {
    const { state, setFamilyStatus, setPartnerCommunityStatus, setNumberOfChildren, setMemberAge, setMemberPartnerAge, setMemberRetired, setMemberPartnerRetired, setSeniority, setPartnerSeniority, setDeceasedSeniority } = useGlobalState();

    // const [familyStatus] = useState<string | null>(null);
    // const [partnerCommunityStatus] = useState<string | null>(null);
    const [hasChildren, setHasChildren] = useState<string | null>(null);
    // const [numberOfChildren] = useState<number | null>(null); // TODO: Check this

    const handleFamilyStatusChange = (status: string | null) => {
        setFamilyStatus(status);
    };

    const handlePartnerCommunityStatusChange = (status: string | null) => {
        setPartnerCommunityStatus(status);
    };

    const handleMemberRetiredChange = (status: string | null) => {
        setMemberRetired(status);
    }

    const handleMemberPartnerRetiredChange = (status: string | null) => {
        setMemberPartnerRetired(status);
    }

    const handleChildrenChange = (value: string) => {
        setHasChildren(value);
    };

    const handleNumberOfChildrenChange = (value: number) => {
        setNumberOfChildren(value);
    };

    const handleSeniorityChange = (value: number) => {
        setSeniority(value);
    }

    const handlePartnerSeniorityChange = (value: number) => {
        setPartnerSeniority(value);
    }

    const handleDeceasedSeniorityChange = (value: number) => {
        setDeceasedSeniority(value);
    }
    // const handleMemberAgeChange = (value: number) => {
    //     setMemberAge(value);
    // }

    // const handleMemberPartnerAgeChange = (value: number) => {
    //     setMemberPartnerAge(value);
    // }

    console.log('familyStatus:', state.familyStatus);
    console.log('memberAge:', state.memberAge);

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                סימולטור מודל ההתחדשות
            </Header>
            <h1>מידע אישי</h1>
            <Content className={styles.content}>
                <div className={styles.cardsContainer}>
                    <Card className={styles.card} title="מידע אישי">
                        <Form layout="vertical" className={styles.form}>
                            <div className={styles.formRow}>
                                <MemberStatus status={state.familyStatus} onStatusChange={handleFamilyStatusChange} />
                                <MemberAge age={state.memberAge} onAgeChange={setMemberAge} />
                                <Seniority onSeniorityChange={handleSeniorityChange} label="ותק" />
                                <MemberRetired onMemberRetiredChange={handleMemberRetiredChange} />
                            </div>
                            {state.familyStatus !== 'widower' && (
                                <div className={styles.formRow}>
                                    <PartnerCommunityStatus status={state.partnerCommunityStatus} onStatusChange={handlePartnerCommunityStatusChange} />
                                    <MemberPartnerAge age={state.memberPartnerAge} onAgeChange={setMemberPartnerAge} />
                                    <div className={styles.partnerSeniorityWrapper}>
                                        <PartnerSeniority
                                            onPartnerSeniorityChange={handlePartnerSeniorityChange}
                                            label="ותק של בן/ת הזוג"
                                            disabled={state.partnerCommunityStatus !== 'community-member'}
                                        />
                                    </div>
                                    <MemberPartnerRetired
                                        onMemberPartnerRetiredChange={handleMemberPartnerRetiredChange}
                                    />
                                </div>
                            )}
                            {state.familyStatus === 'widower' && (
                                <div className={styles.formRow}>
                                    <PartnerCommunityStatus status={state.partnerCommunityStatus} onStatusChange={handlePartnerCommunityStatusChange} />
                                    <MemberPartnerAge age={state.memberPartnerAge} onAgeChange={setMemberPartnerAge} />
                                    <div className={styles.partnerSeniorityWrapper}>
                                        <PartnerSeniority
                                            onPartnerSeniorityChange={handlePartnerSeniorityChange}
                                            label="ותק של בן/ת הזוג"
                                            disabled={state.partnerCommunityStatus !== 'community-member'}
                                        />
                                    </div>
                                    <div className={styles.partnerSeniorityWrapper}>
                                        <DeceasedSeniority
                                            onDeceasedSeniorityChange={handleDeceasedSeniorityChange}
                                            label="ותק של הנפטר/ת"
                                            // disabled={state.partnerCommunityStatus !== 'community-member'}
                                        />
                                    </div>
                                    <MemberPartnerRetired onMemberPartnerRetiredChange={handleMemberPartnerRetiredChange} />
                                </div>
                            )}
                            <div>
                                <ApartmentSquareFootage onSquareFootageChange={(value: number) => setApartmentSquareFootage(value)} />
                            </div>
                        </Form>
                    </Card>
                    <Card className={styles.card} title="נתוני משפחה">
                        <Form layout="vertical">
                            <div>
                                <ChildrenSelect onChildrenChange={handleChildrenChange} />
                                {/* Render ChildrenStatusTable when either hasChildren is 'yes' OR numberOfChildren is not null */}
                                {hasChildren === 'yes' && (
                                    <>
                                        <NumberOfChildrenSelect onNumberChange={handleNumberOfChildrenChange} />
                                        {state.numberOfChildren !== null && <ChildrenStatusTable numberOfChildren={state.numberOfChildren} />}
                                    </>
                                )}
                            </div>
                        </Form>
                    </Card>
                </div>
            </Content>
            <StepsBar />
            <Footer className={styles.footer}>
                NextVision©2024 v2.3.341
            </Footer>
        </Layout>
    );
};


export default SocialSimulator;