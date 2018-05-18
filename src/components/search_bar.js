import React, { Component } from 'react';

// "Functional" component - a component that is literally a function (*does not have state)
// const SearchBar = () => {
//   return <input />;
// };

// Class component
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/* Value of the input: {this.state.term} */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}


export default SearchBar;
