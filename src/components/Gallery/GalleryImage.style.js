import styled from 'styled-components';
import media from '../../theme/media'

export const ImageContainer = styled.div`
	width: 30%;
	height: auto;
	margin: 0.5vw;

	${media.tablet`
		width: 100%;
	`}
`;

export const ImageButton  = styled.div`
	cursor: pointer;
	display: inline-block;
	overflow: hidden;

	width: 100%;
	height: auto;


	& > img {
		transition: transform 0.3s;
	}

	&:hover{
		& > img {
			transform: scale(1.3);
		}
	}
`;