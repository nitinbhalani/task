
import React from 'react';
import { useLocation } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const applicationData = location.state;
  console.log(applicationData);
  return (
    <div>
      <h1>Application Submitted</h1>
      <p>Name: {applicationData.name}</p>
      <p>Email: {applicationData.email}</p>
      <p>Cover Letter: {applicationData.coverLetter}</p>
    </div>
  );
}

export default SuccessPage;
