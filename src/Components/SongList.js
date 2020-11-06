import React from "react"
import SongItem from "./SongItem"

function SongList(props) {
    const handleDeleteClick = props.handleClick
    const songList = props.songs
    const songsseperate = songList.map(element => <SongItem songs={element} 
        key={element.songId} handleClick={handleDeleteClick}/>)
    return(
        <ul>
            {songsseperate}
        </ul>
    )
}

export default SongList