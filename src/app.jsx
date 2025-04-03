import { useState } from 'react';

export function App() {
  const [name, setName] = useState('');
  // Add your other state

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log('name:', name);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}
