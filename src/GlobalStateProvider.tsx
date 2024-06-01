// src/context/GlobalStateContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface State {
    familyStatus: string | null;
    partnerCommunityStatus: string | null;
    personalBudget: number;
    childrenAddition: number, // TODO: this is to bet set according to the number of children
    provisions: number;
    laundry: number;
    gas: number;
    hygiene: number;
    maintenance: number;
    vehicle: number;
    energy: number;
    benefitForWork: string | null; // TODO: this is to set to one benefit or two
    outsourcedFood: string | null; // TODO: this is to set to one benefit or two
    chronicleTreatment: number;
    otherIncome: number;
    /* Future Incomes
    * IMPORTANT: NOT Everything Here IS Relevant
    */
    // futurePersonalBudget: number;
    futureNetIncome: number;
    futurePartnerNetIncome: number;
    futurePensionAllowance: number;
    futurePartnerPensionAllowance: number;
    futureNationalInsuranceAllowance: number;
    futureRecoveryFee: number;
    futurePartnerRecoveryFee: number;
    futureEducationFund: number;
    futurePartnerEducationFund: number;
    futureChildrenAddition: number;
    futureProvisions: number;
    futureLaundry: number;
    futureGas: number;
    futureHygiene: number;
    futureMaintenance: number;
    futureVehicle: number;
    futureEnergy: number;
    futureBenefitForWork: number;
    futureOutsourcedFood: number;
    futureChronicleTreatment: number;
    futureOtherIncome: number;
    /* Future expenses
    * IMPORTANT: NOT Everything Here IS Relevant
    * IMPORTANT: Needed to add "Expenses" prefix at the end due to expenses values that has the same name as the incomes. Please verify that the code is updated
    */
    futureExpenses: number[];
    futurePropertyTaxExpenses: number;
    futureWaterAndSewerExpenses: number;
    futureGasExpenses: number;
    futureElectricityExpenses: number;
    futureHouseMaintenanceExpenses: number;
    futureGardeningExpenses: number;
    futureNetworkingExpenses: number;
    futureInternetExpenses: number;
    futureVehicleExpenses: number;
    futureSchoolExpenses: number;
    futurePersonalLessonsExpenses: number;
    futureTuitionsExpenses: number;
    futureSafetyNetExpenses: number;
    futureHealthInsuranceExpenses: number;
    futureDentistExpenses: number;
    futureWelfareExpenses: number;
    futureFoodExpenses: number;
    futureLaundryExpenses: number;
    futureFlatTaxExpenses: number;
    futureGrossTaxExpenses: number;
    futureAlimonyExpenses: number;
    futureCleaningExpenses: number;
    futureDecorationsExpenses: number;
    futureOtherExpenses: number;
}

// Define action types as a union of string literals for better type safety
type ActionType =
    | 'SET_FAMILY_STATUS'
    | 'SET_PARTNER_COMMUNITY_STATUS'
    | 'SET_PERSONAL_BUDGET'
    | 'SET_CHILDREN_ADDITION'
    | 'SET_PROVISIONS'
    | 'SET_LAUNDRY'
    | 'SET_GAS'
    | 'SET_HYGIENE'
    | 'SET_MAINTENANCE'
    | 'SET_VEHICLE'
    | 'SET_ENERGY'
    | 'SET_BENEFIT_FOR_WORK'
    | 'SET_OUTSOURCED_FOOD'
    | 'SET_CHRONICLE_TREATMENT'
    | 'SET_OTHER_INCOME'
    /* Future Incomes*/
    // | 'SET_FUTURE_PERSONAL_BUDGET'
    | 'SET_FUTURE_NET_INCOME'
    | 'SET_FUTURE_PARTNER_NET_INCOME'
    | 'SET_FUTURE_CHILDREN_ADDITION'
    | 'SET_FUTURE_PROVISIONS'
    | 'SET_FUTURE_LAUNDRY'
    | 'SET_FUTURE_GAS'
    | 'SET_FUTURE_HYGIENE'
    | 'SET_FUTURE_MAINTENANCE'
    | 'SET_FUTURE_VEHICLE'
    | 'SET_FUTURE_ENERGY'
    | 'SET_FUTURE_BENEFIT_FOR_WORK'
    | 'SET_FUTURE_OUTSOURCED_FOOD'
    | 'SET_FUTURE_CHRONICLE_TREATMENT'
    | 'SET_FUTURE_PENSION_ALLOWANCE'
    | 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE'
    | 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE'
    | 'SET_FUTURE_RECOVERY_FEE'
    | 'SET_FUTURE_PARTNER_RECOVERY_FEE'
    | 'SET_FUTURE_EDUCATION_FUND'
    | 'SET_FUTURE_PARTNER_EDUCATION_FUND'
    | 'SET_FUTURE_OTHER_INCOME'
    /* Future Expenses*/
    | 'SET_FUTURE_EXPENSES'
    | 'SET_FUTURE_PROPERTY_TAX_EXPENSES'
    | 'SET_FUTURE_WATER_AND_SEWER_EXPENSES'
    | 'SET_FUTURE_GAS_EXPENSES'
    | 'SET_FUTURE_ELECTRICITY_EXPENSES'
    | 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES'
    | 'SET_FUTURE_GARDENING_EXPENSES'
    | 'SET_FUTURE_NETWORKING_EXPENSES'
    | 'SET_FUTURE_INTERNET_EXPENSES'
    | 'SET_FUTURE_VEHICLE_EXPENSES'
    | 'SET_FUTURE_SCHOOL_EXPENSES'
    | 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES'
    | 'SET_FUTURE_TUITIONS_EXPENSES'
    | 'SET_FUTURE_SAFETY_NET_EXPENSES'
    | 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES'
    | 'SET_FUTURE_DENTIST_EXPENSES'
    | 'SET_FUTURE_WELFARE_EXPENSES'
    | 'SET_FUTURE_FOOD_EXPENSES'
    | 'SET_FUTURE_LAUNDRY_EXPENSES'
    | 'SET_FUTURE_FLAT_TAX_EXPENSES'
    | 'SET_FUTURE_GROSS_TAX_EXPENSES'
    | 'SET_FUTURE_ALIMONY_EXPENSES'
    | 'SET_FUTURE_CLEANING_EXPENSES'
    | 'SET_FUTURE_DECORATIONS_EXPENSES'
    | 'SET_FUTURE_OTHER_EXPENSES';

interface Action {
    type: ActionType;
    payload: any;
}

const initialState: State = {
    familyStatus: null,
    partnerCommunityStatus: null,
    personalBudget: 4954,
    childrenAddition: 0, /* TODO: this is to set set according to the number of children */
    provisions: 3593,
    laundry: 305,
    gas: 270,
    hygiene: 44, /* TODO: this is to set set according to the number of family members */
    maintenance: 94,
    vehicle: 1094,
    energy: 286,
    benefitForWork: null, // TODO: this is to set to one benefit or two
    outsourcedFood: null, // TODO: this is to set to one benefit or two
    chronicleTreatment: 0,
    otherIncome: 0,
    /* Future Incomes*/
    // futurePersonalBudget: 4954,
    futureNetIncome: 0,
    futurePartnerNetIncome: 0,
    futurePensionAllowance: 0,
    futurePartnerPensionAllowance: 0,
    futureNationalInsuranceAllowance: 0,
    futureRecoveryFee: 0,
    futurePartnerRecoveryFee: 0,
    futureEducationFund: 0,
    futurePartnerEducationFund: 0,
    futureChildrenAddition: 0,
    futureProvisions: 0,
    futureLaundry: 0,
    futureGas: 0,
    futureHygiene: 0,
    futureMaintenance: 0,
    futureVehicle: 0,
    futureEnergy: 0,
    futureBenefitForWork: 0,
    futureOutsourcedFood: 0,
    futureChronicleTreatment: 0,
    futureOtherIncome: 0,
    /* Future Expenses*/
    futureExpenses: [],
    futurePropertyTaxExpenses: 0,
    futureWaterAndSewerExpenses: 0,
    futureGasExpenses: 0,
    futureElectricityExpenses: 0,
    futureHouseMaintenanceExpenses: 0,
    futureGardeningExpenses: 0,
    futureNetworkingExpenses: 0,
    futureInternetExpenses: 0,
    futureVehicleExpenses: 0,
    futureSchoolExpenses: 0,
    futurePersonalLessonsExpenses: 0,
    futureTuitionsExpenses: 0,
    futureSafetyNetExpenses: 0,
    futureHealthInsuranceExpenses: 0,
    futureDentistExpenses: 0,
    futureWelfareExpenses: 0,
    futureFoodExpenses: 0,
    futureLaundryExpenses: 0,
    futureFlatTaxExpenses: 0,
    futureGrossTaxExpenses: 0,
    futureAlimonyExpenses: 0,
    futureCleaningExpenses: 0,
    futureDecorationsExpenses: 0,
    futureOtherExpenses: 0,
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/
const setFamilyStatus = (newStatus: string | null): Action => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

const setPartnerCommunityStatus = (newStatus: string | null): Action => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

const setPersonalBudget = (newBudget: number ): Action => ({
    type: 'SET_PERSONAL_BUDGET',
    payload: newBudget,
});

const setChildrenAddition = (newChildrenAddition: number): Action => ({
    type: 'SET_CHILDREN_ADDITION',
    payload: newChildrenAddition,
});

const setProvisions = ( newProvisions: number): Action => ({
    type: 'SET_PROVISIONS',
    payload: newProvisions,
});

const setLaundry = (newLaundry: number): Action => ({
    type: 'SET_LAUNDRY',
    payload: newLaundry,
});

const setGas = (newGas: number): Action => ({
    type: 'SET_GAS',
    payload: newGas,
});

const setHygiene = (newHygiene: number): Action => ({
    type: 'SET_HYGIENE',
    payload: newHygiene,
});

const setMaintenance = ( newMaintenance: number): Action => ({
    type: 'SET_MAINTENANCE',
    payload: newMaintenance,
});

const setVehicle = (newVehicle: number): Action => ({
    type: 'SET_VEHICLE',
    payload: newVehicle,
});

const setEnergy = (newEnergy: number): Action => ({
    type: 'SET_ENERGY',
    payload: newEnergy,
});

const setBenefitForWork = (newBenefitForWork: string | null): Action => ({
    type: 'SET_BENEFIT_FOR_WORK',
    payload: newBenefitForWork,
});

const setOutsourcedFood = (newOutsourcedFood: string | null): Action => ({
    type: 'SET_OUTSOURCED_FOOD',
    payload: newOutsourcedFood,
});

const setChronicleTreatment = ( newChronicleTreatment: number): Action => ({
    type: 'SET_CHRONICLE_TREATMENT',
    payload: newChronicleTreatment,
});

const setOtherIncome = (newOtherIncome: number): Action => ({
    type: 'SET_OTHER_INCOME',
    payload: newOtherIncome,
});
/* Future Incomes*/
const setFutureNetIncome = (newNetIncome: number): Action => ({
    type: 'SET_FUTURE_NET_INCOME',
    payload: newNetIncome,
});

const setFuturePartnerNetIncome = (newPartnerNetIncome: number): Action => ({
    type: 'SET_FUTURE_PARTNER_NET_INCOME',
    payload: newPartnerNetIncome,
});

const setFuturePensionAllowance = (newPensionAllowance: number): Action => ({
    type: 'SET_FUTURE_PENSION_ALLOWANCE',
    payload: newPensionAllowance,
});

const setFuturePartnerPensionAllowance = (newPartnerPensionAllowance: number): Action => ({
    type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE',
    payload: newPartnerPensionAllowance,
});

const setFutureNationalInsuranceAllowance = (newNationalInsuranceAllowance: number): Action => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE',
    payload: newNationalInsuranceAllowance,
});

const setFutureRecoveryFee = (newRecoveryFee: number): Action => ({
    type: 'SET_FUTURE_RECOVERY_FEE',
    payload: newRecoveryFee,
});

const setFuturePartnerRecoveryFee = (newPartnerRecoveryFee: number): Action => ({
    type: 'SET_FUTURE_PARTNER_RECOVERY_FEE',
    payload: newPartnerRecoveryFee,
});

const setFutureEducationFund = (newEducationFund: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_FUND',
    payload: newEducationFund,
});

const setFuturePartnerEducationFund = (newPartnerEducationFund: number): Action => ({
    type: 'SET_FUTURE_PARTNER_EDUCATION_FUND',
    payload: newPartnerEducationFund,
});

const setFutureChildrenAddition = (newAddition: number): Action => ({
    type: 'SET_FUTURE_CHILDREN_ADDITION',
    payload: newAddition,
});

const setFutureProvisions = (newProvisions: number): Action => ({
    type: 'SET_FUTURE_PROVISIONS',
    payload: newProvisions,
});

const setFutureLaundry = (newLaundry: number): Action => ({
    type: 'SET_FUTURE_LAUNDRY',
    payload: newLaundry,
});

const setFutureGas = (newGas: number): Action => ({
    type: 'SET_FUTURE_GAS',
    payload: newGas,
});

const setFutureHygiene = (newHygiene: number): Action => ({
    type: 'SET_FUTURE_HYGIENE',
    payload: newHygiene,
});

const setFutureMaintenance = (newMaintenance: number): Action => ({
    type: 'SET_FUTURE_MAINTENANCE',
    payload: newMaintenance,
});

const setFutureVehicle = (newVehicle: number): Action => ({
    type: 'SET_FUTURE_VEHICLE',
    payload: newVehicle,
});

const setFutureEnergy = (newEnergy: number): Action => ({
    type: 'SET_FUTURE_ENERGY',
    payload: newEnergy,
});

const setFutureBenefitForWork = (newBenefit: number): Action => ({
    type: 'SET_FUTURE_BENEFIT_FOR_WORK',
    payload: newBenefit,
});

const setFutureOutsourcedFood = (newFood: number): Action => ({
    type: 'SET_FUTURE_OUTSOURCED_FOOD',
    payload: newFood,
});

const setFutureChronicleTreatment = (newTreatment: number): Action => ({
    type: 'SET_FUTURE_CHRONICLE_TREATMENT',
    payload: newTreatment,
});

const setFutureOtherIncome = (newIncome: number): Action => ({
    type: 'SET_FUTURE_OTHER_INCOME',
    payload: newIncome,
});
/* Future Expenses*/
const setFutureExpenses = (newExpenses: number[]): Action => ({
    type: 'SET_FUTURE_EXPENSES',
    payload: newExpenses,
});

const setFuturePropertyTaxExpenses = (newPropertyTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES',
    payload: newPropertyTaxExpenses,
});

const setFutureWaterAndSewerExpenses = (newWaterAndSewerExpenses: number): Action => ({
    type: 'SET_FUTURE_WATER_AND_SEWER_EXPENSES',
    payload: newWaterAndSewerExpenses,
});

const setFutureGasExpenses = (newGasExpenses: number): Action => ({
    type: 'SET_FUTURE_GAS_EXPENSES',
    payload: newGasExpenses,
});

const setFutureElectricityExpenses = (newElectricityExpenses: number): Action => ({
    type: 'SET_FUTURE_ELECTRICITY_EXPENSES',
    payload: newElectricityExpenses,
});

const setFutureHouseMaintenanceExpenses = (newMaintenanceExpenses: number): Action => ({
    type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES',
    payload: newMaintenanceExpenses,
});

const setFutureGardeningExpenses = (newGardeningExpenses: number): Action => ({
    type: 'SET_FUTURE_GARDENING_EXPENSES',
    payload: newGardeningExpenses,
});

const setFutureNetworkingExpenses = (newNetworkingExpenses: number): Action => ({
    type: 'SET_FUTURE_NETWORKING_EXPENSES',
    payload: newNetworkingExpenses,
});

const setFutureInternetExpenses = (newInternetExpenses: number): Action => ({
    type: 'SET_FUTURE_INTERNET_EXPENSES',
    payload: newInternetExpenses,
});

const setFutureVehicleExpenses = (newVehicleExpenses: number): Action => ({
    type: 'SET_FUTURE_VEHICLE_EXPENSES',
    payload: newVehicleExpenses,
});

const setFutureSchoolExpenses = (newSchoolExpenses: number): Action => ({
    type: 'SET_FUTURE_SCHOOL_EXPENSES',
    payload: newSchoolExpenses,
});

const setFuturePersonalLessonsExpenses = (newLessonsExpenses: number): Action => ({
    type: 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES',
    payload: newLessonsExpenses,
});

const setFutureTuitionsExpenses = (newTuitionsExpenses: number): Action => ({
    type: 'SET_FUTURE_TUITIONS_EXPENSES',
    payload: newTuitionsExpenses,
});

const setFutureSafetyNetExpenses = (newSafetyNetExpenses: number): Action => ({
    type: 'SET_FUTURE_SAFETY_NET_EXPENSES',
    payload: newSafetyNetExpenses,
});

const setFutureHealthInsuranceExpenses = (newHealthInsuranceExpenses: number): Action => ({
    type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES',
    payload: newHealthInsuranceExpenses,
});

const setFutureDentistExpenses = (newDentistExpenses: number): Action => ({
    type: 'SET_FUTURE_DENTIST_EXPENSES',
    payload: newDentistExpenses,
});

const setFutureWelfareExpenses = (newWelfareExpenses: number): Action => ({
    type: 'SET_FUTURE_WELFARE_EXPENSES',
    payload: newWelfareExpenses,
});

const setFutureFoodExpenses = (newFoodExpenses: number): Action => ({
    type: 'SET_FUTURE_FOOD_EXPENSES',
    payload: newFoodExpenses,
});

const setFutureLaundryExpenses = (newLaundryExpenses: number): Action => ({
    type: 'SET_FUTURE_LAUNDRY_EXPENSES',
    payload: newLaundryExpenses,
});

const setFutureFlatTaxExpenses = (newFlatTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_FLAT_TAX_EXPENSES',
    payload: newFlatTaxExpenses,
});

const setFutureGrossTaxExpenses = (newGrossTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_GROSS_TAX_EXPENSES',
    payload: newGrossTaxExpenses,
});

const setFutureAlimonyExpenses = (newAlimonyExpenses: number): Action => ({
    type: 'SET_FUTURE_ALIMONY_EXPENSES',
    payload: newAlimonyExpenses,
});

const setFutureCleaningExpenses = (newCleaningExpenses: number): Action => ({
    type: 'SET_FUTURE_CLEANING_EXPENSES',
    payload: newCleaningExpenses,
});

const setFutureDecorationsExpenses = (newDecorationsExpenses: number): Action => ({
    type: 'SET_FUTURE_DECORATIONS_EXPENSES',
    payload: newDecorationsExpenses,
});

const setFutureOtherExpenses = (newOtherExpenses: number): Action => ({
    type: 'SET_FUTURE_OTHER_EXPENSES',
    payload: newOtherExpenses,
});

/* Define the reducer function that takes the current state and an action */
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_FAMILY_STATUS':
            return { ...state, familyStatus: action.payload };
        case 'SET_PARTNER_COMMUNITY_STATUS':
            return { ...state, partnerCommunityStatus: action.payload };
        case 'SET_PERSONAL_BUDGET':
            return { ...state, personalBudget: action.payload };
        case 'SET_CHILDREN_ADDITION':
            return { ...state, childrenAddition: action.payload };
        case 'SET_PROVISIONS':
            return { ...state, provisions: action.payload };
        case 'SET_LAUNDRY':
            return { ...state, laundry: action.payload };
        case 'SET_GAS':
            return { ...state, gas: action.payload };
        case 'SET_HYGIENE':
            return { ...state, hygiene: action.payload };
        case 'SET_MAINTENANCE':
            return { ...state, maintenance: action.payload };
        case 'SET_VEHICLE':
            return { ...state, vehicle: action.payload };
        case 'SET_ENERGY':
            return { ...state, energy: action.payload };
        case 'SET_BENEFIT_FOR_WORK':
            return { ...state, benefitForWork: action.payload };
        case 'SET_OUTSOURCED_FOOD':
            return { ...state, outsourcedFood: action.payload };
        case 'SET_CHRONICLE_TREATMENT':
            return { ...state, chronicleTreatment: action.payload };
        case 'SET_OTHER_INCOME':
            return { ...state, otherIncome: action.payload };
        /* Future Incomes*/
        // case 'SET_FUTURE_PERSONAL_BUDGET':
        //     return { ...state, futurePersonalBudget: action.payload };
        case 'SET_FUTURE_NET_INCOME':
            return { ...state, futureNetIncome: action.payload };
        case 'SET_FUTURE_PENSION_ALLOWANCE':
            return { ...state, futurePensionAllowance: action.payload };
        case 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE':
            return { ...state, futurePartnerPensionAllowance: action.payload };
        case 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE':
            return { ...state, futureNationalInsuranceAllowance: action.payload };
        case 'SET_FUTURE_RECOVERY_FEE':
            return { ...state, futureRecoveryFee: action.payload };
        case 'SET_FUTURE_PARTNER_RECOVERY_FEE':
            return { ...state, futurePartnerRecoveryFee: action.payload };
        case 'SET_FUTURE_EDUCATION_FUND':
            return { ...state, futureEducationFund: action.payload };
        case 'SET_FUTURE_PARTNER_EDUCATION_FUND':
            return { ...state, futurePartnerEducationFund: action.payload };
        case 'SET_FUTURE_PARTNER_NET_INCOME':
            return { ...state, futurePartnerNetIncome: action.payload };
        case 'SET_FUTURE_CHILDREN_ADDITION':
            return { ...state, futureChildrenAddition: action.payload };
        case 'SET_FUTURE_PROVISIONS':
            return { ...state, futureProvisions: action.payload };
        case 'SET_FUTURE_LAUNDRY':
            return { ...state, futureLaundry: action.payload };
        case 'SET_FUTURE_GAS':
            return { ...state, futureGas: action.payload };
        case 'SET_FUTURE_HYGIENE':
            return { ...state, futureHygiene: action.payload };
        case 'SET_FUTURE_MAINTENANCE':
            return { ...state, futureMaintenance: action.payload };
        case 'SET_FUTURE_VEHICLE':
            return { ...state, futureVehicle: action.payload };
        case 'SET_FUTURE_ENERGY':
            return { ...state, futureEnergy: action.payload };
        case 'SET_FUTURE_BENEFIT_FOR_WORK':
            return { ...state, futureBenefitForWork: action.payload };
        case 'SET_FUTURE_OUTSOURCED_FOOD':
            return { ...state, futureOutsourcedFood: action.payload };
        case 'SET_FUTURE_CHRONICLE_TREATMENT':
            return { ...state, futureChronicleTreatment: action.payload };
        case 'SET_FUTURE_OTHER_INCOME':
            return { ...state, futureOtherIncome: action.payload };
        /* Future Expenses*/
        case 'SET_FUTURE_EXPENSES':
            return { ...state, futureExpenses: action.payload };
        case 'SET_FUTURE_PROPERTY_TAX_EXPENSES':
            return { ...state, futurePropertyTaxExpenses: action.payload };
        case 'SET_FUTURE_WATER_AND_SEWER_EXPENSES':
            return { ...state, futureWaterAndSewerExpenses: action.payload };
        case 'SET_FUTURE_GAS_EXPENSES':
            return { ...state, futureGasExpenses: action.payload };
        case 'SET_FUTURE_ELECTRICITY_EXPENSES':
            return { ...state, futureElectricityExpenses: action.payload };
        case 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES':
            return { ...state, futureHouseMaintenanceExpenses: action.payload };
        case 'SET_FUTURE_GARDENING_EXPENSES':
            return { ...state, futureGardeningExpenses: action.payload };
        case 'SET_FUTURE_NETWORKING_EXPENSES':
            return { ...state, futureNetworkingExpenses: action.payload };
        case 'SET_FUTURE_INTERNET_EXPENSES':
            return { ...state, futureInternetExpenses: action.payload };
        case 'SET_FUTURE_VEHICLE_EXPENSES':
            return { ...state, futureVehicleExpenses: action.payload };
        case 'SET_FUTURE_SCHOOL_EXPENSES':
            return { ...state, futureSchoolExpenses: action.payload };
        case 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES':
            return { ...state, futurePersonalLessonsExpenses: action.payload };
        case 'SET_FUTURE_TUITIONS_EXPENSES':
            return { ...state, futureTuitionsExpenses: action.payload };
        case 'SET_FUTURE_SAFETY_NET_EXPENSES':
            return { ...state, futureSafetyNetExpenses: action.payload };
        case 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES':
            return { ...state, futureHealthInsuranceExpenses: action.payload };
        case 'SET_FUTURE_DENTIST_EXPENSES':
            return { ...state, futureDentistExpenses: action.payload };
        case 'SET_FUTURE_WELFARE_EXPENSES':
            return { ...state, futureWelfareExpenses: action.payload };
        case 'SET_FUTURE_FOOD_EXPENSES':
            return { ...state, futureFoodExpenses: action.payload };
        case 'SET_FUTURE_LAUNDRY_EXPENSES':
            return { ...state, futureLaundryExpenses: action.payload };
        case 'SET_FUTURE_FLAT_TAX_EXPENSES':
            return { ...state, futureFlatTaxExpenses: action.payload };
        case 'SET_FUTURE_GROSS_TAX_EXPENSES':
            return { ...state, futureGrossTaxExpenses: action.payload };
        case 'SET_FUTURE_ALIMONY_EXPENSES':
            return { ...state, futureAlimonyExpenses: action.payload };
        case 'SET_FUTURE_CLEANING_EXPENSES':
            return { ...state, futureCleaningExpenses: action.payload };
        case 'SET_FUTURE_DECORATIONS_EXPENSES':
            return { ...state, futureDecorationsExpenses: action.payload };
        case 'SET_FUTURE_OTHER_EXPENSES':
            return { ...state, futureOtherExpenses: action.payload };
        default:
            return state;
    }
};

const GlobalStateContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
    setFamilyStatus: (newStatus: string | null) => void;
    setPartnerCommunityStatus: (newStatus: string | null) => void;
    setPersonalBudget: (newBudget: number) => void;
    setChildrenAddition: (newChildrenAddition: number) => void;
    setProvisions: (newProvisions: number) => void;
    setLaundry: (newLaundry: number) => void;
    setGas: (newGas: number) => void;
    setHygiene: (newHygiene: number) => void;
    setMaintenance: (newMaintenance: number) => void;
    setVehicle: (newVehicle: number) => void;
    setEnergy: (newEnergy: number) => void;
    setBenefitForWork: (newBenefitForWork: number) => void;
    setOutsourcedFood: (newOutsourcedFood: number) => void;
    setChronicleTreatment: (newChronicleTreatment: number) => void;
    setOtherIncome: (newOtherIncome: number) => void;
    /* Future Incomes*/
    // setFuturePersonalBudget: (newBudget: number) => void;
    setFutureNetIncome: (newNetIncome: number) => void;
    setFuturePartnerNetIncome: (newPartnerNetIncome: number) => void;
    setFuturePensionAllowance: (newPensionAllowance: number) => void;
    setFuturePartnerPensionAllowance: (newPartnerPensionAllowance: number) => void;
    setFutureNationalInsuranceAllowance: (newNationalInsuranceAllowance: number) => void;
    setFutureRecoveryFee: (newRecoveryFee: number) => void;
    setFuturePartnerRecoveryFee: (newPartnerRecoveryFee: number) => void;
    setFutureEducationFund: (newEducationFund: number) => void;
    setFuturePartnerEducationFund: (newPartnerEducationFund: number) => void;
    setFutureChildrenAddition: (newAddition: number) => void;
    setFutureProvisions: (newProvisions: number) => void;
    setFutureLaundry: (newLaundry: number) => void;
    setFutureGas: (newGas: number) => void;
    setFutureHygiene: (newHygiene: number) => void;
    setFutureMaintenance: (newMaintenance: number) => void;
    setFutureVehicle: (newVehicle: number) => void;
    setFutureEnergy: (newEnergy: number) => void;
    setFutureBenefitForWork: (newBenefit: number) => void;
    setFutureOutsourcedFood: (newFood: number) => void;
    setFutureChronicleTreatment: (newTreatment: number) => void;
    setFutureOtherIncome: (newIncome: number) => void;
    /* Future Expenses */
    setFutureExpenses: (newExpenses: number[]) => void;
    setFuturePropertyTaxExpenses: (newPropertyTaxExpenses: number) => void;
    setFutureWaterAndSewerExpenses: (newWaterAndSewerExpenses: number) => void;
    setFutureGasExpenses: (newGasExpenses: number) => void;
    setFutureElectricityExpenses: (newElectricityExpenses: number) => void;
    setFutureHouseMaintenanceExpenses: (newMaintenanceExpenses: number) => void;
    setFutureGardeningExpenses: (newGardeningExpenses: number) => void;
    setFutureNetworkingExpenses: (newNetworkingExpenses: number) => void;
    setFutureInternetExpenses: (newInternetExpenses: number) => void;
    setFutureVehicleExpenses: (newVehicleExpenses: number) => void;
    setFutureSchoolExpenses: (newSchoolExpenses: number) => void;
    setFuturePersonalLessonsExpenses: (newLessonsExpenses: number) => void;
    setFutureTuitionsExpenses: (newTuitionsExpenses: number) => void;
    setFutureSafetyNetExpenses: (newSafetyNetExpenses: number) => void;
    setFutureHealthInsuranceExpenses: (newHealthInsuranceExpenses: number) => void;
    setFutureDentistExpenses: (newDentistExpenses: number) => void;
    setFutureWelfareExpenses: (newWelfareExpenses: number) => void;
    setFutureFoodExpenses: (newFoodExpenses: number) => void;
    setFutureLaundryExpenses: (newLaundryExpenses: number) => void;
    setFutureFlatTaxExpenses: (newFlatTaxExpenses: number) => void;
    setFutureGrossTaxExpenses: (newGrossTaxExpenses: number) => void;
    setFutureAlimonyExpenses: (newAlimonyExpenses: number) => void;
    setFutureCleaningExpenses: (newCleaningExpenses: number) => void;
    setFutureDecorationsExpenses: (newDecorationsExpenses: number) => void;
    setFutureOtherExpenses: (newOtherExpenses: number) => void;

}>({
    state: initialState,
    dispatch: () => null,
    setFamilyStatus: () => null,
    setPartnerCommunityStatus: () => null,
    setPersonalBudget: () => null,
    setChildrenAddition: () => null,
    setProvisions: () => null,
    setLaundry: () => null,
    setGas: () => null,
    setHygiene: () => null,
    setMaintenance: () => null,
    setVehicle: () => null,
    setEnergy: () => null,
    setBenefitForWork: () => null,
    setOutsourcedFood: () => null,
    setChronicleTreatment: () => null,
    setOtherIncome: () => null,
    /* Future Incomes*/
    // setFuturePersonalBudget: () => null,
    setFutureNetIncome: () => null,
    setFuturePartnerNetIncome: () => null,
    setFuturePensionAllowance: () => null,
    setFuturePartnerPensionAllowance: () => null,
    setFutureNationalInsuranceAllowance: () => null,
    setFutureRecoveryFee: () => null,
    setFuturePartnerRecoveryFee: () => null,
    setFutureEducationFund: () => null,
    setFuturePartnerEducationFund: () => null,
    setFutureChildrenAddition: () => null,
    setFutureProvisions: () => null,
    setFutureLaundry: () => null,
    setFutureGas: () => null,
    setFutureHygiene: () => null,
    setFutureMaintenance: () => null,
    setFutureVehicle: () => null,
    setFutureEnergy: () => null,
    setFutureBenefitForWork: () => null,
    setFutureOutsourcedFood: () => null,
    setFutureChronicleTreatment: () => null,
    setFutureOtherIncome: () => null,
    /* Future Expenses*/
    setFutureExpenses: () => null,
    setFuturePropertyTaxExpenses: () => null,
    setFutureWaterAndSewerExpenses: () => null,
    setFutureGasExpenses: () => null,
    setFutureElectricityExpenses: () => null,
    setFutureHouseMaintenanceExpenses: () => null,
    setFutureGardeningExpenses: () => null,
    setFutureNetworkingExpenses: () => null,
    setFutureInternetExpenses: () => null,
    setFutureVehicleExpenses: () => null,
    setFutureSchoolExpenses: () => null,
    setFuturePersonalLessonsExpenses: () => null,
    setFutureTuitionsExpenses: () => null,
    setFutureSafetyNetExpenses: () => null,
    setFutureHealthInsuranceExpenses: () => null,
    setFutureDentistExpenses: () => null,
    setFutureWelfareExpenses: () => null,
    setFutureFoodExpenses: () => null,
    setFutureLaundryExpenses: () => null,
    setFutureFlatTaxExpenses: () => null,
    setFutureGrossTaxExpenses: () => null,
    setFutureAlimonyExpenses: () => null,
    setFutureCleaningExpenses: () => null,
    setFutureDecorationsExpenses: () => null,
    setFutureOtherExpenses: () => null,
});

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

// Explicitly define the props that GlobalStateProvider accepts
interface GlobalStateProviderProps {
    children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider
            value={{
                state,
                dispatch,
                setFamilyStatus: (newStatus) => dispatch(setFamilyStatus(newStatus)),
                setPartnerCommunityStatus: (newStatus) => dispatch(setPartnerCommunityStatus(newStatus)),
                setPersonalBudget: (newBudget) => dispatch(setPersonalBudget(newBudget)),
                setChildrenAddition: (newChildrenAddition) => dispatch(setChildrenAddition(newChildrenAddition)),
                setProvisions: (newProvisions) => dispatch(setProvisions(newProvisions)),
                setLaundry: (newLaundry) => dispatch(setLaundry(newLaundry)),
                setGas: (newGas) => dispatch(setGas(newGas)),
                setHygiene: (newHygiene) => dispatch(setHygiene(newHygiene)),
                setMaintenance: (newMaintenance) => dispatch(setMaintenance(newMaintenance)),
                setVehicle: (newVehicle) => dispatch(setVehicle(newVehicle)),
                setEnergy: (newEnergy) => dispatch(setEnergy(newEnergy)),
                /* TODO: this is to set to one benefit or two */
                setBenefitForWork: (newBenefitForWork) => dispatch(setBenefitForWork(newBenefitForWork)),
                /* TODO: this is to set to one benefit or two */
                setOutsourcedFood: (newOutsourcedFood) => dispatch(setOutsourcedFood(newOutsourcedFood)),
                setChronicleTreatment: (newChronicleTreatment) => dispatch(setChronicleTreatment(newChronicleTreatment)),
                setOtherIncome: (newOtherIncome) => dispatch(setOtherIncome(newOtherIncome)),
                /* Future Incomes*/
                // setFuturePersonalBudget: (newBudget) =>
                //     dispatch({ type: 'SET_FUTURE_PERSONAL_BUDGET', payload: newBudget }),
                setFutureNetIncome: (newNetIncome) =>
                    dispatch({ type: 'SET_FUTURE_NET_INCOME', payload: newNetIncome }),
                setFuturePartnerNetIncome: (newPartnerNetIncome) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_NET_INCOME', payload: newPartnerNetIncome }),
                setFuturePensionAllowance: (newPensionAllowance) =>
                    dispatch({ type: 'SET_FUTURE_PENSION_ALLOWANCE', payload: newPensionAllowance }),
                setFuturePartnerPensionAllowance: (newPartnerPensionAllowance) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE', payload: newPartnerPensionAllowance }),
                setFutureNationalInsuranceAllowance: (newNationalInsuranceAllowance) =>
                    dispatch({ type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE', payload: newNationalInsuranceAllowance }),
                setFutureRecoveryFee: (newRecoveryFee) =>
                    dispatch({ type: 'SET_FUTURE_RECOVERY_FEE', payload: newRecoveryFee }),
                setFuturePartnerRecoveryFee: (newPartnerRecoveryFee) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_RECOVERY_FEE', payload: newPartnerRecoveryFee }),
                setFutureEducationFund: (newEducationFund) =>
                    dispatch({ type: 'SET_FUTURE_EDUCATION_FUND', payload: newEducationFund }),
                setFuturePartnerEducationFund: (newPartnerEducationFund) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_EDUCATION_FUND', payload: newPartnerEducationFund }),
                setFutureChildrenAddition: (newAddition) =>
                    dispatch({ type: 'SET_FUTURE_CHILDREN_ADDITION', payload: newAddition }),
                setFutureProvisions: (newProvisions) => dispatch({ type: 'SET_FUTURE_PROVISIONS', payload: newProvisions }),
                setFutureLaundry: (newLaundry) => dispatch({ type: 'SET_FUTURE_LAUNDRY', payload: newLaundry }),
                setFutureGas: (newGas) => dispatch({ type: 'SET_FUTURE_GAS', payload: newGas }),
                setFutureHygiene: (newHygiene) => dispatch({ type: 'SET_FUTURE_HYGIENE', payload: newHygiene }),
                setFutureMaintenance: (newMaintenance) =>
                    dispatch({ type: 'SET_FUTURE_MAINTENANCE', payload: newMaintenance }),
                setFutureVehicle: (newVehicle) => dispatch({ type: 'SET_FUTURE_VEHICLE', payload: newVehicle }),
                setFutureEnergy: (newEnergy) => dispatch({ type: 'SET_FUTURE_ENERGY', payload: newEnergy }),
                setFutureBenefitForWork: (newBenefit) => dispatch({ type: 'SET_FUTURE_BENEFIT_FOR_WORK', payload: newBenefit }),
                setFutureOutsourcedFood: (newFood) => dispatch({ type: 'SET_FUTURE_OUTSOURCED_FOOD', payload: newFood }),
                setFutureChronicleTreatment: (newTreatment) =>
                    dispatch({ type: 'SET_FUTURE_CHRONICLE_TREATMENT', payload: newTreatment }),
                setFutureOtherIncome: (newIncome) => dispatch({ type: 'SET_FUTURE_OTHER_INCOME', payload: newIncome }),
                /* Future Expenses*/
                setFutureExpenses: (newExpenses) => dispatch({ type: 'SET_FUTURE_EXPENSES', payload: newExpenses }),
                setFuturePropertyTaxExpenses: (newPropertyTaxExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES', payload: newPropertyTaxExpenses }),
                setFutureGasExpenses: (newGasExpenses) => dispatch({ type: 'SET_FUTURE_GAS_EXPENSES', payload: newGasExpenses }),
                setFutureWaterAndSewerExpenses: (newWaterAndSewerExpenses) =>
                    dispatch({ type: 'SET_FUTURE_WATER_AND_SEWER_EXPENSES', payload: newWaterAndSewerExpenses }),
                setFutureElectricityExpenses: (newElectricityExpenses) => dispatch({ type: 'SET_FUTURE_ELECTRICITY_EXPENSES', payload: newElectricityExpenses }),
                setFutureHouseMaintenanceExpenses: (newMaintenanceExpenses) =>
                    dispatch({ type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES', payload: newMaintenanceExpenses }),
                setFutureGardeningExpenses: (newGardeningExpenses) => dispatch({ type: 'SET_FUTURE_GARDENING_EXPENSES', payload: newGardeningExpenses }),
                setFutureNetworkingExpenses: (newNetworkingExpenses) => dispatch({ type: 'SET_FUTURE_NETWORKING_EXPENSES', payload: newNetworkingExpenses }),
                setFutureInternetExpenses: (newInternetExpenses) => dispatch({ type: 'SET_FUTURE_INTERNET_EXPENSES', payload: newInternetExpenses }),
                setFutureVehicleExpenses: (newVehicleExpenses) => dispatch({ type: 'SET_FUTURE_VEHICLE_EXPENSES', payload: newVehicleExpenses }),
                setFutureSchoolExpenses: (newSchoolExpenses) => dispatch({ type: 'SET_FUTURE_SCHOOL_EXPENSES', payload: newSchoolExpenses }),
                setFuturePersonalLessonsExpenses: (newLessonsExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES', payload: newLessonsExpenses }),
                setFutureTuitionsExpenses: (newTuitionsExpenses) => dispatch({ type: 'SET_FUTURE_TUITIONS_EXPENSES', payload: newTuitionsExpenses }),
                setFutureSafetyNetExpenses: (newSafetyNetExpenses) =>
                    dispatch({ type: 'SET_FUTURE_SAFETY_NET_EXPENSES', payload: newSafetyNetExpenses }),
                setFutureHealthInsuranceExpenses: (newHealthInsuranceExpenses) =>
                    dispatch({ type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES', payload: newHealthInsuranceExpenses }),
                setFutureDentistExpenses: (newDentistExpenses) => dispatch({ type: 'SET_FUTURE_DENTIST_EXPENSES', payload: newDentistExpenses }),
                setFutureWelfareExpenses: (newWelfareExpenses) => dispatch({ type: 'SET_FUTURE_WELFARE_EXPENSES', payload: newWelfareExpenses }),
                setFutureFoodExpenses: (newFoodExpenses) => dispatch({ type: 'SET_FUTURE_FOOD_EXPENSES', payload: newFoodExpenses }),
                setFutureLaundryExpenses: (newLaundryExpenses) => dispatch({ type: 'SET_FUTURE_LAUNDRY_EXPENSES', payload: newLaundryExpenses }),
                setFutureFlatTaxExpenses: (newFlatTaxExpenses) => dispatch({ type: 'SET_FUTURE_FLAT_TAX_EXPENSES', payload: newFlatTaxExpenses }),
                setFutureGrossTaxExpenses: (newGrossTaxExpenses) => dispatch({ type: 'SET_FUTURE_GROSS_TAX_EXPENSES', payload: newGrossTaxExpenses }),
                setFutureAlimonyExpenses: (newAlimonyExpenses) => dispatch({ type: 'SET_FUTURE_ALIMONY_EXPENSES', payload: newAlimonyExpenses }),
                setFutureCleaningExpenses: (newCleaningExpenses) => dispatch({ type: 'SET_FUTURE_CLEANING_EXPENSES', payload: newCleaningExpenses }),
                setFutureDecorationsExpenses: (newDecorationsExpenses) => dispatch({ type: 'SET_FUTURE_DECORATIONS_EXPENSES', payload: newDecorationsExpenses }),
                setFutureOtherExpenses: (newOtherExpenses) => dispatch({ type: 'SET_FUTURE_OTHER_EXPENSES', payload: newOtherExpenses }),
            }}
        >
        {children}
        </GlobalStateContext.Provider>
    );
};