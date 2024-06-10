/* ./src/pages/economicSim/FutureIncomes.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber, notification } from 'antd';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureIncomesProps {
    setIncomes: (incomes: number[]) => void;
}


const calculateFamilyMemberCount = (familyStatus, partnerCommunityStatus, numberOfChildren): number => {
    let familyMemberCount = 1 + numberOfChildren; // Single parent + children

    if (familyStatus === 'married') {
        if (partnerCommunityStatus === 'community-member') {
            familyMemberCount = 2 + numberOfChildren; // 2 for the parents + children
        } else if (partnerCommunityStatus === 'not-community-member') {
            familyMemberCount = 1 + numberOfChildren; // 1 parent + children
        }
    } else if (familyStatus === 'single') {
        familyMemberCount = 1 + numberOfChildren; // Single parent + children
    } else if (familyStatus === 'widowed' || familyStatus === 'divorced') {
        familyMemberCount = 1 + numberOfChildren; // Single parent + children
    }

    return familyMemberCount;
};

const calculateNationalInsuranceChildrenCount = (numberOfChildren): number => {
    let nationalInsuranceChildrenCount = 0;

    if (numberOfChildren === 1) {
        nationalInsuranceChildrenCount = 164;
    } else if (numberOfChildren === 2) {
        nationalInsuranceChildrenCount = 414;
    } else if (numberOfChildren === 3) {
        nationalInsuranceChildrenCount = 621;
    } else if (numberOfChildren === 4) {
        nationalInsuranceChildrenCount = 828;
    } else if (numberOfChildren === 5) {
        nationalInsuranceChildrenCount = 992;
    } else if (numberOfChildren === 6) {
        nationalInsuranceChildrenCount = 1156;
    } else if (numberOfChildren === 7) {
        nationalInsuranceChildrenCount = 1320;
    }

    return nationalInsuranceChildrenCount;
};


const FutureIncomes: React.FC<FutureIncomesProps> = ({ setIncomes }) => {
    const {
        state,
        // setFuturePersonalBudget,
        setFutureNetIncome,
        // setFuturePartnerNetIncome,
        setFutureGrossIncome,
        setFuturePensionAllowance,
        setFuturePartnerPensionAllowance,
        setFutureNationalInsuranceAllowance,
        setFutureNationalInsuranceAllowanceCommunity,
        // setFutureElderlyPension,
        // setFuturePartnerElderlyPension,
        setFutureRecoveryFee,
        setFuturePartnerRecoveryFee,
        setFutureEducationFund,
        setFuturePartnerEducationFund,
        setFutureChildrenAddition,
        setFutureProvisions,
        // setFutureLaundry,
        // setFutureGas,
        // setFutureHygiene,
        // setFutureMaintenance,
        // setFutureVehicle,
        // setFutureEnergy,
        // setFutureBenefitForWork,
        // setFutureOutsourcedFood,
        // setFutureChronicleTreatment,
        setFutureOtherIncome,
    } = useGlobalState();

    const {
        // futurePersonalBudget,
        futureNetIncome,
        futureGrossIncome,
        // futurePartnerNetIncome,
        futurePensionAllowance,
        futurePartnerPensionAllowance,
        futureNationalInsuranceAllowance,
        futureNationalInsuranceAllowanceCommunity,
        // futureElderlyPension,
        // futurePartnerElderlyPension,
        futureRecoveryFee,
        futurePartnerRecoveryFee,
        futureEducationFund,
        futurePartnerEducationFund,
        futureChildrenAddition,
        futureProvisions,
        // futureLaundry,
        // futureGas,
        // futureHygiene,
        // futureMaintenance,
        // futureVehicle,
        // futureEnergy,
        // futureBenefitForWork,
        // futureOutsourcedFood,
        // futureChronicleTreatment,
        futureOtherIncome,
    } = state;

    useEffect(() => {
        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, state.numberOfChildren);
        let nationalInsuranceChildrenCount = calculateNationalInsuranceChildrenCount(childrenCount);

        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            setFutureNetIncome(futureNetIncome || 0);
            setFutureGrossIncome(futureGrossIncome || 0);
            setFutureNationalInsuranceAllowance(futureNationalInsuranceAllowance || 0);
            setFutureNationalInsuranceAllowanceCommunity(nationalInsuranceChildrenCount || 0);
            setFutureRecoveryFee(futureRecoveryFee || 0);
            setFuturePartnerRecoveryFee(futurePartnerRecoveryFee || 0);
            setFutureEducationFund(futureEducationFund || 0);
            setFuturePartnerEducationFund(futurePartnerEducationFund || 0);
            setFutureChildrenAddition(futureChildrenAddition || 0);
            setFutureProvisions(futureProvisions || 0);
            setFutureOtherIncome(futureOtherIncome || 0);
        }

        if (state.memberRetired === 'yes' && state.memberPartnerRetired === 'yes' && state.familyStatus !== 'widower') {
            setFuturePensionAllowance(2234 || 0);
            setFuturePartnerPensionAllowance(2234 || 0);
        }

        if (state.memberRetired === 'yes' && state.memberPartnerRetired === 'no' && state.familyStatus !== 'widower') {
            setFuturePensionAllowance(2234 || 0);
            setFuturePartnerPensionAllowance(0);
        }

        if (state.memberRetired === 'no' && state.memberPartnerRetired === 'yes' && state.familyStatus !== 'widower') {
            setFuturePensionAllowance(0);
            setFuturePartnerPensionAllowance(2234 || 0);
        }

        if (state.familyStatus === 'widower' && state.memberRetired === 'yes' && state.memberPartnerRetired === 'no') {
            setFuturePensionAllowance(2234 + 1748 || 0);
            setFuturePartnerPensionAllowance(futurePartnerPensionAllowance || 0);
        }

        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            setFutureNetIncome(futureNetIncome || 0);
            setFutureGrossIncome(futureGrossIncome || 0);
            setFutureNationalInsuranceAllowance(futureNationalInsuranceAllowance || 0);
            setFutureNationalInsuranceAllowanceCommunity(nationalInsuranceChildrenCount || 0);
            setFutureRecoveryFee(futureRecoveryFee || 0);
            setFuturePartnerRecoveryFee(futurePartnerRecoveryFee || 0);
            setFutureEducationFund(futureEducationFund || 0);
            setFuturePartnerEducationFund(futurePartnerEducationFund || 0);
            setFutureChildrenAddition(futureChildrenAddition || 0);
            setFutureProvisions(futureProvisions || 0);
            setFutureOtherIncome(futureOtherIncome || 0);
        }

        setIncomes([
            // futurePersonalBudget,
            futureNetIncome,
            // futurerGrosstIncome,
            futurePensionAllowance,
            futurePartnerPensionAllowance,
            futureNationalInsuranceAllowance,
            futureNationalInsuranceAllowanceCommunity,
            // futureElderlyPension,
            // futurePartnerElderlyPension,
            futureRecoveryFee,
            futurePartnerRecoveryFee,
            futureEducationFund,
            futurePartnerEducationFund,
            futureChildrenAddition,
            futureProvisions,
            // futureLaundry,
            // futureGas,
            // futureHygiene,
            // futureMaintenance,
            // futureVehicle,
            // futureEnergy,
            // futureBenefitForWork,
            // futureOutsourcedFood,
            // futureChronicleTreatment,
            futureOtherIncome,
        ]);
    }, [
        // futurePersonalBudget,
        futureNetIncome,
        futurePensionAllowance,
        futurePartnerPensionAllowance,
        futureNationalInsuranceAllowance,
        futureNationalInsuranceAllowanceCommunity,
        // futureElderlyPension,
        // futurePartnerElderlyPension,
        futureRecoveryFee,
        futurePartnerRecoveryFee,
        futureEducationFund,
        futurePartnerEducationFund,
        futureChildrenAddition,
        futureProvisions,
        // futureLaundry,
        // futureGas,
        // futureHygiene,
        // futureMaintenance,
        // futureVehicle,
        // futureEnergy,
        // futureBenefitForWork,
        // futureOutsourcedFood,
        // futureChronicleTreatment,
        futureOtherIncome,
    ]);
    return (
        <Card className={styles.card}>
            <Title level={4}>הכנסות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                <Form.Item
                    label="שכר נטו"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNetIncome}
                        onChange={(value) => setFutureNetIncome(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* <Form.Item
                    label="שכר נטו - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePartnerNetIncome}
                        onChange={(value) => setFuturePartnerNetIncome(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                    label="שכר ברוטו"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGrossIncome}
                        onChange={(value) => setFutureGrossIncome(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label=" קצבת פנסיה - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePensionAllowance}
                        onChange={(value) => setFuturePensionAllowance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="קצבת פנסיה - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                    <InputNumber
                        value={futurePartnerPensionAllowance}
                        onChange={(value) => setFuturePartnerPensionAllowance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* <Form.Item
                    label="קצבת זקנה - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                    <InputNumber
                        value={futureElderlyPension}
                        onChange={(value) => setFutureElderlyPension(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="קצבת זקנה - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                    <InputNumber
                        value={futurePartnerElderlyPension}
                        onChange={(value) => setFuturePartnerElderlyPension(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                label="קצבאות ביטוח לאומי (מדינה)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNationalInsuranceAllowance}
                        onChange={(value) => setFutureNationalInsuranceAllowance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="קצבאות ביטוח לאומי (קיבוץ)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNationalInsuranceAllowanceCommunity}
                        onChange={(value) => setFutureNationalInsuranceAllowanceCommunity(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="דמי הבראה - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureRecoveryFee}
                        onChange={(value) => setFutureRecoveryFee(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="דמי הבראה - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePartnerRecoveryFee}
                        onChange={(value) => setFuturePartnerRecoveryFee(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="קרן השתלמות - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEducationFund}
                        onChange={(value) => setFutureEducationFund(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="קרן השתלמות - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePartnerEducationFund}
                        onChange={(value) => setFuturePartnerEducationFund(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="השלמה/זיכוי בגין ילדים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureChildrenAddition}
                        onChange={(value) => setFutureChildrenAddition(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="רשת ביטחון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureProvisions}
                        onChange={(value) => setFutureProvisions(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* <Form.Item label="כביסה עתידית">
                    <InputNumber
                        value={futureLaundry}
                        onChange={(value) => setFutureLaundry(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="גז עתידי">
                    <InputNumber
                        value={futureGas}
                        onChange={(value) => setFutureGas(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="היגיינה עתידית">
                    <InputNumber
                        value={futureHygiene}
                        onChange={(value) => setFutureHygiene(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="תחזוקה עתידית">
                    <InputNumber
                        value={futureMaintenance}
                        onChange={(value) => setFutureMaintenance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="רכב עתידי">
                    <InputNumber
                        value={futureVehicle}
                        onChange={(value) => setFutureVehicle(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="אנרגיה עתידית">
                    <InputNumber
                        value={futureEnergy}
                        onChange={(value) => setFutureEnergy(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="הטבת עבודה עתידית">
                    <InputNumber
                        value={futureBenefitForWork}
                        onChange={(value) => setFutureBenefitForWork(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="אש״ל עובד חוץ עתידי">
                    <InputNumber
                        value={futureOutsourcedFood}
                        onChange={(value) => setFutureOutsourcedFood(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                {/* <Form.Item label="טיפול כרוני עתידי">
                    <InputNumber
                        value={futureChronicleTreatment}
                        onChange={(value) => setFutureChronicleTreatment(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                    <InputNumber
                        value={futureOtherIncome}
                        onChange={(value) => setFutureOtherIncome(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            </Form>
        </Card>
    );
};

export default FutureIncomes;
