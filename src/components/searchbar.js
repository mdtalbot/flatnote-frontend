import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Input fluid icon="search" size='small'
          className="search-bar" name="search" type="text" placeholder="Enter a search term" value={this.props.search} onChange={this.props.handleSearchChange} />
      </div>
    )
  }
}

export default SearchBar;
