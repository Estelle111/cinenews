import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MoviesStyle from './MoviesStyle'
import Paper from '../../component/Paper/Paper'

const Movies = (props) => {
    const { classes } = props
    return (
        <Paper>
            <div className={classes.movieWrap}>
                <div>Movies</div>
            </div>
        </Paper>
    )
}

export default withStyles(MoviesStyle)(Movies) 