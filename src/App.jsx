import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const [showname, setShowName] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setShowName(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowName(true);
    setFormData({
      firstName: '',
      lastName: '',
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <button type='submit'>Submit</button>
      </form>

      {showname && (
        <p>
          Full Name: {formData.firstName} {formData.lastName}
        </p>
      )}
    </>
  );
}

export default App;
