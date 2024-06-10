// src/components/ui/input/MemberPartnerRetired.tsx
import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface MemberPartnerRetiredProps {
    onMemberPartnerRetiredChange: (value: string) => void;
}

const MemberPartnerRetired: React.FC<MemberPartnerRetiredProps> = ({ onMemberPartnerRetiredChange }) => {
    return (
        <Form.Item label="גמלאי/ת">
            <Select placeholder="האם פנסיונר/ית" onChange={onMemberPartnerRetiredChange}>
                <Option value="yes">כן</Option>
                <Option value="no">לא</Option>
            </Select>
        </Form.Item>
    );
};

export default MemberPartnerRetired;
