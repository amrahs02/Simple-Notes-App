import React from 'react';

const You = () => {
  return (
    <div className=" border border-gray-700 sm:w-1/2 rounded-xl mb-40  text-gray-400 bg-dark-gray  ">
      <header className="header text-center mb-4">
      <h2 className="text-xl font-bold text-blue-500 text-center  m-4" >You</h2>
      </header> 

      <section className="libraries-section m-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Features of My Notes App:</h2>
        <ul className="list-disc ml-4">
          <li>Different navigation systems for various screen sizes</li>
          <li>Beautiful bottom navigation for mobile and sidebar for desktop</li>
          <li>Elegant design crafted with attention to detail</li>
          <li>Utilizes React Router DOM for seamless navigation</li>
          <li>Integration of Material UI for ready-made components and icons</li>
          <li>Four main routes: Archives, Trash, You, and Note</li>
          <li>Deleted notes are moved to the trash section</li>
          <li>Archived notes can be unarchived and restored</li>
          <li>Customizable note categories for better organization</li>
          <li>Responsive design for a seamless experience on any device</li>
        </ul>
      </section>

      <section className="libraries-section m-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Libraries and Dependencies Used:</h2>
        <ul className="list-disc ml-4">
          <li>React - JavaScript library for building user interfaces</li>
          <li>React Router DOM - Declarative routing for React.js</li>
          <li>Material UI - React components that implement Google's Material Design</li>
          <li>Emotion - CSS-in-JS library for styling components</li>
          <li>React Beautiful DND - Beautiful and accessible drag-and-drop for lists with React</li>
          <li>UUID - Generates unique IDs</li>
        </ul>
      </section>

      <section className="instructions-section m-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Instructions:</h2>
        <p className="text-lg">
          Use the bottom navigation to explore different sections of the app.
          Easily search for notes, add new notes, and organize them by
          category. Enjoy a comfortable reading experience.
        </p>
      </section>

      <section className="about-me-section m-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me:</h2>
        <p className="text-lg">
          Hi there, I'm Sandeep Sharma, a passionate developer dedicated to
          creating elegant and user-friendly applications. I designed this notes
          app to enhance your productivity and provide a delightful user
          experience.
        </p>
      </section>
    </div>
  );
};

export default You;
