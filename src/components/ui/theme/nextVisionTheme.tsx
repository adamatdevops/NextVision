import { createTheme } from "@aws-amplify/ui-react";

const nextVisionTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates",
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#1b68c7"
                    },
                },
            },
        },
    },
});

export default nextVisionTheme;