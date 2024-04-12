import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const StepTwoForm = ({ formData, onSubmit, onPreviousStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [familyMembers, setFamilyMembers] = useState(formData.familyMembers || [{ id: 1, name: "", age: "" }]);

  const onSubmitStepTwo = (data) => {
  
    console.log(data.familyMembers,"datafamily")
    console.log(familyMembers,"fam")
    const filteredFamilyMembers = familyMembers.filter(member => data.familyMembers.some(familyMember => familyMember.id === member.id));
    console.log(filteredFamilyMembers,"fil");

    onSubmit({ familyMembers: filteredFamilyMembers, ...data });
  };

  const addFamilyMember = () => {
    const newId = familyMembers.length + 1;
    setFamilyMembers([...familyMembers, { id: newId, name: "", age: "" }]);
  };

  const removeFamilyMember = (id) => {
    if (familyMembers.length > 1) {
      setFamilyMembers(familyMembers.filter(member => member.id !== id));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStepTwo)}>
      {familyMembers.map(member => (
        <div key={member.id}>
          <h3>Family Member {member.id}</h3>
          <input type="text" placeholder="Name" {...register(`familyMembers[${member.id}].name`, { required: true })} />
          {errors[`familyMembers[${member.id}].name`] && <span>This field is required</span>}
          <input type="number" placeholder="Age" {...register(`familyMembers[${member.id}].age`, { required: true })} />
          {errors[`familyMembers[${member.id}].age`] && <span>This field is required</span>}
          {familyMembers.length > 1 && <button type="button" onClick={() => removeFamilyMember(member.id)}>Remove</button>}
        </div>
      ))}
      <button type="button" onClick={addFamilyMember}>Add More Family Member</button>
      <button type="submit">Submit</button>
      <button type="button" onClick={onPreviousStep}>Previous Step</button>
    </form>
  );
};

export default StepTwoForm;
