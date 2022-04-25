import React from 'react';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
        <AddTopics />
        <TopicList passed_posts={this.props.passedPropAllPosts}/>
      </>
    )
  }

};

