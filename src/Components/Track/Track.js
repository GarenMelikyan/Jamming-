import React from 'react';


class Track extends React.Component {
	constructor(props) {
    super(props);

  }

  	/*renderAction() {
  		if (isRemoval) {
  			<div>
   			 <h3>-</h3>
  			</div>
  		} <div>
   			 <h3>+</h3>
  			</div>
  	}*/


	render() {
		return (
		<div className="Track">
 			 <div className="Track-information">
   			 <h3>{this.props.track.name}</h3>
   			 <p>{this.props.track.artist}|{this.props.track.album} </p>
  			</div>
 			 <a class="Track-action"> + or - will go here</a>
		</div>
		);
	}
}

export default Track; 