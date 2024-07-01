import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface PartnerSeniorityProps {
    onPartnerSeniorityChange: (value: number) => void;
    label: string;
    disabled?: boolean; // Add the 'disabled' prop with an optional boolean type
}

const PartnerSeniority: React.FC<PartnerSeniorityProps> = ({ onPartnerSeniorityChange, label, disabled = false }) => { // Provide a default value for the 'disabled' prop
    const options = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <Form.Item label={label}>
            <Select placeholder="בחר ותק" onChange={onPartnerSeniorityChange} disabled={disabled}>
                {options.map((option) => (
                    <Option key={option} value={option}>
                        {option}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default PartnerSeniority;
