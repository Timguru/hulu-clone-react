import React from 'react'
import './css/VideoCard.css'
import Star from './star.jpg'
const base_url = 'https://image.tmdb.org/t/p/original'

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path}`} alt=""/>
            <p>This is a film abou star wars</p>
            <h2>Movie Title</h2>
            <p>Numebr of Likes</p>
        </div>
    )
}

export default VideoCard
