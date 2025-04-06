import React from 'react';

export default function MyFooterComponent() {
  return (
    <div>

      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div style={leftStyle}>
            <h4 style={headingStyle}>Epic kBoocks</h4>
            <ul style={listStyle}>
              <li><a href="/" style={linkStyle}>Home</a></li>
            </ul>
          </div>
          <div style={rightStyle}>
            <h4 style={headingStyle}>Contatti</h4>
            <ul style={listStyle}>
              <li>Email: esempio@email.com</li>
              <li>Telefono: +39 123 456 7890</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

// CSS in line



const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  marginTop: 'auto',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const leftStyle = {
  textAlign: 'left',
};

const rightStyle = {
  textAlign: 'right',
};

const headingStyle = {
  marginBottom: '10px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

