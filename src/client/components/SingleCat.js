import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CatCard from './CatCard';
import { fetchCat } from '../store/cat';

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much
export class DisconnectedSingleCat extends React.Component {
  componentDidMount() {
    const { catId } = this.props.match.params;
    this.props.goGetCat(catId);
  }
  render() {
    const cat = this.props;
    return cat.name ? (
      <React.Fragment>
        <Link to="/">Home</Link>
        <div className="single-cat">
          <h2>{cat.name}</h2>
          <img src={cat.imageUrl}></img>
          <ul className="toys">
            {cat.toyRatings.map(toy => (
              <li key={toy.name}>{toy.name}</li>
            ))}
          </ul>
        </div>
        <div className="friends">
          <h3>Friends</h3>
          <ul>
            {cat.friends.map(friend => {
              console.log(friend);
              return <CatCard key={friend.id} cat={friend} />;
            })}
          </ul>
        </div>
      </React.Fragment>
    ) : (
      <p>Loading...</p>
    );
  }
}

export const mapStateToProps = state => {
  return state.cat;
};

export const mapDispatchToProps = dispatch => {
  return {
    goGetCat: catId => {
      dispatch(fetchCat(catId));
    }
  };
};

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedSingleCat somewhere else in your program
// you're gonna have a bad time
export default connect(mapStateToProps, mapDispatchToProps)(DisconnectedSingleCat);
