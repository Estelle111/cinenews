import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ErrorPage from '../component/ErrorPage/ErrorPage'
import Loading from '../component/Loading/Loading'
import useAxios from 'axios-hooks'
import { getImage } from '../getImage'
import Home from '../container/Home/Home'
import Movies from '../container/Movies/Movies'
import Series from '../container/Series/Series'
import Title from '../component/Title/Title'
import NavBarStyle from '../NavBar/NavBarStyle'
import { withStyles } from '@material-ui/core/styles'

const Layout = (props) => {
    const { classes } = props
    const [{ data, loading, error }, refetch] = useAxios(
        'https://api.themoviedb.org/3/movie/475557-joker?api_key=84e447d186aa029e01a5c3427144283b'
    )
    if (loading) return <Loading center/>
    if (error) return <ErrorPage/>
    
    const appStyle = {
        background: `url(${getImage(data.poster_path)}) no-repeat center center fixed`, 
        backgroundSize: 'cover',
        minWidth: 1200, 
        height: '100vh',
        width: '100%'
    }

    return (
        <Router>
            <div style={appStyle}>
                <NavBar/>
                <Switch>
                    <Route component={ErrorPage}/>
                    <Route path="/App/Movies" component={Movies}/>
                    <Route path="/App/Series" component={Series}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}

export default /* withStyles(NavBarStyle) */Layout