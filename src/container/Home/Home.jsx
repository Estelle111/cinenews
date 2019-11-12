import React, { useState } from 'react'
import Paper from '../../component/Paper/Paper'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ErrorPage from '../../component/ErrorPage/ErrorPage'
import Loading from '../../component/Loading/Loading'
import useAxios from 'axios-hooks'
import { getImage } from '../../getImage'
import { withStyles } from '@material-ui/core/styles'
import HomeStyle from './HomeStyle'


const Home = (props) => {
    const { classes } = props
    const handleOnDragStart = (e) => e.preventDefault()
    //const [ image, setImage ] = useState([])

    const [{ data, loading, error }, refetch] = useAxios(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=84e447d186aa029e01a5c3427144283b&language=en-US&page=1'
    )
    if (loading) return <Loading center/>
    if (error) return <ErrorPage/>

    //const  [ results ]  = data

    return (
        <Paper>
            <AliceCarousel 
                mouseTrackingEnabled 
                //autoPlay={true}
            >
                {data.results.map((img, index) => (
                    <img key={`img_id_${index}`} src={getImage(img.poster_path)} alt="movie poster" onDragStart={handleOnDragStart} className={classes.img} />
                ))}
            </AliceCarousel> 
        </Paper>
    )
}

export default withStyles(HomeStyle)(Home) 