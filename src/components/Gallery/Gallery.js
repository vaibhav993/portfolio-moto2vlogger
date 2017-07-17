import React, { Component } from 'react';

import {
	GalleryFlex,
	Relative
} from '../../theme/grid'
import GalleryImage from './GalleryImage';

class Gallery extends Component {
	constructor(props){
		super(props);
		this.state = {
		  pics: [],
		  loaded: false
		};
	}

	componentDidMount () {
		fetch('https://graph.facebook.com/v2.9/699480663569832/photos?fields=picture,images&type=uploaded&access_token=109992926312315%7CnDFrwhlfgGqnQwdkmH1aTCLjGpE'
			,{
	  			method: 'GET',
			 }
		)
		.then(response => response.json())
		.then((data) => {
	  		this.setState({ pics: data, loaded: true});
		});
	}


	render() {
		if(!this.state.loaded)
		return null;

		var images = this.state.pics.data.map(function(image, id) {
            return <GalleryImage key={id} img={image} />;
        });

		return (
			<GalleryFlex column={'column'} marginBottom="5em">
				{images}
			</GalleryFlex>
		);
	}
}

export default Gallery;
