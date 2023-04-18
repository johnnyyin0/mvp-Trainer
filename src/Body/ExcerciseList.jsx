import React, { useEffect, useState, useRef } from 'react';

function ExerciseList({data, muscleSelected }) {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  useEffect(() => {
    setExercises([]);
    setPageNumber(1);
  }, [muscleSelected]);

  useEffect(() => {
    setIsLoading(true);
    const filteredData = data.filter(item => {
      return item.target.Primary && item.target.Primary.includes(muscleSelected);
    });
    const startIndex = (pageNumber - 1) * 4;
    const endIndex = startIndex + 4;
    setExercises(prevExercises => [...prevExercises, ...filteredData.slice(startIndex, endIndex)]);
    setIsLoading(false);
  }, [data, muscleSelected, pageNumber]);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (exercises.length > 0) {
      observer.current.observe(document.querySelector('#lastExercise'));
    }
  }, [isLoading, exercises]);

  return(
    <div>
      <h1 className="text-5xl font-bold mb-10 text-center">{muscleSelected}</h1>
        {exercises.map((exercise, index) => (
          <div key={exercise.id} id={index === exercises.length - 1 ? 'lastExercise' : undefined}>
            <h1 className="text-3xl font-bold mb-10 text-center">{exercise.exercise_name}</h1>
            <h2 className="font-bold mb-5 mt-10 text-center">Difficulty: {exercise.Difficulty} </h2>
            <div className="exercise-images-grid items-center" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              {exercise.videoURL.map((video, index) => (
                  <video key={index} playsInline preload="metadata" muted autoPlay loop style={{ width: '40%', height: '40%' }} src={video}></video>
              ))}
            </div>
            <ul className="text-xl p-2 mt-5 mb-10">
              {exercise.steps.map((step, index) => (
                <li key={index} className="p-2">{index + 1}{") "}{step}</li>
              ))}
            </ul>
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
    </div>
  )
}

export default ExerciseList;
