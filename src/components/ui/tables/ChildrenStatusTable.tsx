import React from 'react';
import { Table, Select, Input } from 'antd';
import styles from './css/ChildrenStatusTable.module.css';

const { Option } = Select;

interface ChildrenStatusTableProps {
    numberOfChildren: number;
}

const ChildrenStatusTable: React.FC<ChildrenStatusTableProps> = ({ numberOfChildren }) => {
    const ageOptions = Array.from({ length: 17 }, (_, i) => i + 1);
    const educationLevelOptions = ['גיל הרך', 'יסודי', 'תיכון'];
    const educationSystemOptions = [
        'מיץ פטל', 'תות', 'סביון', 'פשוש', 'רימון', 'פעמון', 'דובדבן', 'אורנים', 'נעורים', 'חינוך מיוחד', 'אחר'
    ];
    const educatioPrivateLessonOptions = Array.from({ length: 3 }, (_, i) => i + 0); // TODO: Trigger an opening input option both on current and future columns
    const educationPrivateClassesOptions = Array.from({ length: 3 }, (_, i) => i + 0); // TODO: Trigger an opening input option both on current and future columns
    const educationDayCareOptions = Boolean; // TODO: Trigger an opening input option both on current and future columns
    const educationPersonalCareOptions = Boolean; // TODO: Trigger an opening input option both on current and future columns
    const educationTransportationOptions = Boolean; // TODO: Trigger an opening input option both on current and future columns

    const columns = [
        // {
        //     title: 'שם',
        //     dataIndex: 'name',
        //     key: 'name',
        //     render: () => <Input placeholder="הכנס שם" />,
        // },
        {
            title: 'השכלה',
            dataIndex: 'educationLevel',
            key: 'educationLevel',
            render: () => (
                <Select placeholder="בחר רמת השכלה" className={styles.select}>
                    {educationLevelOptions.map((option, index) => (
                        <Option key={index} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'מערכת חינוך',
            dataIndex: 'educationSystem',
            key: 'educationSystem',
            render: () => (
                <Select placeholder="בחר מערכת חינוך" className={styles.select}>
                    {educationSystemOptions.map((option, index) => (
                        <Option key={index} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        // {
        //     title: 'הסעות',
        //     dataIndex: 'educationTransportation',
        //     key: 'educationTransportation',
        //     render: () => (
        //         <Select placeholder="בחר הסעה" className={styles.select}>
        //             {educationTransportationOptions.map((option, index) => (
        //                 <Option key={index} value={option}>
        //                     {option}
        //                 </Option>
        //             ))}
        //         </Select>
        //     ),
        // },
        {
            title: 'חוג העשרה',
            dataIndex: 'educationPrivateClasses',
            key: 'educationPrivateClasses',
            render: () => (
                <Select placeholder="בחר שיעורים פרטיים" className={styles.select}>
                    {educationPrivateClassesOptions.map((option, index) => (
                        <Option key={index} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            ),
        },
        // {
        //     title: 'שיעורים פרטיים',
        //     dataIndex: 'educationPrivateLesson',
        //     key: 'educationPrivateLesson',
        //     render: () => (
        //         <Select placeholder="בחר שיעורים פרטיים" className={styles.select}>
        //             {educatioPrivateLessonOptions.map((option, index) => (
        //                 <Option key={index} value={option}>
        //                     {option}
        //                 </Option>
        //             ))}
        //         </Select>
        //     ),
        // },
        // {
        //     title: 'מעון יום',
        //     dataIndex: 'educationDayCare',
        //     key: 'educationDayCare',
        //     render: () => (
        //         <Select placeholder="בחר גן ילדים" className={styles.select}>
        //             {educationDayCareOptions.map((option, index) => (
        //                 <Option key={index} value={option}>
        //                     {option}
        //                 </Option>
        //             ))}
        //         </Select>
        //     ),
        // },
        // {
        //     title: 'טיפול פרטני',
        //     dataIndex: 'educationPersonalCare',
        //     key: 'educationPersonalCare',
        //     render: () => (
        //         <Select placeholder="בחר שירות אישי" className={styles.select}>
        //             {educationPersonalCareOptions.map((option, index) => (
        //                 <Option key={index} value={option}>
        //                     {option}
        //                 </Option>
        //             ))}
        //         </Select>
        //     ),
        // },
    ];

    const data = Array.from({ length: numberOfChildren }, (_, i) => ({
        key: i,
        name: '',
        age: '',
        class: '',
    }));

    return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default ChildrenStatusTable;
