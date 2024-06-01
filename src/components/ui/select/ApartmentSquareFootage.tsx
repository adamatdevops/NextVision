import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface ApartmentSquareFootageProps {
    onSquareFootageChange: (value: number) => void;
}

const ApartmentSquareFootage: React.FC<ApartmentSquareFootageProps> = ({ onSquareFootageChange }) => {
    const options = [40, 50, 70, 100, 126];

    return (
        <Form.Item label="שטח הדירה (מטרים)">
            <Select placeholder="בחר שטח דירה" onChange={onSquareFootageChange}>
                {options.map((option) => (
                    <Option key={option} value={option}>
                        {option} מטרים
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default ApartmentSquareFootage;
