import React from 'react';
import './LoadingSpinner.css';

const Loading: React.FC = () => {
  return (
    <div className="spinner-box">
      <div className="green-orbit-v1 leo"></div>
      <div className="green-orbit-v2 leo"></div>
      <div className="green-orbit-v3 leo"></div>
      <div className="white-orbit w1 leo"></div>
      <div className="white-orbit w2 leo"></div>
      <div className="white-orbit w3 leo"></div>
    </div>
  );
};

export default Loading;
