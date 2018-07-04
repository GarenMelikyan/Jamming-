import React from 'react';
import TrackList from '../TrackList/TrackList';


class PlayList extends React.Component {
	constructor(props) {
    super(props);

  }

	render() {
		return (
		<div className="Playlist">
  			<input value="Default Value"/>
  			<TrackList/>
  		<a className="Playlist-save">SAVE TO SPOTIFY</a>
		</div>
		)
	}	
}

export default PlayList; 	