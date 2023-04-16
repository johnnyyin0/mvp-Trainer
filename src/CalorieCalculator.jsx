import { useState } from 'react';

function CalorieCalculator({ setShowCalorieModal }) {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [calories, setCalories] = useState('');
    const [error, setError] = useState('')
  
    const handleClose = () => {
        setShowCalorieModal(false);
    };
  
    const calculateCalories = () => {
      if (!weight || !height || !age || !gender) {
        setError('Please provide all input values.');
        return;
      }
    
      const weightInPounds = weight * 2.205;
      let bmr;
      if (gender === 'male') {
        bmr = 66 + 6.2 * weightInPounds + 12.7 * height - 6.76 * age;
        setError('')
      } else {
        bmr = 655.1 + 4.35 * weightInPounds + 4.7 * height - 4.7 * age;
        setError('')
      }
    
      const activityMultipliers = {
        'sedentary': 1.2,
        'lightly-active': 1.375,
        'moderately-active': 1.55,
        'very-active': 1.725,
        'extra-active': 1.9
      };
    
      const activityMultiplier = activityMultipliers[activityLevel] || 1.2;
    
      const totalCalories = Math.round(bmr * activityMultiplier / 2.205);
      setCalories(totalCalories);
    };
    
    
  return (
    <div className="modal-overlay">
      <div className="modal-box-calorie-calculator relative">
        <label className="close btn btn-sm btn-circle absolute right-2 top bg-neutral mr-2" onClick={handleClose}>
          X
        </label>
        <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
        <h2 className="mb-4"> The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.</h2>
        {error && (
          <div className="mb-4 text-red-500">{error}</div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800">Weight (in lbs)</label>
          <input
            className="w-full p-2 border border-gray-400 rounded"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800">Height (in cm)</label>
          <input
            className="w-full p-2 border border-gray-400 rounded"
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800">Age (in years)</label>
          <input
            className="w-full p-2 border border-gray-400 rounded"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-800">Gender</label>
          <div className="flex">
            <label className="mr-4">
              <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
              <span className="ml-2">Male</span>
            </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
          <span className="ml-2">Female</span>
        </label>
      </div>
    </div>
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-800">Activity Level</label>
      <select className="w-full p-2 border border-gray-400 rounded" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
        <option value="1.2">Sedentary (little or no exercise)</option>
        <option value="1.375">Lightly Active (light exercise or sports 1-3 days a week)</option>
        <option value="1.55">Moderately Active (moderate exercise or sports 3-5 days a week)</option>
        <option value="1.725">Very Active (hard exercise or sports 6-7 days a week)</option>
        <option value="1.9">Super Active (very hard exercise or sports, physical job or training twice a day)</option>
      </select>
    </div>
    <div className="mb-4">
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={calculateCalories}>
        Calculate
      </button>
    </div>
    {calories && (
      <div>
        <h2 className="text-lg font-bold mb-2">Results:</h2>
        <p className="mb-2">You need {calories} calories per day to maintain your weight.</p>
        <p>For weight loss, reduce your daily calories by 20% to lose 1 pound per week.</p>
      </div>
    )}
  </div>
</div>
)
}

export default CalorieCalculator