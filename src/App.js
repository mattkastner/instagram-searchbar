import React from 'react';
import './App.scss';

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

//import our code snippet
import SearchBar from "./searchBar/SearchBar"

function App() {
  return (
    <div className="App">
      <div className="post-container">
        <div className="rotated-square"></div>
        <h2>THE SEARCH BAR.</h2>
        <div className="code-container">
          <div className="code-header">
            <div className="red-circle"></div>
            <div className="yellow-circle"></div>
            <div className="green-circle"></div>
          </div>
          <div class="code-example-container">
            <SearchBar />
          </div>
        </div>
        <div className="info-footer">
          <p>MATT'S CODE SNIPPETS</p>
          <p>SWIPE <span className="right-arrow"><FontAwesomeIcon icon={faArrowCircleLeft} rotation={180}/></span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
