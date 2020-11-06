import React from "react"

function SongItem(props){
    return(
            <li
                name={props.songs.songName}
                id={props.songs.songId}
            >
                <p className="songItem"><strong> Song: </strong>{props.songs.songName} </p>
                <p className="songItem"><strong> Artist: </strong>{props.songs.songArtist} </p>
                <p className="songItem"><strong> Genre: </strong>{props.songs.songGenre} </p> 
                <p className="songItem"><strong> Rating: </strong>{props.songs.songRating} </p>
                <button onClick={() => props.handleClick(props.songs.songId)}>Delete</button> 
            </li>
    )
}

export default SongItem