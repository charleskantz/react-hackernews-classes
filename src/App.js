import React from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import StoryList from "./StoryList";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      stories: []
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://hn.algolia.com/api/v1/search?query=react'
    );
    this.setState({ stories: response.data.hits });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      try {
        console.log("NEW SEARCH, VAL IS", this.state.searchTerm)
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`
        )
        console.log("RESPONSE FROM SERVER", response.data.hits)
        
        this.setState({
          stories: response.data.hits
        });
        console.log("STATE OF STORIES AFTER setSTATE", this.state)
      } catch (err) {
        console.debug(err);
      }
    }
  };

  doSearch = (searchVal) => {
    this.setState({
      stories: [],
      searchTerm: searchVal
    });
  };

  render() {
    return (
      <div className="App">
        <SearchForm doSearch={this.doSearch} />
        <div>
          {this.state.stories.length > 0
            ? <StoryList stories={this.state.stories} />
            : <h3>Loading...</h3>
          }
        </div>
      </div>
    );
  }
}

export default App;
