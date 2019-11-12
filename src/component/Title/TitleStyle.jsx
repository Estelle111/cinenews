import { hoverColor, logoColor, whiteColor } from '../../style/constant'

const TitleStyle = () => ({
    border: {
        borderLeft: `4px solid ${hoverColor}`,
        paddingLeft: 10,
    },
    big: {
        display: 'block',
        fontSize: '1.5em',
    },
    small: {
        fontWeight: 500,
        fontSize: 14,
    },
    uppercase: {
        textTransform: 'uppercase',
    },
    logoColor: {
        color: logoColor
    },
    whiteColor: {
        color: whiteColor
    },
    marginRight: {
        marginRight: 40,
    }
})

export default TitleStyle