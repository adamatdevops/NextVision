/* ./src/pages/economicSim/CurrentExpenses.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import styles from './css/AccountBalance.module.css';
import { useGlobalState } from '../../GlobalStateProvider'; // Import the hook

const { Title } = Typography;

interface CurrentExpensesProps {
    setExpenses: (expenses: number[]) => void;
    // apartmentSquareFootage: number | null;
}

const calculateFamilyMemberCount = (familyStatus, partnerCommunityStatus, childrenCount) => {
    let familyMemberCount = 1 + childrenCount; // Single parent + children

    if (familyStatus === 'married') {
        if (partnerCommunityStatus === 'community-member') {
            familyMemberCount = 2 + childrenCount; // 2 for the parents + children
        } else if (partnerCommunityStatus === 'not-community-member') {
            familyMemberCount = 1 + childrenCount; // 1 parent + children
        }
    } else if (familyStatus === 'single') {
        familyMemberCount = 1 + childrenCount; // Single parent + children
    } else if (familyStatus === 'widowed' || familyStatus === 'divorced') {
        familyMemberCount = 1 + childrenCount; // Single parent + children
    }

    return familyMemberCount;
};

// const calculateTuitionExpenses = (schoolExpenses, highSchoolExpenses) => {
//     let schoolCoverage = 300;
//     let highSchoolCoverage = 500;
//     let tuitionExpenses = 0;

//     if (schoolExpenses >= schoolCoverage) {
//         tuitionExpenses += schoolExpenses - schoolCoverage;
//     } else if (schoolExpenses < schoolCoverage) {
//         tuitionExpenses += 0;
//     } else if (highSchoolExpenses >= highSchoolCoverage) {
//         tuitionExpenses += highSchoolExpenses - highSchoolCoverage;
//     } else if (highSchoolExpenses < highSchoolCoverage) {
//         tuitionExpenses += 0;
//     }

//     return tuitionExpenses
// }

const CurrentExpenses: React.FC<CurrentExpensesProps> = ({ setExpenses }) => {
    /* Use the useGlobalState hook to get context values and setters */
    const { state } = useGlobalState();

    const {
        // state,
        // setGasExpenses,
        setElectricityExpenses,
        setMaintenanceServiceExpenses,
        setHouseMaintenanceExpenses,
        setGardeningExpenses,
        setNetworkingExpenses,
        setInternetExpenses,
        setVehicleExpenses,
        setSchoolExpenses,
        setHighSchoolExpenses,
        setEducationTuitionFees,
        setPersonalLessonsExpenses,
        setTeenageClassExpenses,
        // setTuitionsExpenses,
        setOtherEducationExpenses,
        setDentistExpenses,
        setWelfareExpenses,
        setFoodExpenses,
        setLaundryExpenses,
        setOtherExpenses
    } = useGlobalState();

    const {
        // gasExpenses,
        electricityExpenses,
        maintenanceServiceExpenses,
        houseMaintenanceExpenses,
        gardeningExpenses,
        networkingExpenses,
        internetExpenses,
        vehicleExpenses,
        schoolExpenses,
        highSchoolExpenses,
        educationTuitionFees,
        personalLessonsExpenses,
        teenageClassExpenses,
        // tuitionsExpenses,
        otherEducationExpenses,
        dentistExpenses,
        welfareExpenses,
        foodExpenses,
        laundryExpenses,
        otherExpenses
    } = state;

    useEffect(() => {
        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, childrenCount);

        // const totalSchoolExpenses = state.childrenData.reduce((total, child) => {
        //     const tuition = child.educationTuition || 0; // Default to 0 if not provided
        //     const level = child.educationLevel;
        //     const coverage = (level === 'יסודי' || level === 'תיכון') ? 300 : 0;
        //     return total + Math.max(0, tuition - coverage); // Only add the difference if tuition exceeds coverage
        // }, 0);

        // const totalSchoolFees = state.educationTuitionFees.reduce((acc, fee) => acc + fee, 0);
        // const totalEducationSchoolExpenses = state.educationSchoolExpenses - totalSchoolFees > 0 ? state.educationSchoolExpenses - totalSchoolFees : 0;
        // const totalEducationHighSchoolExpenses = state.educationHighSchoolExpenses - totalSchoolFees > 0 ? state.educationHighSchoolExpenses - totalSchoolFees : 0;

        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') { /* Change this condition. This is just a mockup */
            // setGasExpenses(0); /* 63 per family member */
            setElectricityExpenses(177 * familyMemberCount);
            setMaintenanceServiceExpenses(63);
            setHouseMaintenanceExpenses(houseMaintenanceExpenses || 0);
            setGardeningExpenses(gardeningExpenses || 0);
            setNetworkingExpenses(100);
            setInternetExpenses(internetExpenses || 0);
            setVehicleExpenses(vehicleExpenses);
            setSchoolExpenses(schoolExpenses);
            setHighSchoolExpenses(highSchoolExpenses);
            setPersonalLessonsExpenses(personalLessonsExpenses || 0);
            setTeenageClassExpenses(teenageClassExpenses || 0);
            // setTuitionsExpenses(tuitionsExpenses || 0);
            setOtherEducationExpenses(otherEducationExpenses || 0);
            setDentistExpenses(dentistExpenses || 0); /* 70 for kid /110 Adults in 70% */
            setWelfareExpenses(welfareExpenses || 0);
            setFoodExpenses(foodExpenses || 0);
            setLaundryExpenses(laundryExpenses || 0);
            setOtherExpenses(otherExpenses || 0);
        }


        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            // setGasExpenses(63 * familyMemberCount); /* 177 per family member */
            setElectricityExpenses(177 * familyMemberCount);
            setMaintenanceServiceExpenses(63)
            setHouseMaintenanceExpenses(houseMaintenanceExpenses || 0);
            setGardeningExpenses(gardeningExpenses || 0);
            setNetworkingExpenses(100);
            setInternetExpenses(internetExpenses || 0);
            setVehicleExpenses(vehicleExpenses || 0);
            setSchoolExpenses(schoolExpenses);
            setHighSchoolExpenses(highSchoolExpenses);
            setPersonalLessonsExpenses(personalLessonsExpenses);
            setTeenageClassExpenses(teenageClassExpenses || 0);
            // setTuitionsExpenses(tuitionsExpenses || 0);
            setOtherEducationExpenses(otherEducationExpenses || 0);
            setDentistExpenses(dentistExpenses || 0); /* 70 for kid /110 Adults in 70% */
            setWelfareExpenses(welfareExpenses || 0);
            setFoodExpenses(foodExpenses || 0);
            setLaundryExpenses(laundryExpenses || 0);
            setOtherExpenses(otherExpenses || 0);
        }

        setExpenses([
            // gasExpenses,
            electricityExpenses,
            maintenanceServiceExpenses,
            houseMaintenanceExpenses,
            gardeningExpenses,
            networkingExpenses,
            internetExpenses,
            vehicleExpenses,
            // schoolExpenses,
            // highSchoolExpenses,
            personalLessonsExpenses,
            teenageClassExpenses,
            // tuitionsExpenses,
            otherEducationExpenses,
            dentistExpenses,
            welfareExpenses,
            foodExpenses,
            laundryExpenses,
            otherExpenses
        ]);
    }, [
        // gasExpenses,
        electricityExpenses,
        maintenanceServiceExpenses,
        houseMaintenanceExpenses,
        gardeningExpenses,
        networkingExpenses,
        internetExpenses,
        vehicleExpenses,
        schoolExpenses,
        highSchoolExpenses,
        personalLessonsExpenses,
        teenageClassExpenses,
        // tuitionsExpenses,
        otherEducationExpenses,
        dentistExpenses,
        welfareExpenses,
        foodExpenses,
        laundryExpenses,
        otherExpenses,
        setExpenses
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הוצאות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                {/* <Form.Item
                    label="גז"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        title="גז"
                        value={gasExpenses}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                    label="אנרגיה(חשמל וגז)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={electricityExpenses}
                        style={{ width: '100%' }}
                    /* onChange={setElectricity} */
                    />
                </Form.Item>
                <Form.Item
                    label="אחזקה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={maintenanceServiceExpenses}
                        style={{ width: '100%' }}
                        // onChange={setMaintenanceServiceExpenses}
                    />
                </Form.Item>
                <Form.Item
                    label="תחזוקת בית"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={houseMaintenanceExpenses}
                        style={{ width: '100%' }}
                        onChange={(value) => setHouseMaintenanceExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="גננות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={gardeningExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setGardeningExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="תקשורת"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={networkingExpenses}
                        style={{ width: '100%' }}
                        disabled
                    />
                </Form.Item>
                <Form.Item
                    label="כבלים/אינטרנט"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={internetExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setInternetExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="רכב"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={vehicleExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setVehicleExpenses (value || 0)}
                    />
                </Form.Item>
                {state.schoolExpenses.map((expenses, index) => (
                    <Form.Item
                        key={`schoolExpenses-${index}`}
                        label={`שכר לימוד יסודי - ילד ${index + 1}`}
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={expenses}
                            onChange={(value) => {
                                const updatedExpenses = [...state.schoolExpenses];
                                updatedExpenses[index] = value || 0;
                                setSchoolExpenses(updatedExpenses);
                            }}
                            min={0}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                ))}
                {state.highSchoolExpenses.map((expenses, index) => (
                    <Form.Item
                        key={`highSchoolExpenses-${index}`}
                        label={`שכר לימוד תיכון - ילד ${index + 1}`}
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={expenses}
                            onChange={(value) => {
                                const updatedExpenses = [...state.highSchoolExpenses];
                                updatedExpenses[index] = value || 0;
                                setHighSchoolExpenses(updatedExpenses);
                            }}
                            min={0}
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                ))}
                {/* <Form.Item
                    label="שכר לימוד - יסודי"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={schoolExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        // max={300}
                        onChange={(value) => setSchoolExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="שכר לימוד - תיכון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={highSchoolExpenses || 0}
                        style={{ width: '100%' }}
                        min={0}
                        // max={500}
                        onChange={(value) => setHighSchoolExpenses (value || 0)}
                    />
                </Form.Item> */}
                <Form.Item
                    label="שיעורים פרטיים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={personalLessonsExpenses}
                        style={{ width: '100%' }}
                    /* onChange={setPersonalLessons} */
                        min={0}
                        onChange={(value) => setPersonalLessonsExpenses (value || 0)}

                    />
                </Form.Item>
                <Form.Item
                    label="חוגי העשרה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={teenageClassExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setTeenageClassExpenses (value || 0)}
                    />
                </Form.Item>
                {/* <Form.Item
                    label="שכר לימוד"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={tuitionsExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setTuitionsExpenses (value || 0)}
                    />
                </Form.Item> */}
                <Form.Item
                    label="חינוך אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={otherEducationExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setOtherEducationExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="רופא שיניים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={dentistExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setDentistExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="רווחה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={welfareExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setWelfareExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="מזון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={foodExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setFoodExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="כביסה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={laundryExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setLaundryExpenses (value || 0)}
                    />
                </Form.Item>
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={otherExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        onChange={(value) => setOtherExpenses (value || 0)}
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
//                 <Form.Item label = "סכום">
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
