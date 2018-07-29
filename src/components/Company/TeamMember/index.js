import React from 'react';

const nameStyle = {
  textTransform: 'uppercase',
  color: '#4f5075',
  fontWeight: 300
};

const lastNameStyle = {
  marginTop: '-15px'
};

export default ({ src, firstName, lastName, about }) =>
  <div
    style={{
      display: 'inline-block',
      width: '370px',
      height: '415px',
      textAlign: 'center',
      background: '#f9f9f9',
      margin: '20px'
  }}>
    <h2 style={nameStyle}>{firstName}</h2>
    <h2 style={{ ...nameStyle, ...lastNameStyle }}>{lastName}</h2>
    <div
      style={{
        display: 'inline-block',
        background: `url(${src})`,
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '95px'
     }} />
    <div style={{ color: '#386c91', fontSize: '18px', /*marginBottom: '20px'*/ }}>
      {about}
    </div>
  </div>;
