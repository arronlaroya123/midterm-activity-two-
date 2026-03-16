import { useParams } from 'react-router-dom';

function StudentDetails({ students }) {
  const { id } = useParams();
  const student = students.find(s => s.id === parseInt(id));

  if (!student) return <p>Student not found</p>;

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </div>
  );
}

export default StudentDetails;
