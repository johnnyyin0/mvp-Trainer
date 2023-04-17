import React, { useEffect, useState } from 'react';

function ExerciseList({data, muscleSelected }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(item => {
      return item.target.Primary && item.target.Primary.includes(muscleSelected);
    });
    setExercises(filteredData);
  }, [data, muscleSelected]);
  
  return(
    <div>
      <h1 className="text-5xl font-bold mb-10 text-center">{muscleSelected}</h1>
        {exercises.map(exercise => (
          <div key={exercise.id}>
            <h1 className="text-3xl font-bold mb-10 text-center">{exercise.exercise_name}</h1>
            <h2 className="font-bold mb-5 mt-10 text-center">Difficulty: {exercise.Difficulty} </h2>
            <div className="exercise-images-grid items-center" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              {exercise.videoURL.map((video, index) => (
                  <video key={index} playsInline preload="metadata" muted autoplay loop style={{ width: '40%', height: '40%' }} src={video}></video>
              ))}
            </div>
            <ul className="text-2xl p-2 mt-10 mb-10">
              {exercise.steps.map((step, index) => (
                <li key={index} className="p-2">{index + 1}{") "}{step}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default ExerciseList;
