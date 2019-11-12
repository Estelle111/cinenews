import React from 'react'
import Title from '../Title/Title'
import Paper from '../Paper/Paper'
import ErrorPageStyle from './ErrorPageStyle'
import { withStyles } from '@material-ui/core'

const ErrorPage = (props) => {
    const { classes } = props
    return (
        <Paper>
            <Title border big color="whiteColor">Bad request</Title>
        </Paper>
    )
}

export default withStyles(ErrorPageStyle)(ErrorPage)