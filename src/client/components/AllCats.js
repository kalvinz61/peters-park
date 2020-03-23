import React from 'react';
import { connect } from 'react-redux';
import CatCard from './CatCard';
import { Link } from 'react-router-dom';
import { fetchCats } from '../store/cats';

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much
export class DisconnectedAllCats extends React.Component {
  componentDidMount() {
    this.props.goGetCats();
  }
  render() {
    return (
      <React.Fragment>
        <Link to="/">HOME</Link>
        <div className="all-cats">
          <h1>Peter's Park</h1>
          {this.props.cats.map(cat => (
            <CatCard key={cat.id} {...cat} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    cats: state.cats
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    goGetCats: () => {
      dispatch(fetchCats());
    }
  };
};

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedAllCats somewhere else in your program
// you're gonna have a bad time
export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCats);
