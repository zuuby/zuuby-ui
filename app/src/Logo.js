import React from 'react';

let Logo = (props) => {
  return (
    <img src={props.logo} className={props.logoClassName} alt="logo" />
  );
};

export default Logo;
