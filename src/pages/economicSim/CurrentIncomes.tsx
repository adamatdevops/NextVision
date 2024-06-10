/* ./src/pages/economicSim/CurrentIncomes.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import styles from './css/AccountBalance.module.css';
import { useGlobalState } from '../../GlobalStateProvider'; // Import the hook

const { Title } = Typography;

interface CurrentIncomesProps {
    setIncomes: (incomes: number[]) => void;
}

const calculateChildrenCount = (numberOfChildren): number => {
    let childrenCount = numberOfChildren + 0;
    return childrenCount
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

const CurrentIncomes: React.FC<CurrentIncomesProps> = ({ setIncomes }) => {
    /* Use the useGlobalState hook to get context values and setters */

    // Calculate the total education fees
    // const totalEducationFees = state.educationLevelFees.reduce((acc, fee) => acc + fee, 0);

    const {
        state,
        setEducationSystemBudgets,
        setPersonalBudget,
        setChildrenAddition,
        setProvisions,
        setLaundry,
        setGas,
        setHygiene,
        setMaintenance,
        setVehicle,
        setEnergy,
        setBenefitForWork,
        setOutsourcedFood,
        setChronicleTreatment,
        setSeniorityAddition,
        // setPartnerSeniorityAddition,
        // setDeceasedSeniorityAddition,
        setOtherIncome,
    } = useGlobalState();

    const {
        personalBudget,
        educationSystemBudgets,
        childrenAddition,
        provisions,
        laundry,
        gas,
        hygiene,
        maintenance,
        vehicle,
        energy,
        benefitForWork,
        outsourcedFood,
        chronicleTreatment,
        seniorityAddition,
        // partnerSeniorityAddition,
        // deceasedSeniorityAddition,
        otherIncome,
    } = state;

    useEffect(() => {

        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, state.numberOfChildren);
        // Calculate the total education budgets
        const totalEducationSystemBudgets = state.educationSystemBudgets.reduce((acc, budget) => acc + budget, 0);
        // Calculate seniority additions (30 NIS per year)
        const seniorityAdditionAmount = state.seniority ? state.seniority * 30 - 30: 0;
        const partnerSeniorityAdditionAmount = state.partnerSeniority ? state.partnerSeniority * 30 + 30: 0;
        const deceasedSeniorityAdditionAmount = state.deceasedSeniority ? state.deceasedSeniority * 30 - 30: 0;
        // setPartnerSeniorityAddition(partnerSeniorityAdditionAmount);
        // setDeceasedSeniorityAddition(deceasedSeniorityAdditionAmount);
        // setSeniorityAddition(seniorityAdditionAmount);
        // Calculate total seniority addition
        const totalSeniorityAddition =
            seniorityAdditionAmount + partnerSeniorityAdditionAmount + deceasedSeniorityAdditionAmount;

        setSeniorityAddition(totalSeniorityAddition);
        setChildrenAddition(totalEducationSystemBudgets);


        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            setPersonalBudget(4954);
            // setEducationSystemBudgets([]);
            setChildrenAddition(totalEducationSystemBudgets);
            setProvisions(2 * 772 + childrenCount * 683);
            setLaundry(2 * 61 + childrenCount * 61);
            setGas(92);
            setHygiene(44);
            setMaintenance(94);
            setVehicle(1094);
            setEnergy(269);
            /* TODO: To be set by the user */
            setBenefitForWork(benefitForWork || 0);
            setOutsourcedFood( outsourcedFood || 0);
            setChronicleTreatment( chronicleTreatment || 0);
            setSeniorityAddition(totalSeniorityAddition || 0);
            // setPartnerSeniorityAddition(partnerSeniorityAdditionAmount || 0),
            // setDeceasedSeniorityAddition(deceasedSeniorityAdditionAmount || 0),
            setOtherIncome(otherIncome || 0);
        }

        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            // setPersonalBudget(9970);
            setPersonalBudget(2887);
            // setEducationSystemBudgets([]);
            setChildrenAddition(totalEducationSystemBudgets);
            setProvisions(772 * familyMemberCount + childrenCount * 683);
            setLaundry(61 * familyMemberCount);
            setGas(92);
            setHygiene(44); /* TODO: this is to set set according to the number of family members */
            setMaintenance(94);
            setVehicle(547);
            setEnergy(269);
            /* TODO: To be set by the user */
            setBenefitForWork(benefitForWork || 0);
            setOutsourcedFood(outsourcedFood || 0);
            setChronicleTreatment(chronicleTreatment || 0);
            setSeniorityAddition(totalSeniorityAddition || 0);
            // setPartnerSeniorityAddition(partnerSeniorityAdditionAmount || 0),
            // setDeceasedSeniorityAddition(deceasedSeniorityAdditionAmount || 0),
            setOtherIncome(otherIncome || 0);
        }

        setIncomes([
            personalBudget,
            childrenAddition,
            provisions,
            laundry,
            gas,
            hygiene,
            maintenance,
            vehicle,
            energy,
            // benefitForWork,
            // outsourcedFood,
            chronicleTreatment,
            seniorityAddition,
            // partnerSeniorityAddition,
            // deceasedSeniorityAddition,
            otherIncome,
        ]);
    }, [
        personalBudget,
        educationSystemBudgets,
        childrenAddition,
        provisions,
        laundry,
        gas,
        hygiene,
        maintenance,
        vehicle,
        energy,
        benefitForWork,
        outsourcedFood,
        chronicleTreatment,
        seniorityAddition,
        // partnerSeniorityAddition,
        // deceasedSeniorityAddition,
        otherIncome,
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הכנסות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                <Form.Item
                    label="תקציב אישי"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={state.personalBudget}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="תוספת ילדים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={state.childrenAddition || 0}
                        disabled // Fixed value
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="כלכלה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={state.provisions}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="כביסה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={laundry}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="גז"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={gas}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="היגיינה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={hygiene}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item >
                <Form.Item
                    label="תחזוקה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={maintenance}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="רכב"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={vehicle}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="חשמל"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={energy}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="הטבה בגין עבודה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={benefitForWork}
                        style={{ width: '100%' }}
                        min={0}
                        max={1000}
                        onChange={(value) => setBenefitForWork(value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="אש״ל עובד חוץ"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={outsourcedFood}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setOutsourcedFood(value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="טיפול כרוני"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={chronicleTreatment}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setChronicleTreatment(value || 0)}
                    />
                </Form.Item>
                <Form.Item
                label="תוספת ותק"
                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={seniorityAddition}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setSeniorityAddition(value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={otherIncome}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setOtherIncome(value || 0)}
                    />
                </Form.Item>
            </Form>
        </Card>
    );
};


export default CurrentIncomes;
