import styled, {css} from 'styled-components';
import media from '../../theme/media'

export const Image = styled.img`
	width: 100%;
`;

export const HeroImage = styled.div`
	height: 100vh;
	background-image: url('https://scontent.fmaa1-2.fna.fbcdn.net/v/t31.0-8/17493016_1442775802453346_8254423711330965267_o.jpg?oh=2c5c272e3e5243742c406524633017c0&oe=59FB1E9D'); 
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	text-align: center;
	color: white;

	font-size: 2em;
	margin-top: 1em;

	${media.tablet`
		font-size: 1em;
	`}

	h1 {
		margin-bottom: 0;
	}
`;

export const RevealP = styled.p`
	position: relative;
	&:after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;

		transform-origin: left;
		transform: rotateY(90deg);

		transition: transform 1s;
	}

	${({ hide }) => hide && css`
		&:after {
			transform: rotateY(0deg);
		}
	`}
`;