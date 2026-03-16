    import { useState } from 'react';

function StudentForm({ addStudent }) {
  const [form, setForm] = useState({ name: '', email: '', course: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.course) newErrors.course = "Course is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) addStudent(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      {errors.name && <span>{errors.name}</span>}
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      {errors.email && <span>{errors.email}</span>}
      <input name="course" value={form.course} onChange={handleChange} placeholder="Course" />
      {errors.course && <span>{errors.course}</span>}
      <button type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
}
