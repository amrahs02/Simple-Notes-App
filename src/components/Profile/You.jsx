import React from 'react';
import './You.css'

const You = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Your Notes App</h1>
        <p>Welcome to your notes app, Designed and Developed by Sandeep Sharma.</p>
      </div>

      <div className="instructions">
        <h2>Instructions</h2>
        <p>Use the bottom navigation to navigate through the app.</p>
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>Undo: Easily revert changes with the undo feature.</li>
          <li>Redo: Reinstate changes that were undone with the redo feature.</li>
          <li>Save: Ensure your notes are safe and up-to-date by using the save feature.</li>
          <li>Local Storage: Your notes are automatically saved to local storage for seamless access.</li>
          <li>Drag and Drop: Organize your notes effortlessly by using the drag-and-drop functionality.</li>
        </ul>
      </div>

      <div className="navigation">
        <h2>Navigation</h2>
        <p>
          Mobile View: Utilize the bottom navigation for easy access on your mobile device.
          Desktop View: Navigate through the app using the sidebar on your desktop.
        </p>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hi there! This is Sandeep Sharma. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vero, eligendi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum
          reprehenderit quasi exercitationem praesentium nostrum eius consequuntur tempore recusandae,
          iusto, minima, natus accusamus dolores aliquid illo maxime vel totam. Laboriosam recusandae
          consectetur repellat possimus ad molestiae voluptas magni, debitis ipsum neque perferendis
          vel enim inventore sed, dolore eum est repellendus.
        </p>
      </div>
    </div>
  );
};

export default You;
