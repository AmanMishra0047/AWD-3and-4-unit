import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    branch: ""
  });

  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="write name"
          value={formData.name}
          onChange={handleData}
        />
        <br /><br />

        <label htmlFor="branch">Branch:</label>
        <input
          type="text"
          name="branch"
          placeholder="write branch"
          value={formData.branch}
          onChange={handleData}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StudentForm;