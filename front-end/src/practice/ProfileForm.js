import React, { useState } from "react";

export default function EditProfile() {
  // initialize 'profile' as an empty object via useState()
  const [profile, setProfile] = useState({});

  const handleChange = ({ target }) => {
    // this is (roughly, albeit more complicated) the same as setState({ e.target.name: e.target.value}) in your project!
    const {name, value} = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        value={profile.firstName || ''}
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        value={profile.lastName || ''}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        value={profile.bday || ''}
        type="date"
        name="bday"
        onChange={handleChange}
      />
      <input
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    
  );
}