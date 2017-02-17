/*jshint esversion: 6 */
import React, { Component } from 'react';

//Define new class 'SearchBar' and give access to functionaility of React Component
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

//Any file can use SerachBar component
export default SearchBar;
