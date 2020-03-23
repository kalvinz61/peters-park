import React from 'react';
import { Link } from 'react-router-dom'; // hint, you may want to use this

// You have a bunch of freedom here to write this how you want
// This is not really tested, other than what props you use here
// Check AllCats specs for what is being checked

const CatCard = cat => {
  if (cat.cat) {
    return (
      <div className="cat-card" key={cat.cat.id}>
        <h3>{cat.cat.name}</h3>
        <img src={cat.cat.imageUrl}></img>
      </div>
    );
  } else {
    return (
      <div className="cat-card" key={cat.id}>
        <h3>{cat.name}</h3>
        <img src={cat.imageUrl}></img>
      </div>
    );
  }
};

export default CatCard;
