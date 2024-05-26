/* Theme object
* import { createTheme } from "@aws-amplify/ui-react";
*/

import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

interface ThemeWrapperProps {
    children: ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
    const themeConfig = {
        token: {
            borderRadius: 6,
            colorBgBase: '#fff', // Base background color
            colorError: '#ef3131',
            colorInfo: '#1677ff',
            colorLink: '#1677ff',
            colorPrimary: '#1890ff', // Primary color
            colorSuccess: '#52c41a',
            colorTextBase: '#0c0909',
            colorWarning: '#faad14',
            controlHeight: 32,
            fontFamily: 'Noto Sans Hebrew', // Font family
            // fontFamilyCode: 'monospace', // Font family for code blocks
            fontSize: 14, // Base font size
            lineType: 'solid', // Base line type
            lineWidth: 1, // Base line width
            motion: true,
            motionBase: 0, // Base motion duration
            motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
            motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
            motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
            motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
            motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
            motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
            motionUnit: 0.1,
            opacityImage: 1,
            sizePopupArrow: 16,
            sizeStep: 4,
            sizeUnit: 4,
            wireframe: false
        },
        components: {
            Button: {
                colorPrimary: '#1890ff',
            },
        },
    };

    return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default ThemeWrapper;