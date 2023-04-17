import ExcerciseList from './ExcerciseList';

function ExerciseModal({ muscleSelected, setMuscleSelected, setShowModal, data }) {
  const handleClose = () => {
    setShowModal(false);
    setMuscleSelected([]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box relative">
        <label className="close btn btn-sm btn-circle absolute right-2 top bg-neutral mr-2" onClick={handleClose}>X</label>
        <ExcerciseList data={data} muscleSelected={muscleSelected}/>
      </div>
    </div>
  );
}

export default ExerciseModal;
