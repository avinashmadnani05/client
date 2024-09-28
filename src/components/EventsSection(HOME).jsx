import React from 'react';
import '../styles/Home.css';

const EventsSection = () => {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <div className="event-card">
        <h3>Event Title</h3>
        <p>Date: MM/DD/YYYY</p>
        <p>Description of the event goes here.</p>
        <button className="event-button">Register</button>
      </div>
      {/* Repeat the above event-card for more events */}
    </section>
  );
};

export default EventsSection;
