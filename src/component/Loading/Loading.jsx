import React, { useEffect } from 'react'
import LoadingStyle from './LoadingStyle'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import classNames from 'classnames'
import { logoColor } from '../../style/constant'

const Loading = (props) => {
	const { classes, center } = props
	const [progress, setProgress] = React.useState(0)
	const loadingClasses = classNames({
		[classes.center]: center
	})

	useEffect(() => {
		function tick() {
			setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1))
		}
		const timer = setInterval(tick, 20)
		return () => {
			clearInterval(timer)
		}
	},  [])

	return (
		<div className={loadingClasses}>
			<CircularProgress variant="determinate" value={progress} className={classes.color} />
		</div>
	)
}

export default withStyles(LoadingStyle)(Loading)