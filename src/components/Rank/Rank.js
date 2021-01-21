import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="center">
      <div>
        <h1 className="f2-ns mt0">{`${name}`}</h1>
        <h2 className="fw6 f3 lh-copy mb3 white">{`You have used this service: ${entries} times.`}</h2>
      </div>
      {/* <div className="white f2">{entries}</div> */}
    </div>
  );
};

export default Rank;
