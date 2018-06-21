import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: ''}
  }
  render() {
    return (
      <div>
        <input className="form-control" type="text" placeholder="Enter a search term" value={this.state.searchTerm} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
    onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm)
  }
}

export default SearchBar;
