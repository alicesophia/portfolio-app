import React, { Component } from "react";

const Fact = ({ facts: { fact } }) => {
  return <p style={{margin: 20 }}>{fact}</p>;
}

class Facts extends Component {
  state = { img: {}, fact: {}, facts: [] };

  componentDidMount() {
    fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece")
      .then(response => response.json())
      .then(json => this.setState({ img: json }))
      .catch(error => alert(error.message));

    fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece/" + (Math.floor(Math.random() * 25) + 1))
      .then(response => response.json())
      .then(response => response.data)
      .then(json => this.setState({ fact: json}))
      .catch(error => alert(error.message));
  }

  fetchFacts = () => {
    fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece")
      .then(response => response.json())
      .then(response => response.data)
      .then(json => this.setState({ facts: json }))
      .catch(error => alert(error.message));;
  }

  render() {
    const { img } = this.state.img;

    return (
      <div>
        <h2>One Piece fact</h2>
        <img src={img} style={{ height: 400 }}/>
        <Fact facts={this.state.fact}/>
        <br/>
        <h3>Want more facts?</h3>
        <button onClick={this.fetchFacts}>Click here!</button>
        {this.state.facts.map( fact => (<Fact key={fact.id} facts={fact}/>))}
      </div>
    );
  }
}

export default Facts
