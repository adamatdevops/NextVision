/* ./src/pages/economicSim/FutureExpenses.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureExpensesProps {
    setExpenses: (expenses: number[]) => void;
}

const FutureExpenses: React.FC<FutureExpensesProps> = ({ setExpenses }) => {
    const {
        state,
        setFuturePropertyTaxExpenses,
        setFutureWaterAndSewerExpenses,
        setFutureGasExpenses,
        setFutureElectricityExpenses,
        setFutureHouseMaintenanceExpenses,
        setFutureGardeningExpenses,
        setFutureNetworkingExpenses,
        setFutureInternetExpenses,
        setFutureVehicleExpenses,
        setFutureSchoolExpenses,
        setFuturePersonalLessonsExpenses,
        setFutureTuitionsExpenses,
        setFutureSafetyNetExpenses,
        setFutureHealthInsuranceExpenses,
        setFutureDentistExpenses,
        setFutureWelfareExpenses,
        setFutureFoodExpenses,
        setFutureLaundryExpenses,
        setFutureFlatTaxExpenses,
        setFutureGrossTaxExpenses,
        setFutureAlimonyExpenses,
        setFutureCleaningExpenses,
        setFutureDecorationsExpenses,
        setFutureOtherExpenses,
    } = useGlobalState();

    const {
        futurePropertyTaxExpenses,
        futureWaterAndSewerExpenses,
        futureGasExpenses,
        futureElectricityExpenses,
        futureHouseMaintenanceExpenses,
        futureGardeningExpenses,
        futureNetworkingExpenses,
        futureInternetExpenses,
        futureVehicleExpenses,
        futureSchoolExpenses,
        futurePersonalLessonsExpenses,
        futureTuitionsExpenses,
        futureSafetyNetExpenses,
        futureHealthInsuranceExpenses,
        futureDentistExpenses,
        futureWelfareExpenses,
        futureFoodExpenses,
        futureLaundryExpenses,
        futureFlatTaxExpenses,
        futureGrossTaxExpenses,
        futureAlimonyExpenses,
        futureCleaningExpenses,
        futureDecorationsExpenses,
        futureOtherExpenses,
    } = state;

    useEffect(() => {
        setExpenses([
            futurePropertyTaxExpenses,
            futureWaterAndSewerExpenses,
            futureGasExpenses,
            futureElectricityExpenses,
            futureHouseMaintenanceExpenses,
            futureGardeningExpenses,
            futureNetworkingExpenses,
            futureInternetExpenses,
            futureVehicleExpenses,
            futureSchoolExpenses,
            futurePersonalLessonsExpenses,
            futureTuitionsExpenses,
            futureSafetyNetExpenses,
            futureHealthInsuranceExpenses,
            futureDentistExpenses,
            futureWelfareExpenses,
            futureFoodExpenses,
            futureLaundryExpenses,
            futureFlatTaxExpenses,
            futureGrossTaxExpenses,
            futureAlimonyExpenses,
            futureCleaningExpenses,
            futureDecorationsExpenses,
            futureOtherExpenses,
        ]);
    }, [
        futurePropertyTaxExpenses,
        futureWaterAndSewerExpenses,
        futureGasExpenses,
        futureElectricityExpenses,
        futureHouseMaintenanceExpenses,
        futureGardeningExpenses,
        futureNetworkingExpenses,
        futureInternetExpenses,
        futureVehicleExpenses,
        futureSchoolExpenses,
        futurePersonalLessonsExpenses,
        futureTuitionsExpenses,
        futureSafetyNetExpenses,
        futureHealthInsuranceExpenses,
        futureDentistExpenses,
        futureWelfareExpenses,
        futureFoodExpenses,
        futureLaundryExpenses,
        futureFlatTaxExpenses,
        futureGrossTaxExpenses,
        futureAlimonyExpenses,
        futureCleaningExpenses,
        futureDecorationsExpenses,
        futureOtherExpenses,
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הוצאות עתידיות</Title>
            <Form layout="vertical">
                <Form.Item label="ארנונה">
                    <InputNumber
                    value={futurePropertyTaxExpenses}
                    onChange={(value) => setFuturePropertyTaxExpenses(value || 0)}
                    min={0}
                    style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="מים וביוב">
                    <InputNumber
                    value={futureWaterAndSewerExpenses}
                    onChange={(value) => setFutureWaterAndSewerExpenses(value || 0)}
                    min={0}
                    style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="גז">
                    <InputNumber
                        value={futureGasExpenses}
                        onChange={(value) => setFutureGasExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="חשמל">
                    <InputNumber
                        value={futureElectricityExpenses}
                        onChange={(value) => setFutureElectricityExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="תחזוקת בית">
                    <InputNumber
                        value={futureHouseMaintenanceExpenses}
                        onChange={(value) => setFutureHouseMaintenanceExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="גינון ונוי">
                    <InputNumber
                        value={futureGardeningExpenses}
                        onChange={(value) => setFutureGardeningExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="כבלים">
                    <InputNumber
                        value={futureNetworkingExpenses}
                        onChange={(value) => setFutureNetworkingExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="אינטרנט">
                    <InputNumber
                        value={futureInternetExpenses}
                        onChange={(value) => setFutureInternetExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="תחבורה">
                    <InputNumber
                        value={futureVehicleExpenses}
                        onChange={(value) => setFutureVehicleExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="בית ספר">
                    <InputNumber
                        value={futureSchoolExpenses}
                        onChange={(value) => setFutureSchoolExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="שיעורים פרטיים">
                    <InputNumber
                        value={futurePersonalLessonsExpenses}
                        onChange={(value) => setFuturePersonalLessonsExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="שכר לימוד">
                    <InputNumber
                        value={futureTuitionsExpenses}
                        onChange={(value) => setFutureTuitionsExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="רשת ביטחון">
                    <InputNumber
                        value={futureSafetyNetExpenses}
                        onChange={(value) => setFutureSafetyNetExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="ביטוח בריאות">
                    <InputNumber
                        value={futureHealthInsuranceExpenses}
                        onChange={(value) => setFutureHealthInsuranceExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="רופא שיניים">
                    <InputNumber
                        value={futureDentistExpenses}
                        onChange={(value) => setFutureDentistExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="רווחה">
                    <InputNumber
                        value={futureWelfareExpenses}
                        onChange={(value) => setFutureWelfareExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="מזון">
                    <InputNumber
                        value={futureFoodExpenses}
                        onChange={(value) => setFutureFoodExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="כביסה">
                    <InputNumber
                        value={futureLaundryExpenses}
                        onChange={(value) => setFutureLaundryExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="מס אחיד">
                    <InputNumber
                        value={futureFlatTaxExpenses}
                        onChange={(value) => setFutureFlatTaxExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="מס ברוטו">
                    <InputNumber
                        value={futureGrossTaxExpenses}
                        onChange={(value) => setFutureGrossTaxExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="מזונות">
                    <InputNumber
                        value={futureAlimonyExpenses}
                        onChange={(value) => setFutureAlimonyExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="ניקיון">
                    <InputNumber
                        value={futureCleaningExpenses}
                        onChange={(value) => setFutureCleaningExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="שיפוץ ודקורציה">
                    <InputNumber
                        value={futureDecorationsExpenses}
                        onChange={(value) => setFutureDecorationsExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="אחר">
                    <InputNumber
                        value={futureOtherExpenses}
                        onChange={(value) => setFutureOtherExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            </Form>
        </Card>
    );
};

export default FutureExpenses;
