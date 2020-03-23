import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AllCats from './AllCats';
import { fetchCats } from '../store/cats';
class Park extends Component {
  constructor() {
    super();
    this.state = {
      // your state here
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Peter's Park</h1>
        <Link to="/cats">See The Cats</Link>
      </React.Fragment>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCats: () => {
      dispatch(fetchCats());
    }
  };
};
export default connect(null, mapDispatch)(Park);
