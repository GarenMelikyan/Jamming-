import React, { Component } from 'react';
import './App.css';

import PlayList from '../PlayList/PlayList';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


class App extends Component {
constructor(props) {
    super(props);

    this.state = {
        searchResults:[
        {name: 'Tiny Dancer',
        artist: 'Elton John',
        album: 'Love Story',
        id: '1'} ]
    };
}

  render() {
    return (
      <div>
  	<h1>Ja<span className="highlight">mmm</span>ing</h1>
  		<div className="App">
    	<SearchBar/>
    	<div className="App-playlist">
      	<SearchResults ssearchResults={this.state.searchResults}/>
      	<PlayList/>
    </div>
  </div>
</div>
    );
  }
}

export default App;