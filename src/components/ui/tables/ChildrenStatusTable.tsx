/* src/components/ui/tables/ChildrenStatusTable.tsx */
import React from 'react';
import { Table, Select, Input, InputNumber } from 'antd';
import styles from './css/ChildrenStatusTable.module.css';
import { useGlobalState } from '../../../GlobalStateProvider';

const { Option } = Select;

interface ChildrenStatusTableProps {
    numberOfChildren: number;
}

// const educationLevelFeesMap: { [key: string]: number } = {
//     'גיל הרך': 100,
//     'יסודי': 200,
//     'תיכון': 400,
// };

export const educationSystemBudgetsMap: { [key: string]: number } = {
    'מיץ פטל': 794,
    'תות': 878,
    'סביון': 605,
    'פשוש': 605,
    'רימון': 663,
    'פעמון': 894,
    'דובדבן': 921,
    'אורנים': 1072,
    'נעורים': 1146,
    'חינוך מיוחד': 0, // TODO: Update this to fill by member
    'אחר': 0, // TODO: Update this to fill by member
};

export const educationSystemFeesMap: { [key: string]: number } = {
    'מיץ פטל': 3675,
    'תות': 3333,
    'סביון': 3162,
    'פשוש': 1966,
    'רימון': 1966,
    'פעמון': 1500,
    'דובדבן': 1500,
    'אורנים': 1000,
    'נעורים': 600,
    'חינוך מיוחד': 0, // TODO: Update this to fill by member
    'אחר': 0,  // TODO: Update this to fill by member
};

export const educationTuitionFeesMap: { [key: string]: number } = {
    'יסודי': 300, // TODO: Update this to be filled as whole number, And if there's a gap thats bigger than the above amounts it will be paid by the member
    'תיכון': 500,
    // 'חינוך מיוחד': 0, // TODO: Update this to fill by member
    // 'אחר': 0,  // TODO: Update this to fill by member
};

const ChildrenStatusTable: React.FC<ChildrenStatusTableProps> = ({ numberOfChildren }) => {
    const { state, setEducationSystemBudgets, setEducationSystem, setEducationSystemFees, setEducationTuitionFees, setSchoolExpenses, setHighSchoolExpenses  } = useGlobalState();

    // const handleEducationLevelChange = (value: string, index: number) => {
    //     const updatedFees = [...state.educationLevelFees];
    //     updatedFees[index] = educationLevelFeesMap[value];
    //     setEducationLevelFees(updatedFees);
    // };

    const ageOptions = Array.from({ length: 17 }, (_, i) => i + 1);
    const educationLevelOptions = ['גיל הרך', 'יסודי', 'תיכון'];
    const educationSystemOptions = [
        'מיץ פטל', 'תות', 'סביון', 'פשוש', 'רימון', 'פעמון', 'דובדבן', 'אורנים', 'נעורים', 'חינוך מיוחד', 'אחר'
    ];
    const educationPrivateLessonOptions = Array.from({ length: 4 }, (_, i) => i); /* TODO: Trigger an opening input option both on current and future columns */
    const educationPrivateClassesOptions = Array.from({ length: 3 }, (_, i) => i + 0); /* TODO: Trigger an opening input option both on current and future columns */
    // const educationDayCareOptions = ; /* TODO: Trigger an opening input option both on current and future columns */
    // const educationPersonalCareOptions = ; /* TODO: Trigger an opening input option both on current and future columns */
    const educationTransportationOptions = ['מועצה', 'הסעות פרטיות', 'הורים', 'אחר']; /* TODO: Trigger an opening input option both on current and future columns */

    const handleEducationSystemChange = (value: string, index: number) => {
        const updatedBudgets = [...state.educationSystemBudgets];
        updatedBudgets[index] = educationSystemBudgetsMap[value];
        setEducationSystemBudgets(updatedBudgets);

        const updatedFees = [...state.educationSystemFees];
        updatedFees[index] = educationSystemFeesMap[value];
        setEducationSystemFees(updatedFees);

        const updatedSystems = [...state.educationSystem];
        updatedSystems[index] = value;
        setEducationSystem(updatedSystems);
    };

    
    const handleEducationLevelChange = (value: string, index: number) => {
        const updatedTuitionFees = [...state.educationTuitionFees];
        updatedTuitionFees[index] = educationTuitionFeesMap[value];
        setEducationTuitionFees(updatedTuitionFees);

        // Update school and high school expenses based on education level
        const updatedSchoolExpenses = [...state.schoolExpenses];
        const updatedHighSchoolExpenses = [...state.highSchoolExpenses];
        if (value === 'יסודי') {
            updatedSchoolExpenses[index] = educationTuitionFeesMap[value];
            setSchoolExpenses(updatedSchoolExpenses);
        } else if (value === 'תיכון') {
            updatedHighSchoolExpenses[index] = educationTuitionFeesMap[value];
            setHighSchoolExpenses(updatedHighSchoolExpenses);
        }
    };

    const columns = [
        {
            title: 'שם',
            dataIndex: 'name',
            key: 'name',
            render: () => <Input placeholder="הכנס שם" />,
        },
        {
            title: 'גיל',
            dataIndex: 'age',
            key: 'age',
            render: () => (
                <Select placeholder="בחר גיל" className={styles.select}>
                    {ageOptions.map((option) => (
                        <Option key={option} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'השכלה',
            dataIndex: 'educationLevel',
            key: 'educationLevel',
            render: (text: string, _: any, record: any, index: number) => (
                <Select 
                    placeholder="בחר רמת השכלה"
                    className={styles.select}
                    value={record.educationLevel}
                    onChange={(value) => handleEducationLevelChange(value, index)}
                >
                    {educationLevelOptions.map((option, index) => (
                        <Option key={index} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        // {
        //     title: 'שכר לימוד',
        //     dataIndex: 'educationTuitionFees',
        //     key: 'educationTuitionFees',
        //     render: (text: string, _: any, record: any, index: number) => (
        //         <InputNumber
        //             min={0}
        //             max={1200}
        //             placeholder="תשלום חודשי"
        //             value={record.educationTuition}
        //             onChange={(value) => handleEducationTuitionChange(value, index, 'educationTuitionFees' )}
        //         />
        //     ),
        // },
        {
            title: 'מערכת חינוך',
            dataIndex: 'educationSystem',
            key: 'educationSystem',
            render: (text: string, _: any, record: any, index: number) => ( /* IMPORTANT: Do not change this line */
                <Select
                    placeholder="בחר מערכת חינוך"
                    className={styles.select}
                    onChange={(value: string) => handleEducationSystemChange(value, index)}
                    // onChange={(value: string) => {
                    //     const updatedSystems = [...state.educationSystem];
                    //     updatedSystems[index] = value;
                    //     setEducationSystem(updatedSystems);
                    // }}
                >
                    {educationSystemOptions.map((option, index) => (
                        <Option key={index} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        // {
        //     title: 'מערכת חינוך',
        //     dataIndex: 'educationSystem',
        //     key: 'educationSystem',
        //     render: (text: string, record: any, index: number) => (
        //         <Select
        //             placeholder="בחר מערכת חינוך"
        //             className={styles.select}
        //             onChange={(value: string) => handleEducationSystemChange(value, index)}
        //             >
        //             {educationSystemOptions.map((option, index) => (
        //                 <Option key={index} value={option}>
        //                     {option}
        //                 </Option>
        //             ))}
        //         </Select>
        //     ),
        // },
        {
            title: 'שיעורים פרטיים',
            dataIndex: 'educationPrivateLesson',
            key: 'educationPrivateLesson',
            render: () => (
                <Select placeholder="בחר מספר" className={styles.select}>
                    {educationPrivateLessonOptions.map((option) => (
                        <Option key={option} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'חוג העשרה',
            dataIndex: 'educationPrivateClasses',
            key: 'educationPrivateClasses',
            render: () => (
                <Select placeholder="בחר חוגי העשרה" className={styles.select}>
                    {educationPrivateClassesOptions.map((option, index) => (
                        <Option key={index} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'הסעות',
            dataIndex: 'educationTransportation',
            key: 'educationTransportation',
            render: () => (
                <Select placeholder="בחר סוג" className={styles.select}>
                    {educationTransportationOptions.map((option) => (
                        <Option key={option} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'טיפול אישי',
            dataIndex: 'educationPersonalCare',
            key: 'educationPersonalCare',
            render: () => <InputNumber min={0} max={200} placeholder="שעות שבועיות" />,
        },
        {
            title: 'צהרון',
            dataIndex: 'educationDayCare',
            key: 'educationDayCare',
            render: () => <InputNumber min={0} max={30} placeholder="שעות שבועיות" />,
        },
    ];

    const data = Array.from({ length: numberOfChildren }, (_, i) => ({
        key: i,
        name: '',
        age: null,
        educationLevel: null,
        educationSystem: null,
        educationPrivateLesson: null,
        class: '',
        educationTransportation: null,
        educationPersonalCare: null,
        educationDayCare: null,
    }));

    return <Table columns={columns} dataSource={data} pagination={false}  />;
};

export default ChildrenStatusTable;

