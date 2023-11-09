import { useState } from 'react';
import ReactDOM from 'react-dom/client';


export default function Contact () {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
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
  


  
  


  
   
    


