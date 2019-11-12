import { logoColor } from '../../style/constant'

const LoadingStyle = (theme) => ({
	root: {
		display: 'flex',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
		/* position: 'relative',
		zIndex: 2000 */
	},
	color: {
		color: logoColor
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	}
})

export default LoadingStyle


