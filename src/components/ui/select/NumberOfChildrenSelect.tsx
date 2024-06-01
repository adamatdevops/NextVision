import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface NumberOfChildrenSelectProps {
    onNumberChange: (value: number) => void;
}

const NumberOfChildrenSelect: React.FC<NumberOfChildrenSelectProps> = ({ onNumberChange }) => {
    const options = Array.from({ length: 7 }, (_, i) => i + 1);

    return (
        <Form.Item label="מספר ילדים">
            <Select placeholder="בחר מספר ילדים" onChange={onNumberChange}>
                {options.map((option) => (
                    <Option key={option} value={option}>
                        {option}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default NumberOfChildrenSelect;