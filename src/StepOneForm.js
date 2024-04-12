import React from 'react';
import { useForm } from 'react-hook-form';
import "./App.css";
const StepOneForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitStepOne = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStepOne)}>
      <input type="text" placeholder="First Name" {...register("firstName", { required: true })} />
      {errors.firstName && <span>This field is required</span>}
      
      <input type="text" placeholder="Last Name" {...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      
      <input type="text" placeholder="Parent Names" {...register("parentNames", { required: true })} />
      {errors.parentNames && <span>This field is required</span>}
      
      <input type="tel" placeholder="Phone Number" {...register("phoneNumber", { required: true, pattern: /^\d{10}$/ })} />
      {errors.phoneNumber && <span>Please enter a valid phone number (10 digits)</span>}
      
      <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <span>Please enter a valid email address</span>}
      
      <textarea placeholder="Address" {...register("address", { required: true })}></textarea>
      {errors.address && <span>This field is required</span>}
      
      <button type="submit">Next Step</button>
    </form>
  );
};

export default StepOneForm;
