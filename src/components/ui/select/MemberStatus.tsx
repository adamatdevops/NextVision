/* ./src/pages/SocaialSim/SocialSimulator.tsx */
import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

interface MemberStatusProps {
    status: string | null;
    onStatusChange: (status: string | null) => void;
}

const MemberStatus: React.FC<MemberStatusProps> = ({ status, onStatusChange }) => {
    // const [selectedFamilyStatus, setFamilyStatus] = useState<string | null>(null);

    // const handleStatusChange = (value: string) => {
    //     setFamilyStatus(value);
    //     props.onStatusChange(value);
    // };

    return (
        <Form.Item label="סטטוס משפחתי">
            <Select
                placeholder="בחר סטטוס משפחתי"
                value={status}
                onChange={onStatusChange}
            >
                <Option value="married">נשוי/נשואה</Option>
                <Option value="divorced">גרוש/גרושה</Option>
                <Option value="widower">אלמן/אלמנה</Option>
                <Option value="single">רווק/רווקה</Option>
                <Option value="single-parent">יחידני/ת</Option>
            </Select>
        </Form.Item>
    );
};

export default MemberStatus;
