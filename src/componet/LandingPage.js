import React, { useState } from 'react';
import '../style/homepage.css'
import JobListingPage from './Job-search';

const LandingPage = () => {
  const [language, setLanguage] = useState('');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

 
  return (
    <div className="landing-page">
      <h1>Welcome to the Job Portal</h1>
      <p>Find job opportunities in your preferred programming language.</p>

      <div className="search-container">
        <label htmlFor="language">Enter the programming language you're looking for:</label>
        <input
          type="text"
          id="language"
          placeholder="e.g., JavaScript, Python"
          value={language}
          onChange={handleLanguageChange}
        />
      
      </div>
     {language && <JobListingPage lagh={language}/>}
    </div>
    
  );
};

export default LandingPage;
