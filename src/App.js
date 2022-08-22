import React, {Component} from "react";

class App extends Component {

  constructor() {
    super();
    this.state = {displayBio: false};

    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }

  toggleDisplayBio() {
    this.setState({displayBio: !this.state.displayBio});
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Alice. I'm a software engineer.</p>
        <p>I'm always looking forward to learning interesting and different technologies.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in São Paulo, and code every day.</p>
              <p>My favorite language is Python, and I love .NET and JavaScript too :)</p>
              <p>Besides coding, I also love games and anime. My favourite game is Final Fantasy, and my favourite anime is One Piece.</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
      </div>
    )
  }

}

export default App;
