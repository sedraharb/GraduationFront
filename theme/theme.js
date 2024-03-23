
import { createTheme } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';



const theme = createTheme({

    palette: {
        primary: {
            main: '#442d5d',
            mainDark : '#333366'
        },
        secondary: {
            main: '#F9FAFD',
            gray: '#344054',

        },

    },

});

export {theme};
