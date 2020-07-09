import React, { useEffect, Fragment } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFieldData } from "../../redux/search/search.selector";

import { SearchActionStart } from "../../redux/search/search.actions";

import { SearchBox } from "./search-component.styles";

const SearchComponent = (props) => {
  const { searchResults, value } = props;
  useEffect(() => {}, []);

  const onSearchChange = (event) => {
    const { value } = event.target;
    const delay = setTimeout(() => searchResults(value.trim()), 200);
    return () => clearTimeout(delay);
  };

  return (
    <Fragment>
      <SearchBox type="text" value={value} onChange={onSearchChange} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchResults: (value) => dispatch(SearchActionStart(value)),
});

const mapStateToProps = createStructuredSelector({
  searchItem: selectFieldData,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
