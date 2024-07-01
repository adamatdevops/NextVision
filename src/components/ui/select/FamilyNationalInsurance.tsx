/* src/components/ui/select/FamilyNationalInsurance.tsx */
// import React from 'react';
// import { Select } from 'antd';
// import { useGlobalState } from '../../../GlobalStateProvider';

// const { Option } = Select;

// const FamilyNationalInsurance: React.FC = () => {
//     const { state, setFamilyNationalInsurance } = useGlobalState();

//     const handleFamilyNationalInsuranceChange = (value: number) => {
//         setFamilyNationalInsurance(value);
//     };

//     return (
//         <Select
//             placeholder="בני משפחה המוכרים בביטוח לאומי"
//             value={state.familyNationalInsurance}
//             onChange={handleFamilyNationalInsuranceChange}
//         >
//             <Option value="1">1</Option>
//             <Option value="2">2</Option>
//             <Option value="3">3</Option>
//             <Option value="4">4</Option>
//             <Option value="5">5</Option>
//         </Select>
//     );
// };

// export default FamilyNationalInsurance;

import React from 'react';
import { Select } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';

const { Option } = Select;

const FamilyNationalInsurance: React.FC = () => {
    const { state, setFamilyNationalInsurance, setFutureNationalInsuranceAllowance } = useGlobalState();

    // const handleNationalInsuranceChange = (value: number) => {
    //     setFamilyNationalInsurance(value);
    // };
    const handleNationalInsuranceChange = (value: number) => {
        setFamilyNationalInsurance(value);
        setFutureNationalInsuranceAllowance(Array(value).fill(0));
    };

    return (
        <Select
            placeholder="מספר בני משפחה"
            value={state.familyNationalInsurance}
            onChange={handleNationalInsuranceChange}
            
        >
            {[...Array(6).keys()].map((num) => (
                <Option key={num} value={num}>
                    {num}
                </Option>
            ))}
        </Select>
    );
};

export default FamilyNationalInsurance;
