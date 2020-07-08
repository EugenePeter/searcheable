import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFieldData } from "../../redux/search/search.selector";

import { SearchActionStart } from "../../redux/search/search.actions";

// export const SearchActionStart = (value) => ({
//   type: "SEARCH_START",
//   value,
// });

const SearchComponent = (props) => {
  const { searchResults, value } = props;
  useEffect(() => {}, []);

  const onSearchChange = (event) => {
    const { value } = event.target;
    searchResults(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onSearchChange}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchResults: (value) =>
    dispatch(SearchActionStart(value)),
});

// const mapStateToProps = createStructuredSelector({
//   searchItem: selectFieldData,
// });

export default connect(
  null,
  mapDispatchToProps
)(SearchComponent);
