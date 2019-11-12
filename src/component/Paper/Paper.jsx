import React from 'react'
import PaperStyle from './PaperStyle'
import { withStyles } from '@material-ui/core'

const Paper = (props) => {
    const { classes, children } = props
    return (
        <div className={classes.PaperWrap}>
            { children } 
        </div>
    )
}

export default withStyles(PaperStyle)(Paper)