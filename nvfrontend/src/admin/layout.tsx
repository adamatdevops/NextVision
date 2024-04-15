// in src/admin/MyLayout.tsx
import { CheckForApplicationUpdate, Layout, LayoutProps } from 'react-admin';

export const ralayout = ({ children, ...props }: LayoutProps) => (
    <Layout {...props}>
        {children}
        <CheckForApplicationUpdate />
    </Layout>
);