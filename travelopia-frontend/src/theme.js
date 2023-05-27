// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    style: {
        global: {
            body: {
                margin: 0,
                "font-family":
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
                "-webkit-font-smoothing": "antialiased",
                "-moz-osx-font-smoothing": "grayscale",

            },

            code: {
                "font-family":
                    "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
            },

        },



    }

}


// 3. extend the theme
// const theme = extendTheme({ config })

export default extendTheme(theme);