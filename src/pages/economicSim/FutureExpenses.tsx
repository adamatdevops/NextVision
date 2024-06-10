/* ./src/pages/economicSim/FutureExpenses.tsx */
import React, { useEffect } from 'react';
import { Card, Typography, Form, InputNumber } from 'antd';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureExpensesProps {
    setExpenses: (expenses: number[]) => void;
}

const calculateFamilyMemberCount = (familyStatus, partnerCommunityStatus, childrenCount): number => {
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

// const calculateGrossTax = (futureGrossIncome): number => {
//     let futureGrossTax = 0 + futureGrossIncome;

//     if (futureGrossIncome => 0) {
//         futureGrossTax = futureGrossIncome ;

//     }
// }

// const calculatekidEducationExpensess = (childrenCount, educationSystemOptions): number => {
//     let kidEducationExpenses = 0;

//     if (educationSystemOptions === '8') {
//         kidEducationExpenses = 0; // 2 for the parents + children
//     } else if (educationSystemOptions === 1) {
//         kidEducationExpenses = childrenCount * 200; // 1 parent + children
//     } else if (educationSystemOptions === 2) {
//         kidEducationExpenses = childrenCount * 400; // 1 parent + children
//     }
//     return kidEducationExpenses;
// };

// const calculateApartmentSquareFootageTax = (apartmentSquareFootage):number => {
//     let apartmentSquareFootageTax = 43 * apartmentSquareFootage;

//     if (apartmentSquareFootage === "40") {
//         apartmentSquareFootageTax = 43 * 40;
//     } else if (apartmentSquareFootage === "50") {
//         apartmentSquareFootageTax = 43 * 50;
//     } else if (apartmentSquareFootage === "60") {
//         apartmentSquareFootageTax = 43 * 60;
//     } else if (apartmentSquareFootage === "70") {
//         apartmentSquareFootageTax = 43 * 70;
//     } else if (apartmentSquareFootage === "100") {
//         apartmentSquareFootageTax = 43 * 100;
//     } else if (apartmentSquareFootage === "126") {
//         apartmentSquareFootageTax = 43 * 126;
//     }

//     return apartmentSquareFootageTax;
// }

const FutureExpenses: React.FC<FutureExpensesProps> = ({ setExpenses }) => {
    const {
        state,
        setEducationSystemFees,
        setFuturePropertyTaxExpenses,
        setFutureWaterAndSewerExpenses,
        // setFutureGasExpenses,
        // setFutureElectricityExpenses,
        setFutureEnergyExpenses,
        setFutureHouseMaintenanceExpenses,
        setFutureGardeningExpenses,
        setFutureNetworkingExpenses,
        setFutureInternetExpenses,
        setFutureVehicleExpenses,
        setFutureEducationSystemExpenses,
        setFutureSchoolExpenses,
        setFutureHighSchoolExpenses,
        setFuturePersonalLessonsExpenses,
        setFutureTeenageClassExpenses,
        setFutureEducationTransportationExpenses,
        // setFutureTuitionsExpenses,
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
        // setFutureDecorationsExpenses,
        setFutureOtherExpenses,
    } = useGlobalState();

    const {
        educationSystemFees,
        futurePropertyTaxExpenses,
        futureWaterAndSewerExpenses,
        // futureGasExpenses,
        // futureElectricityExpenses,
        futureEnergyExpenses,
        futureHouseMaintenanceExpenses,
        futureGardeningExpenses,
        futureNetworkingExpenses,
        futureInternetExpenses,
        futureVehicleExpenses,
        futureEducationSystemExpenses,
        futureSchoolExpenses,
        futureHighSchoolExpenses,
        futurePersonalLessonsExpenses,
        futureTeenageClassExpenses,
        futureEducationTransportationExpenses,
        // futureTuitionsExpenses,
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
        // futureDecorationsExpenses,
        futureOtherExpenses,
    } = state;

    useEffect(() => {

        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, childrenCount);
        // Calculate the total education fees
        const totalEducationSystemFees = state.educationSystemFees.reduce((acc, fee) => acc + fee, 0);
        /* IMPORTANT: For now you can ignore the error*/
        const apartmentSquareFootageTax = state.apartmentSquareFootage * 43; // Calculate with the number value
        // Calculate healthcare expenses ( member = 226 NIS per month, child = 75 NIS per month)
        const futureChildrenHealthInsuranceExpenses = state.numberOfChildren ? state.numberOfChildren * 75 : 0;


        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            setEducationSystemFees([]);
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax);
            setFutureWaterAndSewerExpenses(familyMemberCount * 85);
            // setFutureGasExpenses(0);
            // setFutureElectricityExpenses(0);
            /* IMPORTANT: Gas & Electricity needs to be calculated together as "Energy" */
            setFutureEnergyExpenses(familyMemberCount * 177);
            setFutureHouseMaintenanceExpenses(250);
            setFutureGardeningExpenses(futureGardeningExpenses || 0);
            setFutureNetworkingExpenses(100);
            setFutureInternetExpenses(futureInternetExpenses || 0);
            setFutureVehicleExpenses(futureVehicleExpenses || 0);
            setFutureEducationSystemExpenses(totalEducationSystemFees || 0);
            setFutureSchoolExpenses(futureSchoolExpenses || 0);
            setFutureHighSchoolExpenses(futureHighSchoolExpenses || 0);
            setFuturePersonalLessonsExpenses(futurePersonalLessonsExpenses || 0);
            setFutureTeenageClassExpenses(futureTeenageClassExpenses || 0);
            // setFutureTuitionsExpenses(futureTuitionsExpenses || 0);
            setFutureSafetyNetExpenses(futureSafetyNetExpenses || 0);
            setFutureHealthInsuranceExpenses(futureChildrenHealthInsuranceExpenses + 452 || 0);
            setFutureDentistExpenses(futureDentistExpenses || 0);
            setFutureWelfareExpenses(familyMemberCount * 71);
            setFutureFoodExpenses(futureFoodExpenses || 0);
            setFutureLaundryExpenses(futureLaundryExpenses || 0);
            setFutureFlatTaxExpenses(1500);
            setFutureGrossTaxExpenses(state.futureGrossIncome * 0.06);
            setFutureAlimonyExpenses(futureAlimonyExpenses || 0);
            setFutureCleaningExpenses(futureCleaningExpenses || 0);
            // setFutureDecorationsExpenses(0);
            setFutureOtherExpenses(futureOtherExpenses || 0);
        }


        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax);
            setFutureWaterAndSewerExpenses(familyMemberCount * 85);
            // setFutureGasExpenses(0);
            // setFutureElectricityExpenses(0);
            setFutureEnergyExpenses(familyMemberCount * 177);
            setFutureHouseMaintenanceExpenses(250);
            setFutureGardeningExpenses(futureAlimonyExpenses || 0);
            setFutureNetworkingExpenses(100);
            setFutureInternetExpenses(futureInternetExpenses || 0);
            setFutureVehicleExpenses(futureVehicleExpenses || 0);
            setFutureEducationSystemExpenses(totalEducationSystemFees || 0);
            setFutureSchoolExpenses(futureSchoolExpenses || 0);
            setFutureHighSchoolExpenses(futureHighSchoolExpenses || 0);
            setFuturePersonalLessonsExpenses(futurePersonalLessonsExpenses || 0);
            setFutureTeenageClassExpenses(futureTeenageClassExpenses || 0);
            setFutureEducationTransportationExpenses(futureEducationTransportationExpenses || 0);
            // setFutureTuitionsExpenses( futureTuitionsExpenses || 0);
            setFutureSafetyNetExpenses(futureSafetyNetExpenses || 0);
            setFutureHealthInsuranceExpenses(futureChildrenHealthInsuranceExpenses + 226 || 0);
            setFutureDentistExpenses(futureDentistExpenses || 0);
            setFutureWelfareExpenses(familyMemberCount * 71);
            setFutureFoodExpenses(futureFoodExpenses || 0);
            setFutureLaundryExpenses( futureLaundryExpenses || 0);
            setFutureFlatTaxExpenses(750);
            setFutureGrossTaxExpenses(state.futureGrossIncome * 0.06);
            setFutureAlimonyExpenses(futureAlimonyExpenses || 0);
            setFutureCleaningExpenses(futureCleaningExpenses || 0);
            // setFutureDecorationsExpenses(0);
            setFutureOtherExpenses(futureOtherExpenses || 0);
        }

        if (state.familyStatus === 'divorced' || 'single' || 'single-parent' || 'widower') {
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax);
            setFutureWaterAndSewerExpenses(familyMemberCount * 85);
            // setFutureGasExpenses(0);
            // setFutureElectricityExpenses(0);
            setFutureEnergyExpenses(familyMemberCount * 177);
            setFutureHouseMaintenanceExpenses(250);
            setFutureGardeningExpenses(futureGardeningExpenses || 0);
            setFutureNetworkingExpenses(100);
            setFutureInternetExpenses(futureInternetExpenses || 0);
            setFutureVehicleExpenses(futureVehicleExpenses || 0);
            setFutureEducationSystemExpenses(totalEducationSystemFees || 0);
            setFutureSchoolExpenses(futureSchoolExpenses || 0);
            setFutureHighSchoolExpenses(futureHighSchoolExpenses || 0);
            setFuturePersonalLessonsExpenses(futurePersonalLessonsExpenses || 0);
            setFutureTeenageClassExpenses(futureTeenageClassExpenses || 0);
            setFutureEducationTransportationExpenses(futureEducationTransportationExpenses || 0);
            // setFutureTuitionsExpenses(futureTuitionsExpenses || 0);
            setFutureSafetyNetExpenses(futureSafetyNetExpenses || 0);
            setFutureHealthInsuranceExpenses(futureChildrenHealthInsuranceExpenses + 226 || 0);
            setFutureDentistExpenses(futureDentistExpenses || 0);
            setFutureWelfareExpenses(familyMemberCount * 71);
            setFutureFoodExpenses(futureFoodExpenses || 0);
            setFutureLaundryExpenses(futureLaundryExpenses || 0);
            setFutureFlatTaxExpenses(750);
            setFutureGrossTaxExpenses(state.futureGrossIncome * 0.06);
            setFutureAlimonyExpenses(futureAlimonyExpenses || 0);
            setFutureCleaningExpenses(futureCleaningExpenses || 0);
            // setFutureDecorationsExpenses(0);
            setFutureOtherExpenses(futureOtherExpenses || 0);
        }

        setExpenses([
            futureEducationSystemExpenses,
            futurePropertyTaxExpenses,
            futureWaterAndSewerExpenses,
            // futureGasExpenses,
            // futureElectricityExpenses,
            futureEnergyExpenses,
            futureHouseMaintenanceExpenses,
            futureGardeningExpenses,
            futureNetworkingExpenses,
            futureInternetExpenses,
            futureVehicleExpenses,
            futurePersonalLessonsExpenses,
            futureTeenageClassExpenses,
            futureEducationTransportationExpenses,
            // futureTuitionsExpenses,
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
            // futureDecorationsExpenses,
            futureOtherExpenses,
        ]);
    }, [
        futureEducationSystemExpenses,
        futurePropertyTaxExpenses,
        futureWaterAndSewerExpenses,
        // futureGasExpenses,
        // futureElectricityExpenses,
        futureEnergyExpenses,
        futureHouseMaintenanceExpenses,
        futureGardeningExpenses,
        futureNetworkingExpenses,
        futureInternetExpenses,
        futureVehicleExpenses,
        futureSchoolExpenses,
        futurePersonalLessonsExpenses,
        futureTeenageClassExpenses,
        futureEducationTransportationExpenses,
        // futureTuitionsExpenses,
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
        // futureDecorationsExpenses,
        futureOtherExpenses,
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הוצאות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                <Form.Item
                    label="ארנונה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePropertyTaxExpenses}
                        // onChange={(value) => setFuturePropertyTaxExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                        disabled
                    />
                </Form.Item>
                <Form.Item
                    label="מים וביוב"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureWaterAndSewerExpenses}
                        // onChange={(value) => setFutureWaterAndSewerExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* <Form.Item
                label="גז"
                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGasExpenses}
                        onChange={(value) => setFutureGasExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                label="חשמל"
                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureElectricityExpenses}
                        onChange={(value) => setFutureElectricityExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                    label="אנרגיה(גז וחשמל)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEnergyExpenses}
                        onChange={(value) => setFutureEnergyExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="תחזוקת בית"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureHouseMaintenanceExpenses}
                        onChange={(value) => setFutureHouseMaintenanceExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="נוי, שיפוץ ודקורציה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGardeningExpenses}
                        onChange={(value) => setFutureGardeningExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="תקשורת"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNetworkingExpenses}
                        // onChange={(value) => setFutureNetworkingExpenses(value || 0)}
                        min={0}
                        disabled
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="כבלים/אינטרנט"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureInternetExpenses}
                        onChange={(value) => setFutureInternetExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="תחבורה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureVehicleExpenses}
                        onChange={(value) => setFutureVehicleExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="מערכת חינוך"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEducationSystemExpenses}
                        onChange={(value) => setFutureEducationSystemExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="שכר לימוד - יסודי"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureSchoolExpenses}
                        onChange={(value) => setFutureSchoolExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="שכר לימוד - תיכון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureHighSchoolExpenses}
                        onChange={(value) => setFutureHighSchoolExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="שיעורים פרטיים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePersonalLessonsExpenses}
                        onChange={(value) => setFuturePersonalLessonsExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="חוגי העשרה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureTeenageClassExpenses}
                        onChange={(value) => setFutureTeenageClassExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="הסעות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEducationTransportationExpenses}
                        onChange={(value) => setFutureEducationSystemExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* <Form.Item
                    label="שכר לימוד"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureTuitionsExpenses}
                        onChange={(value) => setFutureTuitionsExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                    label="רשת ביטחון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureSafetyNetExpenses}
                        onChange={(value) => setFutureSafetyNetExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="ביטוח בריאות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureHealthInsuranceExpenses}
                        onChange={(value) => setFutureHealthInsuranceExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="רופא שיניים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureDentistExpenses}
                        onChange={(value) => setFutureDentistExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="רווחה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureWelfareExpenses}
                        onChange={(value) => setFutureWelfareExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="מזון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureFoodExpenses}
                        onChange={(value) => setFutureFoodExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="כביסה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureLaundryExpenses}
                        onChange={(value) => setFutureLaundryExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="מס אחיד"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureFlatTaxExpenses}
                        onChange={(value) => setFutureFlatTaxExpenses(value || 0)}
                        min={750}
                        max={1500}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="מס ברוטו"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGrossTaxExpenses}
                        onChange={(value) => setFutureGrossTaxExpenses(value || 0)}
                        min={0}
                        max={2500}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="מזונות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureAlimonyExpenses}
                        onChange={(value) => setFutureAlimonyExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                <Form.Item
                    label="ניקיון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureCleaningExpenses}
                        onChange={(value) => setFutureCleaningExpenses(value || 0)}
                        min={0}
                        style={{ width: '100%' }}
                    />
                </Form.Item>
                {/* <Form.Item
                    label="שיפוץ ודקורציה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureDecorationsExpenses}
                        onChange={(value) => setFutureDecorationsExpenses(value || 0)}
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
