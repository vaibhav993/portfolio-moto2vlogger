import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
	ImageButton,
	Index,
	ImageContainer,
	
} from './Projects.style';
import { Container, Relative, Flex, Title} from '../../theme/grid';
import Gallery from '../../components/Gallery/Gallery';

class Projects extends Component {
	render() {
		return (
			<Container>
				<Title>My Snaps</Title>
				<Gallery />
			</Container>
		);
	}
}

export default Projects;
