import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (name.trim() === "") return;

    if (editId !== null) {
      // Edit existing student
      setStudents(students.map((s, i) => (i === editId ? { name } : s)));
      setEditId(null);
    } else {
      // Add new student
      setStudents([...students, { name }]);
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
          <button type="submit">Add Student</button>
        </form>

        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
