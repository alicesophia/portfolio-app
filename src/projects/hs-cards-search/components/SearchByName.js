import React, { Component } from "react";

class SearchByName extends Component {
  state = { cards: [] };

  searchCards = () => {
    console.log(document.getElementById("cardName").value);

    const cardName = document.getElementById("cardName").value;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8bd67d8f80msh9e7a6e039ea6723p160cadjsn18128e8e171a",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
      }
    };

    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/"+ cardName +"?collectible=1&locale=ptBR", options)
      .then(response => response.json())
      .then(json => this.setState({cards: json}))
      .catch(error => alert(error.message));
  }

  render() {
    return (
      <div>
        <h2>Hearthstone Cards</h2>
        <input id="cardName" type="text" placeholder="Search for an card"/>
        <button onClick={this.searchCards}>Search</button>
        <div>
          {
            this.state.cards.map( card => {
              const { artist, attack, cardId, cardSet, collectible, cost, dbfId, elite, faction, flavor, health, img,
                locale, name, playerClass, race, rarity, text, type} = card;

              return <img key={cardId} src={img} style={{ height: 350 }}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default SearchByName;