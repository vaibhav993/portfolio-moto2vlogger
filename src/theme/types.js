import styled from 'styled-components';
import {blue, yellow} from './variables';

export const A = styled.a`
	color: ${blue};
	text-decoration: none;
	position: relative;

	&:after {
		content: ' ';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 10%;
		background-color: ${blue};
		z-index: -1;
		transition: height 0.1s, background-color 0.1s;
	}

	&:hover:after {
		height: 40%;
		background-color: ${yellow};
	}
`;