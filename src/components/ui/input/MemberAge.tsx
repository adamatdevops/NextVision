// src/components/ui/input/MemberAge.tsx
import React from 'react';
import { Form, InputNumber } from 'antd';

interface MemberAgeProps {
    age: number | null;
    onAgeChange: (age: number | null) => void;
}

const MemberAge: React.FC<MemberAgeProps> = ({ age, onAgeChange }) => {
    return (
        <Form.Item label="גיל חבר קהילה">
            <InputNumber
                min={0}
                max={120}
                value={age}
                onChange={(value: number | null) => {
                    onAgeChange(value);
                }}
                placeholder="הכנס גיל"
                style={{ width: '100%' }}
            />
        </Form.Item>
    );
};

export default MemberAge;
