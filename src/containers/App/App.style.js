import styled from 'styled-components';
import { yellow, white } from '../../theme/variables';
import media from '../../theme/media'

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top: 10vh;
	height: 80vh;

	${media.tablet`
		left: 0;
		width: 100vw;
		top: 0;
		height: 100vh;
	`}

	background-image: url(${require('../../assets/bg.png')});
	background-color: ${yellow};
	z-index: -99;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.2;
`;

export const SocialContainer = styled.div`
	top: 35em;
	left: 40px;
	position: fixed;

	color: rgba(36, 123, 160, 1);
	align-content: center;
	font-size: 1em;
	transition: color .3s;
	transform: rotate(-90deg);
	transform-origin: left top;
	display: flex;
		z-index: 1;
	background-color: gainsboro;


	${media.tablet`
		font-size: 0.8em;
	    justify-content: center;
	    right: 0;
	    left: 0;
	    top: 2.5em;
	    transform: rotate(0deg);
	`}

	p {
		margin: 0 10px 0 0;
	}

	a {
		color: rgba(36, 123, 160, 1);

		i{
			transform: rotate(90deg);
			margin: 0 15px;
			display: inline-block;

			${media.tablet`
				transform: rotate(0deg);
			`}
		}
		fa-facebook-f:before, fa-facebook:before {
		    content: "\F09A";
		}
		fa-instagram:before {
		    content: "\F16D";
		}
		fa-youtube:before {
		    content: "\F167";
		}
	}

	a:hover {
		color: rgba(242, 95, 92, 1);
	}

`