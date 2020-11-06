import React, { Component } from "react"

class SongForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newSongName: "",
            newArtistName: "",
            newGenre: "",
            newRating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        const {value, name} = event.target
        this.setState({ [name]: value})
    }
    handleClick(event){
        event.preventDefault()
        console.log("click")
        const newSongItem = {songName: this.state.newSongName, songArtist: this.state.newArtistName, 
                            songGenre: this.state.newGenre, songRating: this.state.newRating}
        this.props.addSong(newSongItem)
        this.setState({newSongName: "", newArtistName: "", newGenre: "", newRating: ""})
    }


    render(){
    return(
        <div>
            <form>
                <input 
                    type="text"
                    placeholder="Song"
                    name="newSongName"
                    value={this.state.newSongName}
                    onChange={this.handleChange}
                    >
                </input>
                <input 
                    type="text"
                    placeholder="newArtistName"
                    name="newArtistName"
                    value={this.state.newArtistName}
                    onChange={this.handleChange}
                    >
                </input>
                <label htmlFor="Genre">Genre:</label>
                <select id="Genre" name="newGenre" size="1" onChange={this.handleChange} value={this.state.newGenre} multiple={false}>
                    <option value=""></option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                </select>
                <label htmlFor="Rating">Rating:</label>
                <select id="Rating" name="newRating" size="1" onChange={this.handleChange} value={this.state.newRating} multiple={false}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button
                    onClick={this.handleClick}
                >Add Song</button>
            </form>
        </div>
    )
}
}
export default SongForm