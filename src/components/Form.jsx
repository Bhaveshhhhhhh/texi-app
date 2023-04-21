import React, { useState } from 'react';

function Form() {
  const [Pickuplocation, setPickuplocation] = useState('');
  const [Droplocation, setDroplocation] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Pickup location: ${Pickuplocation} ,Drop Location: ${Droplocation}, Date ${date}. Time ${time}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Submit Your Details</h2>
      <label htmlFor="Pickuplocation">Pickup location:</label>
      <input
        type="text"
        id="Pickuplocation"
        value={Pickuplocation}
        onChange={(e) => setPickuplocation(e.target.value)}
        placeholder="Enter your Pickup location"
        required
      />
      <label htmlFor="Droplocation">Drop location:</label>
      <input
        type="text"
        id="Droplocation"
        value={Droplocation}
        onChange={(e) => setDroplocation(e.target.value)}
        placeholder="Enter your Drop location"
        required
      />
      <label htmlFor="date">Enter Date:</label>
      <input type="date"
      id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter Date"
        required/>
        <label htmlFor="time">Enter Time:</label>
      <input type="time"
      id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter Time"
        required/>
      <button type="submit">Submit</button>
      <h2>Your Information</h2>
      <div className='info'>
        <p>Pickup location: {Pickuplocation}</p>
        <p>Drop location: {Droplocation}  </p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>
    </form>
  );
}

export default Form;
