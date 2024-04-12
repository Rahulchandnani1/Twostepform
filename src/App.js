import React, { useState } from 'react';
import StepOneForm from './StepOneForm';
import StepTwoForm from './StepTwoForm';
import Result from './Result';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleStepChange = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  const handleNavigateToResult = () => {
    setStep(3);
  };
  return (
    <div>
      {step === 1 && <StepOneForm onSubmit={handleStepChange} />}
      {step === 2 && <StepTwoForm formData={formData} onSubmit={handleStepChange} onPreviousStep={handlePreviousStep} navigateToResult={handleNavigateToResult} />}
      {step === 3 && <Result formData={{ ...formData, familyMembers: formData.familyMembers.filter(member => member.name !== "") }} />}
    </div>
  );
};

export default App;
