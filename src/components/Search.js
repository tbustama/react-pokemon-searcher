import React from "react";

const Search = (props) => {
  return (
    <div className="ui search" onChange={props.handleFilter}>
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
