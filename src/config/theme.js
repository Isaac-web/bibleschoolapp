import {createTheme} from '@material-ui/core/styles';

import colors from './colors';

export default createTheme({
   palette: {
       primary: {
           main: colors.primary
       },
       secondary: {
           main: colors.secondary
       }
   }
})