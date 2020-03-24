import { createMuiTheme, Theme } from '@material-ui/core/styles';

// Global theme of the app
export const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            light: "#ED713F",
            main: "#E94E0F",
            dark: "#A3360A",
        },
        secondary: {
            light: "#B3474D",
            main: "#A01A21",
            dark: "#701217",
        },
    }
});