
import React, { useState } from 'react';
import '../style/Appllicationform.css'
import {useNavigate} from 'react-router-dom'
function ApplicationFormPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form successfully submitted")
    navigate('/successpage', {state: formData})

  };


  return (
    <div className='apply'>
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleInputChange}
        ></textarea>
        <input type="file" name="resume" onChange={handleFileUpload} />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default ApplicationFormPage;
