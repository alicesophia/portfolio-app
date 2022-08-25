import React, {Component} from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "./assets/profile.png";

class App extends Component {

  state = {displayBio: false};

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio});
  }

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile"/>
        <h1>Hello!</h1>
        <p>My name is Alice.</p>
        <Title/>
        <p>I'm always looking forward to learning interesting and different technologies.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in São Paulo, and code every day.</p>
              <p>My favorite language is Python but I love .NET and JavaScript too :)</p>
              <p>Besides coding, I also love games and anime. My favourite game is Final Fantasy, and my favourite anime is One Piece.</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr/>
        <Projects/>
        <hr/>
        <SocialProfiles/>
      </div>
    )
  }

}

export default App;
