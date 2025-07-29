import { useState } from 'react';
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => setSubmitted(true);

  return (
    <>
      <h2>Form Submission</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && (
        <p>
          Name : {name} <br /> Email : {email}
        </p>
      )}
    </>
  );
}
export default Form;
