import { createMuiTheme } from '@material-ui/core/styles'
import { logoColor } from '../../style/constant'

export default createMuiTheme({
    overrides: {
        MuiCircularProgress: {
            root: {
                color: logoColor,
            }
        }
    }
})