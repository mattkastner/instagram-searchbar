import React, { Component } from "react";

// - Bring in out styling
import "./SearchBar.scss";

// - Get our 'fontawesome' imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBar extends Component {
    constructor(){
        super()

        this.state = {
            clicked: false
        }
    }
  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar" class={this.state.clicked ? "search-bar reveal" : "search-bar"}>
          <div class="icon-border" onClick={() => this.setState({clicked: !this.state.clicked})}>
          	<FontAwesomeIcon icon={faSearch} color="white" size="lg" />
          </div>
          <input placeholder="Search..." className="search-input"/>
        </div>
      </div>
    );
  }
}
