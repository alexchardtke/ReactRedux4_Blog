import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  // We want to automatically fetch posts as soon as this component is rendered on the screen
  // componentDidMount() - called once immediately after this component shows up in the DOM
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // Lodash has a map function that works with objects
    return _.map(this.props.posts, (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )
    });
  }

  render() {
    // console.log(this.props.posts); // posts: from mapStateToProps
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// Shortcut to connect actionCreator
// ES6 syntax to condense { fetchPosts: fetchPosts } down to { fetchPosts }
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
