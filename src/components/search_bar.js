import React, { Component } from 'react';

// create a class component
class SearchBar extends Component {
  // first function get call
  constructor(props) {
    super(props); // parent class

    this.state = { term: '' };
  }

  render() {
   return (
     <div className="search-bar">
       <input 
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} />
     </div>
   ); 
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term); 
  }
}

// export SeachBar component
export default SearchBar;

