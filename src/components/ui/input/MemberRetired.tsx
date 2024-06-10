// src/components/ui/input/MemberRetired.tsx
import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface MemberRetiredProps {
    onMemberRetiredChange: (value: string) => void;
}

const MemberRetired: React.FC<MemberRetiredProps> = ({ onMemberRetiredChange }) => {
    return (
        <Form.Item label="גמלאי/ת">
            <Select placeholder="האם פנסיונר/ית" onChange={onMemberRetiredChange}>
                <Option value="yes">כן</Option>
                <Option value="no">לא</Option>
            </Select>
        </Form.Item>
    );
};

export default MemberRetired;