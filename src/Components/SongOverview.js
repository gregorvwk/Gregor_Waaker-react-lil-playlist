import React, { Component } from "react"
import SongForm from "./SongForm"
import SongList from "./SongList"

class SongOverview extends Component {
  
    constructor() {
      super()
      this.state = 
      {
        songsList: [
            {songName: "asdasd", songArtist: "sfghdgfh", songGenre: "Rock", songRating: "3", songId: 1}
        ],
        itemId: 2
      }
      this.addSong = this.addSong.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
    }
  
    addSong = (song) => {
        this.setState(prevState => {prevState.itemId++})
        console.log(this.state.itemId)
        const addSong = {...song, songId: this.state.itemId}
        this.setState(prevState => {
            const newSongList = [...prevState.songsList, addSong]
            return {songsList: newSongList}
        })
    }
    handleDelete(songItemId){
        let newSongList = this.state.songsList.filter(item => item.songId !== songItemId)
        this.setState({songsList: newSongList})
    }
  
    render() {
      return (
        <div>
            <SongForm addSong={this.addSong} />
                <table >
                    <tr className="song-header">  
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </table>
            <SongList songs={this.state.songsList} handleClick={this.handleDelete}/>
        </div>
      );
    }
  }
  
  export default SongOverview;