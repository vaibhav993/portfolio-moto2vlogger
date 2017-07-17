import {injectGlobal} from 'styled-components';
import {black, yellow} from './variables';

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=VT323');

	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

	body {
		font-family:'VT323', monospace;
		font-size : 24px;
		color: ${black};
		background-color: ${yellow};
	}

	h1, h2, h3 {
		font-weight: normal;
	}

	blockquote {
		text-align: center;
	}
`;
