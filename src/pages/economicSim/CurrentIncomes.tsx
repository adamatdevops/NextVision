/* ./src/pages/economicSim/CurrentIncomes.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import styles from './css/AccountBalance.module.css';
import { useGlobalState } from '../../GlobalStateProvider'; // Import the hook

const { Title } = Typography;

interface CurrentIncomesProps {
    setIncomes: (incomes: number[]) => void;
}

const CurrentIncomes: React.FC<CurrentIncomesProps> = ({ setIncomes }) => {
    /* Use the useGlobalState hook to get context values and setters */
    const {
        state,
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
        setOtherIncome,
    } = useGlobalState();

    const {
        personalBudget,
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
        otherIncome,
    } = state;

    useEffect(() => {
        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            // setPersonalBudget(9970);
            setPersonalBudget(2 * 4954);
            /* TODO: this is to set set according to the number of children
            * setChildrenAddition(2 * 2);
            */
            setProvisions(2 * 3593);
            setLaundry(2 * 305);
            setGas(2 * 270);
            /* TODO: this is to set set according to the number of family members
            * setHygiene(2 * 44);
            */
            setMaintenance(94);
            setVehicle(1094);
            setEnergy(286);
            /* TODO: To be set by the user
            * setBenefitForWork(2 * 2);
            * setOutsourcedFood(2 * 2);
            * setChronicleTreatment(2 * 2);
            * setOtherIncome(2 * 2);
            */
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
            otherIncome,
        ]);
    }, [
        personalBudget,
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
        otherIncome,
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הכנסות</Title>
            <Form layout="vertical">
                <Form.Item label="תקציב אישי">
                    <InputNumber
                        value={personalBudget}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="תוספת ילדים" >
                    <InputNumber
                        value={childrenAddition}
                        disabled // Fixed value
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="כלכלה" >
                    <InputNumber
                        value={provisions}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="כביסה">
                    <InputNumber
                        value={laundry}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="גז">
                    <InputNumber
                        value={gas}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="היגיינה">
                    <InputNumber
                        value={hygiene}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item >
                <Form.Item label="תחזוקה">
                    <InputNumber
                        value={maintenance}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="רכב">
                    <InputNumber
                        value={vehicle}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="אנרגיה">
                    <InputNumber
                        value={energy}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="הטבת עבודה">
                    <InputNumber
                        value={benefitForWork}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="אש״ל עובד חוץ">
                    <InputNumber
                        value={outsourcedFood}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="טיפול כרוני">
                    <InputNumber
                        value={chronicleTreatment}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item label="אחר">
                    <InputNumber
                        value={otherIncome}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
            </Form>
        </Card>
    );
};

// interface SectionProps {
//     title: string;
//     value: number;
//     onChange: (value: number) => void;
// }

// const IncomeSection: React.FC<SectionProps> = ({ title, value, onChange }) => {
//     return (
//         <Card className={styles.sectionCard}>
//             <Title level={5}>{title}</Title>
//             <Form layout="vertical">
//                 <Form.Item label="סכום">
//                     <InputNumber
//                         value={value}
//                         onChange={(newValue: number | null) => onChange(newValue ?? 0)}
//                         min={0}
//                         style={{ width: '100%' }}
//                         placeholder="הכנס סכום"
//                     />
//                 </Form.Item>
//             </Form>
//         </Card>
//     );
// };


export default CurrentIncomes;
