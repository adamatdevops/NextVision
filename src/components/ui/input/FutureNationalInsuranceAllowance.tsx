/* src/components/ui/input/FutureNationalInsuranceAllowance.tsx */
// import React from 'react';
// import { Form, InputNumber } from 'antd';
// import { useGlobalState } from '../../../GlobalStateProvider';
// import styles from './css/FutureIncomes.module.css';

// const FutureIncomes: React.FC = () => {
//     const { state, setFutureNationalInsuranceAllowance } = useGlobalState();

//     return (
//         <Form className={styles.form}>
//             {/* Other Form Items */}
//             {state.familyNationalInsurance > 0 &&
//                 state.futureNationalInsuranceAllowance.map((allowance, index) => (
//                     <Form.Item
//                         key={index}
//                         label={`קצבת ביטוח לאומי לעתיד ${index + 1}`}
//                         className={styles.childField}
//                     >
//                         <InputNumber
//                             min={0}
//                             value={allowance}
//                             onChange={(value) => setFutureNationalInsuranceAllowance(index, value)}
//                         />
//                     </Form.Item>
//                 ))}
//         </Form>
//     );
// };

// export default FutureIncomes;
