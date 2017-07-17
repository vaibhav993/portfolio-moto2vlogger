import styled, {css} from 'styled-components';
import media from './media';
import {red} from './variables';

export const Div = styled.div`
	${ ({marginBottom}) => marginBottom && css`
		margin-bottom: ${marginBottom};
	`}

	${ ({marginLeft}) => marginLeft && css`
		margin-left: ${marginLeft};
	`}

	${ ({marginRight}) => marginRight && css`
		margin-right: ${marginRight};
	`}

		${ ({marginTop}) => marginTop && css`
		margin-top: ${marginTop};
	`}
`;

export const Container = styled(Div)`
	padding-left: 10vw;
	padding-right: 10vw;
	padding-top: 30px;
	${media.tablet`
		padding-left: 15px;
		padding-right: 15px;
	`}

`;

export const Relative = styled(Div)`
	position: relative;
`;

export const Flex = styled(Div)`
	display: flex;

	${ ({ column }) => column && css`
		flex-direction: column;
	`}

	${ ({ justify }) => justify && css`
		justify-content: ${justify};
	`}

	${ ({ align }) => align && css`
		align-content: ${align};
	`}
`;

export const GalleryFlex = styled(Flex)`
	flex-flow: row wrap;
	padding: 0.5vw; 
`;

export const Title = styled.h1`
	color: ${red};
	font-weight: bold;
	margin-top: 1em;
`;