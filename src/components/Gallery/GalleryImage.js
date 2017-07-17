import React, { Component } from 'react';
import Zoomy from 'react-zoomy';

import {
	ImageContainer,
	ImageButton
} from './GalleryImage.style';

class GalleryImage extends Component {
	constructor(props){
		super(props);
		this.state = {
			//id: props.key,
			thumbnailImgSrc: props.img.images[props.img.images.length-4].source,
			largeImgSrc: props.img.images[0].source,
		}
			
	}

	render() {
		return (
			<ImageContainer >
				<Zoomy
					imageUrl={this.state.largeImgSrc}
					renderThumbnail={({ showImage }) => 
					  	<ImageButton onClick={showImage}>
					  		<img width="100%" src={this.state.thumbnailImgSrc}
					  			alt="ride"/>
					  	</ImageButton>
					}
					scale={[1.1, 1.1]}
					imageProps={{
					    style: {
					      width: '100vw',
					      height: 'auto'
					    }
					}}
				/>
			</ImageContainer>
		);
	}
}

export default GalleryImage;
