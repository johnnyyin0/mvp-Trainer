import React, { useState } from 'react';

function BMICalculator({ setShowBMIModal }) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [error, setError] = useState('');

  const calculateBmi = () => {
    if (!weight || !height) {
      setError('Please enter weight and height');
      return;
    }
    const weightInKg = weight / 2.20462;
    if (isNaN(weightInKg)) {
      setError('Please enter a valid weight');
      return;
    }
    if (height < 0 || height > 300) {
      setError('Please enter a valid height');
      return;
    }
    const bmiValue = (weightInKg / ((height / 100) * (height / 100))).toFixed(1);
    setBmi(bmiValue);
    setError('');
  };

  const handleClose = () => {
    setShowBMIModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box-BMI-calculator relative">
        <label className="close btn btn-sm btn-circle absolute right-2 top bg-neutral mr-2" onClick={handleClose}>
          X
        </label>
        <h2 className="text-2xl font-bold mb-4" >BMI Calculator</h2>
        <h2 className="mb-4">The BMI calculator determines a person's body mass index (BMI) based on their weight and height, indicating if they are underweight, normal weight, overweight, or obese. It can help assess overall health and the need for additional testing or action.</h2>
        {error && (
          <div className="mb-4 text-red-500">{error}</div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800">Weight (in lbs):</label>
          <input type="number" id="weight" className="w-full p-2 border border-gray-400 rounded" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800">Height (in cm):</label>
          <input type="number" id="height" className="w-full p-2 border border-gray-400 rounded" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="mb-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={calculateBmi}>Calculate</button>
        </div>
        {bmi && (
          <div>
            <h3 className="font-bold">Your BMI is: </h3>{bmi}
            <p className="font-bold">Result:</p> {bmi < 18.5 ? 'Underweight' : bmi >= 18.5 && bmi <= 24.9 ? 'Normal weight' : bmi >= 25 && bmi <= 29.9 ? 'Overweight' : 'Obese'}
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
