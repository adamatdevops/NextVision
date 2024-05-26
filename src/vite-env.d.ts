/// <reference types="vite/client" />
import 'react';

declare module 'theme' {
    import("@mantine/core/node_modules/type-fest/source/partial-deep").PartialObjectDeep<import("@mantine/core").MantineTheme, {}>;
}


declare module 'react' {
        interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
                jsx?: boolean;
                global?: boolean;
        }
}