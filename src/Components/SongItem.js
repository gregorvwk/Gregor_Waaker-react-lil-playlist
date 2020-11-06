import React from "react"

function SongItem(props){
    return(
            <li
                className="SongItem"
                name={props.songs.songName}
                id={props.songs.songId}
            >
                {props.songs.songName} {props.songs.songArtist} {props.songs.songGenre} {props.songs.songRating}
                <button onClick={() => props.handleClick(props.songs.songId)}>Delete</button> 
            </li>
    )
}

export default SongItem