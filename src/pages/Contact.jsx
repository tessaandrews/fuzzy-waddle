import { useState } from 'react';
import ReactDOM from 'react-dom/client';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your message has been sent, ${name}!`)
  }

  return (
    <div className="header">
      <h1>Contact Me!</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div></div>
        </label>
        <label>Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div></div>
        </label>
        <label>Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);












