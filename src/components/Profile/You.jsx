import React from 'react';
import { Link } from 'react-router-dom';
import './You.css'; // Import your CSS file

const You = () => {
  return (
    <div className="you-container">
      <header className="header">
        <h1>Welcome</h1>
      </header>


      <section class="libraries-section">
        <h2>Features of My Notes App:</h2>
        <ul>
          <li>Different navigation systems for various screen sizes</li>
          <li>Beautiful bottom navigation for mobile and sidebar for desktop</li>
          <li>Elegant design crafted with attention to detail</li>
          <li>Utilizes React Router DOM for seamless navigation</li>
          <li>Integration of Material UI for ready-made components and icons</li>
          <li>Four main routes: Archives, Trash, You, and Note</li>
          <li>Deleted notes are moved to the trash section</li>
          <li>Archived notes can be unarchived and restored</li>
          {/* <li>Efficient search functionality to find notes quickly</li> */}
          <li>Customizable note categories for better organization</li>
          {/* <li>Option to add and edit notes with a rich text editor</li> */}
          <li>Responsive design for a seamless experience on any device</li>
          {/* <li>Dark mode for reduced eye strain during nighttime use</li> */}
        </ul>
      </section>
      <section class="libraries-section">
        <h2>Libraries and Dependencies Used:</h2>
        <ul>
          <li>React - JavaScript library for building user interfaces</li>
          <li>React Router DOM - Declarative routing for React.js</li>
          <li>Material UI - React components that implement Google's Material Design</li>
          <li>Emotion - CSS-in-JS library for styling components</li>
          {/* <li>Firebase - Cloud services for web and mobile apps</li> */}
          <li>React Beautiful DND - Beautiful and accessible drag-and-drop for lists with React</li>
          <li>UUID - Generates unique IDs</li>
          {/* <li>Web Vitals - Library for measuring web performance</li> */}
        </ul>
      </section>

      <section className="instructions-section">
        <h2>Instructions:</h2>
        <p>
          Use the bottom navigation to explore different sections of the app.
          {/* Easily search for notes, */}
           add new notes, and organize them by
          category. Enjoy a comfortable reading experience.
          {/* with the option to */}
          {/* switch to dark mode. */}
        </p>
      </section>

      <section className="about-me-section">
        <h2>About Me:</h2>
        <p>
          Hi there, I'm Sandeep Sharma, a passionate developer dedicated to
          creating elegant and user-friendly applications. I designed this notes
          app to enhance your productivity and provide a delightful user
          experience.
        </p>
      </section>

      {/* <nav className="navigation-links">
        <h2>Navigation Links:</h2>
        <ul>
          <li>
            <Link to="/archive">Archives</Link>
          </li>
          <li>
            <Link to="/delete">Trash</Link>
          </li>
          <li>
            <Link to="/you">You</Link>
          </li>
          <li>
            <Link to="/">Note</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default You;
