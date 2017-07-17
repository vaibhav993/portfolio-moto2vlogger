import React, { Component } from 'react';
import { Container, Relative, Flex , Title} from '../../theme/grid';



class AboutMe extends Component {
	render() {
		return (
			<Container>
				<Title>About Me</Title>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque tristique metus, mattis rutrum risus bibendum a. Pellentesque ultrices tincidunt neque. Curabitur hendrerit lectus a eros laoreet vulputate. Curabitur ante orci, egestas sit amet ante mattis, hendrerit auctor odio. Integer quis dapibus lectus, vel posuere lectus. Sed a leo non ligula iaculis scelerisque vitae eu quam. Donec vel massa vestibulum, sodales massa ut, blandit velit. Aenean et est eu nulla sollicitudin ornare. Nam at euismod nisl, quis vulputate purus. Nullam urna elit, luctus malesuada turpis faucibus, facilisis tempus dui. Pellentesque nunc mi, maximus nec erat id, commodo fermentum enim.</p>
			</Container>
		);
	}
}

export default AboutMe
