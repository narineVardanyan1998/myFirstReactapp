// DynamicInputFields.js
import React, { useState } from 'react';

const DynamicInputFields = () => {
  const [fields, setFields] = useState([{ name: '', age: '', email: '', phoneNumber: '' }]);

  const handleChange = (index, fieldName, value) => {
    const newFields = [...fields];
    newFields[index][fieldName] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { name: '', age: '', email: '', phoneNumber: '' }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Name"
            value={field.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            value={field.age}
            onChange={(e) => handleChange(index, 'age', e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={field.email}
            onChange={(e) => handleChange(index, 'email', e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={field.phoneNumber}
            onChange={(e) => handleChange(index, 'phoneNumber', e.target.value)}
          />
          <button onClick={() => handleRemoveField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
};

export default DynamicInputFields;
