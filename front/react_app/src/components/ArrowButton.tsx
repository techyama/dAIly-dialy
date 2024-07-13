import React from 'react';


const ArrowButton: React.FC = ({ callback }) => {

  return (
    <button
      onClick={() => callback()}
      className=" text-slate-800 text-4xl my-20 hover:text-slate-400"
    >
      ←→
    </button>
  );
};

export default ArrowButton;