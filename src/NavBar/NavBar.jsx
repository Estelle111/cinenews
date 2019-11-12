import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import NavBarStyle from './NavBarStyle'
import Title from '../component/Title/Title'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'

/* function PageId() {
    let { id } = useParams()
    return <div>page: {id}</div>
}   */

const NavBar = (props) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar className={classes.navBarWrap}>
                    <div className={classes.logoLinksWrap}>
                        <Title big uppercase color="logoColor" marginRight>
                            MovieNws
                        </Title>
                        <div className={classes.linksWrap}> 
                            <Title small uppercase>
                                <Link className={classes.link} to="/">Home</Link> 
                            </Title>
                            <Title small uppercase>
                                <Link className={classes.link} to="/App/Movies">Movies</Link>
                            </Title>
                            <Title small uppercase>
                                <Link className={classes.link} to="/App/Series">Series</Link>
                            </Title>
                        </div>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(NavBarStyle)(NavBar)