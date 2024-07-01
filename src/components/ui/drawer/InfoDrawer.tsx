// src/components/ui/drawer/InfoDrawer.tsx
import React from 'react';
import { Drawer, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { drawerContent } from './drawerContent';

const { Title, Paragraph } = Typography;

interface InfoDrawerProps {
    // title: string;
    // content: string;
    open: boolean;
    onClose: () => void;
    contentKey: keyof typeof drawerContent;
}

//const InfoDrawer: React.FC<InfoDrawerProps> = ({ title, content, open, onClose }) => {

const InfoDrawer: React.FC<InfoDrawerProps> = ({ open, onClose, contentKey }) => {
    const content = drawerContent[contentKey];

    return (
        <Drawer
            title="מידע"
            // title={<Title level={4}>{title}</Title>}
            placement="bottom"
            onClose={onClose}
            open={open}
            width={400}
        >
            {content && (
                <>
                    <Title level={4}>תיאור</Title>
                    <Paragraph>{content.description}</Paragraph>
                    <Title level={4}>שיטת תקצוב</Title>
                    <Paragraph>{content.budgetingMethod}</Paragraph>
                </>
            )}

            {/* <Title level={4}>{title}</Title> */}
            {/* <Paragraph>{content}</Paragraph> */}
        </Drawer>
    );
};

export default InfoDrawer;
