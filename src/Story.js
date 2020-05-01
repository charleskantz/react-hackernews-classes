import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.url = this.props.url;
  }

  render() {
    return (
      <li>
        <a href={this.url}>{this.title}</a>
      </li>
    )
  }
}

export default Story;