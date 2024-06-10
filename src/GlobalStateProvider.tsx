// src/context/GlobalStateContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface State {
    /* Current Incomes
    * IMPORTANT: NOT Everything Here IS Relevant
    */
    familyStatus: string | null;
    partnerCommunityStatus: string | null;
    apartmentSquareFootage: number;
    hasChildren: string | null;
    numberOfChildren: number;
    memberAge: number | null;
    memberPartnerAge: number | null;
    memberRetired: string | null;
    memberPartnerRetired: string | null;
    educationSystem: string[];
    educationSystemBudgets: number[];
    educationSystemFees: number[];
    educationTuitionFees: number[];
    /* Current Incomes */
    personalBudget: number;
    childrenAddition: number; // TODO: this is to bet set according to the number of children
    provisions: number;
    laundry: number;
    gas: number;
    hygiene: number;
    maintenance: number;
    vehicle: number;
    energy: number;
    benefitForWork: number; // TODO: this is to set to one benefit or two
    outsourcedFood: number; // TODO: this is to set to one benefit or two
    chronicleTreatment: number;
    seniority: number | null;
    partnerSeniority: number | null;
    deceasedSeniority: number | null;
    seniorityAddition: number;
    partnerSeniorityAddition: number
    deceasedSeniorityAddition: number;
    otherIncome: number;
    /* Current Expenses */
    // gasExpenses: number;
    electricityExpenses: number;
    maintenanceServiceExpenses: number;
    houseMaintenanceExpenses: number;
    gardeningExpenses: number;
    networkingExpenses: number;
    internetExpenses: number;
    vehicleExpenses: number;
    schoolExpenses: number[];
    highSchoolExpenses: number[];
    personalLessonsExpenses: number;
    teenageClassExpenses: number;
    // tuitionsExpenses: number;
    otherEducationExpenses: number;
    dentistExpenses: number;
    welfareExpenses: number;
    foodExpenses: number;
    laundryExpenses: number;
    otherExpenses: number;
    /* Future Incomes */
    // futurePersonalBudget: number;
    futureNetIncome: number;
    // futurePartnerNetIncome: number;
    futureGrossIncome: number;
    futurePensionAllowance: number;
    futurePartnerPensionAllowance: number;
    futureNationalInsuranceAllowance: number;
    futureNationalInsuranceAllowanceCommunity: number;
    futureElderlyPension: number;
    futurePartnerElderlyPension: number;
    futureRecoveryFee: number;
    futurePartnerRecoveryFee: number;
    futureEducationFund: number;
    futurePartnerEducationFund: number;
    futureChildrenAddition: number;
    futureProvisions: number;
    futureLaundry: number;
    // futureGas: number;
    futureHygiene: number;
    futureMaintenance: number;
    futureVehicle: number;
    // futureEnergy: number;
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
    // futureGasExpenses: number;
    // futureElectricityExpenses: number;
    futureEnergyExpenses: number;
    futureHouseMaintenanceExpenses: number;
    futureGardeningExpenses: number;
    futureNetworkingExpenses: number;
    futureInternetExpenses: number;
    futureVehicleExpenses: number;
    futureEducationSystemExpenses: number;
    futureSchoolExpenses: number[];
    futureHighSchoolExpenses: number[];
    futurePersonalLessonsExpenses: number;
    futureTeenageClassExpenses: number;
    futureEducationTransportationExpenses: number;
    // futureTuitionsExpenses: number;
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
    // futureDecorationsExpenses: number;
    futureOtherExpenses: number;
}

// Define action types as a union of string literals for better type safety
// type ActionType =
type ActionType =
    | 'SET_FAMILY_STATUS'
    | 'SET_PARTNER_COMMUNITY_STATUS'
    | 'SET_APARTMENT_SQUARE_FOOTAGE'
    | 'SET_HAS_CHILDREN'
    | 'SET_NUMBER_OF_CHILDREN'
    | 'SET_MEMBER_AGE'
    | 'SET_MEMBER_PARTNER_AGE'
    | 'SET_MEMBER_RETIRED'
    | 'SET_MEMBER_PARTNER_RETIRED'
    | 'SET_EDUCATION_SYSTEM'
    | 'SET_EDUCATION_SYSTEM_BUDGETS'
    | 'SET_EDUCATION_SYSTEM_FEES'
    | 'SET_EDUCATION_TUITION_FEES'
    /* Current Incomes */
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
    | 'SET_SENIORITY'
    | 'SET_PARTNER_SENIORITY'
    | 'SET_DECEASED_SENIORITY'
    | 'SET_SENIORITY_ADDITION'
    | 'SET_PARTNER_SENIORITY_ADDITION'
    | 'SET_DECEASED_SENIORITY_ADDITION'
    | 'SET_OTHER_INCOME'
    /* Current Expenses */
    // | 'SET_GAS_EXPENSES'
    | 'SET_ELECTRICITY_EXPENSES'
    | 'SET_MAINTENANCE_SERVICE_EXPENSES'
    | 'SET_HOUSE_MAINTENANCE_EXPENSES'
    | 'SET_GARDENING_EXPENSES'
    | 'SET_NETWORKING_EXPENSES'
    | 'SET_INTERNET_EXPENSES'
    | 'SET_VEHICLE_EXPENSES'
    | 'SET_SCHOOL_EXPENSES'
    | 'SET_HIGH_SCHOOL_EXPENSES'
    | 'SET_PERSONAL_LESSONS_EXPENSES'
    | 'SET_TEENAGE_CLASS_EXPENSES'
    | 'SET_TUITIONS_EXPENSES'
    | 'SET_OTHER_EDUCATION_EXPENSES'
    | 'SET_DENTIST_EXPENSES'
    | 'SET_WELFARE_EXPENSES'
    | 'SET_FOOD_EXPENSES'
    | 'SET_LAUNDRY_EXPENSES'
    | 'SET_OTHER_EXPENSE'
    /* Future Incomes*/
    // | 'SET_FUTURE_PERSONAL_BUDGET'
    | 'SET_FUTURE_NET_INCOME'
    // | 'SET_FUTURE_PARTNER_NET_INCOME'
    | 'SET_FUTURE_GROSS_INCOME'
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
    | 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY'
    | 'SET_FUTURE_ELDERLY_PENSION'
    | 'SET_FUTURE_PARTNER_ELDERLY_PENSION'
    | 'SET_FUTURE_RECOVERY_FEE'
    | 'SET_FUTURE_PARTNER_RECOVERY_FEE'
    | 'SET_FUTURE_EDUCATION_FUND'
    | 'SET_FUTURE_PARTNER_EDUCATION_FUND'
    | 'SET_FUTURE_OTHER_INCOME'
    /* Future Expenses*/
    | 'SET_FUTURE_EXPENSES'
    | 'SET_FUTURE_PROPERTY_TAX_EXPENSES'
    | 'SET_FUTURE_WATER_AND_SEWER_EXPENSES'
    // | 'SET_FUTURE_GAS_EXPENSES'
    // | 'SET_FUTURE_ELECTRICITY_EXPENSES'
    | 'SET_FUTURE_ENERGY_EXPENSES'
    | 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES'
    | 'SET_FUTURE_GARDENING_EXPENSES'
    | 'SET_FUTURE_NETWORKING_EXPENSES'
    | 'SET_FUTURE_INTERNET_EXPENSES'
    | 'SET_FUTURE_VEHICLE_EXPENSES'
    | 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES'
    | 'SET_FUTURE_SCHOOL_EXPENSES'
    | 'SET_FUTURE_HIGH_SCHOOL_EXPENSES'
    | 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES'
    | 'SET_FUTURE_TEENAGE_CLASS_EXPENSES'
    | 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES'
    // | 'SET_FUTURE_TUITIONS_EXPENSES'
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
    apartmentSquareFootage: 0,
    hasChildren: null,
    numberOfChildren: 0,
    memberAge: 0,
    memberPartnerAge: 0,
    memberRetired: null,
    memberPartnerRetired: null,
    educationSystem: [],
    educationSystemBudgets: [],
    educationSystemFees: [],
    // childrenData: [],
    /* Current Incomes */
    personalBudget: 0,
    childrenAddition: 0, /* TODO: this is to set set according to the number of children */
    provisions: 0,
    laundry: 0,
    gas: 0,
    hygiene: 0, /* TODO: this is to set set according to the number of family members */
    maintenance: 0,
    vehicle: 0,
    energy: 0,
    benefitForWork: 0, // TODO: this is to set to one benefit or two
    outsourcedFood: 0, // TODO: this is to set to one benefit or two
    chronicleTreatment: 0,
    seniority: 0,
    partnerSeniority: 0,
    deceasedSeniority: 0,
    seniorityAddition: 0,
    partnerSeniorityAddition: 0,
    deceasedSeniorityAddition: 0,
    otherIncome: 0,
    /* Current Expenses */
    // gasExpenses: 0,
    electricityExpenses: 0,
    futureEnergyExpenses: 0,
    maintenanceServiceExpenses: 0,
    houseMaintenanceExpenses: 0,
    gardeningExpenses: 0,
    networkingExpenses: 0,
    internetExpenses: 0,
    vehicleExpenses: 0,
    schoolExpenses: [],
    highSchoolExpenses: [],
    educationTuitionFees: [],
    personalLessonsExpenses: 0,
    teenageClassExpenses: 0,
    // tuitionsExpenses: 0,
    otherEducationExpenses: 0,
    dentistExpenses: 0,
    welfareExpenses: 0,
    foodExpenses: 0,
    laundryExpenses: 0,
    otherExpenses: 0,
    /* Future Incomes*/
    // futurePersonalBudget: 4954,
    futureNetIncome: 0,
    // futurePartnerNetIncome: 0,
    futureGrossIncome: 0,
    futurePensionAllowance: 0,
    futurePartnerPensionAllowance: 0,
    futureNationalInsuranceAllowance: 0,
    futureNationalInsuranceAllowanceCommunity: 0,
    futureElderlyPension: 0,
    futurePartnerElderlyPension: 0,
    futureRecoveryFee: 0,
    futurePartnerRecoveryFee: 0,
    futureEducationFund: 0,
    futurePartnerEducationFund: 0,
    futureChildrenAddition: 0,
    futureProvisions: 0,
    futureLaundry: 0,
    // futureGas: 0,
    futureHygiene: 0,
    futureMaintenance: 0,
    futureVehicle: 0,
    // futureEnergy: 0,
    futureBenefitForWork: 0,
    futureOutsourcedFood: 0,
    futureChronicleTreatment: 0,
    futureOtherIncome: 0,
    /* Future Expenses*/
    futureExpenses: [],
    futurePropertyTaxExpenses: 0,
    futureWaterAndSewerExpenses: 0,
    // futureGasExpenses: 0,
    // futureElectricityExpenses: 0,
    // futureEnergyExpenses: 0,
    futureHouseMaintenanceExpenses: 0,
    futureGardeningExpenses: 0,
    futureNetworkingExpenses: 0,
    futureInternetExpenses: 0,
    futureVehicleExpenses: 0,
    futureEducationSystemExpenses: 0,
    futureSchoolExpenses: [],
    futureHighSchoolExpenses: [],
    futurePersonalLessonsExpenses: 0,
    futureTeenageClassExpenses: 0,
    futureEducationTransportationExpenses: 0,
    // futureTuitionsExpenses: 0,
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
    // futureDecorationsExpenses: 0,
    futureOtherExpenses: 0,
};

/* Define action creators for better readability and maintainability
* IMPORTANT: NOTE the the "Future Incomes" and "Future Expenses" are still not included at the action creators
*/
export const setFamilyStatus = (newStatus: string | null): Action => ({
    type: 'SET_FAMILY_STATUS',
    payload: newStatus,
});

export const setPartnerCommunityStatus = (newStatus: string | null): Action => ({
    type: 'SET_PARTNER_COMMUNITY_STATUS',
    payload: newStatus,
});

export const apartmentSquareFootage = (newApartmentSquareFootage: number | null ): Action => ({
    type: 'SET_APARTMENT_SQUARE_FOOTAGE',
    payload: newApartmentSquareFootage,
});

export const hasChildren = (newHasChildren: string | null): Action => ({
    type: 'SET_HAS_CHILDREN',
    payload: newHasChildren,
});

export const numberOfChildren = (newNumberOfChildren: number): Action => ({
    type: 'SET_NUMBER_OF_CHILDREN',
    payload: newNumberOfChildren,
});

export const memberAge = (newMemberAge: number | null): Action => ({
    type: 'SET_MEMBER_AGE',
    payload: newMemberAge,
});

export const memberPartnerAge = (newMemberPartnerAge: number | null): Action => ({
    type: 'SET_MEMBER_PARTNER_AGE',
    payload: newMemberPartnerAge,
});

export const memberRetired = (newMemberRetired: string | null): Action => ({
    type: 'SET_MEMBER_RETIRED',
    payload: newMemberRetired,
});

export const memberPartnerRetired = (newMemberPartnerRetired: string | null): Action => ({
    type: 'SET_MEMBER_PARTNER_RETIRED',
    payload: newMemberPartnerRetired,
});

export const educationSystem = (newEducationSystem: string[]): Action => ({
    type: 'SET_EDUCATION_SYSTEM',
    payload: newEducationSystem,
});

export const educationSystemBudgets = (newEducationSystemBudgets: number[]): Action => ({
    type: 'SET_EDUCATION_SYSTEM_BUDGETS',
    payload: newEducationSystemBudgets,
});

export const educationSystemFees = (newEducationSystemFees: number[]): Action => ({
    type: 'SET_EDUCATION_SYSTEM_FEES',
    payload: newEducationSystemFees,
});

/* Current Incomes */
export const setPersonalBudget = (newBudget: number ): Action => ({
    type: 'SET_PERSONAL_BUDGET',
    payload: newBudget,
});

export const setChildrenAddition = (newChildrenAddition: number): Action => ({
    type: 'SET_CHILDREN_ADDITION',
    payload: newChildrenAddition,
});

export const setProvisions = ( newProvisions: number): Action => ({
    type: 'SET_PROVISIONS',
    payload: newProvisions,
});

export const setLaundry = (newLaundry: number): Action => ({
    type: 'SET_LAUNDRY',
    payload: newLaundry,
});

export const setGas = (newGas: number): Action => ({
    type: 'SET_GAS',
    payload: newGas,
});

export const setHygiene = (newHygiene: number): Action => ({
    type: 'SET_HYGIENE',
    payload: newHygiene,
});

export const setMaintenance = ( newMaintenance: number): Action => ({
    type: 'SET_MAINTENANCE',
    payload: newMaintenance,
});

export const setVehicle = (newVehicle: number): Action => ({
    type: 'SET_VEHICLE',
    payload: newVehicle,
});

export const setEnergy = (newEnergy: number): Action => ({
    type: 'SET_ENERGY',
    payload: newEnergy,
});

export const setBenefitForWork = (newBenefitForWork: number): Action => ({
    type: 'SET_BENEFIT_FOR_WORK',
    payload: newBenefitForWork,
});

export const setOutsourcedFood = (newOutsourcedFood: number): Action => ({
    type: 'SET_OUTSOURCED_FOOD',
    payload: newOutsourcedFood,
});

export const setChronicleTreatment = ( newChronicleTreatment: number): Action => ({
    type: 'SET_CHRONICLE_TREATMENT',
    payload: newChronicleTreatment,
});

export const setSeniority = (newSeniority: number): Action => ({
    type: 'SET_SENIORITY',
    payload: newSeniority,
});

export const setPartnerSeniority = (newPartnerSeniority: number): Action => ({
    type: 'SET_PARTNER_SENIORITY',
    payload: newPartnerSeniority,
});

export const setDeceasedSeniority = (newDeceasedSeniority: number): Action => ({
    type: 'SET_DECEASED_SENIORITY',
    payload: newDeceasedSeniority,
});
export const setSeniorityAddition = ( newSeniorityAddition: number): Action => ({
    type: 'SET_SENIORITY_ADDITION',
    payload: newSeniorityAddition,
});

export const setPartnerSeniorityAddition = (newPartnerSeniorityAddition: number): Action => ({
    type: 'SET_PARTNER_SENIORITY_ADDITION',
    payload: newPartnerSeniorityAddition,
});

export const setDeceasedSeniorityAddition = (newDeceasedSeniorityAddition: number): Action => ({
    type: 'SET_DECEASED_SENIORITY_ADDITION',
    payload: newDeceasedSeniorityAddition,
});

export const setOtherIncome = (newOtherIncome: number): Action => ({
    type: 'SET_OTHER_INCOME',
    payload: newOtherIncome,
});
/* Current Incomes */
// const setGasExpenses = (newGasExpenses: number): Action => ({
//     type: 'SET_GAS_EXPENSES',
//     payload: newGasExpenses,
// });

export const setElectricityExpenses = (newElectricityExpenses: number): Action => ({
    type: 'SET_ELECTRICITY_EXPENSES',
    payload: newElectricityExpenses,
});


export const setMaintenanceServiceExpenses = (newMaintenanceServiceExpenses: number): Action => ({
    type: 'SET_MAINTENANCE_SERVICE_EXPENSES',
    payload: newMaintenanceServiceExpenses,
});

export const setHouseMaintenanceExpenses = (newHouseMaintenanceExpenses: number): Action => ({
    type: 'SET_HOUSE_MAINTENANCE_EXPENSES',
    payload: newHouseMaintenanceExpenses,
});

export const setGardeningExpenses = (newGardeningExpenses: number): Action => ({
    type: 'SET_GARDENING_EXPENSES',
    payload: newGardeningExpenses,
});

export const setNetworkingExpenses = (newNetworkingExpenses: number): Action => ({
    type: 'SET_NETWORKING_EXPENSES',
    payload: newNetworkingExpenses,
});

export const setInternetExpenses = (newInternetExpenses: number): Action => ({
    type: 'SET_INTERNET_EXPENSES',
    payload: newInternetExpenses,
});

export const setVehicleExpenses = (newVehicleExpenses: number): Action => ({
    type: 'SET_VEHICLE_EXPENSES',
    payload: newVehicleExpenses,
});

export const setSchoolExpenses = (newSchoolExpenses: number[]): Action => ({
    type: 'SET_SCHOOL_EXPENSES',
    payload: newSchoolExpenses,
});

export const setHighSchoolExpenses = (newHighSchoolExpenses: number[]): Action => ({
    type: 'SET_HIGH_SCHOOL_EXPENSES',
    payload: newHighSchoolExpenses,
});

export const setEducationTuitionFees = (newEducationTuitionFees: number[]): Action => ({
    type: 'SET_EDUCATION_TUITION_FEES',
    payload: newEducationTuitionFees,
});

export const setPersonalLessonsExpenses = (newPersonalLessonsExpenses: number): Action => ({
    type: 'SET_PERSONAL_LESSONS_EXPENSES',
    payload: newPersonalLessonsExpenses,
});

export const setTeenageClassExpenses = (newTeenageClassExpenses: number): Action => ({
    type: 'SET_TEENAGE_CLASS_EXPENSES',
    payload: newTeenageClassExpenses,
});

// const setTuitionsExpenses = (newTuitionsExpenses: number): Action => ({
//     type: 'SET_TUITIONS_EXPENSES',
//     payload: newTuitionsExpenses,
// });

export const setOtherEducationExpenses = (newOtherEducationExpenses: number): Action => ({
    type: 'SET_OTHER_EDUCATION_EXPENSES',
    payload: newOtherEducationExpenses,
});

export const setDentistExpenses = (newDentistExpenses: number): Action => ({
    type: 'SET_DENTIST_EXPENSES',
    payload: newDentistExpenses,
});

export const setWelfareExpenses = (newWelfareExpenses: number): Action => ({
    type: 'SET_WELFARE_EXPENSES',
    payload: newWelfareExpenses,
});

export const setFoodExpenses = (newFoodExpenses: number): Action => ({
    type: 'SET_FOOD_EXPENSES',
    payload: newFoodExpenses,
});

export const setLaundryExpenses = (newLaundryExpenses: number): Action => ({
    type: 'SET_LAUNDRY_EXPENSES',
    payload: newLaundryExpenses,
});

export const setOtherExpenses = (newOtherExpenses: number): Action => ({
    type: 'SET_OTHER_EXPENSE',
    payload: newOtherExpenses,
});
/* Future Incomes*/
export const setFutureNetIncome = (newFutureNetIncome: number): Action => ({
    type: 'SET_FUTURE_NET_INCOME',
    payload: newFutureNetIncome,
});

// const setFuturePartnerNetIncome = (newFuturePartnerNetIncome: number): Action => ({
//     type: 'SET_FUTURE_PARTNER_NET_INCOME',
//     payload: newFuturePartnerNetIncome,
// });

export const setFutureGrossIncome = (newFutureGrossIncome: number): Action => ({
    type: 'SET_FUTURE_GROSS_INCOME',
    payload: newFutureGrossIncome,
});

export const setFuturePensionAllowance = (newFuturePensionAllowance: number): Action => ({
    type: 'SET_FUTURE_PENSION_ALLOWANCE',
    payload: newFuturePensionAllowance,
});

export const setFuturePartnerPensionAllowance = (newFuturePartnerPensionAllowance: number): Action => ({
    type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE',
    payload: newFuturePartnerPensionAllowance,
});

export const setFutureNationalInsuranceAllowance = (newFutureNationalInsuranceAllowance: number): Action => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE',
    payload: newFutureNationalInsuranceAllowance,
});

export const setFutureNationalInsuranceAllowanceCommunity = (newFutureNationalInsuranceAllowanceCommunity: number): Action => ({
    type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY',
    payload: newFutureNationalInsuranceAllowanceCommunity,
});

export const setFutureElderlyPension = (newFutureElderlyPension: number): Action => ({
    type: 'SET_FUTURE_ELDERLY_PENSION',
    payload: newFutureElderlyPension,
});

export const setFuturePartnerElderlyPension = (newFuturePartnerElderlyPension: number): Action => ({
    type: 'SET_FUTURE_PARTNER_ELDERLY_PENSION',
    payload: newFuturePartnerElderlyPension,
});

export const setFutureRecoveryFee = (newFutureRecoveryFee: number): Action => ({
    type: 'SET_FUTURE_RECOVERY_FEE',
    payload: newFutureRecoveryFee,
});

export const setFuturePartnerRecoveryFee = (newFuturePartnerRecoveryFee: number): Action => ({
    type: 'SET_FUTURE_PARTNER_RECOVERY_FEE',
    payload: newFuturePartnerRecoveryFee,
});

export const setFutureEducationFund = (newFutureEducationFund: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_FUND',
    payload: newFutureEducationFund,
});

export const setFuturePartnerEducationFund = (newFuturePartnerEducationFund: number): Action => ({
    type: 'SET_FUTURE_PARTNER_EDUCATION_FUND',
    payload: newFuturePartnerEducationFund,
});

export const setFutureChildrenAddition = (newFutureAddition: number): Action => ({
    type: 'SET_FUTURE_CHILDREN_ADDITION',
    payload: newFutureAddition,
});

export const setFutureProvisions = (newFutureProvisions: number): Action => ({
    type: 'SET_FUTURE_PROVISIONS',
    payload: newFutureProvisions,
});

export const setFutureLaundry = (newFutureLaundry: number): Action => ({
    type: 'SET_FUTURE_LAUNDRY',
    payload: newFutureLaundry,
});

// const setFutureGas = (newFutureGas: number): Action => ({
//     type: 'SET_FUTURE_GAS',
//     payload: newFutureGas,
// });

export const setFutureHygiene = (newFutureHygiene: number): Action => ({
    type: 'SET_FUTURE_HYGIENE',
    payload: newFutureHygiene,
});

export const setFutureMaintenance = (newFutureMaintenance: number): Action => ({
    type: 'SET_FUTURE_MAINTENANCE',
    payload: newFutureMaintenance,
});

export const setFutureVehicle = (newFutureVehicle: number): Action => ({
    type: 'SET_FUTURE_VEHICLE',
    payload: newFutureVehicle,
});

export const setFutureEnergy = (newFutureEnergy: number): Action => ({
    type: 'SET_FUTURE_ENERGY',
    payload: newFutureEnergy,
});

export const setFutureBenefitForWork = (newFutureBenefit: number): Action => ({
    type: 'SET_FUTURE_BENEFIT_FOR_WORK',
    payload: newFutureBenefit,
});

export const setFutureOutsourcedFood = (newFutureFood: number): Action => ({
    type: 'SET_FUTURE_OUTSOURCED_FOOD',
    payload: newFutureFood,
});

export const setFutureChronicleTreatment = (newFutureTreatment: number): Action => ({
    type: 'SET_FUTURE_CHRONICLE_TREATMENT',
    payload: newFutureTreatment,
});

export const setFutureOtherIncome = (newFutureIncome: number): Action => ({
    type: 'SET_FUTURE_OTHER_INCOME',
    payload: newFutureIncome,
});
/* Future Expenses*/
export const setFutureExpenses = (newFutureExpenses: number[]): Action => ({
    type: 'SET_FUTURE_EXPENSES',
    payload: newFutureExpenses,
});

export const setFuturePropertyTaxExpenses = (newFuturePropertyTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES',
    payload: newFuturePropertyTaxExpenses,
});

export const setFutureWaterAndSewerExpenses = (newFutureWaterAndSewerExpenses: number): Action => ({
    type: 'SET_FUTURE_WATER_AND_SEWER_EXPENSES',
    payload: newFutureWaterAndSewerExpenses,
});

// const setFutureGasExpenses = (newFutureGasExpenses: number): Action => ({
//     type: 'SET_FUTURE_GAS_EXPENSES',
//     payload: newFutureGasExpenses,
// });

// const setFutureElectricityExpenses = (newFutureElectricityExpenses: number): Action => ({
//     type: 'SET_FUTURE_ELECTRICITY_EXPENSES',
//     payload: newFutureElectricityExpenses,
// });

export const setFutureEnergyExpenses = (newFutureEnergyExpenses: number): Action => ({
    type: 'SET_FUTURE_ENERGY_EXPENSES',
    payload: newFutureEnergyExpenses,
});

export const setFutureHouseMaintenanceExpenses = (newFutureMaintenanceExpenses: number): Action => ({
    type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES',
    payload: newFutureMaintenanceExpenses,
});

export const setFutureGardeningExpenses = (newFutureGardeningExpenses: number): Action => ({
    type: 'SET_FUTURE_GARDENING_EXPENSES',
    payload: newFutureGardeningExpenses,
});

export const setFutureNetworkingExpenses = (newFutureNetworkingExpenses: number): Action => ({
    type: 'SET_FUTURE_NETWORKING_EXPENSES',
    payload: newFutureNetworkingExpenses,
});

export const setFutureInternetExpenses = (newFutureInternetExpenses: number): Action => ({
    type: 'SET_FUTURE_INTERNET_EXPENSES',
    payload: newFutureInternetExpenses,
});

export const setFutureVehicleExpenses = (newFutureVehicleExpenses: number): Action => ({
    type: 'SET_FUTURE_VEHICLE_EXPENSES',
    payload: newFutureVehicleExpenses,
});

export const setFutureEducationSystemExpenses = (newFutureEducationSystemExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES',
    payload: newFutureEducationSystemExpenses,
});

export const setFutureSchoolExpenses = (newFutureSchoolExpenses: number[]): Action => ({
    type: 'SET_FUTURE_SCHOOL_EXPENSES',
    payload: newFutureSchoolExpenses,
});

export const setFutureHighSchoolExpenses = (newFutureHighSchoolExpenses: number[]): Action => ({
    type: 'SET_FUTURE_HIGH_SCHOOL_EXPENSES',
    payload: newFutureHighSchoolExpenses,
});

export const setFuturePersonalLessonsExpenses = (newFutureLessonsExpenses: number): Action => ({
    type: 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES',
    payload: newFutureLessonsExpenses,
});

export const setFutureTeenageClassExpenses = (newFutureTeenageClassExpenses: number): Action => ({
    type: 'SET_FUTURE_TEENAGE_CLASS_EXPENSES',
    payload: newFutureTeenageClassExpenses,
});

export const setFutureEducationTransportationExpenses = (newFutureTransportationExpenses: number): Action => ({
    type: 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES',
    payload: newFutureTransportationExpenses,
});

// const setFutureTuitionsExpenses = (newTuitionsExpenses: number): Action => ({
//     type: 'SET_FUTURE_TUITIONS_EXPENSES',
//     payload: newTuitionsExpenses,
// });

export const setFutureSafetyNetExpenses = (newFutureSafetyNetExpenses: number): Action => ({
    type: 'SET_FUTURE_SAFETY_NET_EXPENSES',
    payload: newFutureSafetyNetExpenses,
});

export const setFutureHealthInsuranceExpenses = (newFutureHealthInsuranceExpenses: number): Action => ({
    type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES',
    payload: newFutureHealthInsuranceExpenses,
});

export const setFutureDentistExpenses = (newFutureDentistExpenses: number): Action => ({
    type: 'SET_FUTURE_DENTIST_EXPENSES',
    payload: newFutureDentistExpenses,
});

export const setFutureWelfareExpenses = (newFutureWelfareExpenses: number): Action => ({
    type: 'SET_FUTURE_WELFARE_EXPENSES',
    payload: newFutureWelfareExpenses,
});

export const setFutureFoodExpenses = (newFutureFoodExpenses: number): Action => ({
    type: 'SET_FUTURE_FOOD_EXPENSES',
    payload: newFutureFoodExpenses,
});

export const setFutureLaundryExpenses = (newFutureLaundryExpenses: number): Action => ({
    type: 'SET_FUTURE_LAUNDRY_EXPENSES',
    payload: newFutureLaundryExpenses,
});

export const setFutureFlatTaxExpenses = (newFutureFlatTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_FLAT_TAX_EXPENSES',
    payload: newFutureFlatTaxExpenses,
});

export const setFutureGrossTaxExpenses = (newFutureGrossTaxExpenses: number): Action => ({
    type: 'SET_FUTURE_GROSS_TAX_EXPENSES',
    payload: newFutureGrossTaxExpenses,
});

export const setFutureAlimonyExpenses = (newFutureAlimonyExpenses: number): Action => ({
    type: 'SET_FUTURE_ALIMONY_EXPENSES',
    payload: newFutureAlimonyExpenses,
});

export const setFutureCleaningExpenses = (newFutureCleaningExpenses: number): Action => ({
    type: 'SET_FUTURE_CLEANING_EXPENSES',
    payload: newFutureCleaningExpenses,
});

// const setFutureDecorationsExpenses = (newFutureDecorationsExpenses: number): Action => ({
//     type: 'SET_FUTURE_DECORATIONS_EXPENSES',
//     payload: newFutureDecorationsExpenses,
// });

export const setFutureOtherExpenses = (newFutureOtherExpenses: number): Action => ({
    type: 'SET_FUTURE_OTHER_EXPENSES',
    payload: newFutureOtherExpenses,
});

/* Define the reducer function that takes the current state and an action */
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_FAMILY_STATUS':
            return { ...state, familyStatus: action.payload };
        case 'SET_PARTNER_COMMUNITY_STATUS':
            return { ...state, partnerCommunityStatus: action.payload };
        case 'SET_APARTMENT_SQUARE_FOOTAGE':
            return { ...state, apartmentSquareFootage: action.payload };
        case 'SET_HAS_CHILDREN':
            return { ...state, hasChildren: action.payload };
        case 'SET_NUMBER_OF_CHILDREN':
            return {
                ...state, numberOfChildren: action.payload};  // Example calculationchildrenAddition: action.payload * 2000 };
        case 'SET_MEMBER_AGE':
            return { ...state, memberAge: action.payload };
        case 'SET_MEMBER_PARTNER_AGE':
            return { ...state, memberPartnerAge: action.payload };
        case 'SET_MEMBER_RETIRED':
            return { ...state, memberRetired: action.payload };
        case 'SET_MEMBER_PARTNER_RETIRED':
            return { ...state, memberPartnerRetired: action.payload };
        case 'SET_EDUCATION_SYSTEM':
            return { ...state, educationSystem: action.payload };
        case 'SET_EDUCATION_SYSTEM_BUDGETS':
            return { ...state, educationSystemBudgets: action.payload };
        case 'SET_EDUCATION_SYSTEM_FEES':
            return { ...state, educationSystemFees: action.payload };
        /* Current Incomes */
        // case 'SET_PERSONAL_BUDGET':
        //     return { ...state, personalBudget: action.payload };
        case 'SET_PERSONAL_BUDGET': {
            return { ...state, personalBudget: action.payload };
        }
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
        case 'SET_SENIORITY':
            return { ...state, seniority: action.payload };
        case 'SET_PARTNER_SENIORITY':
            return { ...state, partnerSeniority: action.payload };
        case 'SET_DECEASED_SENIORITY':
            return { ...state, deceasedSeniority: action.payload };
        case 'SET_SENIORITY_ADDITION':
            return { ...state, seniorityAddition: action.payload };
        case 'SET_PARTNER_SENIORITY_ADDITION':
            return { ...state, partnerSeniorityAddition: action.payload };
        case 'SET_DECEASED_SENIORITY_ADDITION':
            return { ...state, deceasedSeniorityAddition: action.payload };
        case 'SET_OTHER_INCOME':
            return { ...state, otherIncome: action.payload };
        /* Current Expenses */
        // case 'SET_GAS_EXPENSES':
        //     return { ...state, gasExpenses: action.payload };
        case 'SET_ELECTRICITY_EXPENSES':
            return { ...state, electricityExpenses: action.payload };
        case 'SET_MAINTENANCE_SERVICE_EXPENSES':
            return { ...state, maintenanceServiceExpenses: action.payload };
        case 'SET_HOUSE_MAINTENANCE_EXPENSES':
            return { ...state, houseMaintenanceExpenses: action.payload };
        case 'SET_GARDENING_EXPENSES':
            return { ...state, gardeningExpenses: action.payload };
        case 'SET_NETWORKING_EXPENSES':
            return { ...state, networkingExpenses: action.payload };
        case 'SET_INTERNET_EXPENSES':
            return { ...state, internetExpenses: action.payload };
        case 'SET_VEHICLE_EXPENSES':
            return { ...state, vehicleExpenses: action.payload };
        case 'SET_SCHOOL_EXPENSES':
            return { ...state, schoolExpenses: action.payload };
        case 'SET_HIGH_SCHOOL_EXPENSES':
            return { ...state, highSchoolExpenses: action.payload };
        case 'SET_PERSONAL_LESSONS_EXPENSES':
            return { ...state, personalLessonsExpenses: action.payload };
        case 'SET_EDUCATION_TUITION_FEES':
            return { ...state, educationTuitionFees: action.payload };
        case 'SET_TEENAGE_CLASS_EXPENSES':
            return { ...state, teenageClassExpenses: action.payload };
        // case 'SET_TUITIONS_EXPENSES':
        //     return { ...state, tuitionsExpenses: action.payload };
        case 'SET_OTHER_EDUCATION_EXPENSES':
            return { ...state, otherEducationExpenses: action.payload };
        case 'SET_DENTIST_EXPENSES':
            return { ...state, dentistExpenses: action.payload };
        case 'SET_WELFARE_EXPENSES':
            return { ...state, welfareExpenses: action.payload };
        case 'SET_FOOD_EXPENSES':
            return { ...state, foodExpenses: action.payload };
        case 'SET_LAUNDRY_EXPENSES':
            return { ...state, laundryExpenses: action.payload };
        case 'SET_OTHER_EXPENSE':
            return { ...state, otherExpenses: action.payload };
        /* Future Incomes*/
        // case 'SET_FUTURE_PERSONAL_BUDGET':
        //     return { ...state, futurePersonalBudget: action.payload };
        case 'SET_FUTURE_NET_INCOME':
            return { ...state, futureNetIncome: action.payload };
        case 'SET_FUTURE_GROSS_INCOME':
            return { ...state, futureGrossIncome: action.payload };
        case 'SET_FUTURE_PENSION_ALLOWANCE':
            return { ...state, futurePensionAllowance: action.payload };
        case 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE':
            return { ...state, futurePartnerPensionAllowance: action.payload };
        case 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE':
            return { ...state, futureNationalInsuranceAllowance: action.payload };
        case 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY':
            return { ...state, futureNationalInsuranceAllowanceCommunity: action.payload };
        case 'SET_FUTURE_ELDERLY_PENSION':
            return { ...state, futureElderlyPension: action.payload };
        case 'SET_FUTURE_PARTNER_ELDERLY_PENSION':
            return { ...state, futurePartnerElderlyPension: action.payload };
        case 'SET_FUTURE_RECOVERY_FEE':
            return { ...state, futureRecoveryFee: action.payload };
        case 'SET_FUTURE_PARTNER_RECOVERY_FEE':
            return { ...state, futurePartnerRecoveryFee: action.payload };
        case 'SET_FUTURE_EDUCATION_FUND':
            return { ...state, futureEducationFund: action.payload };
        case 'SET_FUTURE_PARTNER_EDUCATION_FUND':
            return { ...state, futurePartnerEducationFund: action.payload };
        // case 'SET_FUTURE_PARTNER_NET_INCOME':
        //     return { ...state, futurePartnerNetIncome: action.payload };
        case 'SET_FUTURE_CHILDREN_ADDITION':
            return { ...state, futureChildrenAddition: action.payload };
        case 'SET_FUTURE_PROVISIONS':
            return { ...state, futureProvisions: action.payload };
        case 'SET_FUTURE_LAUNDRY':
            return { ...state, futureLaundry: action.payload };
        // case 'SET_FUTURE_GAS':
        //     return { ...state, futureGas: action.payload };
        case 'SET_FUTURE_HYGIENE':
            return { ...state, futureHygiene: action.payload };
        case 'SET_FUTURE_MAINTENANCE':
            return { ...state, futureMaintenance: action.payload };
        case 'SET_FUTURE_VEHICLE':
            return { ...state, futureVehicle: action.payload };
        // case 'SET_FUTURE_ENERGY':
        //     return { ...state, futureEnergy: action.payload };
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
        // case 'SET_FUTURE_GAS_EXPENSES':
        //     return { ...state, futureGasExpenses: action.payload };
        // case 'SET_FUTURE_ELECTRICITY_EXPENSES':
        //     return { ...state, futureElectricityExpenses: action.payload };
        case 'SET_FUTURE_ENERGY_EXPENSES':
            return { ...state, futureEnergyExpenses: action.payload };
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
        case 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES':
            return { ...state, futureEducationSystemExpenses: action.payload };
        case 'SET_FUTURE_SCHOOL_EXPENSES':
            return { ...state, futureSchoolExpenses: action.payload };
        case 'SET_FUTURE_HIGH_SCHOOL_EXPENSES':
            return { ...state, futureHighSchoolExpenses: action.payload };
        case 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES':
            return { ...state, futurePersonalLessonsExpenses: action.payload };
        case 'SET_FUTURE_TEENAGE_CLASS_EXPENSES':
            return { ...state, futureTeenageClassExpenses: action.payload };
        case 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES':
            return { ...state, futureEducationTransportationExpenses: action.payload };
        // case 'SET_FUTURE_TUITIONS_EXPENSES':
        //     return { ...state, futureTuitionsExpenses: action.payload };
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
        // case 'SET_FUTURE_DECORATIONS_EXPENSES':
        //     return { ...state, futureDecorationsExpenses: action.payload };
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
    setApartmentSquareFootage: (newApartmentSquareFootage: number | null) => void;
    setHasChildren: (newHasChildren: string | null) => void;
    setNumberOfChildren: (newNumberOfChildren: number) => void;
    setMemberAge: (newMemberAge: number | null) => void;
    setMemberPartnerAge: (newMemberPartnerAge: number | null) => void;
    setMemberRetired: (newMemberRetired: string | null) => void;
    setMemberPartnerRetired: (newMemberPartnerRetired: string | null) => void;
    setEducationSystem: (newEducationSystem: string[]) => void;
    setEducationSystemBudgets: (newEducationSystemBudgets: number[]) => void;
    setEducationSystemFees: (newEducationSystemFees: number[]) => void;
    /* Current Incomes */
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
    setSeniority: (newSeniority: number) => void;
    setPartnerSeniority: (newPartnerSeniority: number) => void;
    setDeceasedSeniority: (newDeceasedSeniority: number) => void;
    setSeniorityAddition: (newSeniorityAddition: number) => void;
    setPartnerSeniorityAddition: (newPartnerSeniorityAddition: number) => void;
    setDeceasedSeniorityAddition: (newDeceasedSeniorityAddition: number) => void;
    setOtherIncome: (newOtherIncome: number) => void;
    /* Current Expenses */
    // setGasExpenses: (newGasExpenses: number) => void;
    setElectricityExpenses: (newElectricityExpenses: number) => void;
    setMaintenanceServiceExpenses: (newMaintenanceServiceExpenses: number) => void;
    setHouseMaintenanceExpenses: (newHouseMaintenanceExpenses: number) => void;
    setGardeningExpenses: (newGardeningExpenses: number) => void;
    setNetworkingExpenses: (newNetworkingExpenses: number) => void;
    setInternetExpenses: (newInternetExpenses: number) => void;
    setVehicleExpenses: (newVehicleExpenses: number) => void;
    setSchoolExpenses: (newSchoolExpenses: number[]) => void;
    setHighSchoolExpenses: (newHighSchoolExpenses: number[]) => void;
    setEducationTuitionFees: (newEducationTuitionFees: number[]) => void;
    setPersonalLessonsExpenses: (newPersonalLessonsExpenses: number) => void;
    setTeenageClassExpenses: (newTeenageClassExpenses: number) => void;
    // setTuitionsExpenses: (newTuitionsExpenses: number) => void;
    setOtherEducationExpenses: (newOtherEducationExpenses: number) => void;
    setDentistExpenses: (newDentistExpenses: number) => void;
    setWelfareExpenses: (newWelfareExpenses: number) => void;
    setFoodExpenses: (newFoodExpenses: number) => void;
    setLaundryExpenses: (newLaundryExpenses: number) => void;
    setOtherExpenses: (newOtherExpenses: number) => void;
    /* Future Incomes*/
    // setFuturePersonalBudget: (newBudget: number) => void;
    setFutureNetIncome: (newFutureNetIncome: number) => void;
    // setFuturePartnerNetIncome: (newPartnerNetIncome: number) => void;
    setFutureGrossIncome: (newFutureGrossIncome: number) => void;
    setFuturePensionAllowance: (newFuturePensionAllowance: number) => void;
    setFuturePartnerPensionAllowance: (newFuturePartnerPensionAllowance: number) => void;
    setFutureNationalInsuranceAllowance: (newFutureNationalInsuranceAllowance: number) => void;
    setFutureNationalInsuranceAllowanceCommunity: (newFutureNationalInsuranceAllowanceCommunity: number) => void;
    setFutureElderlyPension: (newFutureElderlyPension: number) => void;
    setFuturePartnerElderlyPension: (newFuturePartnerElderlyPension: number) => void;
    setFutureRecoveryFee: (newFutureRecoveryFee: number) => void;
    setFuturePartnerRecoveryFee: (newFuturePartnerRecoveryFee: number) => void;
    setFutureEducationFund: (newFutureEducationFund: number) => void;
    setFuturePartnerEducationFund: (newFuturePartnerEducationFund: number) => void;
    setFutureChildrenAddition: (newFutureAddition: number) => void;
    setFutureProvisions: (newFutureProvisions: number) => void;
    setFutureLaundry: (newFutureLaundry: number) => void;
    // setFutureGas: (newGas: number) => void;
    setFutureHygiene: (newFutureHygiene: number) => void;
    setFutureMaintenance: (newFutureMaintenance: number) => void;
    setFutureVehicle: (newFutureVehicle: number) => void;
    // setFutureEnergy: (newEnergy: number) => void;
    setFutureBenefitForWork: (newFutureBenefit: number) => void;
    setFutureOutsourcedFood: (newFutureFood: number) => void;
    setFutureChronicleTreatment: (newFutureTreatment: number) => void;
    setFutureOtherIncome: (newFutureIncome: number) => void;
    /* Future Expenses */
    setFutureExpenses: (newFutureExpenses: number[]) => void;
    setFuturePropertyTaxExpenses: (newFuturePropertyTaxExpenses: number) => void;
    setFutureWaterAndSewerExpenses: (newFutureWaterAndSewerExpenses: number) => void;
    // setFutureGasExpenses: (newFutureGasExpenses: number) => void;
    // setFutureElectricityExpenses: (newFutureElectricityExpenses: number) => void;
    setFutureEnergyExpenses: (newFutureEnergyExpenses: number) => void;
    setFutureHouseMaintenanceExpenses: (newFutureMaintenanceExpenses: number) => void;
    setFutureGardeningExpenses: (newFutureGardeningExpenses: number) => void;
    setFutureNetworkingExpenses: (newFutureNetworkingExpenses: number) => void;
    setFutureInternetExpenses: (newFutureInternetExpenses: number) => void;
    setFutureVehicleExpenses: (newVFutureVehicleExpenses: number) => void;
    setFutureEducationSystemExpenses: (newFutureEducationSystemExpenses: number) => void;
    setFutureSchoolExpenses: (newFutureSchoolExpenses: number[]) => void;
    setFutureHighSchoolExpenses: (newFutureHighSchoolExpenses: number[]) => void;
    setFuturePersonalLessonsExpenses: (newFutureLessonsExpenses: number) => void;
    setFutureTeenageClassExpenses: (newFutureTeenageClassExpenses: number) => void;
    setFutureEducationTransportationExpenses: (newFutureTransportationExpenses: number) => void;
    // setFutureTuitionsExpenses: (newFutureTuitionsExpenses: number) => void;
    setFutureSafetyNetExpenses: (newFutureSafetyNetExpenses: number) => void;
    setFutureHealthInsuranceExpenses: (newFutureHealthInsuranceExpenses: number) => void;
    setFutureDentistExpenses: (newFutureDentistExpenses: number) => void;
    setFutureWelfareExpenses: (newFutureWelfareExpenses: number) => void;
    setFutureFoodExpenses: (newFutureFoodExpenses: number) => void;
    setFutureLaundryExpenses: (newFutureLaundryExpenses: number) => void;
    setFutureFlatTaxExpenses: (newFutureFlatTaxExpenses: number) => void;
    setFutureGrossTaxExpenses: (newFutureGrossTaxExpenses: number) => void;
    setFutureAlimonyExpenses: (newFutureAlimonyExpenses: number) => void;
    setFutureCleaningExpenses: (newFutureCleaningExpenses: number) => void;
    // setFutureDecorationsExpenses: (newFutureDecorationsExpenses: number) => void;
    setFutureOtherExpenses: (newFutureOtherExpenses: number) => void;

}>({
    state: initialState,
    dispatch: () => null,
    setFamilyStatus: () => null,
    setPartnerCommunityStatus: () => null,
    setApartmentSquareFootage: () => null,
    setHasChildren: () => null,
    setNumberOfChildren: () => null,
    setMemberAge: () => null,
    setMemberPartnerAge: () => null,
    setMemberRetired: () => null,
    setMemberPartnerRetired: () => null,
    setEducationSystem: () => null,
    setEducationSystemBudgets: () => null,
    setEducationSystemFees: () => null,
    /* Current Incomes */
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
    setSeniority: () => null,
    setPartnerSeniority: () => null,
    setDeceasedSeniority: () => null,
    setSeniorityAddition: () => null,
    setPartnerSeniorityAddition: () => null,
    setDeceasedSeniorityAddition: () => null,
    setOtherIncome: () => null,
    /* Current Expenses */
    // setGasExpenses: () => null,
    setElectricityExpenses: () => null,
    setMaintenanceServiceExpenses: () => null,
    setHouseMaintenanceExpenses: () => null,
    setGardeningExpenses: () => null,
    setNetworkingExpenses: () => null,
    setInternetExpenses: () => null,
    setVehicleExpenses: () => null,
    setSchoolExpenses: () => null,
    setHighSchoolExpenses: () => null,
    setEducationTuitionFees: () => null,
    setPersonalLessonsExpenses: () => null,
    setTeenageClassExpenses: () => null,
    // setTuitionsExpenses: () => null,
    setOtherEducationExpenses: () => null,
    setDentistExpenses: () => null,
    setWelfareExpenses: () => null,
    setFoodExpenses: () => null,
    setLaundryExpenses: () => null,
    setOtherExpenses: () => null,
    /* Future Incomes*/
    // setFuturePersonalBudget: () => null,
    setFutureNetIncome: () => null,
    // setFuturePartnerNetIncome: () => null,
    setFutureGrossIncome: () => null,
    setFuturePensionAllowance: () => null,
    setFuturePartnerPensionAllowance: () => null,
    setFutureNationalInsuranceAllowance: () => null,
    setFutureNationalInsuranceAllowanceCommunity: () => null,
    setFutureElderlyPension: () => null,
    setFuturePartnerElderlyPension: () => null,
    setFutureRecoveryFee: () => null,
    setFuturePartnerRecoveryFee: () => null,
    setFutureEducationFund: () => null,
    setFuturePartnerEducationFund: () => null,
    setFutureChildrenAddition: () => null,
    setFutureProvisions: () => null,
    setFutureLaundry: () => null,
    // setFutureGas: () => null,
    setFutureHygiene: () => null,
    setFutureMaintenance: () => null,
    setFutureVehicle: () => null,
    // setFutureEnergy: () => null,
    setFutureBenefitForWork: () => null,
    setFutureOutsourcedFood: () => null,
    setFutureChronicleTreatment: () => null,
    setFutureOtherIncome: () => null,
    /* Future Expenses*/
    setFutureExpenses: () => null,
    setFuturePropertyTaxExpenses: () => null,
    setFutureWaterAndSewerExpenses: () => null,
    // setFutureGasExpenses: () => null,
    // setFutureElectricityExpenses: () => null,
    setFutureEnergyExpenses: () => null,
    setFutureHouseMaintenanceExpenses: () => null,
    setFutureGardeningExpenses: () => null,
    setFutureNetworkingExpenses: () => null,
    setFutureInternetExpenses: () => null,
    setFutureVehicleExpenses: () => null,
    setFutureEducationSystemExpenses: () => null,
    setFutureSchoolExpenses: () => null,
    setFutureHighSchoolExpenses: () => null,
    setFuturePersonalLessonsExpenses: () => null,
    setFutureTeenageClassExpenses: () => null,
    setFutureEducationTransportationExpenses: () => null,
    // setFutureTuitionsExpenses: () => null,
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
    // setFutureDecorationsExpenses: () => null,
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
                setFamilyStatus: (newStatus) => dispatch({type:'SET_FAMILY_STATUS', payload: newStatus}),
                setPartnerCommunityStatus: (newStatus) => dispatch({type: 'SET_PARTNER_COMMUNITY_STATUS', payload: newStatus}),
                setApartmentSquareFootage: (newApartmentSquareFootage) => dispatch({type: 'SET_APARTMENT_SQUARE_FOOTAGE', payload: newApartmentSquareFootage}),
                setHasChildren: (newHasChildren) => dispatch({type: 'SET_HAS_CHILDREN', payload: newHasChildren}),
                setNumberOfChildren: (newNumberOfChildren: number) => dispatch({ type: 'SET_NUMBER_OF_CHILDREN', payload: newNumberOfChildren}),
                setMemberAge: (newMemberAge) => dispatch({ type: 'SET_MEMBER_AGE', payload: newMemberAge}),
                setMemberPartnerAge: (newMemberPartnerAge) => dispatch({ type: 'SET_MEMBER_PARTNER_AGE', payload: newMemberPartnerAge}),
                setMemberRetired: (newMemberRetired) => dispatch({ type: 'SET_MEMBER_RETIRED', payload: newMemberRetired}),
                setMemberPartnerRetired: (newMemberPartnerRetired) => dispatch({ type: 'SET_MEMBER_PARTNER_RETIRED', payload: newMemberPartnerRetired}),
                setEducationSystem: (newEducationSystem) => dispatch({ type: 'SET_EDUCATION_SYSTEM', payload: newEducationSystem}),
                setEducationSystemBudgets: (newEducationSystemBudgets) => dispatch({ type: 'SET_EDUCATION_SYSTEM_BUDGETS', payload: newEducationSystemBudgets }),
                setEducationSystemFees: (newEducationSystemFees) => dispatch({ type: 'SET_EDUCATION_SYSTEM_FEES', payload: newEducationSystemFees }),
                /* Current Incomes */
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
                setSeniority: (newSeniority) => dispatch(setSeniority(newSeniority)),
                setPartnerSeniority: (newPartnerSeniority) => dispatch(setPartnerSeniority(newPartnerSeniority)),
                setDeceasedSeniority: (newDeceasedSeniority) => dispatch(setDeceasedSeniority(newDeceasedSeniority)),
                setSeniorityAddition: (newSeniorityAddition) => dispatch(setSeniorityAddition(newSeniorityAddition)),
                setPartnerSeniorityAddition: (newPartnerSeniorityAddition) => dispatch(setPartnerSeniorityAddition(newPartnerSeniorityAddition)),
                setDeceasedSeniorityAddition: (newDeceasedSeniorityAddition) => dispatch(setDeceasedSeniorityAddition(newDeceasedSeniorityAddition)),
                setOtherIncome: (newOtherIncome) => dispatch(setOtherIncome(newOtherIncome)),
                /* Current Expenses */
                // setGasExpenses: (newGasExpenses) => dispatch(setGasExpenses(newGasExpenses)),
                setElectricityExpenses: (newElectricityExpenses) => dispatch(setElectricityExpenses(newElectricityExpenses)),
                setMaintenanceServiceExpenses: (newMaintenanceServiceExpenses) =>
                    dispatch(setMaintenanceServiceExpenses(newMaintenanceServiceExpenses)),
                setHouseMaintenanceExpenses: (newHouseMaintenanceExpenses) =>
                    dispatch(setHouseMaintenanceExpenses(newHouseMaintenanceExpenses)),
                setGardeningExpenses: (newGardeningExpenses) => dispatch(setGardeningExpenses(newGardeningExpenses)),
                setNetworkingExpenses: (newNetworkingExpenses) => dispatch(setNetworkingExpenses(newNetworkingExpenses)),
                setInternetExpenses: (newInternetExpenses) => dispatch(setInternetExpenses(newInternetExpenses)),
                setVehicleExpenses: (newVehicleExpenses) => dispatch(setVehicleExpenses(newVehicleExpenses)),
                setSchoolExpenses: (newSchoolExpenses) => dispatch({ type: 'SET_SCHOOL_EXPENSES', payload: newSchoolExpenses}),
                setHighSchoolExpenses: (newHighSchoolExpenses) => dispatch({ type: 'SET_HIGH_SCHOOL_EXPENSES', payload: newHighSchoolExpenses}),
                setEducationTuitionFees: (newEducationTuitionFees) => dispatch({ type: 'SET_EDUCATION_TUITION_FEES', payload: newEducationTuitionFees}),
                setPersonalLessonsExpenses: (newPersonalLessonsExpenses) =>
                    dispatch(setPersonalLessonsExpenses(newPersonalLessonsExpenses)),
                setTeenageClassExpenses: (newTeenageClassExpenses) => dispatch(setTeenageClassExpenses(newTeenageClassExpenses)),
                // setTuitionsExpenses: (newTuitionsExpenses) => dispatch(setTuitionsExpenses(newTuitionsExpenses)),
                setOtherEducationExpenses: (newOtherEducationExpenses) =>
                    dispatch(setOtherEducationExpenses(newOtherEducationExpenses)),
                setDentistExpenses: (newDentistExpenses) => dispatch(setDentistExpenses(newDentistExpenses)),
                setWelfareExpenses: (newWelfareExpenses) => dispatch(setWelfareExpenses(newWelfareExpenses)),
                setFoodExpenses: (newFoodExpenses) => dispatch(setFoodExpenses(newFoodExpenses)),
                setLaundryExpenses: (newLaundryExpenses) => dispatch(setLaundryExpenses(newLaundryExpenses)),
                setOtherExpenses: (newOtherExpenses) => dispatch(setOtherExpenses(newOtherExpenses)),
                /* Future Incomes*/
                // setFuturePersonalBudget: (newBudget) =>
                //     dispatch({ type: 'SET_FUTURE_PERSONAL_BUDGET', payload: newFutureBudget }),
                setFutureNetIncome: (newFutureNetIncome) =>
                    dispatch({ type: 'SET_FUTURE_NET_INCOME', payload: newFutureNetIncome }),
                setFutureGrossIncome: (newFutureGrossIncome) =>
                    dispatch({ type: 'SET_FUTURE_GROSS_INCOME', payload: newFutureGrossIncome }),
                setFuturePensionAllowance: (newFuturePensionAllowance) =>
                    dispatch({ type: 'SET_FUTURE_PENSION_ALLOWANCE', payload: newFuturePensionAllowance }),
                setFuturePartnerPensionAllowance: (newFuturePartnerPensionAllowance) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_PENSION_ALLOWANCE', payload: newFuturePartnerPensionAllowance }),
                setFutureElderlyPension: (newFutureElderlyPension) =>
                    dispatch({ type: 'SET_FUTURE_ELDERLY_PENSION', payload: newFutureElderlyPension }),
                setFuturePartnerElderlyPension: (newFuturePartnerElderlyPension) =>
                    dispatch ({ type: 'SET_FUTURE_PARTNER_ELDERLY_PENSION', payload: newFuturePartnerElderlyPension }),
                setFutureNationalInsuranceAllowance: (newFutureNationalInsuranceAllowance) =>
                    dispatch({ type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE', payload: newFutureNationalInsuranceAllowance }),
                setFutureNationalInsuranceAllowanceCommunity: (newFutureNationalInsuranceAllowanceCommunity) =>
                    dispatch({ type: 'SET_FUTURE_NATIONAL_INSURANCE_ALLOWANCE_COMMUNITY', payload: newFutureNationalInsuranceAllowanceCommunity }),
                setFutureRecoveryFee: (newFutureRecoveryFee) =>
                    dispatch({ type: 'SET_FUTURE_RECOVERY_FEE', payload: newFutureRecoveryFee }),
                setFuturePartnerRecoveryFee: (newFuturePartnerRecoveryFee) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_RECOVERY_FEE', payload: newFuturePartnerRecoveryFee }),
                setFutureEducationFund: (newFutureEducationFund) =>
                    dispatch({ type: 'SET_FUTURE_EDUCATION_FUND', payload: newFutureEducationFund }),
                setFuturePartnerEducationFund: (newFuturePartnerEducationFund) =>
                    dispatch({ type: 'SET_FUTURE_PARTNER_EDUCATION_FUND', payload: newFuturePartnerEducationFund }),
                setFutureChildrenAddition: (newFutureAddition) =>
                    dispatch({ type: 'SET_FUTURE_CHILDREN_ADDITION', payload: newFutureAddition }),
                setFutureProvisions: (newFutureProvisions) => dispatch({ type: 'SET_FUTURE_PROVISIONS', payload: newFutureProvisions }),
                setFutureLaundry: (newFutureLaundry) => dispatch({ type: 'SET_FUTURE_LAUNDRY', payload: newFutureLaundry }),
                // setFutureGas: (newFutureGas) => dispatch({ type: 'SET_FUTURE_GAS', payload: newFutureGas }),
                setFutureHygiene: (newFutureHygiene) => dispatch({ type: 'SET_FUTURE_HYGIENE', payload: newFutureHygiene }),
                setFutureMaintenance: (newFutureMaintenance) =>
                    dispatch({ type: 'SET_FUTURE_MAINTENANCE', payload: newFutureMaintenance }),
                setFutureVehicle: (newFutureVehicle) => dispatch({ type: 'SET_FUTURE_VEHICLE', payload: newFutureVehicle }),
                // setFutureEnergy: (newFutureEnergy) => dispatch({ type: 'SET_FUTURE_ENERGY', payload: newFutureEnergy }),
                setFutureBenefitForWork: (newFutureBenefit) => dispatch({ type: 'SET_FUTURE_BENEFIT_FOR_WORK', payload: newFutureBenefit }),
                setFutureOutsourcedFood: (newFutureFood) => dispatch({ type: 'SET_FUTURE_OUTSOURCED_FOOD', payload: newFutureFood }),
                setFutureChronicleTreatment: (newFutureTreatment) =>
                    dispatch({ type: 'SET_FUTURE_CHRONICLE_TREATMENT', payload: newFutureTreatment }),
                setFutureOtherIncome: (newFutureIncome) => dispatch({ type: 'SET_FUTURE_OTHER_INCOME', payload: newFutureIncome }),
                /* Future Expenses*/
                setFutureExpenses: (newFutureExpenses) => dispatch({ type: 'SET_FUTURE_EXPENSES', payload: newFutureExpenses }),
                setFuturePropertyTaxExpenses: (newFuturePropertyTaxExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PROPERTY_TAX_EXPENSES', payload: newFuturePropertyTaxExpenses }),
                // setFutureGasExpenses: (newFutureGasExpenses) => dispatch({ type: 'SET_FUTURE_GAS_EXPENSES', payload: newFutureGasExpenses }),
                // setFutureElectricityExpenses: (newFutureElectricityExpenses) => dispatch({ type: 'SET_FUTURE_ELECTRICITY_EXPENSES', payload: newFutureElectricityExpenses }),
                setFutureEnergyExpenses: (newFutureEnergyExpenses) => dispatch({ type: 'SET_FUTURE_ENERGY_EXPENSES', payload: newFutureEnergyExpenses }),
                setFutureWaterAndSewerExpenses: (newFutureWaterAndSewerExpenses) =>
                    dispatch({ type: 'SET_FUTURE_WATER_AND_SEWER_EXPENSES', payload: newFutureWaterAndSewerExpenses }),
                setFutureHouseMaintenanceExpenses: (newFutureMaintenanceExpenses) =>
                    dispatch({ type: 'SET_FUTURE_HOUSE_MAINTENANCE_EXPENSES', payload: newFutureMaintenanceExpenses }),
                setFutureGardeningExpenses: (newFutureGardeningExpenses) => dispatch({ type: 'SET_FUTURE_GARDENING_EXPENSES', payload: newFutureGardeningExpenses }),
                setFutureNetworkingExpenses: (newFutureNetworkingExpenses) => dispatch({ type: 'SET_FUTURE_NETWORKING_EXPENSES', payload: newFutureNetworkingExpenses }),
                setFutureInternetExpenses: (newFutureInternetExpenses) => dispatch({ type: 'SET_FUTURE_INTERNET_EXPENSES', payload: newFutureInternetExpenses }),
                setFutureVehicleExpenses: (newFutureVehicleExpenses) => dispatch({ type: 'SET_FUTURE_VEHICLE_EXPENSES', payload: newFutureVehicleExpenses }),
                setFutureEducationSystemExpenses: (newFutureEducationSystemExpenses) =>
                    dispatch({ type: 'SET_FUTURE_EDUCATION_SYSTEM_EXPENSES', payload: newFutureEducationSystemExpenses }),
                setFutureSchoolExpenses: (newFutureSchoolExpenses) => dispatch({ type: 'SET_FUTURE_SCHOOL_EXPENSES', payload: newFutureSchoolExpenses }),
                setFutureHighSchoolExpenses: (newFutureHighSchoolExpenses) => dispatch({ type: 'SET_FUTURE_HIGH_SCHOOL_EXPENSES', payload: newFutureHighSchoolExpenses }),
                setFuturePersonalLessonsExpenses: (newFutureLessonsExpenses) =>
                    dispatch({ type: 'SET_FUTURE_PERSONAL_LESSONS_EXPENSES', payload: newFutureLessonsExpenses }),
                setFutureTeenageClassExpenses: (newFutureTeenageClassExpenses) => dispatch({ type: 'SET_FUTURE_TEENAGE_CLASS_EXPENSES', payload: newFutureTeenageClassExpenses }),
                setFutureEducationTransportationExpenses: (newFutureTransportationExpenses) => dispatch({ type: 'SET_FUTURE_EDUCATION_TRANSPORTATION_EXPENSES', payload: newFutureTransportationExpenses }),
                // setFutureTuitionsExpenses: (newFutureTuitionsExpenses) => dispatch({ type: 'SET_FUTURE_TUITIONS_EXPENSES', payload: newFutureTuitionsExpenses }),
                setFutureSafetyNetExpenses: (newFutureSafetyNetExpenses) =>
                    dispatch({ type: 'SET_FUTURE_SAFETY_NET_EXPENSES', payload: newFutureSafetyNetExpenses }),
                setFutureHealthInsuranceExpenses: (newFutureHealthInsuranceExpenses) =>
                    dispatch({ type: 'SET_FUTURE_HEALTH_INSURANCE_EXPENSES', payload: newFutureHealthInsuranceExpenses }),
                setFutureDentistExpenses: (newFutureDentistExpenses) => dispatch({ type: 'SET_FUTURE_DENTIST_EXPENSES', payload: newFutureDentistExpenses }),
                setFutureWelfareExpenses: (newFutureWelfareExpenses) => dispatch({ type: 'SET_FUTURE_WELFARE_EXPENSES', payload: newFutureWelfareExpenses }),
                setFutureFoodExpenses: (newFutureFoodExpenses) => dispatch({ type: 'SET_FUTURE_FOOD_EXPENSES', payload: newFutureFoodExpenses }),
                setFutureLaundryExpenses: (newFutureLaundryExpenses) => dispatch({ type: 'SET_FUTURE_LAUNDRY_EXPENSES', payload: newFutureLaundryExpenses }),
                setFutureFlatTaxExpenses: (newFutureFlatTaxExpenses) => dispatch({ type: 'SET_FUTURE_FLAT_TAX_EXPENSES', payload: newFutureFlatTaxExpenses }),
                setFutureGrossTaxExpenses: (newFutureGrossTaxExpenses) => dispatch({ type: 'SET_FUTURE_GROSS_TAX_EXPENSES', payload: newFutureGrossTaxExpenses }),
                setFutureAlimonyExpenses: (newFutureAlimonyExpenses) => dispatch({ type: 'SET_FUTURE_ALIMONY_EXPENSES', payload: newFutureAlimonyExpenses }),
                setFutureCleaningExpenses: (newFutureCleaningExpenses) => dispatch({ type: 'SET_FUTURE_CLEANING_EXPENSES', payload: newFutureCleaningExpenses }),
                // setFutureDecorationsExpenses: (newFutureDecorationsExpenses) => dispatch({ type: 'SET_FUTURE_DECORATIONS_EXPENSES', payload: newFutureDecorationsExpenses }),
                setFutureOtherExpenses: (newFutureOtherExpenses) => dispatch({ type: 'SET_FUTURE_OTHER_EXPENSES', payload: newFutureOtherExpenses }),
            }}
        >
        {children}
        </GlobalStateContext.Provider>
    );
};