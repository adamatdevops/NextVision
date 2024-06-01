/* ./src/pages/economicSim/CurrentExpenses.tsx */
import React, { useState, useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface CurrentExpensesProps {
    setExpenses: (expenses: number[]) => void;
}

const CurrentExpenses: React.FC<CurrentExpensesProps> = ({ setExpenses }) => {
    const [gas, setGas] = useState<number>(0);
    const [electricity, setElectricity] = useState<number>(0);
    const [houseMaintenance, setHouseMaintenance] = useState<number>(0);
    const [gardening, setGardening] = useState<number>(0);
    const [networking, setNetworking] = useState<number>(0);
    const [internet, setInternet] = useState<number>(0);
    const [vehicle, setVehicle] = useState<number>(0);
    const [school, setSchool] = useState<number>(0);
    const [personalLessons, setPersonalLessons] = useState<number>(0);
    const [tuitions, setTuitions] = useState<number>(0);
    const [otherEducation, setOtherEducation] = useState<number>(0);
    const [dentist, setDentist] = useState<number>(0);
    const [welfare, setWelfare] = useState<number>(0);
    const [food, setFood] = useState<number>(0);
    const [laundryExpenses, setLaundryExpenses] = useState<number>(0);
    const [otherExpenses, setOtherExpenses] = useState<number>(0);

    useEffect(() => {
        setExpenses([
            gas, electricity, houseMaintenance, gardening, networking, internet, vehicle,
            school, personalLessons, tuitions, otherEducation, dentist, welfare, food,
            laundryExpenses, otherExpenses
        ]);
    }, [gas, electricity, houseMaintenance, gardening, networking, internet, vehicle, school, personalLessons, tuitions, otherEducation, dentist, welfare, food, laundryExpenses, otherExpenses, setExpenses]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הוצאות</Title>
            <Form layout="vertical">
                <Form.Item label="גז">
                    <InputNumber
                        title="גז"
                        value={gas}
                        style={{ width: '100%' }}
                    /* onChange={setGas} */
                    />
                </Form.Item>
                <Form.Item label="חשמל">
                    <InputNumber
                        value={electricity}
                        style={{ width: '100%' }}
                    /* onChange={setElectricity} */
                    />
                </Form.Item>
                <Form.Item label="תחזוקת בית">
                    <InputNumber
                        value={houseMaintenance}
                        style={{ width: '100%' }}
                    /* onChange={setHouseMaintenance} */
                    />
                </Form.Item>
                <Form.Item label="גננות">
                    <InputNumber
                        value={gardening}
                        style={{ width: '100%' }}
                    /* onChange={setGardening} */
                    />
                </Form.Item>
                <Form.Item label="רשת">
                    <InputNumber
                        value={networking}
                        style={{ width: '100%' }}
                    /* onChange={setNetworking} */
                    />
                </Form.Item>
                <Form.Item label="אינטרנט">
                    <InputNumber
                        value={internet}
                        style={{ width: '100%' }}
                    /* onChange={setInternet} */
                    />
                </Form.Item>
                <Form.Item label="רכב">
                    <InputNumber
                        value={vehicle}
                        style={{ width: '100%' }}
                    /* onChange={setVehicle} */
                    />
                </Form.Item>
                <Form.Item label="בית ספר">
                    <InputNumber
                        value={school}
                        style={{ width: '100%' }}
                    /* onChange={setSchool} */
                    />
                </Form.Item>
                <Form.Item label="שיעורים פרטיים">
                    <InputNumber
                        value={personalLessons}
                        style={{ width: '100%' }}
                    /* onChange={setPersonalLessons} */
                    />
                </Form.Item>
                <Form.Item label="שכר לימוד">
                    <InputNumber
                        value={tuitions}
                        style={{ width: '100%' }}
                    /* onChange={setTuitions} */
                    />
                </Form.Item>
                <Form.Item label="חינוך אחר">
                    <InputNumber
                        value={otherEducation}
                        style={{ width: '100%' }}
                    /* onChange={setOtherEducation} */
                    />
                </Form.Item>
                <Form.Item label="רופא שיניים">
                    <InputNumber
                        value={dentist}
                        style={{ width: '100%' }}
                    /* onChange={setDentist} */
                    />
                </Form.Item>
                <Form.Item label="רווחה">
                    <InputNumber
                        value={welfare}
                        style={{ width: '100%' }}
                    /* onChange={setWelfare} */
                    />
                </Form.Item>
                <Form.Item label="מזון">
                    <InputNumber
                        value={food}
                        style={{ width: '100%' }}
                    /* onChange={setFood} */
                    />
                </Form.Item>
                <Form.Item label="כביסה">
                    <InputNumber
                        value={laundryExpenses}
                        style={{ width: '100%' }}
                    /* onChange={setLaundryExpenses} */
                    />
                </Form.Item>
                <Form.Item label="אחר">
                    <InputNumber
                        value={otherExpenses}
                        style={{ width: '100%' }}
                    /* onChange={setOtherExpenses} */
                    />
                </Form.Item>
            </Form>
        </Card>
    );
};

// interface SectionProps {
//     title: string;
//     value: number;

// /*     onChange: (value: number) => void; */
// }

// const ExpenseSection: React.FC<SectionProps> = ({ title, value,
//     /* onChange }) => { */
//     return (
//         <Card className={styles.sectionCard}>
//             <Title level={5}>{title}</Title>
//             <Form layout="vertical">
//                 <Form.Item label="סכום">
//                     <InputNumber
//                         value={value}

//                     /*     onChange= */
//                     /* onChange} */
//                         min={0}
//                         style={{ width: '100%' }}
//                         placeholder="הכנס סכום"
//                     />
//                 </Form.Item>
//             </Form>
//         </Card>
//     );
// };

export default CurrentExpenses;
