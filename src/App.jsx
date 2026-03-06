import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (name.trim() === "") return;

    if (editId !== null) {
      setStudents(students.map((s, i) => (i === editId ? { name } : s)));
      setEditId(null);
    } else {
      setStudents([...students, { name, roll }]);
    }
    setName("");
  };

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setName(students[index].name);
    setEditId(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };
  return (
    <div>
      <div className="container">
        <h2>Student Record</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          <button>{editId !== null ? "Update" : "Add"}</button>
        </form>

        <div className="student-list">
          {students.length === 0 && <p>No students added yet.</p>}

          {students.map((student, index) => (
            <div key={student.id} className="student-card">
              <div className="student-info">
                <span>
                  {student.name} Roll-no:{student.roll}
                </span>
              </div>

              <div className="student-buttons">
                <button className="edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
