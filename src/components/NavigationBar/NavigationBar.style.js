import styled from "styled-components";
import { Flex , Div} from '../../theme/grid';
import { blue, yellow, red, white} from '../../theme/variables';
import {Link} from 'react-router';
import media from '../../theme/media'


export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 2em;
	top: 1.8em;
	z-index: 1;
	background-color: ${white};

	${media.tablet`
		font-size: 0.8em;
		right: 0;
		left: 0;
		justify-content: center;
		top: 0;
		padding: 10px 0;
	`}
`;

export const NavItem = styled(Link)`
	margin-right: 15px;
	margin-left: 15px;
	font-size: 1.5em;
	cursor: pointer;
	color: ${blue};
	position: relative;

	${media.tablet`
		font-size: 1em;
	`}

	&:hover {
		color: ${yellow};
		&:after{
			content: ' ';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: ${red};
			z-index: -1;
			transform: scale(1.2,1.3);
		}
	}


`;