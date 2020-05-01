import React from 'react';
import Story from './Story'

class StoryList extends React.Component {
  constructor(props) {
    super(props)
    this.stories = this.props.stories;
  }
  
  renderNewsList = () => {
    console.log("Story List here!", this.stories);
    return this.stories.map(story => (
      <Story title={story.title} url={story.url} key={story.objectID} />
    ))
  }

  render() {
    return (
      <ul>
        {this.renderNewsList()}
      </ul>
    )
  }
}

export default StoryList;