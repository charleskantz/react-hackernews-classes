import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ search: value });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.doSearch(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          name="search"
          type="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button>Search!</button>
      </form>
    )
  }
}

export default SearchForm;