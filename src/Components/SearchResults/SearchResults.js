import React from 'react';
import './SearchResults.css';
//import TrackList from '../TrackList/TrackList';
import Track from '../Track/Track';



class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="SearchResults">
        <h2>Results</h2>  
        <TrackList tracks = {this.props.searchResults}/>  
      </div>
    );
  }
}


class TrackList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
    <div className="TrackList">
      {
          this.props.tracks.map(track => {
            return <Track track={track} key={track.id} />
          })
        }
    </div>
    );
  } 
}

export default SearchResults;