import { fade } from '@material-ui/core/styles'
import { navColor, whiteColor } from '../style/constant'

const NavBarStyle = (theme) => ({
    root: {
		flexGrow: 1,
	},
    appBar: {
		backgroundColor: navColor,
		zIndex: 1,
	},
    navBarWrap: {
		display: 'flex',
    	justifyContent: 'space-between',
	},
    logoLinksWrap: {
		display: 'flex',
		alignItems: 'center',
	},
	linksWrap: {
		display: 'flex'
	},
	link: {
		textDecoration: 'none',
		color: whiteColor,
		marginRight: 40,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
})

export default NavBarStyle