/* ./src/pages/economicSim/FutureIncomes.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureIncomesProps {
    setIncomes: (incomes: number[]) => void;
}

const FutureIncomes: React.FC<FutureIncomesProps> = ({ setIncomes }) => {
    const {
        state,
        // setFuturePersonalBudget,
        setFutureNetIncome,
        setFuturePartnerNetIncome,
        setFuturePensionAllowance,
        setFuturePartnerPensionAllowance,
        setFutureNationalInsuranceAllowance,
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
        futurePartnerNetIncome,
        futurePensionAllowance,
        futurePartnerPensionAllowance,
        futureNationalInsuranceAllowance,
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
        setIncomes([
            // futurePersonalBudget,
            futureNetIncome,
            futurePartnerNetIncome,
            futurePensionAllowance,
            futurePartnerPensionAllowance,
            futureNationalInsuranceAllowance,
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
        futurePartnerNetIncome,
        futurePensionAllowance,
        futurePartnerPensionAllowance,
        futureNationalInsuranceAllowance,
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
            <Title level={4}>הכנסות עתידיות</Title>
            <Form layout="vertical">
                <Form.Item label="שכר נטו - חבר/ה">
                    <InputNumber
                        value={futureNetIncome}
                        onChange={(value) => setFutureNetIncome(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="שכר נטו - בן/בת זוג">
                    <InputNumber
                        value={futurePartnerNetIncome}
                        onChange={(value) => setFuturePartnerNetIncome(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                <Form.Item label="קצבת פנסיה">
                    <InputNumber
                        value={futurePensionAllowance}
                        onChange={(value) => setFuturePensionAllowance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="קצבת פנסיה - בן/בת זוג">
                    <InputNumber
                        value={futurePartnerPensionAllowance}
                        onChange={(value) => setFuturePartnerPensionAllowance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                <Form.Item label="קצבאות ביטוח לאומי">
                    <InputNumber
                        value={futureNationalInsuranceAllowance}
                        onChange={(value) => setFutureNationalInsuranceAllowance(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="דמי הבראה - חבר/ה">
                    <InputNumber
                        value={futureRecoveryFee}
                        onChange={(value) => setFutureRecoveryFee(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="דמי הבראה - בן/בת זוג">
                    <InputNumber
                        value={futurePartnerRecoveryFee}
                        onChange={(value) => setFuturePartnerRecoveryFee(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="קרן השתלמות">
                    <InputNumber
                        value={futureEducationFund}
                        onChange={(value) => setFutureEducationFund(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="קרן השתלמות - בן/בת זוג">
                    <InputNumber
                        value={futurePartnerEducationFund}
                        onChange={(value) => setFuturePartnerEducationFund(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="תוספת ילדים עתידית">
                    <InputNumber
                        value={futureChildrenAddition}
                        onChange={(value) => setFutureChildrenAddition(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="רשת ביטחון">
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
                <Form.Item label="אחר עתידי">
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
