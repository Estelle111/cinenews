import React from 'react'
import TitleStyle from './TitleStyle'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'

const Title = (props) => {
    const { classes, children, border, big, small, uppercase, marginRight, color } = props
    const titleClasses = classNames({
        [classes.border]: border,
        [classes.big]: big,
        [classes.small]: small,
        [classes.uppercase]: uppercase,
        [classes.marginRight]: marginRight,
        [classes[color]]: color,
    })
    return (
        <div className={titleClasses}> { children } </div>
    )
}

export default withStyles(TitleStyle)(Title)