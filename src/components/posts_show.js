import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params; // this.props.match.params is provided by react-router - gives us the wildcard (:id) values in url
    //      ^ pull off id from .params ^
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // this.props === ownProps
    // posts[this.props.match.params.id] - the post we want to show

    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//                         state, ownProps
function mapStateToProps({ posts }, ownProps) {
  // posts is a list of all posts in state - we just want one from the URL
  return { post: posts[ownProps.match.params.id] }; // only going to receive the one post we care about
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
