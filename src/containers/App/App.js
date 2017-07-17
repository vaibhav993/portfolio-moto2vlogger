import React, { Component } from 'react';
import { 
	Background,
  SocialContainer
} from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar'; 


class App extends Component {
  render() {
    return (
      <div>
      	<Background />
        <SocialContainer>
          <p>FOLLOW Moto2Vlogger</p>
          <a target="_blank" href="https://www.facebook.com/moto2vlogger">
            <i className="fa fa-facebook"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/moto2vlogger/">
            <i className="fa fa-instagram">
            </i>
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCfdHAGAvPN2gXiinC67Aadw">
            <i className="fa fa-youtube">
            </i>
          </a>
        </SocialContainer>
      	<NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
