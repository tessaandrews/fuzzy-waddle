import { useState } from 'react';
import ReactDOM from 'react-dom/client';


export default function Contact () {
  const [name, setName] = useState("");
  const [email, setEmail]= useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);
  


  
  


  
   
    


