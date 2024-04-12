import React from 'react';

const Result = ({ formData }) => {
  return (
    <div className='result'>
      <h2>Result</h2>
      <div>
        <p>First Name: {formData.firstName}</p>
        {/* Display other form data */}
        <h3>Family Members</h3>
        <ul>
          {formData.familyMembers.map(member => (
            <li key={member.id}>
              <p>Name: {member.name}</p>
              <p>Age: {member.age}</p>
            </li>
          ))}
        </ul>
      </div>
      <p>Two Step Aunthentication Done</p>
    </div>
  );
};

export default Result;
