import React, { Component } from 'react';
import { Container, Div, Title } from '../../theme/grid'
import {
	Image,
	HeroImage,
	RevealP
 } from './Home.style';
 import WhenInView from '../../components/WhenInView/WhenInView';

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Title>Welcome to Moto2Vlogger</Title>
				<HeroImage> 
					<h1>Moto2Vlogger</h1>
				</HeroImage>

				<Div marginTop="2em" > 
					<blockquote>
					  <p>Riding a bike is like an art, something you do because feel something inside.</p>
					  <footer>— Valentino Rossi</footer>
					</blockquote>
				</Div>
				
			</Container>
		);
	}
}
