import React, { Component, Fragment } from 'react';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ['a', 'b'],
    };
  }

  renderPosts = () => {
    const { posts } = this.state;
    return (
      <Fragment>
        {posts.map(post => (
          <Post post={post} />
        ))}
      </Fragment>
    );
  };

  render() {
    const { posts } = this.state;
    return posts.length > 0 ? this.renderPosts() : null;
  }
}

export default App;
