import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const styles = {
  app: {
    minHeight: '100vh',
    fontFamily: 'Arial',
    background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
    padding: '20px'
  },

  nav: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },

  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  },

  pageBox: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    maxWidth: '650px',
    margin: 'auto',
    textAlign: 'center',
    border: '3px solid #4a90e2' // ✅ THIS IS THE BOUNDARY
  },

  title: {
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '15px'
  }
};

function Home() {
  return (
    <div style={styles.pageBox}>
      <h1 style={styles.title}>Home Page</h1>
      <h2>Irvin Suarez</h2>
      <p>Welcome to my React Router project </p>
    </div>
  );
}

function About() {
  return (
    <div style={styles.pageBox}>
      <h1 style={styles.title}>About Page</h1>
      <h2>Information Technology</h2>

      <p>
        Information Technology (IT) is the use of computers, software, and networks to store, manage, and share information.
      </p>

      <p>
        IT includes web development, databases, cybersecurity, and software development.      </p>
    </div>
  );
}

function Contact() {
  return (
    <div style={styles.pageBox}>
      <h1 style={styles.title}>Contact Page</h1>

      <p> 09383595159</p>
      <p> irvinsuarez38gmail.com</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>

        <nav style={styles.nav}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/about">About</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}